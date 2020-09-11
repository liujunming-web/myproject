"use strict";
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User11";
console.log(greeter(user));
var Log = /** @class */ (function () {
    function Log() {
    }
    Log.prototype.print = function (msg) {
        console.log(msg);
    };
    return Log;
}());
var dec = function (target, property) {
    var old = target.prototype[property];
    target.prototype[property] = function (msg) {
        msg = "{" + msg + "}";
        old(msg);
    };
};
dec(Log, 'print');
dec(Log, 'print');
dec(Log, 'print');
var log = new Log();
log.print('123');
