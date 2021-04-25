"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chunk = function (list) {
    var sorted = list.sort();
    var chunks = [];
    var hunk = [];
    sorted.forEach(function (v) {
        if (hunk.length === 0) {
            hunk.push(v);
            return;
        }
        if (v === hunk[hunk.length - 1] + 1) {
            hunk.push(v);
            return;
        }
        if (hunk.length !== 0) {
            chunks.push(hunk);
            hunk = [];
        }
    });
    return chunks;
};
exports.default = chunk;
//# sourceMappingURL=index.js.map