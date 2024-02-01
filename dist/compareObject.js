"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareObject = void 0;
var compareObject = function (original, modified) {
    var _a, _b, _c;
    var add = [];
    var mod = [];
    var del = [];
    // finds deleted and updated keys
    for (var key in original) {
        if (!(key in modified)) {
            del.push((_a = {}, _a[key] = original[key], _a));
        }
        else if (original[key] !== modified[key]) {
            mod.push((_b = {}, _b[key] = [original[key], modified[key]], _b));
        }
    }
    // finds new keys
    for (var key in modified) {
        if (!(key in original)) {
            add.push((_c = {}, _c[key] = modified[key], _c));
        }
    }
    return { add: add, mod: mod, del: del };
};
exports.compareObject = compareObject;
