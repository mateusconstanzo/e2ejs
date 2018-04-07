
const config = require('e2ejs').config;

config.baseUrl = 'http://www.google.com.br';

config.cucumberOpts = {
    compiler: "ts:ts-node/register",
    require: [
        `${process.cwd()}/node_modules/e2ejs/dist/steps/*`,
        `${process.cwd()}/node_modules/e2ejs/dist/support/*`,
    ],
    format: "json:./reports/cucumber_report.json",
    tags: ""
}

exports.config = config