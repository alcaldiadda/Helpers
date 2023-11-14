"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailValidation = void 0;
var emailValidation = function (emailAddress) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress);
};
exports.emailValidation = emailValidation;
//# sourceMappingURL=emailValidation.js.map