var Bpm = require('bpm/lib');

var buildSrc = process.argv[2];

if (buildSrc) {



}

console.log(buildSrc)

// var Builder = require('../builder/builder');
//var Configs = require('../configs/build');
//var Path = require('path');

//var builder = new Builder();

//// �������ļ��е� from �� to ͳһ��Ϊ����·����
//var rootPath = require('./configs').rootPath;

//if (Configs.from)
//	Configs.from = Path.resolve(rootPath, Configs.from);

//if (Configs.to)
//	Configs.to = Path.resolve(rootPath, Configs.to);

//builder.loadConfigs(Configs);
//builder.build("/", ".html");