/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { DeepPartial, Exact, isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
export const protobufPackage = "google.protobuf";
/** The full set of known editions. */
export enum Edition {
  /** EDITION_UNKNOWN - A placeholder for an unknown edition value. */
  EDITION_UNKNOWN = 0,
  /**
   * EDITION_LEGACY - A placeholder edition for specifying default behaviors *before* a feature
   * was first introduced.  This is effectively an "infinite past".
   */
  EDITION_LEGACY = 900,
  /**
   * EDITION_PROTO2 - Legacy syntax "editions".  These pre-date editions, but behave much like
   * distinct editions.  These can't be used to specify the edition of proto
   * files, but feature definitions must supply proto2/proto3 defaults for
   * backwards compatibility.
   */
  EDITION_PROTO2 = 998,
  EDITION_PROTO3 = 999,
  /**
   * EDITION_2023 - Editions that have been released.  The specific values are arbitrary and
   * should not be depended on, but they will always be time-ordered for easy
   * comparison.
   */
  EDITION_2023 = 1000,
  EDITION_2024 = 1001,
  /**
   * EDITION_1_TEST_ONLY - Placeholder editions for testing feature resolution.  These should not be
   * used or relied on outside of tests.
   */
  EDITION_1_TEST_ONLY = 1,
  EDITION_2_TEST_ONLY = 2,
  EDITION_99997_TEST_ONLY = 99997,
  EDITION_99998_TEST_ONLY = 99998,
  EDITION_99999_TEST_ONLY = 99999,
  /**
   * EDITION_MAX - Placeholder for specifying unbounded edition support.  This should only
   * ever be used by plugins that can expect to never require any changes to
   * support a new edition.
   */
  EDITION_MAX = 2147483647,
  UNRECOGNIZED = -1,
}
export function editionFromJSON(object: any): Edition {
  switch (object) {
    case 0:
    case "EDITION_UNKNOWN":
      return Edition.EDITION_UNKNOWN;
    case 900:
    case "EDITION_LEGACY":
      return Edition.EDITION_LEGACY;
    case 998:
    case "EDITION_PROTO2":
      return Edition.EDITION_PROTO2;
    case 999:
    case "EDITION_PROTO3":
      return Edition.EDITION_PROTO3;
    case 1000:
    case "EDITION_2023":
      return Edition.EDITION_2023;
    case 1001:
    case "EDITION_2024":
      return Edition.EDITION_2024;
    case 1:
    case "EDITION_1_TEST_ONLY":
      return Edition.EDITION_1_TEST_ONLY;
    case 2:
    case "EDITION_2_TEST_ONLY":
      return Edition.EDITION_2_TEST_ONLY;
    case 99997:
    case "EDITION_99997_TEST_ONLY":
      return Edition.EDITION_99997_TEST_ONLY;
    case 99998:
    case "EDITION_99998_TEST_ONLY":
      return Edition.EDITION_99998_TEST_ONLY;
    case 99999:
    case "EDITION_99999_TEST_ONLY":
      return Edition.EDITION_99999_TEST_ONLY;
    case 2147483647:
    case "EDITION_MAX":
      return Edition.EDITION_MAX;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Edition.UNRECOGNIZED;
  }
}
export function editionToJSON(object: Edition): string {
  switch (object) {
    case Edition.EDITION_UNKNOWN:
      return "EDITION_UNKNOWN";
    case Edition.EDITION_LEGACY:
      return "EDITION_LEGACY";
    case Edition.EDITION_PROTO2:
      return "EDITION_PROTO2";
    case Edition.EDITION_PROTO3:
      return "EDITION_PROTO3";
    case Edition.EDITION_2023:
      return "EDITION_2023";
    case Edition.EDITION_2024:
      return "EDITION_2024";
    case Edition.EDITION_1_TEST_ONLY:
      return "EDITION_1_TEST_ONLY";
    case Edition.EDITION_2_TEST_ONLY:
      return "EDITION_2_TEST_ONLY";
    case Edition.EDITION_99997_TEST_ONLY:
      return "EDITION_99997_TEST_ONLY";
    case Edition.EDITION_99998_TEST_ONLY:
      return "EDITION_99998_TEST_ONLY";
    case Edition.EDITION_99999_TEST_ONLY:
      return "EDITION_99999_TEST_ONLY";
    case Edition.EDITION_MAX:
      return "EDITION_MAX";
    case Edition.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** The verification state of the extension range. */
export enum ExtensionRangeOptions_VerificationState {
  /** DECLARATION - All the extensions of the range must be declared. */
  DECLARATION = 0,
  UNVERIFIED = 1,
  UNRECOGNIZED = -1,
}
export function extensionRangeOptions_VerificationStateFromJSON(
  object: any,
): ExtensionRangeOptions_VerificationState {
  switch (object) {
    case 0:
    case "DECLARATION":
      return ExtensionRangeOptions_VerificationState.DECLARATION;
    case 1:
    case "UNVERIFIED":
      return ExtensionRangeOptions_VerificationState.UNVERIFIED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ExtensionRangeOptions_VerificationState.UNRECOGNIZED;
  }
}
export function extensionRangeOptions_VerificationStateToJSON(
  object: ExtensionRangeOptions_VerificationState,
): string {
  switch (object) {
    case ExtensionRangeOptions_VerificationState.DECLARATION:
      return "DECLARATION";
    case ExtensionRangeOptions_VerificationState.UNVERIFIED:
      return "UNVERIFIED";
    case ExtensionRangeOptions_VerificationState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FieldDescriptorProto_Type {
  /**
   * TYPE_DOUBLE - 0 is reserved for errors.
   * Order is weird for historical reasons.
   */
  TYPE_DOUBLE = 1,
  TYPE_FLOAT = 2,
  /**
   * TYPE_INT64 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
   * negative values are likely.
   */
  TYPE_INT64 = 3,
  TYPE_UINT64 = 4,
  /**
   * TYPE_INT32 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
   * negative values are likely.
   */
  TYPE_INT32 = 5,
  TYPE_FIXED64 = 6,
  TYPE_FIXED32 = 7,
  TYPE_BOOL = 8,
  TYPE_STRING = 9,
  /**
   * TYPE_GROUP - Tag-delimited aggregate.
   * Group type is deprecated and not supported after google.protobuf. However, Proto3
   * implementations should still be able to parse the group wire format and
   * treat group fields as unknown fields.  In Editions, the group wire format
   * can be enabled via the `message_encoding` feature.
   */
  TYPE_GROUP = 10,
  /** TYPE_MESSAGE - Length-delimited aggregate. */
  TYPE_MESSAGE = 11,
  /** TYPE_BYTES - New in version 2. */
  TYPE_BYTES = 12,
  TYPE_UINT32 = 13,
  TYPE_ENUM = 14,
  TYPE_SFIXED32 = 15,
  TYPE_SFIXED64 = 16,
  /** TYPE_SINT32 - Uses ZigZag encoding. */
  TYPE_SINT32 = 17,
  /** TYPE_SINT64 - Uses ZigZag encoding. */
  TYPE_SINT64 = 18,
  UNRECOGNIZED = -1,
}
export function fieldDescriptorProto_TypeFromJSON(object: any): FieldDescriptorProto_Type {
  switch (object) {
    case 1:
    case "TYPE_DOUBLE":
      return FieldDescriptorProto_Type.TYPE_DOUBLE;
    case 2:
    case "TYPE_FLOAT":
      return FieldDescriptorProto_Type.TYPE_FLOAT;
    case 3:
    case "TYPE_INT64":
      return FieldDescriptorProto_Type.TYPE_INT64;
    case 4:
    case "TYPE_UINT64":
      return FieldDescriptorProto_Type.TYPE_UINT64;
    case 5:
    case "TYPE_INT32":
      return FieldDescriptorProto_Type.TYPE_INT32;
    case 6:
    case "TYPE_FIXED64":
      return FieldDescriptorProto_Type.TYPE_FIXED64;
    case 7:
    case "TYPE_FIXED32":
      return FieldDescriptorProto_Type.TYPE_FIXED32;
    case 8:
    case "TYPE_BOOL":
      return FieldDescriptorProto_Type.TYPE_BOOL;
    case 9:
    case "TYPE_STRING":
      return FieldDescriptorProto_Type.TYPE_STRING;
    case 10:
    case "TYPE_GROUP":
      return FieldDescriptorProto_Type.TYPE_GROUP;
    case 11:
    case "TYPE_MESSAGE":
      return FieldDescriptorProto_Type.TYPE_MESSAGE;
    case 12:
    case "TYPE_BYTES":
      return FieldDescriptorProto_Type.TYPE_BYTES;
    case 13:
    case "TYPE_UINT32":
      return FieldDescriptorProto_Type.TYPE_UINT32;
    case 14:
    case "TYPE_ENUM":
      return FieldDescriptorProto_Type.TYPE_ENUM;
    case 15:
    case "TYPE_SFIXED32":
      return FieldDescriptorProto_Type.TYPE_SFIXED32;
    case 16:
    case "TYPE_SFIXED64":
      return FieldDescriptorProto_Type.TYPE_SFIXED64;
    case 17:
    case "TYPE_SINT32":
      return FieldDescriptorProto_Type.TYPE_SINT32;
    case 18:
    case "TYPE_SINT64":
      return FieldDescriptorProto_Type.TYPE_SINT64;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldDescriptorProto_Type.UNRECOGNIZED;
  }
}
export function fieldDescriptorProto_TypeToJSON(object: FieldDescriptorProto_Type): string {
  switch (object) {
    case FieldDescriptorProto_Type.TYPE_DOUBLE:
      return "TYPE_DOUBLE";
    case FieldDescriptorProto_Type.TYPE_FLOAT:
      return "TYPE_FLOAT";
    case FieldDescriptorProto_Type.TYPE_INT64:
      return "TYPE_INT64";
    case FieldDescriptorProto_Type.TYPE_UINT64:
      return "TYPE_UINT64";
    case FieldDescriptorProto_Type.TYPE_INT32:
      return "TYPE_INT32";
    case FieldDescriptorProto_Type.TYPE_FIXED64:
      return "TYPE_FIXED64";
    case FieldDescriptorProto_Type.TYPE_FIXED32:
      return "TYPE_FIXED32";
    case FieldDescriptorProto_Type.TYPE_BOOL:
      return "TYPE_BOOL";
    case FieldDescriptorProto_Type.TYPE_STRING:
      return "TYPE_STRING";
    case FieldDescriptorProto_Type.TYPE_GROUP:
      return "TYPE_GROUP";
    case FieldDescriptorProto_Type.TYPE_MESSAGE:
      return "TYPE_MESSAGE";
    case FieldDescriptorProto_Type.TYPE_BYTES:
      return "TYPE_BYTES";
    case FieldDescriptorProto_Type.TYPE_UINT32:
      return "TYPE_UINT32";
    case FieldDescriptorProto_Type.TYPE_ENUM:
      return "TYPE_ENUM";
    case FieldDescriptorProto_Type.TYPE_SFIXED32:
      return "TYPE_SFIXED32";
    case FieldDescriptorProto_Type.TYPE_SFIXED64:
      return "TYPE_SFIXED64";
    case FieldDescriptorProto_Type.TYPE_SINT32:
      return "TYPE_SINT32";
    case FieldDescriptorProto_Type.TYPE_SINT64:
      return "TYPE_SINT64";
    case FieldDescriptorProto_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FieldDescriptorProto_Label {
  /** LABEL_OPTIONAL - 0 is reserved for errors */
  LABEL_OPTIONAL = 1,
  LABEL_REPEATED = 3,
  /**
   * LABEL_REQUIRED - The required label is only allowed in google.protobuf.  In proto3 and Editions
   * it's explicitly prohibited.  In Editions, the `field_presence` feature
   * can be used to get this behavior.
   */
  LABEL_REQUIRED = 2,
  UNRECOGNIZED = -1,
}
export function fieldDescriptorProto_LabelFromJSON(object: any): FieldDescriptorProto_Label {
  switch (object) {
    case 1:
    case "LABEL_OPTIONAL":
      return FieldDescriptorProto_Label.LABEL_OPTIONAL;
    case 3:
    case "LABEL_REPEATED":
      return FieldDescriptorProto_Label.LABEL_REPEATED;
    case 2:
    case "LABEL_REQUIRED":
      return FieldDescriptorProto_Label.LABEL_REQUIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldDescriptorProto_Label.UNRECOGNIZED;
  }
}
export function fieldDescriptorProto_LabelToJSON(object: FieldDescriptorProto_Label): string {
  switch (object) {
    case FieldDescriptorProto_Label.LABEL_OPTIONAL:
      return "LABEL_OPTIONAL";
    case FieldDescriptorProto_Label.LABEL_REPEATED:
      return "LABEL_REPEATED";
    case FieldDescriptorProto_Label.LABEL_REQUIRED:
      return "LABEL_REQUIRED";
    case FieldDescriptorProto_Label.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Generated classes can be optimized for speed or code size. */
export enum FileOptions_OptimizeMode {
  /** SPEED - Generate complete code for parsing, serialization, */
  SPEED = 1,
  /** CODE_SIZE - etc. */
  CODE_SIZE = 2,
  /** LITE_RUNTIME - Generate code using MessageLite and the lite runtime. */
  LITE_RUNTIME = 3,
  UNRECOGNIZED = -1,
}
export function fileOptions_OptimizeModeFromJSON(object: any): FileOptions_OptimizeMode {
  switch (object) {
    case 1:
    case "SPEED":
      return FileOptions_OptimizeMode.SPEED;
    case 2:
    case "CODE_SIZE":
      return FileOptions_OptimizeMode.CODE_SIZE;
    case 3:
    case "LITE_RUNTIME":
      return FileOptions_OptimizeMode.LITE_RUNTIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FileOptions_OptimizeMode.UNRECOGNIZED;
  }
}
export function fileOptions_OptimizeModeToJSON(object: FileOptions_OptimizeMode): string {
  switch (object) {
    case FileOptions_OptimizeMode.SPEED:
      return "SPEED";
    case FileOptions_OptimizeMode.CODE_SIZE:
      return "CODE_SIZE";
    case FileOptions_OptimizeMode.LITE_RUNTIME:
      return "LITE_RUNTIME";
    case FileOptions_OptimizeMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FieldOptions_CType {
  /** STRING - Default mode. */
  STRING = 0,
  /**
   * CORD - The option [ctype=CORD] may be applied to a non-repeated field of type
   * "bytes". It indicates that in C++, the data should be stored in a Cord
   * instead of a string.  For very large strings, this may reduce memory
   * fragmentation. It may also allow better performance when parsing from a
   * Cord, or when parsing with aliasing enabled, as the parsed Cord may then
   * alias the original buffer.
   */
  CORD = 1,
  STRING_PIECE = 2,
  UNRECOGNIZED = -1,
}
export function fieldOptions_CTypeFromJSON(object: any): FieldOptions_CType {
  switch (object) {
    case 0:
    case "STRING":
      return FieldOptions_CType.STRING;
    case 1:
    case "CORD":
      return FieldOptions_CType.CORD;
    case 2:
    case "STRING_PIECE":
      return FieldOptions_CType.STRING_PIECE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_CType.UNRECOGNIZED;
  }
}
export function fieldOptions_CTypeToJSON(object: FieldOptions_CType): string {
  switch (object) {
    case FieldOptions_CType.STRING:
      return "STRING";
    case FieldOptions_CType.CORD:
      return "CORD";
    case FieldOptions_CType.STRING_PIECE:
      return "STRING_PIECE";
    case FieldOptions_CType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FieldOptions_JSType {
  /** JS_NORMAL - Use the default type. */
  JS_NORMAL = 0,
  /** JS_STRING - Use JavaScript strings. */
  JS_STRING = 1,
  /** JS_NUMBER - Use JavaScript numbers. */
  JS_NUMBER = 2,
  UNRECOGNIZED = -1,
}
export function fieldOptions_JSTypeFromJSON(object: any): FieldOptions_JSType {
  switch (object) {
    case 0:
    case "JS_NORMAL":
      return FieldOptions_JSType.JS_NORMAL;
    case 1:
    case "JS_STRING":
      return FieldOptions_JSType.JS_STRING;
    case 2:
    case "JS_NUMBER":
      return FieldOptions_JSType.JS_NUMBER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_JSType.UNRECOGNIZED;
  }
}
export function fieldOptions_JSTypeToJSON(object: FieldOptions_JSType): string {
  switch (object) {
    case FieldOptions_JSType.JS_NORMAL:
      return "JS_NORMAL";
    case FieldOptions_JSType.JS_STRING:
      return "JS_STRING";
    case FieldOptions_JSType.JS_NUMBER:
      return "JS_NUMBER";
    case FieldOptions_JSType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** If set to RETENTION_SOURCE, the option will be omitted from the binary. */
export enum FieldOptions_OptionRetention {
  RETENTION_UNKNOWN = 0,
  RETENTION_RUNTIME = 1,
  RETENTION_SOURCE = 2,
  UNRECOGNIZED = -1,
}
export function fieldOptions_OptionRetentionFromJSON(object: any): FieldOptions_OptionRetention {
  switch (object) {
    case 0:
    case "RETENTION_UNKNOWN":
      return FieldOptions_OptionRetention.RETENTION_UNKNOWN;
    case 1:
    case "RETENTION_RUNTIME":
      return FieldOptions_OptionRetention.RETENTION_RUNTIME;
    case 2:
    case "RETENTION_SOURCE":
      return FieldOptions_OptionRetention.RETENTION_SOURCE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_OptionRetention.UNRECOGNIZED;
  }
}
export function fieldOptions_OptionRetentionToJSON(object: FieldOptions_OptionRetention): string {
  switch (object) {
    case FieldOptions_OptionRetention.RETENTION_UNKNOWN:
      return "RETENTION_UNKNOWN";
    case FieldOptions_OptionRetention.RETENTION_RUNTIME:
      return "RETENTION_RUNTIME";
    case FieldOptions_OptionRetention.RETENTION_SOURCE:
      return "RETENTION_SOURCE";
    case FieldOptions_OptionRetention.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * This indicates the types of entities that the field may apply to when used
 * as an option. If it is unset, then the field may be freely used as an
 * option on any kind of entity.
 */
export enum FieldOptions_OptionTargetType {
  TARGET_TYPE_UNKNOWN = 0,
  TARGET_TYPE_FILE = 1,
  TARGET_TYPE_EXTENSION_RANGE = 2,
  TARGET_TYPE_MESSAGE = 3,
  TARGET_TYPE_FIELD = 4,
  TARGET_TYPE_ONEOF = 5,
  TARGET_TYPE_ENUM = 6,
  TARGET_TYPE_ENUM_ENTRY = 7,
  TARGET_TYPE_SERVICE = 8,
  TARGET_TYPE_METHOD = 9,
  UNRECOGNIZED = -1,
}
export function fieldOptions_OptionTargetTypeFromJSON(object: any): FieldOptions_OptionTargetType {
  switch (object) {
    case 0:
    case "TARGET_TYPE_UNKNOWN":
      return FieldOptions_OptionTargetType.TARGET_TYPE_UNKNOWN;
    case 1:
    case "TARGET_TYPE_FILE":
      return FieldOptions_OptionTargetType.TARGET_TYPE_FILE;
    case 2:
    case "TARGET_TYPE_EXTENSION_RANGE":
      return FieldOptions_OptionTargetType.TARGET_TYPE_EXTENSION_RANGE;
    case 3:
    case "TARGET_TYPE_MESSAGE":
      return FieldOptions_OptionTargetType.TARGET_TYPE_MESSAGE;
    case 4:
    case "TARGET_TYPE_FIELD":
      return FieldOptions_OptionTargetType.TARGET_TYPE_FIELD;
    case 5:
    case "TARGET_TYPE_ONEOF":
      return FieldOptions_OptionTargetType.TARGET_TYPE_ONEOF;
    case 6:
    case "TARGET_TYPE_ENUM":
      return FieldOptions_OptionTargetType.TARGET_TYPE_ENUM;
    case 7:
    case "TARGET_TYPE_ENUM_ENTRY":
      return FieldOptions_OptionTargetType.TARGET_TYPE_ENUM_ENTRY;
    case 8:
    case "TARGET_TYPE_SERVICE":
      return FieldOptions_OptionTargetType.TARGET_TYPE_SERVICE;
    case 9:
    case "TARGET_TYPE_METHOD":
      return FieldOptions_OptionTargetType.TARGET_TYPE_METHOD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_OptionTargetType.UNRECOGNIZED;
  }
}
export function fieldOptions_OptionTargetTypeToJSON(object: FieldOptions_OptionTargetType): string {
  switch (object) {
    case FieldOptions_OptionTargetType.TARGET_TYPE_UNKNOWN:
      return "TARGET_TYPE_UNKNOWN";
    case FieldOptions_OptionTargetType.TARGET_TYPE_FILE:
      return "TARGET_TYPE_FILE";
    case FieldOptions_OptionTargetType.TARGET_TYPE_EXTENSION_RANGE:
      return "TARGET_TYPE_EXTENSION_RANGE";
    case FieldOptions_OptionTargetType.TARGET_TYPE_MESSAGE:
      return "TARGET_TYPE_MESSAGE";
    case FieldOptions_OptionTargetType.TARGET_TYPE_FIELD:
      return "TARGET_TYPE_FIELD";
    case FieldOptions_OptionTargetType.TARGET_TYPE_ONEOF:
      return "TARGET_TYPE_ONEOF";
    case FieldOptions_OptionTargetType.TARGET_TYPE_ENUM:
      return "TARGET_TYPE_ENUM";
    case FieldOptions_OptionTargetType.TARGET_TYPE_ENUM_ENTRY:
      return "TARGET_TYPE_ENUM_ENTRY";
    case FieldOptions_OptionTargetType.TARGET_TYPE_SERVICE:
      return "TARGET_TYPE_SERVICE";
    case FieldOptions_OptionTargetType.TARGET_TYPE_METHOD:
      return "TARGET_TYPE_METHOD";
    case FieldOptions_OptionTargetType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 */
export enum MethodOptions_IdempotencyLevel {
  IDEMPOTENCY_UNKNOWN = 0,
  /** NO_SIDE_EFFECTS - implies idempotent */
  NO_SIDE_EFFECTS = 1,
  /** IDEMPOTENT - idempotent, but may have side effects */
  IDEMPOTENT = 2,
  UNRECOGNIZED = -1,
}
export function methodOptions_IdempotencyLevelFromJSON(object: any): MethodOptions_IdempotencyLevel {
  switch (object) {
    case 0:
    case "IDEMPOTENCY_UNKNOWN":
      return MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN;
    case 1:
    case "NO_SIDE_EFFECTS":
      return MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS;
    case 2:
    case "IDEMPOTENT":
      return MethodOptions_IdempotencyLevel.IDEMPOTENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MethodOptions_IdempotencyLevel.UNRECOGNIZED;
  }
}
export function methodOptions_IdempotencyLevelToJSON(object: MethodOptions_IdempotencyLevel): string {
  switch (object) {
    case MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
      return "IDEMPOTENCY_UNKNOWN";
    case MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
      return "NO_SIDE_EFFECTS";
    case MethodOptions_IdempotencyLevel.IDEMPOTENT:
      return "IDEMPOTENT";
    case MethodOptions_IdempotencyLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FeatureSet_FieldPresence {
  FIELD_PRESENCE_UNKNOWN = 0,
  EXPLICIT = 1,
  IMPLICIT = 2,
  LEGACY_REQUIRED = 3,
  UNRECOGNIZED = -1,
}
export function featureSet_FieldPresenceFromJSON(object: any): FeatureSet_FieldPresence {
  switch (object) {
    case 0:
    case "FIELD_PRESENCE_UNKNOWN":
      return FeatureSet_FieldPresence.FIELD_PRESENCE_UNKNOWN;
    case 1:
    case "EXPLICIT":
      return FeatureSet_FieldPresence.EXPLICIT;
    case 2:
    case "IMPLICIT":
      return FeatureSet_FieldPresence.IMPLICIT;
    case 3:
    case "LEGACY_REQUIRED":
      return FeatureSet_FieldPresence.LEGACY_REQUIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureSet_FieldPresence.UNRECOGNIZED;
  }
}
export function featureSet_FieldPresenceToJSON(object: FeatureSet_FieldPresence): string {
  switch (object) {
    case FeatureSet_FieldPresence.FIELD_PRESENCE_UNKNOWN:
      return "FIELD_PRESENCE_UNKNOWN";
    case FeatureSet_FieldPresence.EXPLICIT:
      return "EXPLICIT";
    case FeatureSet_FieldPresence.IMPLICIT:
      return "IMPLICIT";
    case FeatureSet_FieldPresence.LEGACY_REQUIRED:
      return "LEGACY_REQUIRED";
    case FeatureSet_FieldPresence.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FeatureSet_EnumType {
  ENUM_TYPE_UNKNOWN = 0,
  OPEN = 1,
  CLOSED = 2,
  UNRECOGNIZED = -1,
}
export function featureSet_EnumTypeFromJSON(object: any): FeatureSet_EnumType {
  switch (object) {
    case 0:
    case "ENUM_TYPE_UNKNOWN":
      return FeatureSet_EnumType.ENUM_TYPE_UNKNOWN;
    case 1:
    case "OPEN":
      return FeatureSet_EnumType.OPEN;
    case 2:
    case "CLOSED":
      return FeatureSet_EnumType.CLOSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureSet_EnumType.UNRECOGNIZED;
  }
}
export function featureSet_EnumTypeToJSON(object: FeatureSet_EnumType): string {
  switch (object) {
    case FeatureSet_EnumType.ENUM_TYPE_UNKNOWN:
      return "ENUM_TYPE_UNKNOWN";
    case FeatureSet_EnumType.OPEN:
      return "OPEN";
    case FeatureSet_EnumType.CLOSED:
      return "CLOSED";
    case FeatureSet_EnumType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FeatureSet_RepeatedFieldEncoding {
  REPEATED_FIELD_ENCODING_UNKNOWN = 0,
  PACKED = 1,
  EXPANDED = 2,
  UNRECOGNIZED = -1,
}
export function featureSet_RepeatedFieldEncodingFromJSON(object: any): FeatureSet_RepeatedFieldEncoding {
  switch (object) {
    case 0:
    case "REPEATED_FIELD_ENCODING_UNKNOWN":
      return FeatureSet_RepeatedFieldEncoding.REPEATED_FIELD_ENCODING_UNKNOWN;
    case 1:
    case "PACKED":
      return FeatureSet_RepeatedFieldEncoding.PACKED;
    case 2:
    case "EXPANDED":
      return FeatureSet_RepeatedFieldEncoding.EXPANDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureSet_RepeatedFieldEncoding.UNRECOGNIZED;
  }
}
export function featureSet_RepeatedFieldEncodingToJSON(object: FeatureSet_RepeatedFieldEncoding): string {
  switch (object) {
    case FeatureSet_RepeatedFieldEncoding.REPEATED_FIELD_ENCODING_UNKNOWN:
      return "REPEATED_FIELD_ENCODING_UNKNOWN";
    case FeatureSet_RepeatedFieldEncoding.PACKED:
      return "PACKED";
    case FeatureSet_RepeatedFieldEncoding.EXPANDED:
      return "EXPANDED";
    case FeatureSet_RepeatedFieldEncoding.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FeatureSet_Utf8Validation {
  UTF8_VALIDATION_UNKNOWN = 0,
  VERIFY = 2,
  NONE = 3,
  UNRECOGNIZED = -1,
}
export function featureSet_Utf8ValidationFromJSON(object: any): FeatureSet_Utf8Validation {
  switch (object) {
    case 0:
    case "UTF8_VALIDATION_UNKNOWN":
      return FeatureSet_Utf8Validation.UTF8_VALIDATION_UNKNOWN;
    case 2:
    case "VERIFY":
      return FeatureSet_Utf8Validation.VERIFY;
    case 3:
    case "NONE":
      return FeatureSet_Utf8Validation.NONE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureSet_Utf8Validation.UNRECOGNIZED;
  }
}
export function featureSet_Utf8ValidationToJSON(object: FeatureSet_Utf8Validation): string {
  switch (object) {
    case FeatureSet_Utf8Validation.UTF8_VALIDATION_UNKNOWN:
      return "UTF8_VALIDATION_UNKNOWN";
    case FeatureSet_Utf8Validation.VERIFY:
      return "VERIFY";
    case FeatureSet_Utf8Validation.NONE:
      return "NONE";
    case FeatureSet_Utf8Validation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FeatureSet_MessageEncoding {
  MESSAGE_ENCODING_UNKNOWN = 0,
  LENGTH_PREFIXED = 1,
  DELIMITED = 2,
  UNRECOGNIZED = -1,
}
export function featureSet_MessageEncodingFromJSON(object: any): FeatureSet_MessageEncoding {
  switch (object) {
    case 0:
    case "MESSAGE_ENCODING_UNKNOWN":
      return FeatureSet_MessageEncoding.MESSAGE_ENCODING_UNKNOWN;
    case 1:
    case "LENGTH_PREFIXED":
      return FeatureSet_MessageEncoding.LENGTH_PREFIXED;
    case 2:
    case "DELIMITED":
      return FeatureSet_MessageEncoding.DELIMITED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureSet_MessageEncoding.UNRECOGNIZED;
  }
}
export function featureSet_MessageEncodingToJSON(object: FeatureSet_MessageEncoding): string {
  switch (object) {
    case FeatureSet_MessageEncoding.MESSAGE_ENCODING_UNKNOWN:
      return "MESSAGE_ENCODING_UNKNOWN";
    case FeatureSet_MessageEncoding.LENGTH_PREFIXED:
      return "LENGTH_PREFIXED";
    case FeatureSet_MessageEncoding.DELIMITED:
      return "DELIMITED";
    case FeatureSet_MessageEncoding.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FeatureSet_JsonFormat {
  JSON_FORMAT_UNKNOWN = 0,
  ALLOW = 1,
  LEGACY_BEST_EFFORT = 2,
  UNRECOGNIZED = -1,
}
export function featureSet_JsonFormatFromJSON(object: any): FeatureSet_JsonFormat {
  switch (object) {
    case 0:
    case "JSON_FORMAT_UNKNOWN":
      return FeatureSet_JsonFormat.JSON_FORMAT_UNKNOWN;
    case 1:
    case "ALLOW":
      return FeatureSet_JsonFormat.ALLOW;
    case 2:
    case "LEGACY_BEST_EFFORT":
      return FeatureSet_JsonFormat.LEGACY_BEST_EFFORT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureSet_JsonFormat.UNRECOGNIZED;
  }
}
export function featureSet_JsonFormatToJSON(object: FeatureSet_JsonFormat): string {
  switch (object) {
    case FeatureSet_JsonFormat.JSON_FORMAT_UNKNOWN:
      return "JSON_FORMAT_UNKNOWN";
    case FeatureSet_JsonFormat.ALLOW:
      return "ALLOW";
    case FeatureSet_JsonFormat.LEGACY_BEST_EFFORT:
      return "LEGACY_BEST_EFFORT";
    case FeatureSet_JsonFormat.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FeatureSet_EnforceNamingStyle {
  ENFORCE_NAMING_STYLE_UNKNOWN = 0,
  STYLE2024 = 1,
  STYLE_LEGACY = 2,
  UNRECOGNIZED = -1,
}
export function featureSet_EnforceNamingStyleFromJSON(object: any): FeatureSet_EnforceNamingStyle {
  switch (object) {
    case 0:
    case "ENFORCE_NAMING_STYLE_UNKNOWN":
      return FeatureSet_EnforceNamingStyle.ENFORCE_NAMING_STYLE_UNKNOWN;
    case 1:
    case "STYLE2024":
      return FeatureSet_EnforceNamingStyle.STYLE2024;
    case 2:
    case "STYLE_LEGACY":
      return FeatureSet_EnforceNamingStyle.STYLE_LEGACY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureSet_EnforceNamingStyle.UNRECOGNIZED;
  }
}
export function featureSet_EnforceNamingStyleToJSON(object: FeatureSet_EnforceNamingStyle): string {
  switch (object) {
    case FeatureSet_EnforceNamingStyle.ENFORCE_NAMING_STYLE_UNKNOWN:
      return "ENFORCE_NAMING_STYLE_UNKNOWN";
    case FeatureSet_EnforceNamingStyle.STYLE2024:
      return "STYLE2024";
    case FeatureSet_EnforceNamingStyle.STYLE_LEGACY:
      return "STYLE_LEGACY";
    case FeatureSet_EnforceNamingStyle.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Represents the identified object's effect on the element in the original
 * .proto file.
 */
export enum GeneratedCodeInfo_Annotation_Semantic {
  /** NONE - There is no effect or the effect is indescribable. */
  NONE = 0,
  /** SET - The element is set or otherwise mutated. */
  SET = 1,
  /** ALIAS - An alias to the element is returned. */
  ALIAS = 2,
  UNRECOGNIZED = -1,
}
export function generatedCodeInfo_Annotation_SemanticFromJSON(
  object: any,
): GeneratedCodeInfo_Annotation_Semantic {
  switch (object) {
    case 0:
    case "NONE":
      return GeneratedCodeInfo_Annotation_Semantic.NONE;
    case 1:
    case "SET":
      return GeneratedCodeInfo_Annotation_Semantic.SET;
    case 2:
    case "ALIAS":
      return GeneratedCodeInfo_Annotation_Semantic.ALIAS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GeneratedCodeInfo_Annotation_Semantic.UNRECOGNIZED;
  }
}
export function generatedCodeInfo_Annotation_SemanticToJSON(
  object: GeneratedCodeInfo_Annotation_Semantic,
): string {
  switch (object) {
    case GeneratedCodeInfo_Annotation_Semantic.NONE:
      return "NONE";
    case GeneratedCodeInfo_Annotation_Semantic.SET:
      return "SET";
    case GeneratedCodeInfo_Annotation_Semantic.ALIAS:
      return "ALIAS";
    case GeneratedCodeInfo_Annotation_Semantic.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 */
export interface FileDescriptorSet {
  file: FileDescriptorProto[];
}
/** Describes a complete .proto file. */
export interface FileDescriptorProto {
  /** file name, relative to root of source tree */
  name: string;
  /** e.g. "foo", "foo.bar", etc. */
  package: string;
  /** Names of files imported by this file. */
  dependency: string[];
  /** Indexes of the public imported files in the dependency list above. */
  publicDependency: number[];
  /**
   * Indexes of the weak imported files in the dependency list.
   * For Google-internal migration only. Do not use.
   */
  weakDependency: number[];
  /** All top-level definitions in this file. */
  messageType: DescriptorProto[];
  enumType: EnumDescriptorProto[];
  service: ServiceDescriptorProto[];
  extension: FieldDescriptorProto[];
  options?: FileOptions;
  /**
   * This field contains optional information about the original source code.
   * You may safely remove this entire field without harming runtime
   * functionality of the descriptors -- the information is needed only by
   * development tools.
   */
  sourceCodeInfo?: SourceCodeInfo;
  /**
   * The syntax of the proto file.
   * The supported values are "proto2", "proto3", and "editions".
   *
   * If `edition` is present, this value must be "editions".
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  syntax: string;
  /**
   * The edition of the proto file.
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  edition: Edition;
}
/** Describes a message type. */
export interface DescriptorProto {
  name: string;
  field: FieldDescriptorProto[];
  extension: FieldDescriptorProto[];
  nestedType: DescriptorProto[];
  enumType: EnumDescriptorProto[];
  extensionRange: DescriptorProto_ExtensionRange[];
  oneofDecl: OneofDescriptorProto[];
  options?: MessageOptions;
  reservedRange: DescriptorProto_ReservedRange[];
  /**
   * Reserved field names, which may not be used by fields in the same message.
   * A given name may only be reserved once.
   */
  reservedName: string[];
}
export interface DescriptorProto_ExtensionRange {
  /** Inclusive. */
  start: number;
  /** Exclusive. */
  end: number;
  options?: ExtensionRangeOptions;
}
/**
 * Range of reserved tag numbers. Reserved tag numbers may not be used by
 * fields or extension ranges in the same message. Reserved ranges may
 * not overlap.
 */
export interface DescriptorProto_ReservedRange {
  /** Inclusive. */
  start: number;
  /** Exclusive. */
  end: number;
}
export interface ExtensionRangeOptions {
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
  /**
   * For external users: DO NOT USE. We are in the process of open sourcing
   * extension declaration and executing internal cleanups before it can be
   * used externally.
   */
  declaration: ExtensionRangeOptions_Declaration[];
  /** Any features defined in the specific edition. */
  features?: FeatureSet;
  /**
   * The verification state of the range.
   * TODO: flip the default to DECLARATION once all empty ranges
   * are marked as UNVERIFIED.
   */
  verification: ExtensionRangeOptions_VerificationState;
}
export interface ExtensionRangeOptions_Declaration {
  /** The extension number declared within the extension range. */
  number: number;
  /**
   * The fully-qualified name of the extension field. There must be a leading
   * dot in front of the full name.
   */
  fullName: string;
  /**
   * The fully-qualified type name of the extension field. Unlike
   * Metadata.type, Declaration.type must have a leading dot for messages
   * and enums.
   */
  type: string;
  /**
   * If true, indicates that the number is reserved in the extension range,
   * and any extension field with the number will fail to compile. Set this
   * when a declared extension field is deleted.
   */
  reserved: boolean;
  /**
   * If true, indicates that the extension must be defined as repeated.
   * Otherwise the extension must be defined as optional.
   */
  repeated: boolean;
}
/** Describes a field within a message. */
export interface FieldDescriptorProto {
  name: string;
  number: number;
  label: FieldDescriptorProto_Label;
  /**
   * If type_name is set, this need not be set.  If both this and type_name
   * are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP.
   */
  type: FieldDescriptorProto_Type;
  /**
   * For message and enum types, this is the name of the type.  If the name
   * starts with a '.', it is fully-qualified.  Otherwise, C++-like scoping
   * rules are used to find the type (i.e. first the nested types within this
   * message are searched, then within the parent, on up to the root
   * namespace).
   */
  typeName: string;
  /**
   * For extensions, this is the name of the type being extended.  It is
   * resolved in the same manner as type_name.
   */
  extendee: string;
  /**
   * For numeric types, contains the original text representation of the value.
   * For booleans, "true" or "false".
   * For strings, contains the default text contents (not escaped in any way).
   * For bytes, contains the C escaped value.  All bytes >= 128 are escaped.
   */
  defaultValue: string;
  /**
   * If set, gives the index of a oneof in the containing type's oneof_decl
   * list.  This field is a member of that oneof.
   */
  oneofIndex: number;
  /**
   * JSON name of this field. The value is set by protocol compiler. If the
   * user has set a "json_name" option on this field, that option's value
   * will be used. Otherwise, it's deduced from the field's name by converting
   * it to camelCase.
   */
  jsonName: string;
  options?: FieldOptions;
  /**
   * If true, this is a proto3 "optional". When a proto3 field is optional, it
   * tracks presence regardless of field type.
   *
   * When proto3_optional is true, this field must belong to a oneof to signal
   * to old proto3 clients that presence is tracked for this field. This oneof
   * is known as a "synthetic" oneof, and this field must be its sole member
   * (each proto3 optional field gets its own synthetic oneof). Synthetic oneofs
   * exist in the descriptor only, and do not generate any API. Synthetic oneofs
   * must be ordered after all "real" oneofs.
   *
   * For message fields, proto3_optional doesn't create any semantic change,
   * since non-repeated message fields always track presence. However it still
   * indicates the semantic detail of whether the user wrote "optional" or not.
   * This can be useful for round-tripping the .proto file. For consistency we
   * give message fields a synthetic oneof also, even though it is not required
   * to track presence. This is especially important because the parser can't
   * tell if a field is a message or an enum, so it must always create a
   * synthetic oneof.
   *
   * Proto2 optional fields do not set this flag, because they already indicate
   * optional with `LABEL_OPTIONAL`.
   */
  proto3Optional: boolean;
}
/** Describes a oneof. */
export interface OneofDescriptorProto {
  name: string;
  options?: OneofOptions;
}
/** Describes an enum type. */
export interface EnumDescriptorProto {
  name: string;
  value: EnumValueDescriptorProto[];
  options?: EnumOptions;
  /**
   * Range of reserved numeric values. Reserved numeric values may not be used
   * by enum values in the same enum declaration. Reserved ranges may not
   * overlap.
   */
  reservedRange: EnumDescriptorProto_EnumReservedRange[];
  /**
   * Reserved enum value names, which may not be reused. A given name may only
   * be reserved once.
   */
  reservedName: string[];
}
/**
 * Range of reserved numeric values. Reserved values may not be used by
 * entries in the same enum. Reserved ranges may not overlap.
 *
 * Note that this is distinct from DescriptorProto.ReservedRange in that it
 * is inclusive such that it can appropriately represent the entire int32
 * domain.
 */
export interface EnumDescriptorProto_EnumReservedRange {
  /** Inclusive. */
  start: number;
  /** Inclusive. */
  end: number;
}
/** Describes a value within an enum. */
export interface EnumValueDescriptorProto {
  name: string;
  number: number;
  options?: EnumValueOptions;
}
/** Describes a service. */
export interface ServiceDescriptorProto {
  name: string;
  method: MethodDescriptorProto[];
  options?: ServiceOptions;
}
/** Describes a method of a service. */
export interface MethodDescriptorProto {
  name: string;
  /**
   * Input and output type names.  These are resolved in the same way as
   * FieldDescriptorProto.type_name, but must refer to a message type.
   */
  inputType: string;
  outputType: string;
  options?: MethodOptions;
  /** Identifies if client streams multiple client messages */
  clientStreaming: boolean;
  /** Identifies if server streams multiple server messages */
  serverStreaming: boolean;
}
export interface FileOptions {
  /**
   * Sets the Java package where classes generated from this .proto will be
   * placed.  By default, the proto package is used, but this is often
   * inappropriate because proto packages do not normally start with backwards
   * domain names.
   */
  javaPackage: string;
  /**
   * Controls the name of the wrapper Java class generated for the .proto file.
   * That class will always contain the .proto file's getDescriptor() method as
   * well as any top-level extensions defined in the .proto file.
   * If java_multiple_files is disabled, then all the other classes from the
   * .proto file will be nested inside the single wrapper outer class.
   */
  javaOuterClassname: string;
  /**
   * If enabled, then the Java code generator will generate a separate .java
   * file for each top-level message, enum, and service defined in the .proto
   * file.  Thus, these types will *not* be nested inside the wrapper class
   * named by java_outer_classname.  However, the wrapper class will still be
   * generated to contain the file's getDescriptor() method as well as any
   * top-level extensions defined in the file.
   */
  javaMultipleFiles: boolean;
  /** This option does nothing. */
  /** @deprecated */
  javaGenerateEqualsAndHash: boolean;
  /**
   * A proto2 file can set this to true to opt in to UTF-8 checking for Java,
   * which will throw an exception if invalid UTF-8 is parsed from the wire or
   * assigned to a string field.
   *
   * TODO: clarify exactly what kinds of field types this option
   * applies to, and update these docs accordingly.
   *
   * Proto3 files already perform these checks. Setting the option explicitly to
   * false has no effect: it cannot be used to opt proto3 files out of UTF-8
   * checks.
   */
  javaStringCheckUtf8: boolean;
  optimizeFor: FileOptions_OptimizeMode;
  /**
   * Sets the Go package where structs generated from this .proto will be
   * placed. If omitted, the Go package will be derived from the following:
   *   - The basename of the package import path, if provided.
   *   - Otherwise, the package statement in the .proto file, if present.
   *   - Otherwise, the basename of the .proto file, without extension.
   */
  goPackage: string;
  /**
   * Should generic services be generated in each language?  "Generic" services
   * are not specific to any particular RPC system.  They are generated by the
   * main code generators in each language (without additional plugins).
   * Generic services were the only kind of service generation supported by
   * early versions of google.protobuf.
   *
   * Generic services are now considered deprecated in favor of using plugins
   * that generate code specific to your particular RPC system.  Therefore,
   * these default to false.  Old code which depends on generic services should
   * explicitly set them to true.
   */
  ccGenericServices: boolean;
  javaGenericServices: boolean;
  pyGenericServices: boolean;
  /**
   * Is this file deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for everything in the file, or it will be completely ignored; in the very
   * least, this is a formalization for deprecating files.
   */
  deprecated: boolean;
  /**
   * Enables the use of arenas for the proto messages in this file. This applies
   * only to generated classes for C++.
   */
  ccEnableArenas: boolean;
  /**
   * Sets the objective c class prefix which is prepended to all objective c
   * generated classes from this .proto. There is no default.
   */
  objcClassPrefix: string;
  /** Namespace for generated classes; defaults to the package. */
  csharpNamespace: string;
  /**
   * By default Swift generators will take the proto package and CamelCase it
   * replacing '.' with underscore and use that to prefix the types/symbols
   * defined. When this options is provided, they will use this value instead
   * to prefix the types/symbols defined.
   */
  swiftPrefix: string;
  /**
   * Sets the php class prefix which is prepended to all php generated classes
   * from this .proto. Default is empty.
   */
  phpClassPrefix: string;
  /**
   * Use this option to change the namespace of php generated classes. Default
   * is empty. When this option is empty, the package name will be used for
   * determining the namespace.
   */
  phpNamespace: string;
  /**
   * Use this option to change the namespace of php generated metadata classes.
   * Default is empty. When this option is empty, the proto file name will be
   * used for determining the namespace.
   */
  phpMetadataNamespace: string;
  /**
   * Use this option to change the package of ruby generated classes. Default
   * is empty. When this option is not set, the package name will be used for
   * determining the ruby package.
   */
  rubyPackage: string;
  /**
   * Any features defined in the specific edition.
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  features?: FeatureSet;
  /**
   * The parser stores options it doesn't recognize here.
   * See the documentation for the "Options" section above.
   */
  uninterpretedOption: UninterpretedOption[];
}
export interface MessageOptions {
  /**
   * Set true to use the old proto1 MessageSet wire format for extensions.
   * This is provided for backwards-compatibility with the MessageSet wire
   * format.  You should not use this for any other reason:  It's less
   * efficient, has fewer features, and is more complicated.
   *
   * The message must be defined exactly as follows:
   *   message Foo {
   *     option message_set_wire_format = true;
   *     extensions 4 to max;
   *   }
   * Note that the message cannot have any defined fields; MessageSets only
   * have extensions.
   *
   * All extensions of your type must be singular messages; e.g. they cannot
   * be int32s, enums, or repeated messages.
   *
   * Because this is an option, the above two restrictions are not enforced by
   * the protocol compiler.
   */
  messageSetWireFormat: boolean;
  /**
   * Disables the generation of the standard "descriptor()" accessor, which can
   * conflict with a field of the same name.  This is meant to make migration
   * from proto1 easier; new code should avoid fields named "descriptor".
   */
  noStandardDescriptorAccessor: boolean;
  /**
   * Is this message deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the message, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating messages.
   */
  deprecated: boolean;
  /**
   * Whether the message is an automatically generated map entry type for the
   * maps field.
   *
   * For maps fields:
   *     map<KeyType, ValueType> map_field = 1;
   * The parsed descriptor looks like:
   *     message MapFieldEntry {
   *         option map_entry = true;
   *         optional KeyType key = 1;
   *         optional ValueType value = 2;
   *     }
   *     repeated MapFieldEntry map_field = 1;
   *
   * Implementations may choose not to generate the map_entry=true message, but
   * use a native map in the target language to hold the keys and values.
   * The reflection APIs in such implementations still need to work as
   * if the field is a repeated message field.
   *
   * NOTE: Do not set the option in .proto files. Always use the maps syntax
   * instead. The option should only be implicitly set by the proto compiler
   * parser.
   */
  mapEntry: boolean;
  /**
   * Enable the legacy handling of JSON field name conflicts.  This lowercases
   * and strips underscored from the fields before comparison in proto3 only.
   * The new behavior takes `json_name` into account and applies to proto2 as
   * well.
   *
   * This should only be used as a temporary measure against broken builds due
   * to the change in behavior for JSON field name conflicts.
   *
   * TODO This is legacy behavior we plan to remove once downstream
   * teams have had time to migrate.
   */
  /** @deprecated */
  deprecatedLegacyJsonFieldConflicts: boolean;
  /**
   * Any features defined in the specific edition.
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  features?: FeatureSet;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}
export interface FieldOptions {
  /**
   * NOTE: ctype is deprecated. Use `features.(pb.cpp).string_type` instead.
   * The ctype option instructs the C++ code generator to use a different
   * representation of the field than it normally would.  See the specific
   * options below.  This option is only implemented to support use of
   * [ctype=CORD] and [ctype=STRING] (the default) on non-repeated fields of
   * type "bytes" in the open source release.
   * TODO: make ctype actually deprecated.
   */
  ctype: FieldOptions_CType;
  /**
   * The packed option can be enabled for repeated primitive fields to enable
   * a more efficient representation on the wire. Rather than repeatedly
   * writing the tag and type for each element, the entire array is encoded as
   * a single length-delimited blob. In proto3, only explicit setting it to
   * false will avoid using packed encoding.  This option is prohibited in
   * Editions, but the `repeated_field_encoding` feature can be used to control
   * the behavior.
   */
  packed: boolean;
  /**
   * The jstype option determines the JavaScript type used for values of the
   * field.  The option is permitted only for 64 bit integral and fixed types
   * (int64, uint64, sint64, fixed64, sfixed64).  A field with jstype JS_STRING
   * is represented as JavaScript string, which avoids loss of precision that
   * can happen when a large value is converted to a floating point JavaScript.
   * Specifying JS_NUMBER for the jstype causes the generated JavaScript code to
   * use the JavaScript "number" type.  The behavior of the default option
   * JS_NORMAL is implementation dependent.
   *
   * This option is an enum to permit additional types to be added, e.g.
   * goog.math.Integer.
   */
  jstype: FieldOptions_JSType;
  /**
   * Should this field be parsed lazily?  Lazy applies only to message-type
   * fields.  It means that when the outer message is initially parsed, the
   * inner message's contents will not be parsed but instead stored in encoded
   * form.  The inner message will actually be parsed when it is first accessed.
   *
   * This is only a hint.  Implementations are free to choose whether to use
   * eager or lazy parsing regardless of the value of this option.  However,
   * setting this option true suggests that the protocol author believes that
   * using lazy parsing on this field is worth the additional bookkeeping
   * overhead typically needed to implement it.
   *
   * This option does not affect the public interface of any generated code;
   * all method signatures remain the same.  Furthermore, thread-safety of the
   * interface is not affected by this option; const methods remain safe to
   * call from multiple threads concurrently, while non-const methods continue
   * to require exclusive access.
   *
   * Note that lazy message fields are still eagerly verified to check
   * ill-formed wireformat or missing required fields. Calling IsInitialized()
   * on the outer message would fail if the inner message has missing required
   * fields. Failed verification would result in parsing failure (except when
   * uninitialized messages are acceptable).
   */
  lazy: boolean;
  /**
   * unverified_lazy does no correctness checks on the byte stream. This should
   * only be used where lazy with verification is prohibitive for performance
   * reasons.
   */
  unverifiedLazy: boolean;
  /**
   * Is this field deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for accessors, or it will be completely ignored; in the very least, this
   * is a formalization for deprecating fields.
   */
  deprecated: boolean;
  /** For Google-internal migration only. Do not use. */
  weak: boolean;
  /**
   * Indicate that the field value should not be printed out when using debug
   * formats, e.g. when the field contains sensitive credentials.
   */
  debugRedact: boolean;
  retention: FieldOptions_OptionRetention;
  targets: FieldOptions_OptionTargetType[];
  editionDefaults: FieldOptions_EditionDefault[];
  /**
   * Any features defined in the specific edition.
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  features?: FeatureSet;
  featureSupport?: FieldOptions_FeatureSupport;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}
export interface FieldOptions_EditionDefault {
  edition: Edition;
  /** Textproto value. */
  value: string;
}
/** Information about the support window of a feature. */
export interface FieldOptions_FeatureSupport {
  /**
   * The edition that this feature was first available in.  In editions
   * earlier than this one, the default assigned to EDITION_LEGACY will be
   * used, and proto files will not be able to override it.
   */
  editionIntroduced: Edition;
  /**
   * The edition this feature becomes deprecated in.  Using this after this
   * edition may trigger warnings.
   */
  editionDeprecated: Edition;
  /**
   * The deprecation warning text if this feature is used after the edition it
   * was marked deprecated in.
   */
  deprecationWarning: string;
  /**
   * The edition this feature is no longer available in.  In editions after
   * this one, the last default assigned will be used, and proto files will
   * not be able to override it.
   */
  editionRemoved: Edition;
}
export interface OneofOptions {
  /**
   * Any features defined in the specific edition.
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  features?: FeatureSet;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}
export interface EnumOptions {
  /**
   * Set this option to true to allow mapping different tag names to the same
   * value.
   */
  allowAlias: boolean;
  /**
   * Is this enum deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the enum, or it will be completely ignored; in the very least, this
   * is a formalization for deprecating enums.
   */
  deprecated: boolean;
  /**
   * Enable the legacy handling of JSON field name conflicts.  This lowercases
   * and strips underscored from the fields before comparison in proto3 only.
   * The new behavior takes `json_name` into account and applies to proto2 as
   * well.
   * TODO Remove this legacy behavior once downstream teams have
   * had time to migrate.
   */
  /** @deprecated */
  deprecatedLegacyJsonFieldConflicts: boolean;
  /**
   * Any features defined in the specific edition.
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  features?: FeatureSet;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}
export interface EnumValueOptions {
  /**
   * Is this enum value deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the enum value, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating enum values.
   */
  deprecated: boolean;
  /**
   * Any features defined in the specific edition.
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  features?: FeatureSet;
  /**
   * Indicate that fields annotated with this enum value should not be printed
   * out when using debug formats, e.g. when the field contains sensitive
   * credentials.
   */
  debugRedact: boolean;
  /** Information about the support window of a feature value. */
  featureSupport?: FieldOptions_FeatureSupport;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}
export interface ServiceOptions {
  /**
   * Any features defined in the specific edition.
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  features?: FeatureSet;
  /**
   * Is this service deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the service, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating services.
   */
  deprecated: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}
export interface MethodOptions {
  /**
   * Is this method deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the method, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating methods.
   */
  deprecated: boolean;
  idempotencyLevel: MethodOptions_IdempotencyLevel;
  /**
   * Any features defined in the specific edition.
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  features?: FeatureSet;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}
/**
 * A message representing a option the parser does not recognize. This only
 * appears in options protos created by the compiler::Parser class.
 * DescriptorPool resolves these when building Descriptor objects. Therefore,
 * options protos in descriptor objects (e.g. returned by Descriptor::options(),
 * or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
 * in them.
 */
export interface UninterpretedOption {
  name: UninterpretedOption_NamePart[];
  /**
   * The value of the uninterpreted option, in whatever type the tokenizer
   * identified it as during parsing. Exactly one of these should be set.
   */
  identifierValue: string;
  positiveIntValue: bigint;
  negativeIntValue: bigint;
  doubleValue: number;
  stringValue: Uint8Array;
  aggregateValue: string;
}
/**
 * The name of the uninterpreted option.  Each string represents a segment in
 * a dot-separated name.  is_extension is true iff a segment represents an
 * extension (denoted with parentheses in options specs in .proto files).
 * E.g.,{ ["foo", false], ["bar.baz", true], ["moo", false] } represents
 * "foo.(bar.baz).moo".
 */
export interface UninterpretedOption_NamePart {
  namePart: string;
  isExtension: boolean;
}
/**
 * TODO Enums in C++ gencode (and potentially other languages) are
 * not well scoped.  This means that each of the feature enums below can clash
 * with each other.  The short names we've chosen maximize call-site
 * readability, but leave us very open to this scenario.  A future feature will
 * be designed and implemented to handle this, hopefully before we ever hit a
 * conflict here.
 */
export interface FeatureSet {
  fieldPresence: FeatureSet_FieldPresence;
  enumType: FeatureSet_EnumType;
  repeatedFieldEncoding: FeatureSet_RepeatedFieldEncoding;
  utf8Validation: FeatureSet_Utf8Validation;
  messageEncoding: FeatureSet_MessageEncoding;
  jsonFormat: FeatureSet_JsonFormat;
  enforceNamingStyle: FeatureSet_EnforceNamingStyle;
}
/**
 * A compiled specification for the defaults of a set of features.  These
 * messages are generated from FeatureSet extensions and can be used to seed
 * feature resolution. The resolution with this object becomes a simple search
 * for the closest matching edition, followed by proto merges.
 */
export interface FeatureSetDefaults {
  defaults: FeatureSetDefaults_FeatureSetEditionDefault[];
  /**
   * The minimum supported edition (inclusive) when this was constructed.
   * Editions before this will not have defaults.
   */
  minimumEdition: Edition;
  /**
   * The maximum known edition (inclusive) when this was constructed. Editions
   * after this will not have reliable defaults.
   */
  maximumEdition: Edition;
}
/**
 * A map from every known edition with a unique set of defaults to its
 * defaults. Not all editions may be contained here.  For a given edition,
 * the defaults at the closest matching edition ordered at or before it should
 * be used.  This field must be in strict ascending order by edition.
 */
export interface FeatureSetDefaults_FeatureSetEditionDefault {
  edition: Edition;
  /** Defaults of features that can be overridden in this edition. */
  overridableFeatures?: FeatureSet;
  /** Defaults of features that can't be overridden in this edition. */
  fixedFeatures?: FeatureSet;
}
/**
 * Encapsulates information about the original source file from which a
 * FileDescriptorProto was generated.
 */
export interface SourceCodeInfo {
  /**
   * A Location identifies a piece of source code in a .proto file which
   * corresponds to a particular definition.  This information is intended
   * to be useful to IDEs, code indexers, documentation generators, and similar
   * tools.
   *
   * For example, say we have a file like:
   *   message Foo {
   *     optional string foo = 1;
   *   }
   * Let's look at just the field definition:
   *   optional string foo = 1;
   *   ^       ^^     ^^  ^  ^^^
   *   a       bc     de  f  ghi
   * We have the following locations:
   *   span   path               represents
   *   [a,i)  [ 4, 0, 2, 0 ]     The whole field definition.
   *   [a,b)  [ 4, 0, 2, 0, 4 ]  The label (optional).
   *   [c,d)  [ 4, 0, 2, 0, 5 ]  The type (string).
   *   [e,f)  [ 4, 0, 2, 0, 1 ]  The name (foo).
   *   [g,h)  [ 4, 0, 2, 0, 3 ]  The number (1).
   *
   * Notes:
   * - A location may refer to a repeated field itself (i.e. not to any
   *   particular index within it).  This is used whenever a set of elements are
   *   logically enclosed in a single code segment.  For example, an entire
   *   extend block (possibly containing multiple extension definitions) will
   *   have an outer location whose path refers to the "extensions" repeated
   *   field without an index.
   * - Multiple locations may have the same path.  This happens when a single
   *   logical declaration is spread out across multiple places.  The most
   *   obvious example is the "extend" block again -- there may be multiple
   *   extend blocks in the same scope, each of which will have the same path.
   * - A location's span is not always a subset of its parent's span.  For
   *   example, the "extendee" of an extension declaration appears at the
   *   beginning of the "extend" block and is shared by all extensions within
   *   the block.
   * - Just because a location's span is a subset of some other location's span
   *   does not mean that it is a descendant.  For example, a "group" defines
   *   both a type and a field in a single declaration.  Thus, the locations
   *   corresponding to the type and field and their components will overlap.
   * - Code which tries to interpret locations should probably be designed to
   *   ignore those that it doesn't understand, as more types of locations could
   *   be recorded in the future.
   */
  location: SourceCodeInfo_Location[];
}
export interface SourceCodeInfo_Location {
  /**
   * Identifies which part of the FileDescriptorProto was defined at this
   * location.
   *
   * Each element is a field number or an index.  They form a path from
   * the root FileDescriptorProto to the place where the definition appears.
   * For example, this path:
   *   [ 4, 3, 2, 7, 1 ]
   * refers to:
   *   file.message_type(3)  // 4, 3
   *       .field(7)         // 2, 7
   *       .name()           // 1
   * This is because FileDescriptorProto.message_type has field number 4:
   *   repeated DescriptorProto message_type = 4;
   * and DescriptorProto.field has field number 2:
   *   repeated FieldDescriptorProto field = 2;
   * and FieldDescriptorProto.name has field number 1:
   *   optional string name = 1;
   *
   * Thus, the above path gives the location of a field name.  If we removed
   * the last element:
   *   [ 4, 3, 2, 7 ]
   * this path refers to the whole field declaration (from the beginning
   * of the label to the terminating semicolon).
   */
  path: number[];
  /**
   * Always has exactly three or four elements: start line, start column,
   * end line (optional, otherwise assumed same as start line), end column.
   * These are packed into a single field for efficiency.  Note that line
   * and column numbers are zero-based -- typically you will want to add
   * 1 to each before displaying to a user.
   */
  span: number[];
  /**
   * If this SourceCodeInfo represents a complete declaration, these are any
   * comments appearing before and after the declaration which appear to be
   * attached to the declaration.
   *
   * A series of line comments appearing on consecutive lines, with no other
   * tokens appearing on those lines, will be treated as a single comment.
   *
   * leading_detached_comments will keep paragraphs of comments that appear
   * before (but not connected to) the current element. Each paragraph,
   * separated by empty lines, will be one comment element in the repeated
   * field.
   *
   * Only the comment content is provided; comment markers (e.g. //) are
   * stripped out.  For block comments, leading whitespace and an asterisk
   * will be stripped from the beginning of each line other than the first.
   * Newlines are included in the output.
   *
   * Examples:
   *
   *   optional int32 foo = 1;  // Comment attached to foo.
   *   // Comment attached to bar.
   *   optional int32 bar = 2;
   *
   *   optional string baz = 3;
   *   // Comment attached to baz.
   *   // Another line attached to baz.
   *
   *   // Comment attached to moo.
   *   //
   *   // Another line attached to moo.
   *   optional double moo = 4;
   *
   *   // Detached comment for corge. This is not leading or trailing comments
   *   // to moo or corge because there are blank lines separating it from
   *   // both.
   *
   *   // Detached comment for corge paragraph 2.
   *
   *   optional string corge = 5;
   *   /* Block comment attached
   *    * to corge.  Leading asterisks
   *    * will be removed. *\/
   *   /* Block comment attached to
   *    * grault. *\/
   *   optional int32 grault = 6;
   *
   *   // ignored detached comments.
   */
  leadingComments: string;
  trailingComments: string;
  leadingDetachedComments: string[];
}
/**
 * Describes the relationship between generated code and its original source
 * file. A GeneratedCodeInfo message is associated with only one generated
 * source file, but may contain references to different source .proto files.
 */
export interface GeneratedCodeInfo {
  /**
   * An Annotation connects some span of text in generated code to an element
   * of its generating .proto file.
   */
  annotation: GeneratedCodeInfo_Annotation[];
}
export interface GeneratedCodeInfo_Annotation {
  /**
   * Identifies the element in the original source .proto file. This field
   * is formatted the same as SourceCodeInfo.Location.path.
   */
  path: number[];
  /** Identifies the filesystem path to the original source .proto. */
  sourceFile: string;
  /**
   * Identifies the starting offset in bytes in the generated code
   * that relates to the identified object.
   */
  begin: number;
  /**
   * Identifies the ending offset in bytes in the generated code that
   * relates to the identified object. The end offset should be one past
   * the last relevant byte (so the length of the text = end - begin).
   */
  end: number;
  semantic: GeneratedCodeInfo_Annotation_Semantic;
}
function createBaseFileDescriptorSet(): FileDescriptorSet {
  return {
    file: [],
  };
}
export const FileDescriptorSet = {
  typeUrl: "/google.protobuf.FileDescriptorSet",
  encode(message: FileDescriptorSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.file) {
      FileDescriptorProto.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FileDescriptorSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.file.push(FileDescriptorProto.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FileDescriptorSet {
    const obj = createBaseFileDescriptorSet();
    if (Array.isArray(object?.file)) obj.file = object.file.map((e: any) => FileDescriptorProto.fromJSON(e));
    return obj;
  },
  toJSON(message: FileDescriptorSet): JsonSafe<FileDescriptorSet> {
    const obj: any = {};
    if (message.file) {
      obj.file = message.file.map((e) => (e ? FileDescriptorProto.toJSON(e) : undefined));
    } else {
      obj.file = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FileDescriptorSet>, I>>(object: I): FileDescriptorSet {
    const message = createBaseFileDescriptorSet();
    message.file = object.file?.map((e) => FileDescriptorProto.fromPartial(e)) || [];
    return message;
  },
};
function createBaseFileDescriptorProto(): FileDescriptorProto {
  return {
    name: "",
    package: "",
    dependency: [],
    publicDependency: [],
    weakDependency: [],
    messageType: [],
    enumType: [],
    service: [],
    extension: [],
    options: undefined,
    sourceCodeInfo: undefined,
    syntax: "",
    edition: 1,
  };
}
export const FileDescriptorProto = {
  typeUrl: "/google.protobuf.FileDescriptorProto",
  encode(message: FileDescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.package !== "") {
      writer.uint32(18).string(message.package);
    }
    for (const v of message.dependency) {
      writer.uint32(26).string(v!);
    }
    writer.uint32(82).fork();
    for (const v of message.publicDependency) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(90).fork();
    for (const v of message.weakDependency) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.messageType) {
      DescriptorProto.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.enumType) {
      EnumDescriptorProto.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.service) {
      ServiceDescriptorProto.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.extension) {
      FieldDescriptorProto.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.options !== undefined) {
      FileOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
    }
    if (message.sourceCodeInfo !== undefined) {
      SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(74).fork()).ldelim();
    }
    if (message.syntax !== "") {
      writer.uint32(98).string(message.syntax);
    }
    if (message.edition !== 1) {
      writer.uint32(112).int32(message.edition);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FileDescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.package = reader.string();
          break;
        case 3:
          message.dependency.push(reader.string());
          break;
        case 10:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.publicDependency.push(reader.int32());
            }
          } else {
            message.publicDependency.push(reader.int32());
          }
          break;
        case 11:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.weakDependency.push(reader.int32());
            }
          } else {
            message.weakDependency.push(reader.int32());
          }
          break;
        case 4:
          message.messageType.push(DescriptorProto.decode(reader, reader.uint32()));
          break;
        case 5:
          message.enumType.push(EnumDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 6:
          message.service.push(ServiceDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 7:
          message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 8:
          message.options = FileOptions.decode(reader, reader.uint32());
          break;
        case 9:
          message.sourceCodeInfo = SourceCodeInfo.decode(reader, reader.uint32());
          break;
        case 12:
          message.syntax = reader.string();
          break;
        case 14:
          message.edition = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FileDescriptorProto {
    const obj = createBaseFileDescriptorProto();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.package)) obj.package = String(object.package);
    if (Array.isArray(object?.dependency)) obj.dependency = object.dependency.map((e: any) => String(e));
    if (Array.isArray(object?.publicDependency))
      obj.publicDependency = object.publicDependency.map((e: any) => Number(e));
    if (Array.isArray(object?.weakDependency))
      obj.weakDependency = object.weakDependency.map((e: any) => Number(e));
    if (Array.isArray(object?.messageType))
      obj.messageType = object.messageType.map((e: any) => DescriptorProto.fromJSON(e));
    if (Array.isArray(object?.enumType))
      obj.enumType = object.enumType.map((e: any) => EnumDescriptorProto.fromJSON(e));
    if (Array.isArray(object?.service))
      obj.service = object.service.map((e: any) => ServiceDescriptorProto.fromJSON(e));
    if (Array.isArray(object?.extension))
      obj.extension = object.extension.map((e: any) => FieldDescriptorProto.fromJSON(e));
    if (isSet(object.options)) obj.options = FileOptions.fromJSON(object.options);
    if (isSet(object.sourceCodeInfo)) obj.sourceCodeInfo = SourceCodeInfo.fromJSON(object.sourceCodeInfo);
    if (isSet(object.syntax)) obj.syntax = String(object.syntax);
    if (isSet(object.edition)) obj.edition = editionFromJSON(object.edition);
    return obj;
  },
  toJSON(message: FileDescriptorProto): JsonSafe<FileDescriptorProto> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.package !== undefined && (obj.package = message.package);
    if (message.dependency) {
      obj.dependency = message.dependency.map((e) => e);
    } else {
      obj.dependency = [];
    }
    if (message.publicDependency) {
      obj.publicDependency = message.publicDependency.map((e) => Math.round(e));
    } else {
      obj.publicDependency = [];
    }
    if (message.weakDependency) {
      obj.weakDependency = message.weakDependency.map((e) => Math.round(e));
    } else {
      obj.weakDependency = [];
    }
    if (message.messageType) {
      obj.messageType = message.messageType.map((e) => (e ? DescriptorProto.toJSON(e) : undefined));
    } else {
      obj.messageType = [];
    }
    if (message.enumType) {
      obj.enumType = message.enumType.map((e) => (e ? EnumDescriptorProto.toJSON(e) : undefined));
    } else {
      obj.enumType = [];
    }
    if (message.service) {
      obj.service = message.service.map((e) => (e ? ServiceDescriptorProto.toJSON(e) : undefined));
    } else {
      obj.service = [];
    }
    if (message.extension) {
      obj.extension = message.extension.map((e) => (e ? FieldDescriptorProto.toJSON(e) : undefined));
    } else {
      obj.extension = [];
    }
    message.options !== undefined &&
      (obj.options = message.options ? FileOptions.toJSON(message.options) : undefined);
    message.sourceCodeInfo !== undefined &&
      (obj.sourceCodeInfo = message.sourceCodeInfo
        ? SourceCodeInfo.toJSON(message.sourceCodeInfo)
        : undefined);
    message.syntax !== undefined && (obj.syntax = message.syntax);
    message.edition !== undefined && (obj.edition = editionToJSON(message.edition));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FileDescriptorProto>, I>>(object: I): FileDescriptorProto {
    const message = createBaseFileDescriptorProto();
    message.name = object.name ?? "";
    message.package = object.package ?? "";
    message.dependency = object.dependency?.map((e) => e) || [];
    message.publicDependency = object.publicDependency?.map((e) => e) || [];
    message.weakDependency = object.weakDependency?.map((e) => e) || [];
    message.messageType = object.messageType?.map((e) => DescriptorProto.fromPartial(e)) || [];
    message.enumType = object.enumType?.map((e) => EnumDescriptorProto.fromPartial(e)) || [];
    message.service = object.service?.map((e) => ServiceDescriptorProto.fromPartial(e)) || [];
    message.extension = object.extension?.map((e) => FieldDescriptorProto.fromPartial(e)) || [];
    if (object.options !== undefined && object.options !== null) {
      message.options = FileOptions.fromPartial(object.options);
    }
    if (object.sourceCodeInfo !== undefined && object.sourceCodeInfo !== null) {
      message.sourceCodeInfo = SourceCodeInfo.fromPartial(object.sourceCodeInfo);
    }
    message.syntax = object.syntax ?? "";
    message.edition = object.edition ?? 1;
    return message;
  },
};
function createBaseDescriptorProto(): DescriptorProto {
  return {
    name: "",
    field: [],
    extension: [],
    nestedType: [],
    enumType: [],
    extensionRange: [],
    oneofDecl: [],
    options: undefined,
    reservedRange: [],
    reservedName: [],
  };
}
export const DescriptorProto = {
  typeUrl: "/google.protobuf.DescriptorProto",
  encode(message: DescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.field) {
      FieldDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.extension) {
      FieldDescriptorProto.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.nestedType) {
      DescriptorProto.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.enumType) {
      EnumDescriptorProto.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.extensionRange) {
      DescriptorProto_ExtensionRange.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.oneofDecl) {
      OneofDescriptorProto.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.options !== undefined) {
      MessageOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.reservedRange) {
      DescriptorProto_ReservedRange.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.reservedName) {
      writer.uint32(82).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.field.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 6:
          message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 3:
          message.nestedType.push(DescriptorProto.decode(reader, reader.uint32()));
          break;
        case 4:
          message.enumType.push(EnumDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 5:
          message.extensionRange.push(DescriptorProto_ExtensionRange.decode(reader, reader.uint32()));
          break;
        case 8:
          message.oneofDecl.push(OneofDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 7:
          message.options = MessageOptions.decode(reader, reader.uint32());
          break;
        case 9:
          message.reservedRange.push(DescriptorProto_ReservedRange.decode(reader, reader.uint32()));
          break;
        case 10:
          message.reservedName.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DescriptorProto {
    const obj = createBaseDescriptorProto();
    if (isSet(object.name)) obj.name = String(object.name);
    if (Array.isArray(object?.field))
      obj.field = object.field.map((e: any) => FieldDescriptorProto.fromJSON(e));
    if (Array.isArray(object?.extension))
      obj.extension = object.extension.map((e: any) => FieldDescriptorProto.fromJSON(e));
    if (Array.isArray(object?.nestedType))
      obj.nestedType = object.nestedType.map((e: any) => DescriptorProto.fromJSON(e));
    if (Array.isArray(object?.enumType))
      obj.enumType = object.enumType.map((e: any) => EnumDescriptorProto.fromJSON(e));
    if (Array.isArray(object?.extensionRange))
      obj.extensionRange = object.extensionRange.map((e: any) => DescriptorProto_ExtensionRange.fromJSON(e));
    if (Array.isArray(object?.oneofDecl))
      obj.oneofDecl = object.oneofDecl.map((e: any) => OneofDescriptorProto.fromJSON(e));
    if (isSet(object.options)) obj.options = MessageOptions.fromJSON(object.options);
    if (Array.isArray(object?.reservedRange))
      obj.reservedRange = object.reservedRange.map((e: any) => DescriptorProto_ReservedRange.fromJSON(e));
    if (Array.isArray(object?.reservedName))
      obj.reservedName = object.reservedName.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: DescriptorProto): JsonSafe<DescriptorProto> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.field) {
      obj.field = message.field.map((e) => (e ? FieldDescriptorProto.toJSON(e) : undefined));
    } else {
      obj.field = [];
    }
    if (message.extension) {
      obj.extension = message.extension.map((e) => (e ? FieldDescriptorProto.toJSON(e) : undefined));
    } else {
      obj.extension = [];
    }
    if (message.nestedType) {
      obj.nestedType = message.nestedType.map((e) => (e ? DescriptorProto.toJSON(e) : undefined));
    } else {
      obj.nestedType = [];
    }
    if (message.enumType) {
      obj.enumType = message.enumType.map((e) => (e ? EnumDescriptorProto.toJSON(e) : undefined));
    } else {
      obj.enumType = [];
    }
    if (message.extensionRange) {
      obj.extensionRange = message.extensionRange.map((e) =>
        e ? DescriptorProto_ExtensionRange.toJSON(e) : undefined,
      );
    } else {
      obj.extensionRange = [];
    }
    if (message.oneofDecl) {
      obj.oneofDecl = message.oneofDecl.map((e) => (e ? OneofDescriptorProto.toJSON(e) : undefined));
    } else {
      obj.oneofDecl = [];
    }
    message.options !== undefined &&
      (obj.options = message.options ? MessageOptions.toJSON(message.options) : undefined);
    if (message.reservedRange) {
      obj.reservedRange = message.reservedRange.map((e) =>
        e ? DescriptorProto_ReservedRange.toJSON(e) : undefined,
      );
    } else {
      obj.reservedRange = [];
    }
    if (message.reservedName) {
      obj.reservedName = message.reservedName.map((e) => e);
    } else {
      obj.reservedName = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DescriptorProto>, I>>(object: I): DescriptorProto {
    const message = createBaseDescriptorProto();
    message.name = object.name ?? "";
    message.field = object.field?.map((e) => FieldDescriptorProto.fromPartial(e)) || [];
    message.extension = object.extension?.map((e) => FieldDescriptorProto.fromPartial(e)) || [];
    message.nestedType = object.nestedType?.map((e) => DescriptorProto.fromPartial(e)) || [];
    message.enumType = object.enumType?.map((e) => EnumDescriptorProto.fromPartial(e)) || [];
    message.extensionRange =
      object.extensionRange?.map((e) => DescriptorProto_ExtensionRange.fromPartial(e)) || [];
    message.oneofDecl = object.oneofDecl?.map((e) => OneofDescriptorProto.fromPartial(e)) || [];
    if (object.options !== undefined && object.options !== null) {
      message.options = MessageOptions.fromPartial(object.options);
    }
    message.reservedRange =
      object.reservedRange?.map((e) => DescriptorProto_ReservedRange.fromPartial(e)) || [];
    message.reservedName = object.reservedName?.map((e) => e) || [];
    return message;
  },
};
function createBaseDescriptorProto_ExtensionRange(): DescriptorProto_ExtensionRange {
  return {
    start: 0,
    end: 0,
    options: undefined,
  };
}
export const DescriptorProto_ExtensionRange = {
  typeUrl: "/google.protobuf.ExtensionRange",
  encode(
    message: DescriptorProto_ExtensionRange,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    if (message.options !== undefined) {
      ExtensionRangeOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DescriptorProto_ExtensionRange {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto_ExtensionRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
          break;
        case 3:
          message.options = ExtensionRangeOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DescriptorProto_ExtensionRange {
    const obj = createBaseDescriptorProto_ExtensionRange();
    if (isSet(object.start)) obj.start = Number(object.start);
    if (isSet(object.end)) obj.end = Number(object.end);
    if (isSet(object.options)) obj.options = ExtensionRangeOptions.fromJSON(object.options);
    return obj;
  },
  toJSON(message: DescriptorProto_ExtensionRange): JsonSafe<DescriptorProto_ExtensionRange> {
    const obj: any = {};
    message.start !== undefined && (obj.start = Math.round(message.start));
    message.end !== undefined && (obj.end = Math.round(message.end));
    message.options !== undefined &&
      (obj.options = message.options ? ExtensionRangeOptions.toJSON(message.options) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DescriptorProto_ExtensionRange>, I>>(
    object: I,
  ): DescriptorProto_ExtensionRange {
    const message = createBaseDescriptorProto_ExtensionRange();
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    if (object.options !== undefined && object.options !== null) {
      message.options = ExtensionRangeOptions.fromPartial(object.options);
    }
    return message;
  },
};
function createBaseDescriptorProto_ReservedRange(): DescriptorProto_ReservedRange {
  return {
    start: 0,
    end: 0,
  };
}
export const DescriptorProto_ReservedRange = {
  typeUrl: "/google.protobuf.ReservedRange",
  encode(message: DescriptorProto_ReservedRange, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DescriptorProto_ReservedRange {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto_ReservedRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DescriptorProto_ReservedRange {
    const obj = createBaseDescriptorProto_ReservedRange();
    if (isSet(object.start)) obj.start = Number(object.start);
    if (isSet(object.end)) obj.end = Number(object.end);
    return obj;
  },
  toJSON(message: DescriptorProto_ReservedRange): JsonSafe<DescriptorProto_ReservedRange> {
    const obj: any = {};
    message.start !== undefined && (obj.start = Math.round(message.start));
    message.end !== undefined && (obj.end = Math.round(message.end));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DescriptorProto_ReservedRange>, I>>(
    object: I,
  ): DescriptorProto_ReservedRange {
    const message = createBaseDescriptorProto_ReservedRange();
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    return message;
  },
};
function createBaseExtensionRangeOptions(): ExtensionRangeOptions {
  return {
    uninterpretedOption: [],
    declaration: [],
    features: undefined,
    verification: 1,
  };
}
export const ExtensionRangeOptions = {
  typeUrl: "/google.protobuf.ExtensionRangeOptions",
  encode(message: ExtensionRangeOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    for (const v of message.declaration) {
      ExtensionRangeOptions_Declaration.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(402).fork()).ldelim();
    }
    if (message.verification !== 1) {
      writer.uint32(24).int32(message.verification);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExtensionRangeOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionRangeOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        case 2:
          message.declaration.push(ExtensionRangeOptions_Declaration.decode(reader, reader.uint32()));
          break;
        case 50:
          message.features = FeatureSet.decode(reader, reader.uint32());
          break;
        case 3:
          message.verification = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExtensionRangeOptions {
    const obj = createBaseExtensionRangeOptions();
    if (Array.isArray(object?.uninterpretedOption))
      obj.uninterpretedOption = object.uninterpretedOption.map((e: any) => UninterpretedOption.fromJSON(e));
    if (Array.isArray(object?.declaration))
      obj.declaration = object.declaration.map((e: any) => ExtensionRangeOptions_Declaration.fromJSON(e));
    if (isSet(object.features)) obj.features = FeatureSet.fromJSON(object.features);
    if (isSet(object.verification))
      obj.verification = extensionRangeOptions_VerificationStateFromJSON(object.verification);
    return obj;
  },
  toJSON(message: ExtensionRangeOptions): JsonSafe<ExtensionRangeOptions> {
    const obj: any = {};
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map((e) =>
        e ? UninterpretedOption.toJSON(e) : undefined,
      );
    } else {
      obj.uninterpretedOption = [];
    }
    if (message.declaration) {
      obj.declaration = message.declaration.map((e) =>
        e ? ExtensionRangeOptions_Declaration.toJSON(e) : undefined,
      );
    } else {
      obj.declaration = [];
    }
    message.features !== undefined &&
      (obj.features = message.features ? FeatureSet.toJSON(message.features) : undefined);
    message.verification !== undefined &&
      (obj.verification = extensionRangeOptions_VerificationStateToJSON(message.verification));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ExtensionRangeOptions>, I>>(object: I): ExtensionRangeOptions {
    const message = createBaseExtensionRangeOptions();
    message.uninterpretedOption =
      object.uninterpretedOption?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    message.declaration =
      object.declaration?.map((e) => ExtensionRangeOptions_Declaration.fromPartial(e)) || [];
    if (object.features !== undefined && object.features !== null) {
      message.features = FeatureSet.fromPartial(object.features);
    }
    message.verification = object.verification ?? 1;
    return message;
  },
};
function createBaseExtensionRangeOptions_Declaration(): ExtensionRangeOptions_Declaration {
  return {
    number: 0,
    fullName: "",
    type: "",
    reserved: false,
    repeated: false,
  };
}
export const ExtensionRangeOptions_Declaration = {
  typeUrl: "/google.protobuf.Declaration",
  encode(
    message: ExtensionRangeOptions_Declaration,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.number !== 0) {
      writer.uint32(8).int32(message.number);
    }
    if (message.fullName !== "") {
      writer.uint32(18).string(message.fullName);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    if (message.reserved === true) {
      writer.uint32(40).bool(message.reserved);
    }
    if (message.repeated === true) {
      writer.uint32(48).bool(message.repeated);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExtensionRangeOptions_Declaration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionRangeOptions_Declaration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.number = reader.int32();
          break;
        case 2:
          message.fullName = reader.string();
          break;
        case 3:
          message.type = reader.string();
          break;
        case 5:
          message.reserved = reader.bool();
          break;
        case 6:
          message.repeated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExtensionRangeOptions_Declaration {
    const obj = createBaseExtensionRangeOptions_Declaration();
    if (isSet(object.number)) obj.number = Number(object.number);
    if (isSet(object.fullName)) obj.fullName = String(object.fullName);
    if (isSet(object.type)) obj.type = String(object.type);
    if (isSet(object.reserved)) obj.reserved = Boolean(object.reserved);
    if (isSet(object.repeated)) obj.repeated = Boolean(object.repeated);
    return obj;
  },
  toJSON(message: ExtensionRangeOptions_Declaration): JsonSafe<ExtensionRangeOptions_Declaration> {
    const obj: any = {};
    message.number !== undefined && (obj.number = Math.round(message.number));
    message.fullName !== undefined && (obj.fullName = message.fullName);
    message.type !== undefined && (obj.type = message.type);
    message.reserved !== undefined && (obj.reserved = message.reserved);
    message.repeated !== undefined && (obj.repeated = message.repeated);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ExtensionRangeOptions_Declaration>, I>>(
    object: I,
  ): ExtensionRangeOptions_Declaration {
    const message = createBaseExtensionRangeOptions_Declaration();
    message.number = object.number ?? 0;
    message.fullName = object.fullName ?? "";
    message.type = object.type ?? "";
    message.reserved = object.reserved ?? false;
    message.repeated = object.repeated ?? false;
    return message;
  },
};
function createBaseFieldDescriptorProto(): FieldDescriptorProto {
  return {
    name: "",
    number: 0,
    label: 1,
    type: 1,
    typeName: "",
    extendee: "",
    defaultValue: "",
    oneofIndex: 0,
    jsonName: "",
    options: undefined,
    proto3Optional: false,
  };
}
export const FieldDescriptorProto = {
  typeUrl: "/google.protobuf.FieldDescriptorProto",
  encode(message: FieldDescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(24).int32(message.number);
    }
    if (message.label !== 1) {
      writer.uint32(32).int32(message.label);
    }
    if (message.type !== 1) {
      writer.uint32(40).int32(message.type);
    }
    if (message.typeName !== "") {
      writer.uint32(50).string(message.typeName);
    }
    if (message.extendee !== "") {
      writer.uint32(18).string(message.extendee);
    }
    if (message.defaultValue !== "") {
      writer.uint32(58).string(message.defaultValue);
    }
    if (message.oneofIndex !== 0) {
      writer.uint32(72).int32(message.oneofIndex);
    }
    if (message.jsonName !== "") {
      writer.uint32(82).string(message.jsonName);
    }
    if (message.options !== undefined) {
      FieldOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
    }
    if (message.proto3Optional === true) {
      writer.uint32(136).bool(message.proto3Optional);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FieldDescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.number = reader.int32();
          break;
        case 4:
          message.label = reader.int32() as any;
          break;
        case 5:
          message.type = reader.int32() as any;
          break;
        case 6:
          message.typeName = reader.string();
          break;
        case 2:
          message.extendee = reader.string();
          break;
        case 7:
          message.defaultValue = reader.string();
          break;
        case 9:
          message.oneofIndex = reader.int32();
          break;
        case 10:
          message.jsonName = reader.string();
          break;
        case 8:
          message.options = FieldOptions.decode(reader, reader.uint32());
          break;
        case 17:
          message.proto3Optional = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FieldDescriptorProto {
    const obj = createBaseFieldDescriptorProto();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.number)) obj.number = Number(object.number);
    if (isSet(object.label)) obj.label = fieldDescriptorProto_LabelFromJSON(object.label);
    if (isSet(object.type)) obj.type = fieldDescriptorProto_TypeFromJSON(object.type);
    if (isSet(object.typeName)) obj.typeName = String(object.typeName);
    if (isSet(object.extendee)) obj.extendee = String(object.extendee);
    if (isSet(object.defaultValue)) obj.defaultValue = String(object.defaultValue);
    if (isSet(object.oneofIndex)) obj.oneofIndex = Number(object.oneofIndex);
    if (isSet(object.jsonName)) obj.jsonName = String(object.jsonName);
    if (isSet(object.options)) obj.options = FieldOptions.fromJSON(object.options);
    if (isSet(object.proto3Optional)) obj.proto3Optional = Boolean(object.proto3Optional);
    return obj;
  },
  toJSON(message: FieldDescriptorProto): JsonSafe<FieldDescriptorProto> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.number !== undefined && (obj.number = Math.round(message.number));
    message.label !== undefined && (obj.label = fieldDescriptorProto_LabelToJSON(message.label));
    message.type !== undefined && (obj.type = fieldDescriptorProto_TypeToJSON(message.type));
    message.typeName !== undefined && (obj.typeName = message.typeName);
    message.extendee !== undefined && (obj.extendee = message.extendee);
    message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
    message.oneofIndex !== undefined && (obj.oneofIndex = Math.round(message.oneofIndex));
    message.jsonName !== undefined && (obj.jsonName = message.jsonName);
    message.options !== undefined &&
      (obj.options = message.options ? FieldOptions.toJSON(message.options) : undefined);
    message.proto3Optional !== undefined && (obj.proto3Optional = message.proto3Optional);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FieldDescriptorProto>, I>>(object: I): FieldDescriptorProto {
    const message = createBaseFieldDescriptorProto();
    message.name = object.name ?? "";
    message.number = object.number ?? 0;
    message.label = object.label ?? 1;
    message.type = object.type ?? 1;
    message.typeName = object.typeName ?? "";
    message.extendee = object.extendee ?? "";
    message.defaultValue = object.defaultValue ?? "";
    message.oneofIndex = object.oneofIndex ?? 0;
    message.jsonName = object.jsonName ?? "";
    if (object.options !== undefined && object.options !== null) {
      message.options = FieldOptions.fromPartial(object.options);
    }
    message.proto3Optional = object.proto3Optional ?? false;
    return message;
  },
};
function createBaseOneofDescriptorProto(): OneofDescriptorProto {
  return {
    name: "",
    options: undefined,
  };
}
export const OneofDescriptorProto = {
  typeUrl: "/google.protobuf.OneofDescriptorProto",
  encode(message: OneofDescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.options !== undefined) {
      OneofOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OneofDescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneofDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.options = OneofOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OneofDescriptorProto {
    const obj = createBaseOneofDescriptorProto();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.options)) obj.options = OneofOptions.fromJSON(object.options);
    return obj;
  },
  toJSON(message: OneofDescriptorProto): JsonSafe<OneofDescriptorProto> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.options !== undefined &&
      (obj.options = message.options ? OneofOptions.toJSON(message.options) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<OneofDescriptorProto>, I>>(object: I): OneofDescriptorProto {
    const message = createBaseOneofDescriptorProto();
    message.name = object.name ?? "";
    if (object.options !== undefined && object.options !== null) {
      message.options = OneofOptions.fromPartial(object.options);
    }
    return message;
  },
};
function createBaseEnumDescriptorProto(): EnumDescriptorProto {
  return {
    name: "",
    value: [],
    options: undefined,
    reservedRange: [],
    reservedName: [],
  };
}
export const EnumDescriptorProto = {
  typeUrl: "/google.protobuf.EnumDescriptorProto",
  encode(message: EnumDescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.value) {
      EnumValueDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.options !== undefined) {
      EnumOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.reservedRange) {
      EnumDescriptorProto_EnumReservedRange.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.reservedName) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnumDescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value.push(EnumValueDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 3:
          message.options = EnumOptions.decode(reader, reader.uint32());
          break;
        case 4:
          message.reservedRange.push(EnumDescriptorProto_EnumReservedRange.decode(reader, reader.uint32()));
          break;
        case 5:
          message.reservedName.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EnumDescriptorProto {
    const obj = createBaseEnumDescriptorProto();
    if (isSet(object.name)) obj.name = String(object.name);
    if (Array.isArray(object?.value))
      obj.value = object.value.map((e: any) => EnumValueDescriptorProto.fromJSON(e));
    if (isSet(object.options)) obj.options = EnumOptions.fromJSON(object.options);
    if (Array.isArray(object?.reservedRange))
      obj.reservedRange = object.reservedRange.map((e: any) =>
        EnumDescriptorProto_EnumReservedRange.fromJSON(e),
      );
    if (Array.isArray(object?.reservedName))
      obj.reservedName = object.reservedName.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: EnumDescriptorProto): JsonSafe<EnumDescriptorProto> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.value) {
      obj.value = message.value.map((e) => (e ? EnumValueDescriptorProto.toJSON(e) : undefined));
    } else {
      obj.value = [];
    }
    message.options !== undefined &&
      (obj.options = message.options ? EnumOptions.toJSON(message.options) : undefined);
    if (message.reservedRange) {
      obj.reservedRange = message.reservedRange.map((e) =>
        e ? EnumDescriptorProto_EnumReservedRange.toJSON(e) : undefined,
      );
    } else {
      obj.reservedRange = [];
    }
    if (message.reservedName) {
      obj.reservedName = message.reservedName.map((e) => e);
    } else {
      obj.reservedName = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EnumDescriptorProto>, I>>(object: I): EnumDescriptorProto {
    const message = createBaseEnumDescriptorProto();
    message.name = object.name ?? "";
    message.value = object.value?.map((e) => EnumValueDescriptorProto.fromPartial(e)) || [];
    if (object.options !== undefined && object.options !== null) {
      message.options = EnumOptions.fromPartial(object.options);
    }
    message.reservedRange =
      object.reservedRange?.map((e) => EnumDescriptorProto_EnumReservedRange.fromPartial(e)) || [];
    message.reservedName = object.reservedName?.map((e) => e) || [];
    return message;
  },
};
function createBaseEnumDescriptorProto_EnumReservedRange(): EnumDescriptorProto_EnumReservedRange {
  return {
    start: 0,
    end: 0,
  };
}
export const EnumDescriptorProto_EnumReservedRange = {
  typeUrl: "/google.protobuf.EnumReservedRange",
  encode(
    message: EnumDescriptorProto_EnumReservedRange,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnumDescriptorProto_EnumReservedRange {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumDescriptorProto_EnumReservedRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EnumDescriptorProto_EnumReservedRange {
    const obj = createBaseEnumDescriptorProto_EnumReservedRange();
    if (isSet(object.start)) obj.start = Number(object.start);
    if (isSet(object.end)) obj.end = Number(object.end);
    return obj;
  },
  toJSON(message: EnumDescriptorProto_EnumReservedRange): JsonSafe<EnumDescriptorProto_EnumReservedRange> {
    const obj: any = {};
    message.start !== undefined && (obj.start = Math.round(message.start));
    message.end !== undefined && (obj.end = Math.round(message.end));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EnumDescriptorProto_EnumReservedRange>, I>>(
    object: I,
  ): EnumDescriptorProto_EnumReservedRange {
    const message = createBaseEnumDescriptorProto_EnumReservedRange();
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    return message;
  },
};
function createBaseEnumValueDescriptorProto(): EnumValueDescriptorProto {
  return {
    name: "",
    number: 0,
    options: undefined,
  };
}
export const EnumValueDescriptorProto = {
  typeUrl: "/google.protobuf.EnumValueDescriptorProto",
  encode(message: EnumValueDescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(16).int32(message.number);
    }
    if (message.options !== undefined) {
      EnumValueOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnumValueDescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumValueDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.number = reader.int32();
          break;
        case 3:
          message.options = EnumValueOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EnumValueDescriptorProto {
    const obj = createBaseEnumValueDescriptorProto();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.number)) obj.number = Number(object.number);
    if (isSet(object.options)) obj.options = EnumValueOptions.fromJSON(object.options);
    return obj;
  },
  toJSON(message: EnumValueDescriptorProto): JsonSafe<EnumValueDescriptorProto> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.number !== undefined && (obj.number = Math.round(message.number));
    message.options !== undefined &&
      (obj.options = message.options ? EnumValueOptions.toJSON(message.options) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EnumValueDescriptorProto>, I>>(
    object: I,
  ): EnumValueDescriptorProto {
    const message = createBaseEnumValueDescriptorProto();
    message.name = object.name ?? "";
    message.number = object.number ?? 0;
    if (object.options !== undefined && object.options !== null) {
      message.options = EnumValueOptions.fromPartial(object.options);
    }
    return message;
  },
};
function createBaseServiceDescriptorProto(): ServiceDescriptorProto {
  return {
    name: "",
    method: [],
    options: undefined,
  };
}
export const ServiceDescriptorProto = {
  typeUrl: "/google.protobuf.ServiceDescriptorProto",
  encode(message: ServiceDescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.method) {
      MethodDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.options !== undefined) {
      ServiceOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceDescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.method.push(MethodDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 3:
          message.options = ServiceOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ServiceDescriptorProto {
    const obj = createBaseServiceDescriptorProto();
    if (isSet(object.name)) obj.name = String(object.name);
    if (Array.isArray(object?.method))
      obj.method = object.method.map((e: any) => MethodDescriptorProto.fromJSON(e));
    if (isSet(object.options)) obj.options = ServiceOptions.fromJSON(object.options);
    return obj;
  },
  toJSON(message: ServiceDescriptorProto): JsonSafe<ServiceDescriptorProto> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.method) {
      obj.method = message.method.map((e) => (e ? MethodDescriptorProto.toJSON(e) : undefined));
    } else {
      obj.method = [];
    }
    message.options !== undefined &&
      (obj.options = message.options ? ServiceOptions.toJSON(message.options) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ServiceDescriptorProto>, I>>(object: I): ServiceDescriptorProto {
    const message = createBaseServiceDescriptorProto();
    message.name = object.name ?? "";
    message.method = object.method?.map((e) => MethodDescriptorProto.fromPartial(e)) || [];
    if (object.options !== undefined && object.options !== null) {
      message.options = ServiceOptions.fromPartial(object.options);
    }
    return message;
  },
};
function createBaseMethodDescriptorProto(): MethodDescriptorProto {
  return {
    name: "",
    inputType: "",
    outputType: "",
    options: undefined,
    clientStreaming: false,
    serverStreaming: false,
  };
}
export const MethodDescriptorProto = {
  typeUrl: "/google.protobuf.MethodDescriptorProto",
  encode(message: MethodDescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.inputType !== "") {
      writer.uint32(18).string(message.inputType);
    }
    if (message.outputType !== "") {
      writer.uint32(26).string(message.outputType);
    }
    if (message.options !== undefined) {
      MethodOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
    }
    if (message.clientStreaming === true) {
      writer.uint32(40).bool(message.clientStreaming);
    }
    if (message.serverStreaming === true) {
      writer.uint32(48).bool(message.serverStreaming);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MethodDescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMethodDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.inputType = reader.string();
          break;
        case 3:
          message.outputType = reader.string();
          break;
        case 4:
          message.options = MethodOptions.decode(reader, reader.uint32());
          break;
        case 5:
          message.clientStreaming = reader.bool();
          break;
        case 6:
          message.serverStreaming = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MethodDescriptorProto {
    const obj = createBaseMethodDescriptorProto();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.inputType)) obj.inputType = String(object.inputType);
    if (isSet(object.outputType)) obj.outputType = String(object.outputType);
    if (isSet(object.options)) obj.options = MethodOptions.fromJSON(object.options);
    if (isSet(object.clientStreaming)) obj.clientStreaming = Boolean(object.clientStreaming);
    if (isSet(object.serverStreaming)) obj.serverStreaming = Boolean(object.serverStreaming);
    return obj;
  },
  toJSON(message: MethodDescriptorProto): JsonSafe<MethodDescriptorProto> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.inputType !== undefined && (obj.inputType = message.inputType);
    message.outputType !== undefined && (obj.outputType = message.outputType);
    message.options !== undefined &&
      (obj.options = message.options ? MethodOptions.toJSON(message.options) : undefined);
    message.clientStreaming !== undefined && (obj.clientStreaming = message.clientStreaming);
    message.serverStreaming !== undefined && (obj.serverStreaming = message.serverStreaming);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MethodDescriptorProto>, I>>(object: I): MethodDescriptorProto {
    const message = createBaseMethodDescriptorProto();
    message.name = object.name ?? "";
    message.inputType = object.inputType ?? "";
    message.outputType = object.outputType ?? "";
    if (object.options !== undefined && object.options !== null) {
      message.options = MethodOptions.fromPartial(object.options);
    }
    message.clientStreaming = object.clientStreaming ?? false;
    message.serverStreaming = object.serverStreaming ?? false;
    return message;
  },
};
function createBaseFileOptions(): FileOptions {
  return {
    javaPackage: "",
    javaOuterClassname: "",
    javaMultipleFiles: false,
    javaGenerateEqualsAndHash: false,
    javaStringCheckUtf8: false,
    optimizeFor: 1,
    goPackage: "",
    ccGenericServices: false,
    javaGenericServices: false,
    pyGenericServices: false,
    deprecated: false,
    ccEnableArenas: false,
    objcClassPrefix: "",
    csharpNamespace: "",
    swiftPrefix: "",
    phpClassPrefix: "",
    phpNamespace: "",
    phpMetadataNamespace: "",
    rubyPackage: "",
    features: undefined,
    uninterpretedOption: [],
  };
}
export const FileOptions = {
  typeUrl: "/google.protobuf.FileOptions",
  encode(message: FileOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.javaPackage !== "") {
      writer.uint32(10).string(message.javaPackage);
    }
    if (message.javaOuterClassname !== "") {
      writer.uint32(66).string(message.javaOuterClassname);
    }
    if (message.javaMultipleFiles === true) {
      writer.uint32(80).bool(message.javaMultipleFiles);
    }
    if (message.javaGenerateEqualsAndHash === true) {
      writer.uint32(160).bool(message.javaGenerateEqualsAndHash);
    }
    if (message.javaStringCheckUtf8 === true) {
      writer.uint32(216).bool(message.javaStringCheckUtf8);
    }
    if (message.optimizeFor !== 1) {
      writer.uint32(72).int32(message.optimizeFor);
    }
    if (message.goPackage !== "") {
      writer.uint32(90).string(message.goPackage);
    }
    if (message.ccGenericServices === true) {
      writer.uint32(128).bool(message.ccGenericServices);
    }
    if (message.javaGenericServices === true) {
      writer.uint32(136).bool(message.javaGenericServices);
    }
    if (message.pyGenericServices === true) {
      writer.uint32(144).bool(message.pyGenericServices);
    }
    if (message.deprecated === true) {
      writer.uint32(184).bool(message.deprecated);
    }
    if (message.ccEnableArenas === true) {
      writer.uint32(248).bool(message.ccEnableArenas);
    }
    if (message.objcClassPrefix !== "") {
      writer.uint32(290).string(message.objcClassPrefix);
    }
    if (message.csharpNamespace !== "") {
      writer.uint32(298).string(message.csharpNamespace);
    }
    if (message.swiftPrefix !== "") {
      writer.uint32(314).string(message.swiftPrefix);
    }
    if (message.phpClassPrefix !== "") {
      writer.uint32(322).string(message.phpClassPrefix);
    }
    if (message.phpNamespace !== "") {
      writer.uint32(330).string(message.phpNamespace);
    }
    if (message.phpMetadataNamespace !== "") {
      writer.uint32(354).string(message.phpMetadataNamespace);
    }
    if (message.rubyPackage !== "") {
      writer.uint32(362).string(message.rubyPackage);
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(402).fork()).ldelim();
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FileOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.javaPackage = reader.string();
          break;
        case 8:
          message.javaOuterClassname = reader.string();
          break;
        case 10:
          message.javaMultipleFiles = reader.bool();
          break;
        case 20:
          message.javaGenerateEqualsAndHash = reader.bool();
          break;
        case 27:
          message.javaStringCheckUtf8 = reader.bool();
          break;
        case 9:
          message.optimizeFor = reader.int32() as any;
          break;
        case 11:
          message.goPackage = reader.string();
          break;
        case 16:
          message.ccGenericServices = reader.bool();
          break;
        case 17:
          message.javaGenericServices = reader.bool();
          break;
        case 18:
          message.pyGenericServices = reader.bool();
          break;
        case 23:
          message.deprecated = reader.bool();
          break;
        case 31:
          message.ccEnableArenas = reader.bool();
          break;
        case 36:
          message.objcClassPrefix = reader.string();
          break;
        case 37:
          message.csharpNamespace = reader.string();
          break;
        case 39:
          message.swiftPrefix = reader.string();
          break;
        case 40:
          message.phpClassPrefix = reader.string();
          break;
        case 41:
          message.phpNamespace = reader.string();
          break;
        case 44:
          message.phpMetadataNamespace = reader.string();
          break;
        case 45:
          message.rubyPackage = reader.string();
          break;
        case 50:
          message.features = FeatureSet.decode(reader, reader.uint32());
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FileOptions {
    const obj = createBaseFileOptions();
    if (isSet(object.javaPackage)) obj.javaPackage = String(object.javaPackage);
    if (isSet(object.javaOuterClassname)) obj.javaOuterClassname = String(object.javaOuterClassname);
    if (isSet(object.javaMultipleFiles)) obj.javaMultipleFiles = Boolean(object.javaMultipleFiles);
    if (isSet(object.javaGenerateEqualsAndHash))
      obj.javaGenerateEqualsAndHash = Boolean(object.javaGenerateEqualsAndHash);
    if (isSet(object.javaStringCheckUtf8)) obj.javaStringCheckUtf8 = Boolean(object.javaStringCheckUtf8);
    if (isSet(object.optimizeFor)) obj.optimizeFor = fileOptions_OptimizeModeFromJSON(object.optimizeFor);
    if (isSet(object.goPackage)) obj.goPackage = String(object.goPackage);
    if (isSet(object.ccGenericServices)) obj.ccGenericServices = Boolean(object.ccGenericServices);
    if (isSet(object.javaGenericServices)) obj.javaGenericServices = Boolean(object.javaGenericServices);
    if (isSet(object.pyGenericServices)) obj.pyGenericServices = Boolean(object.pyGenericServices);
    if (isSet(object.deprecated)) obj.deprecated = Boolean(object.deprecated);
    if (isSet(object.ccEnableArenas)) obj.ccEnableArenas = Boolean(object.ccEnableArenas);
    if (isSet(object.objcClassPrefix)) obj.objcClassPrefix = String(object.objcClassPrefix);
    if (isSet(object.csharpNamespace)) obj.csharpNamespace = String(object.csharpNamespace);
    if (isSet(object.swiftPrefix)) obj.swiftPrefix = String(object.swiftPrefix);
    if (isSet(object.phpClassPrefix)) obj.phpClassPrefix = String(object.phpClassPrefix);
    if (isSet(object.phpNamespace)) obj.phpNamespace = String(object.phpNamespace);
    if (isSet(object.phpMetadataNamespace)) obj.phpMetadataNamespace = String(object.phpMetadataNamespace);
    if (isSet(object.rubyPackage)) obj.rubyPackage = String(object.rubyPackage);
    if (isSet(object.features)) obj.features = FeatureSet.fromJSON(object.features);
    if (Array.isArray(object?.uninterpretedOption))
      obj.uninterpretedOption = object.uninterpretedOption.map((e: any) => UninterpretedOption.fromJSON(e));
    return obj;
  },
  toJSON(message: FileOptions): JsonSafe<FileOptions> {
    const obj: any = {};
    message.javaPackage !== undefined && (obj.javaPackage = message.javaPackage);
    message.javaOuterClassname !== undefined && (obj.javaOuterClassname = message.javaOuterClassname);
    message.javaMultipleFiles !== undefined && (obj.javaMultipleFiles = message.javaMultipleFiles);
    message.javaGenerateEqualsAndHash !== undefined &&
      (obj.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash);
    message.javaStringCheckUtf8 !== undefined && (obj.javaStringCheckUtf8 = message.javaStringCheckUtf8);
    message.optimizeFor !== undefined &&
      (obj.optimizeFor = fileOptions_OptimizeModeToJSON(message.optimizeFor));
    message.goPackage !== undefined && (obj.goPackage = message.goPackage);
    message.ccGenericServices !== undefined && (obj.ccGenericServices = message.ccGenericServices);
    message.javaGenericServices !== undefined && (obj.javaGenericServices = message.javaGenericServices);
    message.pyGenericServices !== undefined && (obj.pyGenericServices = message.pyGenericServices);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.ccEnableArenas !== undefined && (obj.ccEnableArenas = message.ccEnableArenas);
    message.objcClassPrefix !== undefined && (obj.objcClassPrefix = message.objcClassPrefix);
    message.csharpNamespace !== undefined && (obj.csharpNamespace = message.csharpNamespace);
    message.swiftPrefix !== undefined && (obj.swiftPrefix = message.swiftPrefix);
    message.phpClassPrefix !== undefined && (obj.phpClassPrefix = message.phpClassPrefix);
    message.phpNamespace !== undefined && (obj.phpNamespace = message.phpNamespace);
    message.phpMetadataNamespace !== undefined && (obj.phpMetadataNamespace = message.phpMetadataNamespace);
    message.rubyPackage !== undefined && (obj.rubyPackage = message.rubyPackage);
    message.features !== undefined &&
      (obj.features = message.features ? FeatureSet.toJSON(message.features) : undefined);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map((e) =>
        e ? UninterpretedOption.toJSON(e) : undefined,
      );
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FileOptions>, I>>(object: I): FileOptions {
    const message = createBaseFileOptions();
    message.javaPackage = object.javaPackage ?? "";
    message.javaOuterClassname = object.javaOuterClassname ?? "";
    message.javaMultipleFiles = object.javaMultipleFiles ?? false;
    message.javaGenerateEqualsAndHash = object.javaGenerateEqualsAndHash ?? false;
    message.javaStringCheckUtf8 = object.javaStringCheckUtf8 ?? false;
    message.optimizeFor = object.optimizeFor ?? 1;
    message.goPackage = object.goPackage ?? "";
    message.ccGenericServices = object.ccGenericServices ?? false;
    message.javaGenericServices = object.javaGenericServices ?? false;
    message.pyGenericServices = object.pyGenericServices ?? false;
    message.deprecated = object.deprecated ?? false;
    message.ccEnableArenas = object.ccEnableArenas ?? false;
    message.objcClassPrefix = object.objcClassPrefix ?? "";
    message.csharpNamespace = object.csharpNamespace ?? "";
    message.swiftPrefix = object.swiftPrefix ?? "";
    message.phpClassPrefix = object.phpClassPrefix ?? "";
    message.phpNamespace = object.phpNamespace ?? "";
    message.phpMetadataNamespace = object.phpMetadataNamespace ?? "";
    message.rubyPackage = object.rubyPackage ?? "";
    if (object.features !== undefined && object.features !== null) {
      message.features = FeatureSet.fromPartial(object.features);
    }
    message.uninterpretedOption =
      object.uninterpretedOption?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMessageOptions(): MessageOptions {
  return {
    messageSetWireFormat: false,
    noStandardDescriptorAccessor: false,
    deprecated: false,
    mapEntry: false,
    deprecatedLegacyJsonFieldConflicts: false,
    features: undefined,
    uninterpretedOption: [],
  };
}
export const MessageOptions = {
  typeUrl: "/google.protobuf.MessageOptions",
  encode(message: MessageOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.messageSetWireFormat === true) {
      writer.uint32(8).bool(message.messageSetWireFormat);
    }
    if (message.noStandardDescriptorAccessor === true) {
      writer.uint32(16).bool(message.noStandardDescriptorAccessor);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.mapEntry === true) {
      writer.uint32(56).bool(message.mapEntry);
    }
    if (message.deprecatedLegacyJsonFieldConflicts === true) {
      writer.uint32(88).bool(message.deprecatedLegacyJsonFieldConflicts);
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MessageOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageSetWireFormat = reader.bool();
          break;
        case 2:
          message.noStandardDescriptorAccessor = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 7:
          message.mapEntry = reader.bool();
          break;
        case 11:
          message.deprecatedLegacyJsonFieldConflicts = reader.bool();
          break;
        case 12:
          message.features = FeatureSet.decode(reader, reader.uint32());
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MessageOptions {
    const obj = createBaseMessageOptions();
    if (isSet(object.messageSetWireFormat)) obj.messageSetWireFormat = Boolean(object.messageSetWireFormat);
    if (isSet(object.noStandardDescriptorAccessor))
      obj.noStandardDescriptorAccessor = Boolean(object.noStandardDescriptorAccessor);
    if (isSet(object.deprecated)) obj.deprecated = Boolean(object.deprecated);
    if (isSet(object.mapEntry)) obj.mapEntry = Boolean(object.mapEntry);
    if (isSet(object.deprecatedLegacyJsonFieldConflicts))
      obj.deprecatedLegacyJsonFieldConflicts = Boolean(object.deprecatedLegacyJsonFieldConflicts);
    if (isSet(object.features)) obj.features = FeatureSet.fromJSON(object.features);
    if (Array.isArray(object?.uninterpretedOption))
      obj.uninterpretedOption = object.uninterpretedOption.map((e: any) => UninterpretedOption.fromJSON(e));
    return obj;
  },
  toJSON(message: MessageOptions): JsonSafe<MessageOptions> {
    const obj: any = {};
    message.messageSetWireFormat !== undefined && (obj.messageSetWireFormat = message.messageSetWireFormat);
    message.noStandardDescriptorAccessor !== undefined &&
      (obj.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.mapEntry !== undefined && (obj.mapEntry = message.mapEntry);
    message.deprecatedLegacyJsonFieldConflicts !== undefined &&
      (obj.deprecatedLegacyJsonFieldConflicts = message.deprecatedLegacyJsonFieldConflicts);
    message.features !== undefined &&
      (obj.features = message.features ? FeatureSet.toJSON(message.features) : undefined);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map((e) =>
        e ? UninterpretedOption.toJSON(e) : undefined,
      );
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MessageOptions>, I>>(object: I): MessageOptions {
    const message = createBaseMessageOptions();
    message.messageSetWireFormat = object.messageSetWireFormat ?? false;
    message.noStandardDescriptorAccessor = object.noStandardDescriptorAccessor ?? false;
    message.deprecated = object.deprecated ?? false;
    message.mapEntry = object.mapEntry ?? false;
    message.deprecatedLegacyJsonFieldConflicts = object.deprecatedLegacyJsonFieldConflicts ?? false;
    if (object.features !== undefined && object.features !== null) {
      message.features = FeatureSet.fromPartial(object.features);
    }
    message.uninterpretedOption =
      object.uninterpretedOption?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
};
function createBaseFieldOptions(): FieldOptions {
  return {
    ctype: 1,
    packed: false,
    jstype: 1,
    lazy: false,
    unverifiedLazy: false,
    deprecated: false,
    weak: false,
    debugRedact: false,
    retention: 1,
    targets: [],
    editionDefaults: [],
    features: undefined,
    featureSupport: undefined,
    uninterpretedOption: [],
  };
}
export const FieldOptions = {
  typeUrl: "/google.protobuf.FieldOptions",
  encode(message: FieldOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ctype !== 1) {
      writer.uint32(8).int32(message.ctype);
    }
    if (message.packed === true) {
      writer.uint32(16).bool(message.packed);
    }
    if (message.jstype !== 1) {
      writer.uint32(48).int32(message.jstype);
    }
    if (message.lazy === true) {
      writer.uint32(40).bool(message.lazy);
    }
    if (message.unverifiedLazy === true) {
      writer.uint32(120).bool(message.unverifiedLazy);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.weak === true) {
      writer.uint32(80).bool(message.weak);
    }
    if (message.debugRedact === true) {
      writer.uint32(128).bool(message.debugRedact);
    }
    if (message.retention !== 1) {
      writer.uint32(136).int32(message.retention);
    }
    writer.uint32(154).fork();
    for (const v of message.targets) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.editionDefaults) {
      FieldOptions_EditionDefault.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(170).fork()).ldelim();
    }
    if (message.featureSupport !== undefined) {
      FieldOptions_FeatureSupport.encode(message.featureSupport, writer.uint32(178).fork()).ldelim();
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FieldOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ctype = reader.int32() as any;
          break;
        case 2:
          message.packed = reader.bool();
          break;
        case 6:
          message.jstype = reader.int32() as any;
          break;
        case 5:
          message.lazy = reader.bool();
          break;
        case 15:
          message.unverifiedLazy = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 10:
          message.weak = reader.bool();
          break;
        case 16:
          message.debugRedact = reader.bool();
          break;
        case 17:
          message.retention = reader.int32() as any;
          break;
        case 19:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.targets.push(reader.int32() as any);
            }
          } else {
            message.targets.push(reader.int32() as any);
          }
          break;
        case 20:
          message.editionDefaults.push(FieldOptions_EditionDefault.decode(reader, reader.uint32()));
          break;
        case 21:
          message.features = FeatureSet.decode(reader, reader.uint32());
          break;
        case 22:
          message.featureSupport = FieldOptions_FeatureSupport.decode(reader, reader.uint32());
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FieldOptions {
    const obj = createBaseFieldOptions();
    if (isSet(object.ctype)) obj.ctype = fieldOptions_CTypeFromJSON(object.ctype);
    if (isSet(object.packed)) obj.packed = Boolean(object.packed);
    if (isSet(object.jstype)) obj.jstype = fieldOptions_JSTypeFromJSON(object.jstype);
    if (isSet(object.lazy)) obj.lazy = Boolean(object.lazy);
    if (isSet(object.unverifiedLazy)) obj.unverifiedLazy = Boolean(object.unverifiedLazy);
    if (isSet(object.deprecated)) obj.deprecated = Boolean(object.deprecated);
    if (isSet(object.weak)) obj.weak = Boolean(object.weak);
    if (isSet(object.debugRedact)) obj.debugRedact = Boolean(object.debugRedact);
    if (isSet(object.retention)) obj.retention = fieldOptions_OptionRetentionFromJSON(object.retention);
    if (Array.isArray(object?.targets))
      obj.targets = object.targets.map((e: any) => fieldOptions_OptionTargetTypeFromJSON(e));
    if (Array.isArray(object?.editionDefaults))
      obj.editionDefaults = object.editionDefaults.map((e: any) => FieldOptions_EditionDefault.fromJSON(e));
    if (isSet(object.features)) obj.features = FeatureSet.fromJSON(object.features);
    if (isSet(object.featureSupport))
      obj.featureSupport = FieldOptions_FeatureSupport.fromJSON(object.featureSupport);
    if (Array.isArray(object?.uninterpretedOption))
      obj.uninterpretedOption = object.uninterpretedOption.map((e: any) => UninterpretedOption.fromJSON(e));
    return obj;
  },
  toJSON(message: FieldOptions): JsonSafe<FieldOptions> {
    const obj: any = {};
    message.ctype !== undefined && (obj.ctype = fieldOptions_CTypeToJSON(message.ctype));
    message.packed !== undefined && (obj.packed = message.packed);
    message.jstype !== undefined && (obj.jstype = fieldOptions_JSTypeToJSON(message.jstype));
    message.lazy !== undefined && (obj.lazy = message.lazy);
    message.unverifiedLazy !== undefined && (obj.unverifiedLazy = message.unverifiedLazy);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.weak !== undefined && (obj.weak = message.weak);
    message.debugRedact !== undefined && (obj.debugRedact = message.debugRedact);
    message.retention !== undefined &&
      (obj.retention = fieldOptions_OptionRetentionToJSON(message.retention));
    if (message.targets) {
      obj.targets = message.targets.map((e) => fieldOptions_OptionTargetTypeToJSON(e));
    } else {
      obj.targets = [];
    }
    if (message.editionDefaults) {
      obj.editionDefaults = message.editionDefaults.map((e) =>
        e ? FieldOptions_EditionDefault.toJSON(e) : undefined,
      );
    } else {
      obj.editionDefaults = [];
    }
    message.features !== undefined &&
      (obj.features = message.features ? FeatureSet.toJSON(message.features) : undefined);
    message.featureSupport !== undefined &&
      (obj.featureSupport = message.featureSupport
        ? FieldOptions_FeatureSupport.toJSON(message.featureSupport)
        : undefined);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map((e) =>
        e ? UninterpretedOption.toJSON(e) : undefined,
      );
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FieldOptions>, I>>(object: I): FieldOptions {
    const message = createBaseFieldOptions();
    message.ctype = object.ctype ?? 1;
    message.packed = object.packed ?? false;
    message.jstype = object.jstype ?? 1;
    message.lazy = object.lazy ?? false;
    message.unverifiedLazy = object.unverifiedLazy ?? false;
    message.deprecated = object.deprecated ?? false;
    message.weak = object.weak ?? false;
    message.debugRedact = object.debugRedact ?? false;
    message.retention = object.retention ?? 1;
    message.targets = object.targets?.map((e) => e) || [];
    message.editionDefaults =
      object.editionDefaults?.map((e) => FieldOptions_EditionDefault.fromPartial(e)) || [];
    if (object.features !== undefined && object.features !== null) {
      message.features = FeatureSet.fromPartial(object.features);
    }
    if (object.featureSupport !== undefined && object.featureSupport !== null) {
      message.featureSupport = FieldOptions_FeatureSupport.fromPartial(object.featureSupport);
    }
    message.uninterpretedOption =
      object.uninterpretedOption?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
};
function createBaseFieldOptions_EditionDefault(): FieldOptions_EditionDefault {
  return {
    edition: 1,
    value: "",
  };
}
export const FieldOptions_EditionDefault = {
  typeUrl: "/google.protobuf.EditionDefault",
  encode(message: FieldOptions_EditionDefault, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.edition !== 1) {
      writer.uint32(24).int32(message.edition);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FieldOptions_EditionDefault {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldOptions_EditionDefault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.edition = reader.int32() as any;
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FieldOptions_EditionDefault {
    const obj = createBaseFieldOptions_EditionDefault();
    if (isSet(object.edition)) obj.edition = editionFromJSON(object.edition);
    if (isSet(object.value)) obj.value = String(object.value);
    return obj;
  },
  toJSON(message: FieldOptions_EditionDefault): JsonSafe<FieldOptions_EditionDefault> {
    const obj: any = {};
    message.edition !== undefined && (obj.edition = editionToJSON(message.edition));
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FieldOptions_EditionDefault>, I>>(
    object: I,
  ): FieldOptions_EditionDefault {
    const message = createBaseFieldOptions_EditionDefault();
    message.edition = object.edition ?? 1;
    message.value = object.value ?? "";
    return message;
  },
};
function createBaseFieldOptions_FeatureSupport(): FieldOptions_FeatureSupport {
  return {
    editionIntroduced: 1,
    editionDeprecated: 1,
    deprecationWarning: "",
    editionRemoved: 1,
  };
}
export const FieldOptions_FeatureSupport = {
  typeUrl: "/google.protobuf.FeatureSupport",
  encode(message: FieldOptions_FeatureSupport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.editionIntroduced !== 1) {
      writer.uint32(8).int32(message.editionIntroduced);
    }
    if (message.editionDeprecated !== 1) {
      writer.uint32(16).int32(message.editionDeprecated);
    }
    if (message.deprecationWarning !== "") {
      writer.uint32(26).string(message.deprecationWarning);
    }
    if (message.editionRemoved !== 1) {
      writer.uint32(32).int32(message.editionRemoved);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FieldOptions_FeatureSupport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldOptions_FeatureSupport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.editionIntroduced = reader.int32() as any;
          break;
        case 2:
          message.editionDeprecated = reader.int32() as any;
          break;
        case 3:
          message.deprecationWarning = reader.string();
          break;
        case 4:
          message.editionRemoved = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FieldOptions_FeatureSupport {
    const obj = createBaseFieldOptions_FeatureSupport();
    if (isSet(object.editionIntroduced)) obj.editionIntroduced = editionFromJSON(object.editionIntroduced);
    if (isSet(object.editionDeprecated)) obj.editionDeprecated = editionFromJSON(object.editionDeprecated);
    if (isSet(object.deprecationWarning)) obj.deprecationWarning = String(object.deprecationWarning);
    if (isSet(object.editionRemoved)) obj.editionRemoved = editionFromJSON(object.editionRemoved);
    return obj;
  },
  toJSON(message: FieldOptions_FeatureSupport): JsonSafe<FieldOptions_FeatureSupport> {
    const obj: any = {};
    message.editionIntroduced !== undefined &&
      (obj.editionIntroduced = editionToJSON(message.editionIntroduced));
    message.editionDeprecated !== undefined &&
      (obj.editionDeprecated = editionToJSON(message.editionDeprecated));
    message.deprecationWarning !== undefined && (obj.deprecationWarning = message.deprecationWarning);
    message.editionRemoved !== undefined && (obj.editionRemoved = editionToJSON(message.editionRemoved));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FieldOptions_FeatureSupport>, I>>(
    object: I,
  ): FieldOptions_FeatureSupport {
    const message = createBaseFieldOptions_FeatureSupport();
    message.editionIntroduced = object.editionIntroduced ?? 1;
    message.editionDeprecated = object.editionDeprecated ?? 1;
    message.deprecationWarning = object.deprecationWarning ?? "";
    message.editionRemoved = object.editionRemoved ?? 1;
    return message;
  },
};
function createBaseOneofOptions(): OneofOptions {
  return {
    features: undefined,
    uninterpretedOption: [],
  };
}
export const OneofOptions = {
  typeUrl: "/google.protobuf.OneofOptions",
  encode(message: OneofOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OneofOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneofOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.features = FeatureSet.decode(reader, reader.uint32());
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OneofOptions {
    const obj = createBaseOneofOptions();
    if (isSet(object.features)) obj.features = FeatureSet.fromJSON(object.features);
    if (Array.isArray(object?.uninterpretedOption))
      obj.uninterpretedOption = object.uninterpretedOption.map((e: any) => UninterpretedOption.fromJSON(e));
    return obj;
  },
  toJSON(message: OneofOptions): JsonSafe<OneofOptions> {
    const obj: any = {};
    message.features !== undefined &&
      (obj.features = message.features ? FeatureSet.toJSON(message.features) : undefined);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map((e) =>
        e ? UninterpretedOption.toJSON(e) : undefined,
      );
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<OneofOptions>, I>>(object: I): OneofOptions {
    const message = createBaseOneofOptions();
    if (object.features !== undefined && object.features !== null) {
      message.features = FeatureSet.fromPartial(object.features);
    }
    message.uninterpretedOption =
      object.uninterpretedOption?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
};
function createBaseEnumOptions(): EnumOptions {
  return {
    allowAlias: false,
    deprecated: false,
    deprecatedLegacyJsonFieldConflicts: false,
    features: undefined,
    uninterpretedOption: [],
  };
}
export const EnumOptions = {
  typeUrl: "/google.protobuf.EnumOptions",
  encode(message: EnumOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.allowAlias === true) {
      writer.uint32(16).bool(message.allowAlias);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.deprecatedLegacyJsonFieldConflicts === true) {
      writer.uint32(48).bool(message.deprecatedLegacyJsonFieldConflicts);
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnumOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.allowAlias = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 6:
          message.deprecatedLegacyJsonFieldConflicts = reader.bool();
          break;
        case 7:
          message.features = FeatureSet.decode(reader, reader.uint32());
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EnumOptions {
    const obj = createBaseEnumOptions();
    if (isSet(object.allowAlias)) obj.allowAlias = Boolean(object.allowAlias);
    if (isSet(object.deprecated)) obj.deprecated = Boolean(object.deprecated);
    if (isSet(object.deprecatedLegacyJsonFieldConflicts))
      obj.deprecatedLegacyJsonFieldConflicts = Boolean(object.deprecatedLegacyJsonFieldConflicts);
    if (isSet(object.features)) obj.features = FeatureSet.fromJSON(object.features);
    if (Array.isArray(object?.uninterpretedOption))
      obj.uninterpretedOption = object.uninterpretedOption.map((e: any) => UninterpretedOption.fromJSON(e));
    return obj;
  },
  toJSON(message: EnumOptions): JsonSafe<EnumOptions> {
    const obj: any = {};
    message.allowAlias !== undefined && (obj.allowAlias = message.allowAlias);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.deprecatedLegacyJsonFieldConflicts !== undefined &&
      (obj.deprecatedLegacyJsonFieldConflicts = message.deprecatedLegacyJsonFieldConflicts);
    message.features !== undefined &&
      (obj.features = message.features ? FeatureSet.toJSON(message.features) : undefined);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map((e) =>
        e ? UninterpretedOption.toJSON(e) : undefined,
      );
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EnumOptions>, I>>(object: I): EnumOptions {
    const message = createBaseEnumOptions();
    message.allowAlias = object.allowAlias ?? false;
    message.deprecated = object.deprecated ?? false;
    message.deprecatedLegacyJsonFieldConflicts = object.deprecatedLegacyJsonFieldConflicts ?? false;
    if (object.features !== undefined && object.features !== null) {
      message.features = FeatureSet.fromPartial(object.features);
    }
    message.uninterpretedOption =
      object.uninterpretedOption?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
};
function createBaseEnumValueOptions(): EnumValueOptions {
  return {
    deprecated: false,
    features: undefined,
    debugRedact: false,
    featureSupport: undefined,
    uninterpretedOption: [],
  };
}
export const EnumValueOptions = {
  typeUrl: "/google.protobuf.EnumValueOptions",
  encode(message: EnumValueOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deprecated === true) {
      writer.uint32(8).bool(message.deprecated);
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(18).fork()).ldelim();
    }
    if (message.debugRedact === true) {
      writer.uint32(24).bool(message.debugRedact);
    }
    if (message.featureSupport !== undefined) {
      FieldOptions_FeatureSupport.encode(message.featureSupport, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnumValueOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumValueOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deprecated = reader.bool();
          break;
        case 2:
          message.features = FeatureSet.decode(reader, reader.uint32());
          break;
        case 3:
          message.debugRedact = reader.bool();
          break;
        case 4:
          message.featureSupport = FieldOptions_FeatureSupport.decode(reader, reader.uint32());
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EnumValueOptions {
    const obj = createBaseEnumValueOptions();
    if (isSet(object.deprecated)) obj.deprecated = Boolean(object.deprecated);
    if (isSet(object.features)) obj.features = FeatureSet.fromJSON(object.features);
    if (isSet(object.debugRedact)) obj.debugRedact = Boolean(object.debugRedact);
    if (isSet(object.featureSupport))
      obj.featureSupport = FieldOptions_FeatureSupport.fromJSON(object.featureSupport);
    if (Array.isArray(object?.uninterpretedOption))
      obj.uninterpretedOption = object.uninterpretedOption.map((e: any) => UninterpretedOption.fromJSON(e));
    return obj;
  },
  toJSON(message: EnumValueOptions): JsonSafe<EnumValueOptions> {
    const obj: any = {};
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.features !== undefined &&
      (obj.features = message.features ? FeatureSet.toJSON(message.features) : undefined);
    message.debugRedact !== undefined && (obj.debugRedact = message.debugRedact);
    message.featureSupport !== undefined &&
      (obj.featureSupport = message.featureSupport
        ? FieldOptions_FeatureSupport.toJSON(message.featureSupport)
        : undefined);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map((e) =>
        e ? UninterpretedOption.toJSON(e) : undefined,
      );
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EnumValueOptions>, I>>(object: I): EnumValueOptions {
    const message = createBaseEnumValueOptions();
    message.deprecated = object.deprecated ?? false;
    if (object.features !== undefined && object.features !== null) {
      message.features = FeatureSet.fromPartial(object.features);
    }
    message.debugRedact = object.debugRedact ?? false;
    if (object.featureSupport !== undefined && object.featureSupport !== null) {
      message.featureSupport = FieldOptions_FeatureSupport.fromPartial(object.featureSupport);
    }
    message.uninterpretedOption =
      object.uninterpretedOption?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
};
function createBaseServiceOptions(): ServiceOptions {
  return {
    features: undefined,
    deprecated: false,
    uninterpretedOption: [],
  };
}
export const ServiceOptions = {
  typeUrl: "/google.protobuf.ServiceOptions",
  encode(message: ServiceOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(274).fork()).ldelim();
    }
    if (message.deprecated === true) {
      writer.uint32(264).bool(message.deprecated);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 34:
          message.features = FeatureSet.decode(reader, reader.uint32());
          break;
        case 33:
          message.deprecated = reader.bool();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ServiceOptions {
    const obj = createBaseServiceOptions();
    if (isSet(object.features)) obj.features = FeatureSet.fromJSON(object.features);
    if (isSet(object.deprecated)) obj.deprecated = Boolean(object.deprecated);
    if (Array.isArray(object?.uninterpretedOption))
      obj.uninterpretedOption = object.uninterpretedOption.map((e: any) => UninterpretedOption.fromJSON(e));
    return obj;
  },
  toJSON(message: ServiceOptions): JsonSafe<ServiceOptions> {
    const obj: any = {};
    message.features !== undefined &&
      (obj.features = message.features ? FeatureSet.toJSON(message.features) : undefined);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map((e) =>
        e ? UninterpretedOption.toJSON(e) : undefined,
      );
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ServiceOptions>, I>>(object: I): ServiceOptions {
    const message = createBaseServiceOptions();
    if (object.features !== undefined && object.features !== null) {
      message.features = FeatureSet.fromPartial(object.features);
    }
    message.deprecated = object.deprecated ?? false;
    message.uninterpretedOption =
      object.uninterpretedOption?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMethodOptions(): MethodOptions {
  return {
    deprecated: false,
    idempotencyLevel: 1,
    features: undefined,
    uninterpretedOption: [],
  };
}
export const MethodOptions = {
  typeUrl: "/google.protobuf.MethodOptions",
  encode(message: MethodOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deprecated === true) {
      writer.uint32(264).bool(message.deprecated);
    }
    if (message.idempotencyLevel !== 1) {
      writer.uint32(272).int32(message.idempotencyLevel);
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(282).fork()).ldelim();
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MethodOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMethodOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 33:
          message.deprecated = reader.bool();
          break;
        case 34:
          message.idempotencyLevel = reader.int32() as any;
          break;
        case 35:
          message.features = FeatureSet.decode(reader, reader.uint32());
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MethodOptions {
    const obj = createBaseMethodOptions();
    if (isSet(object.deprecated)) obj.deprecated = Boolean(object.deprecated);
    if (isSet(object.idempotencyLevel))
      obj.idempotencyLevel = methodOptions_IdempotencyLevelFromJSON(object.idempotencyLevel);
    if (isSet(object.features)) obj.features = FeatureSet.fromJSON(object.features);
    if (Array.isArray(object?.uninterpretedOption))
      obj.uninterpretedOption = object.uninterpretedOption.map((e: any) => UninterpretedOption.fromJSON(e));
    return obj;
  },
  toJSON(message: MethodOptions): JsonSafe<MethodOptions> {
    const obj: any = {};
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.idempotencyLevel !== undefined &&
      (obj.idempotencyLevel = methodOptions_IdempotencyLevelToJSON(message.idempotencyLevel));
    message.features !== undefined &&
      (obj.features = message.features ? FeatureSet.toJSON(message.features) : undefined);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map((e) =>
        e ? UninterpretedOption.toJSON(e) : undefined,
      );
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MethodOptions>, I>>(object: I): MethodOptions {
    const message = createBaseMethodOptions();
    message.deprecated = object.deprecated ?? false;
    message.idempotencyLevel = object.idempotencyLevel ?? 1;
    if (object.features !== undefined && object.features !== null) {
      message.features = FeatureSet.fromPartial(object.features);
    }
    message.uninterpretedOption =
      object.uninterpretedOption?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
};
function createBaseUninterpretedOption(): UninterpretedOption {
  return {
    name: [],
    identifierValue: "",
    positiveIntValue: BigInt(0),
    negativeIntValue: BigInt(0),
    doubleValue: 0,
    stringValue: new Uint8Array(),
    aggregateValue: "",
  };
}
export const UninterpretedOption = {
  typeUrl: "/google.protobuf.UninterpretedOption",
  encode(message: UninterpretedOption, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.name) {
      UninterpretedOption_NamePart.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.identifierValue !== "") {
      writer.uint32(26).string(message.identifierValue);
    }
    if (message.positiveIntValue !== BigInt(0)) {
      writer.uint32(32).uint64(message.positiveIntValue);
    }
    if (message.negativeIntValue !== BigInt(0)) {
      writer.uint32(40).int64(message.negativeIntValue);
    }
    if (message.doubleValue !== 0) {
      writer.uint32(49).double(message.doubleValue);
    }
    if (message.stringValue.length !== 0) {
      writer.uint32(58).bytes(message.stringValue);
    }
    if (message.aggregateValue !== "") {
      writer.uint32(66).string(message.aggregateValue);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UninterpretedOption {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUninterpretedOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.name.push(UninterpretedOption_NamePart.decode(reader, reader.uint32()));
          break;
        case 3:
          message.identifierValue = reader.string();
          break;
        case 4:
          message.positiveIntValue = reader.uint64();
          break;
        case 5:
          message.negativeIntValue = reader.int64();
          break;
        case 6:
          message.doubleValue = reader.double();
          break;
        case 7:
          message.stringValue = reader.bytes();
          break;
        case 8:
          message.aggregateValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UninterpretedOption {
    const obj = createBaseUninterpretedOption();
    if (Array.isArray(object?.name))
      obj.name = object.name.map((e: any) => UninterpretedOption_NamePart.fromJSON(e));
    if (isSet(object.identifierValue)) obj.identifierValue = String(object.identifierValue);
    if (isSet(object.positiveIntValue)) obj.positiveIntValue = BigInt(object.positiveIntValue.toString());
    if (isSet(object.negativeIntValue)) obj.negativeIntValue = BigInt(object.negativeIntValue.toString());
    if (isSet(object.doubleValue)) obj.doubleValue = Number(object.doubleValue);
    if (isSet(object.stringValue)) obj.stringValue = bytesFromBase64(object.stringValue);
    if (isSet(object.aggregateValue)) obj.aggregateValue = String(object.aggregateValue);
    return obj;
  },
  toJSON(message: UninterpretedOption): JsonSafe<UninterpretedOption> {
    const obj: any = {};
    if (message.name) {
      obj.name = message.name.map((e) => (e ? UninterpretedOption_NamePart.toJSON(e) : undefined));
    } else {
      obj.name = [];
    }
    message.identifierValue !== undefined && (obj.identifierValue = message.identifierValue);
    message.positiveIntValue !== undefined &&
      (obj.positiveIntValue = (message.positiveIntValue || BigInt(0)).toString());
    message.negativeIntValue !== undefined &&
      (obj.negativeIntValue = (message.negativeIntValue || BigInt(0)).toString());
    message.doubleValue !== undefined && (obj.doubleValue = message.doubleValue);
    message.stringValue !== undefined &&
      (obj.stringValue = base64FromBytes(
        message.stringValue !== undefined ? message.stringValue : new Uint8Array(),
      ));
    message.aggregateValue !== undefined && (obj.aggregateValue = message.aggregateValue);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UninterpretedOption>, I>>(object: I): UninterpretedOption {
    const message = createBaseUninterpretedOption();
    message.name = object.name?.map((e) => UninterpretedOption_NamePart.fromPartial(e)) || [];
    message.identifierValue = object.identifierValue ?? "";
    if (object.positiveIntValue !== undefined && object.positiveIntValue !== null) {
      message.positiveIntValue = BigInt(object.positiveIntValue.toString());
    }
    if (object.negativeIntValue !== undefined && object.negativeIntValue !== null) {
      message.negativeIntValue = BigInt(object.negativeIntValue.toString());
    }
    message.doubleValue = object.doubleValue ?? 0;
    message.stringValue = object.stringValue ?? new Uint8Array();
    message.aggregateValue = object.aggregateValue ?? "";
    return message;
  },
};
function createBaseUninterpretedOption_NamePart(): UninterpretedOption_NamePart {
  return {
    namePart: "",
    isExtension: false,
  };
}
export const UninterpretedOption_NamePart = {
  typeUrl: "/google.protobuf.NamePart",
  encode(message: UninterpretedOption_NamePart, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.namePart !== "") {
      writer.uint32(10).string(message.namePart);
    }
    if (message.isExtension === true) {
      writer.uint32(16).bool(message.isExtension);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UninterpretedOption_NamePart {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUninterpretedOption_NamePart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.namePart = reader.string();
          break;
        case 2:
          message.isExtension = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UninterpretedOption_NamePart {
    const obj = createBaseUninterpretedOption_NamePart();
    if (isSet(object.namePart)) obj.namePart = String(object.namePart);
    if (isSet(object.isExtension)) obj.isExtension = Boolean(object.isExtension);
    return obj;
  },
  toJSON(message: UninterpretedOption_NamePart): JsonSafe<UninterpretedOption_NamePart> {
    const obj: any = {};
    message.namePart !== undefined && (obj.namePart = message.namePart);
    message.isExtension !== undefined && (obj.isExtension = message.isExtension);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UninterpretedOption_NamePart>, I>>(
    object: I,
  ): UninterpretedOption_NamePart {
    const message = createBaseUninterpretedOption_NamePart();
    message.namePart = object.namePart ?? "";
    message.isExtension = object.isExtension ?? false;
    return message;
  },
};
function createBaseFeatureSet(): FeatureSet {
  return {
    fieldPresence: 1,
    enumType: 1,
    repeatedFieldEncoding: 1,
    utf8Validation: 0,
    messageEncoding: 1,
    jsonFormat: 1,
    enforceNamingStyle: 1,
  };
}
export const FeatureSet = {
  typeUrl: "/google.protobuf.FeatureSet",
  encode(message: FeatureSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fieldPresence !== 1) {
      writer.uint32(8).int32(message.fieldPresence);
    }
    if (message.enumType !== 1) {
      writer.uint32(16).int32(message.enumType);
    }
    if (message.repeatedFieldEncoding !== 1) {
      writer.uint32(24).int32(message.repeatedFieldEncoding);
    }
    if (message.utf8Validation !== 0) {
      writer.uint32(32).int32(message.utf8Validation);
    }
    if (message.messageEncoding !== 1) {
      writer.uint32(40).int32(message.messageEncoding);
    }
    if (message.jsonFormat !== 1) {
      writer.uint32(48).int32(message.jsonFormat);
    }
    if (message.enforceNamingStyle !== 1) {
      writer.uint32(56).int32(message.enforceNamingStyle);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeatureSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeatureSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fieldPresence = reader.int32() as any;
          break;
        case 2:
          message.enumType = reader.int32() as any;
          break;
        case 3:
          message.repeatedFieldEncoding = reader.int32() as any;
          break;
        case 4:
          message.utf8Validation = reader.int32() as any;
          break;
        case 5:
          message.messageEncoding = reader.int32() as any;
          break;
        case 6:
          message.jsonFormat = reader.int32() as any;
          break;
        case 7:
          message.enforceNamingStyle = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FeatureSet {
    const obj = createBaseFeatureSet();
    if (isSet(object.fieldPresence))
      obj.fieldPresence = featureSet_FieldPresenceFromJSON(object.fieldPresence);
    if (isSet(object.enumType)) obj.enumType = featureSet_EnumTypeFromJSON(object.enumType);
    if (isSet(object.repeatedFieldEncoding))
      obj.repeatedFieldEncoding = featureSet_RepeatedFieldEncodingFromJSON(object.repeatedFieldEncoding);
    if (isSet(object.utf8Validation))
      obj.utf8Validation = featureSet_Utf8ValidationFromJSON(object.utf8Validation);
    if (isSet(object.messageEncoding))
      obj.messageEncoding = featureSet_MessageEncodingFromJSON(object.messageEncoding);
    if (isSet(object.jsonFormat)) obj.jsonFormat = featureSet_JsonFormatFromJSON(object.jsonFormat);
    if (isSet(object.enforceNamingStyle))
      obj.enforceNamingStyle = featureSet_EnforceNamingStyleFromJSON(object.enforceNamingStyle);
    return obj;
  },
  toJSON(message: FeatureSet): JsonSafe<FeatureSet> {
    const obj: any = {};
    message.fieldPresence !== undefined &&
      (obj.fieldPresence = featureSet_FieldPresenceToJSON(message.fieldPresence));
    message.enumType !== undefined && (obj.enumType = featureSet_EnumTypeToJSON(message.enumType));
    message.repeatedFieldEncoding !== undefined &&
      (obj.repeatedFieldEncoding = featureSet_RepeatedFieldEncodingToJSON(message.repeatedFieldEncoding));
    message.utf8Validation !== undefined &&
      (obj.utf8Validation = featureSet_Utf8ValidationToJSON(message.utf8Validation));
    message.messageEncoding !== undefined &&
      (obj.messageEncoding = featureSet_MessageEncodingToJSON(message.messageEncoding));
    message.jsonFormat !== undefined && (obj.jsonFormat = featureSet_JsonFormatToJSON(message.jsonFormat));
    message.enforceNamingStyle !== undefined &&
      (obj.enforceNamingStyle = featureSet_EnforceNamingStyleToJSON(message.enforceNamingStyle));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FeatureSet>, I>>(object: I): FeatureSet {
    const message = createBaseFeatureSet();
    message.fieldPresence = object.fieldPresence ?? 1;
    message.enumType = object.enumType ?? 1;
    message.repeatedFieldEncoding = object.repeatedFieldEncoding ?? 1;
    message.utf8Validation = object.utf8Validation ?? 0;
    message.messageEncoding = object.messageEncoding ?? 1;
    message.jsonFormat = object.jsonFormat ?? 1;
    message.enforceNamingStyle = object.enforceNamingStyle ?? 1;
    return message;
  },
};
function createBaseFeatureSetDefaults(): FeatureSetDefaults {
  return {
    defaults: [],
    minimumEdition: 1,
    maximumEdition: 1,
  };
}
export const FeatureSetDefaults = {
  typeUrl: "/google.protobuf.FeatureSetDefaults",
  encode(message: FeatureSetDefaults, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.defaults) {
      FeatureSetDefaults_FeatureSetEditionDefault.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.minimumEdition !== 1) {
      writer.uint32(32).int32(message.minimumEdition);
    }
    if (message.maximumEdition !== 1) {
      writer.uint32(40).int32(message.maximumEdition);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeatureSetDefaults {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeatureSetDefaults();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaults.push(FeatureSetDefaults_FeatureSetEditionDefault.decode(reader, reader.uint32()));
          break;
        case 4:
          message.minimumEdition = reader.int32() as any;
          break;
        case 5:
          message.maximumEdition = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FeatureSetDefaults {
    const obj = createBaseFeatureSetDefaults();
    if (Array.isArray(object?.defaults))
      obj.defaults = object.defaults.map((e: any) => FeatureSetDefaults_FeatureSetEditionDefault.fromJSON(e));
    if (isSet(object.minimumEdition)) obj.minimumEdition = editionFromJSON(object.minimumEdition);
    if (isSet(object.maximumEdition)) obj.maximumEdition = editionFromJSON(object.maximumEdition);
    return obj;
  },
  toJSON(message: FeatureSetDefaults): JsonSafe<FeatureSetDefaults> {
    const obj: any = {};
    if (message.defaults) {
      obj.defaults = message.defaults.map((e) =>
        e ? FeatureSetDefaults_FeatureSetEditionDefault.toJSON(e) : undefined,
      );
    } else {
      obj.defaults = [];
    }
    message.minimumEdition !== undefined && (obj.minimumEdition = editionToJSON(message.minimumEdition));
    message.maximumEdition !== undefined && (obj.maximumEdition = editionToJSON(message.maximumEdition));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FeatureSetDefaults>, I>>(object: I): FeatureSetDefaults {
    const message = createBaseFeatureSetDefaults();
    message.defaults =
      object.defaults?.map((e) => FeatureSetDefaults_FeatureSetEditionDefault.fromPartial(e)) || [];
    message.minimumEdition = object.minimumEdition ?? 1;
    message.maximumEdition = object.maximumEdition ?? 1;
    return message;
  },
};
function createBaseFeatureSetDefaults_FeatureSetEditionDefault(): FeatureSetDefaults_FeatureSetEditionDefault {
  return {
    edition: 1,
    overridableFeatures: undefined,
    fixedFeatures: undefined,
  };
}
export const FeatureSetDefaults_FeatureSetEditionDefault = {
  typeUrl: "/google.protobuf.FeatureSetEditionDefault",
  encode(
    message: FeatureSetDefaults_FeatureSetEditionDefault,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.edition !== 1) {
      writer.uint32(24).int32(message.edition);
    }
    if (message.overridableFeatures !== undefined) {
      FeatureSet.encode(message.overridableFeatures, writer.uint32(34).fork()).ldelim();
    }
    if (message.fixedFeatures !== undefined) {
      FeatureSet.encode(message.fixedFeatures, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeatureSetDefaults_FeatureSetEditionDefault {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeatureSetDefaults_FeatureSetEditionDefault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.edition = reader.int32() as any;
          break;
        case 4:
          message.overridableFeatures = FeatureSet.decode(reader, reader.uint32());
          break;
        case 5:
          message.fixedFeatures = FeatureSet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FeatureSetDefaults_FeatureSetEditionDefault {
    const obj = createBaseFeatureSetDefaults_FeatureSetEditionDefault();
    if (isSet(object.edition)) obj.edition = editionFromJSON(object.edition);
    if (isSet(object.overridableFeatures))
      obj.overridableFeatures = FeatureSet.fromJSON(object.overridableFeatures);
    if (isSet(object.fixedFeatures)) obj.fixedFeatures = FeatureSet.fromJSON(object.fixedFeatures);
    return obj;
  },
  toJSON(
    message: FeatureSetDefaults_FeatureSetEditionDefault,
  ): JsonSafe<FeatureSetDefaults_FeatureSetEditionDefault> {
    const obj: any = {};
    message.edition !== undefined && (obj.edition = editionToJSON(message.edition));
    message.overridableFeatures !== undefined &&
      (obj.overridableFeatures = message.overridableFeatures
        ? FeatureSet.toJSON(message.overridableFeatures)
        : undefined);
    message.fixedFeatures !== undefined &&
      (obj.fixedFeatures = message.fixedFeatures ? FeatureSet.toJSON(message.fixedFeatures) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FeatureSetDefaults_FeatureSetEditionDefault>, I>>(
    object: I,
  ): FeatureSetDefaults_FeatureSetEditionDefault {
    const message = createBaseFeatureSetDefaults_FeatureSetEditionDefault();
    message.edition = object.edition ?? 1;
    if (object.overridableFeatures !== undefined && object.overridableFeatures !== null) {
      message.overridableFeatures = FeatureSet.fromPartial(object.overridableFeatures);
    }
    if (object.fixedFeatures !== undefined && object.fixedFeatures !== null) {
      message.fixedFeatures = FeatureSet.fromPartial(object.fixedFeatures);
    }
    return message;
  },
};
function createBaseSourceCodeInfo(): SourceCodeInfo {
  return {
    location: [],
  };
}
export const SourceCodeInfo = {
  typeUrl: "/google.protobuf.SourceCodeInfo",
  encode(message: SourceCodeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.location) {
      SourceCodeInfo_Location.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SourceCodeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceCodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.location.push(SourceCodeInfo_Location.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SourceCodeInfo {
    const obj = createBaseSourceCodeInfo();
    if (Array.isArray(object?.location))
      obj.location = object.location.map((e: any) => SourceCodeInfo_Location.fromJSON(e));
    return obj;
  },
  toJSON(message: SourceCodeInfo): JsonSafe<SourceCodeInfo> {
    const obj: any = {};
    if (message.location) {
      obj.location = message.location.map((e) => (e ? SourceCodeInfo_Location.toJSON(e) : undefined));
    } else {
      obj.location = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SourceCodeInfo>, I>>(object: I): SourceCodeInfo {
    const message = createBaseSourceCodeInfo();
    message.location = object.location?.map((e) => SourceCodeInfo_Location.fromPartial(e)) || [];
    return message;
  },
};
function createBaseSourceCodeInfo_Location(): SourceCodeInfo_Location {
  return {
    path: [],
    span: [],
    leadingComments: "",
    trailingComments: "",
    leadingDetachedComments: [],
  };
}
export const SourceCodeInfo_Location = {
  typeUrl: "/google.protobuf.Location",
  encode(message: SourceCodeInfo_Location, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.path) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.span) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.leadingComments !== "") {
      writer.uint32(26).string(message.leadingComments);
    }
    if (message.trailingComments !== "") {
      writer.uint32(34).string(message.trailingComments);
    }
    for (const v of message.leadingDetachedComments) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SourceCodeInfo_Location {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceCodeInfo_Location();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }
          } else {
            message.path.push(reader.int32());
          }
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.span.push(reader.int32());
            }
          } else {
            message.span.push(reader.int32());
          }
          break;
        case 3:
          message.leadingComments = reader.string();
          break;
        case 4:
          message.trailingComments = reader.string();
          break;
        case 6:
          message.leadingDetachedComments.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SourceCodeInfo_Location {
    const obj = createBaseSourceCodeInfo_Location();
    if (Array.isArray(object?.path)) obj.path = object.path.map((e: any) => Number(e));
    if (Array.isArray(object?.span)) obj.span = object.span.map((e: any) => Number(e));
    if (isSet(object.leadingComments)) obj.leadingComments = String(object.leadingComments);
    if (isSet(object.trailingComments)) obj.trailingComments = String(object.trailingComments);
    if (Array.isArray(object?.leadingDetachedComments))
      obj.leadingDetachedComments = object.leadingDetachedComments.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: SourceCodeInfo_Location): JsonSafe<SourceCodeInfo_Location> {
    const obj: any = {};
    if (message.path) {
      obj.path = message.path.map((e) => Math.round(e));
    } else {
      obj.path = [];
    }
    if (message.span) {
      obj.span = message.span.map((e) => Math.round(e));
    } else {
      obj.span = [];
    }
    message.leadingComments !== undefined && (obj.leadingComments = message.leadingComments);
    message.trailingComments !== undefined && (obj.trailingComments = message.trailingComments);
    if (message.leadingDetachedComments) {
      obj.leadingDetachedComments = message.leadingDetachedComments.map((e) => e);
    } else {
      obj.leadingDetachedComments = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SourceCodeInfo_Location>, I>>(object: I): SourceCodeInfo_Location {
    const message = createBaseSourceCodeInfo_Location();
    message.path = object.path?.map((e) => e) || [];
    message.span = object.span?.map((e) => e) || [];
    message.leadingComments = object.leadingComments ?? "";
    message.trailingComments = object.trailingComments ?? "";
    message.leadingDetachedComments = object.leadingDetachedComments?.map((e) => e) || [];
    return message;
  },
};
function createBaseGeneratedCodeInfo(): GeneratedCodeInfo {
  return {
    annotation: [],
  };
}
export const GeneratedCodeInfo = {
  typeUrl: "/google.protobuf.GeneratedCodeInfo",
  encode(message: GeneratedCodeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.annotation) {
      GeneratedCodeInfo_Annotation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GeneratedCodeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeneratedCodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.annotation.push(GeneratedCodeInfo_Annotation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GeneratedCodeInfo {
    const obj = createBaseGeneratedCodeInfo();
    if (Array.isArray(object?.annotation))
      obj.annotation = object.annotation.map((e: any) => GeneratedCodeInfo_Annotation.fromJSON(e));
    return obj;
  },
  toJSON(message: GeneratedCodeInfo): JsonSafe<GeneratedCodeInfo> {
    const obj: any = {};
    if (message.annotation) {
      obj.annotation = message.annotation.map((e) =>
        e ? GeneratedCodeInfo_Annotation.toJSON(e) : undefined,
      );
    } else {
      obj.annotation = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GeneratedCodeInfo>, I>>(object: I): GeneratedCodeInfo {
    const message = createBaseGeneratedCodeInfo();
    message.annotation = object.annotation?.map((e) => GeneratedCodeInfo_Annotation.fromPartial(e)) || [];
    return message;
  },
};
function createBaseGeneratedCodeInfo_Annotation(): GeneratedCodeInfo_Annotation {
  return {
    path: [],
    sourceFile: "",
    begin: 0,
    end: 0,
    semantic: 1,
  };
}
export const GeneratedCodeInfo_Annotation = {
  typeUrl: "/google.protobuf.Annotation",
  encode(message: GeneratedCodeInfo_Annotation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.path) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.sourceFile !== "") {
      writer.uint32(18).string(message.sourceFile);
    }
    if (message.begin !== 0) {
      writer.uint32(24).int32(message.begin);
    }
    if (message.end !== 0) {
      writer.uint32(32).int32(message.end);
    }
    if (message.semantic !== 1) {
      writer.uint32(40).int32(message.semantic);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GeneratedCodeInfo_Annotation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeneratedCodeInfo_Annotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }
          } else {
            message.path.push(reader.int32());
          }
          break;
        case 2:
          message.sourceFile = reader.string();
          break;
        case 3:
          message.begin = reader.int32();
          break;
        case 4:
          message.end = reader.int32();
          break;
        case 5:
          message.semantic = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GeneratedCodeInfo_Annotation {
    const obj = createBaseGeneratedCodeInfo_Annotation();
    if (Array.isArray(object?.path)) obj.path = object.path.map((e: any) => Number(e));
    if (isSet(object.sourceFile)) obj.sourceFile = String(object.sourceFile);
    if (isSet(object.begin)) obj.begin = Number(object.begin);
    if (isSet(object.end)) obj.end = Number(object.end);
    if (isSet(object.semantic)) obj.semantic = generatedCodeInfo_Annotation_SemanticFromJSON(object.semantic);
    return obj;
  },
  toJSON(message: GeneratedCodeInfo_Annotation): JsonSafe<GeneratedCodeInfo_Annotation> {
    const obj: any = {};
    if (message.path) {
      obj.path = message.path.map((e) => Math.round(e));
    } else {
      obj.path = [];
    }
    message.sourceFile !== undefined && (obj.sourceFile = message.sourceFile);
    message.begin !== undefined && (obj.begin = Math.round(message.begin));
    message.end !== undefined && (obj.end = Math.round(message.end));
    message.semantic !== undefined &&
      (obj.semantic = generatedCodeInfo_Annotation_SemanticToJSON(message.semantic));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GeneratedCodeInfo_Annotation>, I>>(
    object: I,
  ): GeneratedCodeInfo_Annotation {
    const message = createBaseGeneratedCodeInfo_Annotation();
    message.path = object.path?.map((e) => e) || [];
    message.sourceFile = object.sourceFile ?? "";
    message.begin = object.begin ?? 0;
    message.end = object.end ?? 0;
    message.semantic = object.semantic ?? 1;
    return message;
  },
};
