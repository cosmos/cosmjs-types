"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.impProto = exports.getPropertyAccessor = exports.getFieldJsonName = exports.FormattedMethodDescriptor = exports.assertInstanceOf = exports.maybePrefixPackage = exports.prefixDisableLinter = exports.maybeAddComment = exports.upperFirst = exports.lowerFirst = exports.singular = exports.fail = exports.readToBuffer = exports.protoFilesToGenerate = void 0;
const ts_poet_1 = require("ts-poet");
const options_1 = require("./options");
const case_1 = require("./case");
function protoFilesToGenerate(request) {
    return request.protoFile.filter((f) => request.fileToGenerate.includes(f.name));
}
exports.protoFilesToGenerate = protoFilesToGenerate;
function readToBuffer(stream) {
    return new Promise((resolve) => {
        const ret = [];
        let len = 0;
        stream.on('readable', () => {
            let chunk;
            while ((chunk = stream.read())) {
                ret.push(chunk);
                len += chunk.length;
            }
        });
        stream.on('end', () => {
            resolve(Buffer.concat(ret, len));
        });
    });
}
exports.readToBuffer = readToBuffer;
function fail(message) {
    throw new Error(message);
}
exports.fail = fail;
function singular(name) {
    return name.substring(0, name.length - 1); // drop the 's', which is extremely naive
}
exports.singular = singular;
function lowerFirst(name) {
    return name.substring(0, 1).toLowerCase() + name.substring(1);
}
exports.lowerFirst = lowerFirst;
function upperFirst(name) {
    return name.substring(0, 1).toUpperCase() + name.substring(1);
}
exports.upperFirst = upperFirst;
// Since we don't know what form the comment originally took, it may contain closing block comments.
const CloseComment = /\*\//g;
/** Removes potentially harmful characters from comments and pushes it into chunks. */
function maybeAddComment(desc, chunks, deprecated, prefix = '') {
    let lines = [];
    if (desc.leadingComments || desc.trailingComments) {
        let content = (desc.leadingComments || desc.trailingComments || '').replace(CloseComment, '* /').trim();
        // Detect /** ... */ comments
        const isDoubleStar = content.startsWith('*');
        if (isDoubleStar) {
            content = content.substring(1).trim();
        }
        // Prefix things like the enum name.
        if (prefix) {
            content = prefix + content;
        }
        lines = content.split('\n').map((l) => l.replace(/^ /, '').replace(/\n/, ''));
    }
    // Deprecated comment should be added even if no other comment was added
    if (deprecated) {
        if (lines.length > 0) {
            lines.push('');
        }
        lines.push('@deprecated');
    }
    let comment;
    if (lines.length === 1) {
        comment = ts_poet_1.code `/** ${lines[0]} */`;
    }
    else {
        comment = ts_poet_1.code `/**\n * ${lines.join('\n * ')}\n */`;
    }
    if (lines.length > 0) {
        chunks.push(ts_poet_1.code `\n\n${comment}\n\n`);
    }
}
exports.maybeAddComment = maybeAddComment;
// Comment block at the top of every source file, since these comments require specific
// syntax incompatible with ts-poet, we will hard-code the string and prepend to the
// generator output.
function prefixDisableLinter(spec) {
    return `/* eslint-disable */\n${spec}`;
}
exports.prefixDisableLinter = prefixDisableLinter;
function maybePrefixPackage(fileDesc, rest) {
    const prefix = fileDesc.package === '' ? '' : `${fileDesc.package}.`;
    return `${prefix}${rest}`;
}
exports.maybePrefixPackage = maybePrefixPackage;
/**
 * Asserts that an object is an instance of a certain class
 * @param obj The object to check
 * @param constructor The constructor of the class to check
 */
function assertInstanceOf(obj, constructor) {
    if (!(obj instanceof constructor)) {
        throw new Error(`Expected instance of ${constructor.name}`);
    }
}
exports.assertInstanceOf = assertInstanceOf;
/**
 * A MethodDescriptorProto subclass that adds formatted properties
 */
class FormattedMethodDescriptor {
    constructor(src, options) {
        this.ctxOptions = options;
        this.original = src;
        this.name = src.name;
        this.inputType = src.inputType;
        this.outputType = src.outputType;
        this.options = src.options;
        this.clientStreaming = src.clientStreaming;
        this.serverStreaming = src.serverStreaming;
    }
    /**
     * The name of this method with formatting applied according to the `Options` object passed to the constructor.
     * Automatically updates to any changes to the `Options` or `name` of this object
     */
    get formattedName() {
        return FormattedMethodDescriptor.formatName(this.name, this.ctxOptions);
    }
    /**
     * Retrieve the source `MethodDescriptorProto` used to construct this object
     * @returns The source `MethodDescriptorProto` used to construct this object
     */
    getSource() {
        return this.original;
    }
    /**
     * Applies formatting rules to a gRPC method name.
     * @param methodName The original method name
     * @param options The options object containing rules to apply
     * @returns The formatted method name
     */
    static formatName(methodName, options) {
        let result = methodName;
        if (options.lowerCaseServiceMethods || options.outputServices.includes(options_1.ServiceOption.GRPC)) {
            result = case_1.camelCase(result);
        }
        return result;
    }
}
exports.FormattedMethodDescriptor = FormattedMethodDescriptor;
function getFieldJsonName(field, options) {
    // jsonName will be camelCased by the protocol compiler, plus can be overridden by the user,
    // so just use that instead of our own maybeSnakeToCamel
    if (options.snakeToCamel.includes('json')) {
        return field.jsonName;
    }
    else {
        return field.name;
    }
}
exports.getFieldJsonName = getFieldJsonName;
/**
 * Returns a snippet for reading an object's property, such as `foo.bar`, or `foo['bar']` if the property name contains unusual characters.
 * For simplicity, we don't match the ECMA 5/6 rules for valid identifiers exactly, and return array syntax liberally.
 * @param objectName
 * @param propertyName
 * @param optional
 */
function getPropertyAccessor(objectName, propertyName, optional = false) {
    let validIdentifier = /^[a-zA-Z_$][\w$]*$/;
    return validIdentifier.test(propertyName)
        ? `${objectName}${optional ? '?' : ''}.${propertyName}`
        : `${objectName}${optional ? '?.' : ''}[${JSON.stringify(propertyName)}]`;
}
exports.getPropertyAccessor = getPropertyAccessor;
function impProto(options, module, type) {
    const importString = `${type}@./${module}${options.fileSuffix}`;
    if (options.onlyTypes) {
        return ts_poet_1.imp('t:' + importString);
    }
    else {
        return ts_poet_1.imp(importString);
    }
}
exports.impProto = impProto;
