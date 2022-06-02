"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSchema = void 0;
const ts_proto_descriptors_1 = require("ts-proto-descriptors");
const ts_poet_1 = require("ts-poet");
const visit_1 = require("./visit");
const utils_1 = require("./utils");
const types_1 = require("./types");
const minimal_1 = require("protobufjs/minimal");
const fileDescriptorProto = ts_poet_1.imp('FileDescriptorProto@ts-proto-descriptors');
const extensionCache = {};
function generateSchema(ctx, fileDesc, sourceInfo) {
    var _a;
    const { options } = ctx;
    const chunks = [];
    fileDesc.extension.forEach((extension) => {
        if (!(extension.extendee in extensionCache)) {
            extensionCache[extension.extendee] = {};
        }
        extensionCache[extension.extendee][extension.number] = extension;
    });
    chunks.push(ts_poet_1.code `
    type ProtoMetaMessageOptions = {
      options?: { [key: string]: any };
      fields?: { [key: string]: { [key: string]: any } };
      oneof?: { [key: string]: { [key: string]: any } };
      nested?: { [key: string]: ProtoMetaMessageOptions };
    };

    export interface ProtoMetadata {
      fileDescriptor: ${fileDescriptorProto};
      references: { [key: string]: any };
      dependencies?: ProtoMetadata[];
      options?: {
        options?: { [key: string]: any };
        services?: {
          [key: string]: {
            options?: { [key: string]: any };
            methods?: { [key: string]: { [key: string]: any } };
          }
        };
        messages?: {
          [key: string]: ProtoMetaMessageOptions;
        };
        enums?: {
          [key: string]: {
            options?: { [key: string]: any };
            values?: { [key: string]: { [key: string]: any } };
          };
        };
      };
    }
  `);
    const references = [];
    function addReference(localName, symbol) {
        references.push(ts_poet_1.code `'.${utils_1.maybePrefixPackage(fileDesc, localName.replace(/_/g, '.'))}': ${symbol}`);
    }
    visit_1.visit(fileDesc, sourceInfo, (fullName) => {
        if (options.outputEncodeMethods) {
            addReference(fullName, fullName);
        }
    }, options, (fullName) => {
        addReference(fullName, fullName);
    });
    visit_1.visitServices(fileDesc, sourceInfo, (serviceDesc) => {
        if (options.outputClientImpl) {
            addReference(serviceDesc.name, `${serviceDesc.name}ClientImpl`);
        }
    });
    const dependencies = fileDesc.dependency.map((dep) => {
        return ts_poet_1.code `${ts_poet_1.imp(`protoMetadata@./${dep.replace('.proto', '')}`)}`;
    });
    // Use toObject so that we get enums as numbers (instead of the default toJSON behavior)
    const descriptor = ts_proto_descriptors_1.FileDescriptorProto.fromPartial(fileDesc);
    // Only keep locations that include comments
    descriptor.sourceCodeInfo = {
        location: ((_a = descriptor.sourceCodeInfo) === null || _a === void 0 ? void 0 : _a.location.filter((loc) => loc['leadingComments'] || loc['trailingComments'])) || [],
    };
    let fileOptions;
    if (fileDesc.options) {
        fileOptions = encodedOptionsToOptions(ctx, '.google.protobuf.FileOptions', fileDesc.options['_unknownFields']);
        delete fileDesc.options['_unknownFields'];
    }
    const messagesOptions = [];
    (fileDesc.messageType || []).forEach((message) => {
        const resolvedMessage = resolveMessageOptions(ctx, message);
        if (resolvedMessage) {
            messagesOptions.push(resolvedMessage);
        }
    });
    const servicesOptions = [];
    (fileDesc.service || []).forEach((service) => {
        const methodsOptions = [];
        service.method.forEach((method) => {
            if (method.options) {
                const methodOptions = encodedOptionsToOptions(ctx, '.google.protobuf.MethodOptions', method.options['_unknownFields']);
                delete method.options['_unknownFields'];
                if (methodOptions) {
                    methodsOptions.push(ts_poet_1.code `'${method.name}': ${methodOptions}`);
                }
            }
        });
        let serviceOptions;
        if (service.options) {
            serviceOptions = encodedOptionsToOptions(ctx, '.google.protobuf.ServiceOptions', service.options['_unknownFields']);
            delete service.options['_unknownFields'];
        }
        if (methodsOptions.length > 0 || serviceOptions) {
            servicesOptions.push(ts_poet_1.code `
        '${service.name}': {
          options: ${serviceOptions},
          methods: {${ts_poet_1.joinCode(methodsOptions, { on: ',' })}}
        }
      `);
        }
    });
    const enumsOptions = [];
    (fileDesc.enumType || []).forEach((Enum) => {
        const valuesOptions = [];
        Enum.value.forEach((value) => {
            if (value.options) {
                const valueOptions = encodedOptionsToOptions(ctx, '.google.protobuf.EnumValueOptions', value.options['_unknownFields']);
                delete value.options['_unknownFields'];
                if (valueOptions) {
                    valuesOptions.push(ts_poet_1.code `'${value.name}': ${valueOptions}`);
                }
            }
        });
        let enumOptions;
        if (Enum.options) {
            enumOptions = encodedOptionsToOptions(ctx, '.google.protobuf.EnumOptions', Enum.options['_unknownFields']);
            delete Enum.options['_unknownFields'];
        }
        if (valuesOptions.length > 0 || enumOptions) {
            enumsOptions.push(ts_poet_1.code `
        '${Enum.name}': {
          options: ${enumOptions},
          values: {${ts_poet_1.joinCode(valuesOptions, { on: ',' })}}
        }
      `);
        }
    });
    chunks.push(ts_poet_1.code `
    export const ${ts_poet_1.def('protoMetadata')}: ProtoMetadata = {
      fileDescriptor: ${fileDescriptorProto}.fromPartial(${descriptor}),
      references: { ${ts_poet_1.joinCode(references, { on: ',' })} },
      dependencies: [${ts_poet_1.joinCode(dependencies, { on: ',' })}],
      ${fileOptions || messagesOptions.length > 0 || servicesOptions.length > 0 || enumsOptions.length > 0
        ? ts_poet_1.code `options: {
          ${fileOptions ? ts_poet_1.code `options: ${fileOptions},` : ''}
          ${messagesOptions.length > 0 ? ts_poet_1.code `messages: {${ts_poet_1.joinCode(messagesOptions, { on: ',' })}},` : ''}
          ${servicesOptions.length > 0 ? ts_poet_1.code `services: {${ts_poet_1.joinCode(servicesOptions, { on: ',' })}},` : ''}
          ${enumsOptions.length > 0 ? ts_poet_1.code `enums: {${ts_poet_1.joinCode(enumsOptions, { on: ',' })}}` : ''}
        }`
        : ''}
    }
  `);
    return chunks;
}
exports.generateSchema = generateSchema;
function getExtensionValue(ctx, extension, data) {
    if (extension.type == ts_proto_descriptors_1.FieldDescriptorProto_Type.TYPE_MESSAGE) {
        const typeName = types_1.basicTypeName(ctx, extension);
        const resultBuffer = Buffer.concat(data.map((d) => {
            // Skip length byte
            const reader = new minimal_1.Reader(d);
            reader.uint32();
            return reader.buf.slice(reader.pos);
        }));
        const result = resultBuffer.toString('base64');
        return ts_poet_1.code `'${extension.name}': ${typeName}.decode(Buffer.from('${result}', 'base64'))`;
    }
    else {
        const reader = new minimal_1.Reader(data[0]);
        let value = reader[types_1.toReaderCall(extension)]();
        if (typeof value === 'string') {
            value = ts_poet_1.code `"${value}"`;
        }
        return ts_poet_1.code `'${extension.name}': ${value}`;
    }
}
/** Takes the protoc's input of options as proto-encoded messages, and turns them into embedded-able-in-source-code representations. */
function encodedOptionsToOptions(ctx, extendee, encodedOptions) {
    if (!encodedOptions) {
        return undefined;
    }
    const resultOptions = [];
    for (const [key, value] of Object.entries(encodedOptions)) {
        const extension = extensionCache[extendee][parseInt(key, 10) >>> 3];
        resultOptions.push(getExtensionValue(ctx, extension, value));
    }
    if (resultOptions.length == 0) {
        return undefined;
    }
    return ts_poet_1.code `{${ts_poet_1.joinCode(resultOptions, { on: ',' })}}`;
}
function resolveMessageOptions(ctx, message) {
    const fieldsOptions = [];
    message.field.forEach((field) => {
        if (field.options) {
            const fieldOptions = encodedOptionsToOptions(ctx, '.google.protobuf.FieldOptions', field.options['_unknownFields']);
            delete field.options['_unknownFields'];
            if (fieldOptions) {
                fieldsOptions.push(ts_poet_1.code `'${field.name}': ${fieldOptions}`);
            }
        }
    });
    const oneOfsOptions = [];
    message.oneofDecl.forEach((oneOf) => {
        if (oneOf.options) {
            const oneOfOptions = encodedOptionsToOptions(ctx, '.google.protobuf.OneofOptions', oneOf.options['_unknownFields']);
            delete oneOf.options['_unknownFields'];
            if (oneOfOptions) {
                oneOfsOptions.push(ts_poet_1.code `'${oneOf.name}': ${oneOfOptions}`);
            }
        }
    });
    let nestedOptions = [];
    if (message.nestedType && message.nestedType.length > 0) {
        message.nestedType.forEach((nested) => {
            const resolvedMessage = resolveMessageOptions(ctx, nested);
            if (resolvedMessage) {
                nestedOptions.push(resolvedMessage);
            }
        });
    }
    let messageOptions;
    if (message.options) {
        messageOptions = encodedOptionsToOptions(ctx, '.google.protobuf.MessageOptions', message.options['_unknownFields']);
        delete message.options['_unknownFields'];
    }
    if (fieldsOptions.length > 0 || oneOfsOptions.length > 0 || nestedOptions.length > 0 || messageOptions) {
        return ts_poet_1.code `
      '${message.name}': {
        ${messageOptions ? ts_poet_1.code `options: ${messageOptions},` : ''}
        ${fieldsOptions.length > 0 ? ts_poet_1.code `fields: {${ts_poet_1.joinCode(fieldsOptions, { on: ',' })}},` : ''}
        ${oneOfsOptions.length > 0 ? ts_poet_1.code `oneof: {${ts_poet_1.joinCode(oneOfsOptions, { on: ',' })}},` : ''}
        ${nestedOptions.length > 0 ? ts_poet_1.code `nested: {${ts_poet_1.joinCode(nestedOptions, { on: ',' })}},` : ''}
      }
    `;
    }
}
