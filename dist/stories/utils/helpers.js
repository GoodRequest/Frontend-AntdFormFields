"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mock = void 0;
// eslint-disable-next-line import/prefer-default-export
const mock = (success, timeout, data = '') => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve(data);
            }
            else {
                // eslint-disable-next-line prefer-promise-reject-errors
                reject({ message: 'Error' });
            }
        }, timeout);
    });
};
exports.mock = mock;
//# sourceMappingURL=helpers.js.map