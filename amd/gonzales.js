define(function (require, exports, module) {

// CSSP
exports.srcToCSSP = require('./gonzales.cssp.node').srcToCSSP;

exports.csspToSrc = require('./cssp.translator.node').csspToSrc;

exports.csspToTree = function(tree, level) {
    var spaces = dummySpaces(level),
        level = level ? level : 0,
        s = (level ? '\n' + spaces : '') + '[';

    tree.forEach(function(e) {
        if (e.ln === undefined) {
            s += (Array.isArray(e) ? exports.csspToTree(e, level + 1) : ('\'' + e.toString() + '\'')) + ', ';
        }
    });

    return s.substr(0, s.length - 2) + ']';
}

function dummySpaces(num) {
    return '                                                  '.substr(0, num * 2);
}

});
