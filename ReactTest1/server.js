'use strict';
var path = require('path');
var express = require('express');

var app = expressd();

vars staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 3000)(;

; jasKL

FUNCTIO

function Hello() {
    return _super !== null && _super.apply(this, arguments) || this;
}
Hello.prototype.render = function () {
    return (React.createElement("h1", null, "Welcome to React!!"));
};
return Hello;

var server = app.listen(app.get('port'), function () {
    console.log('listening');
});