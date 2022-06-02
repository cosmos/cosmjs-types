"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelCase = exports.capitalize = exports.camelToSnake = exports.maybeSnakeToCamel = void 0;
function maybeSnakeToCamel(s, options) {
    if (options.snakeToCamel.includes('keys') && s.includes('_')) {
        const hasLowerCase = !!s.match(/[a-z]/);
        return s
            .split('_')
            .map((word, i) => {
            // If the word is already mixed case, leave the exist case as-is
            word = hasLowerCase ? word : word.toLowerCase();
            return i === 0 ? word : capitalize(word);
        })
            .join('');
    }
    else {
        return s;
    }
}
exports.maybeSnakeToCamel = maybeSnakeToCamel;
function camelToSnake(s) {
    return s
        .replace(/[\w]([A-Z])/g, function (m) {
        return m[0] + '_' + m[1];
    })
        .toUpperCase();
}
exports.camelToSnake = camelToSnake;
function capitalize(s) {
    return s.substring(0, 1).toUpperCase() + s.substring(1);
}
exports.capitalize = capitalize;
function camelCase(s) {
    return s.substring(0, 1).toLowerCase() + s.substring(1);
}
exports.camelCase = camelCase;
