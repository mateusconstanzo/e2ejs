
import {
    config,
    paths
} from 'e2ejs'

config.baseUrl = 'http://www.google.com.br';

config.cucumberOpts = {
    compiler: "ts:ts-node/register",
    require: [
        paths.steps,
        paths.support,
        "./steps/*.js"
    ],
    format: "json:./reports/cucumber_report.json",
    tags: ""
}

exports.config = config