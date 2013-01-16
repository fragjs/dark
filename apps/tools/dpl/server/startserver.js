

var HttpServer = require('xfly/httpserver');
var Configs = require('./configs.js');

var server = new HttpServer();

server.host = System.Configs.host;
server.port = System.Configs.port;
server.physicalPath = System.Configs.physicalPath;

server.start();

System.Configs.rootUrl = server.rootUrl;

module.exports = server;