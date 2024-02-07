"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidURL = void 0;
var urlRegex = /^(https?|ftp):\/\/(([a-z\d]([a-z\d-]*[a-z\d])?\.)+[a-z]{2,}|localhost)(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;
var isValidURL = function (url) {
    return urlRegex.test(url);
};
exports.isValidURL = isValidURL;
