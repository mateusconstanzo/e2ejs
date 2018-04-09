import * as path from "path";
import * as dotenv from 'dotenv';
import { browser, Config } from "protractor";
import { argv } from 'yargs'
import { removeSync } from 'fs-extra'

dotenv.config();

const production = false;

let e2ejsPath = "";

if (production) {
    e2ejsPath = require.resolve('e2ejs').replace('index.js', '');
}

export interface Paths {

    steps: string;
    support: string;

}

export const paths : Paths = {

    steps: `${e2ejsPath}/steps/*`,
    support: `${e2ejsPath}/support/*`

}

export const config: Config = {

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: process.env.BASE_URL,

    capabilities: {
        browserName: "chrome",
    },

    specs: getFeatureFiles(),

    /**
     * CucumberJS specific
     */
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        require: getCucumberOptsRequire(),
        format: "json:./reports/cucumber_report.json",
        tags: argv.tag || ""
    },


    /**
     * The new reporting plugin
     */
    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options: {
            automaticallyGenerateReport: true,
            metadataKey: 'deviceProperties',
            removeExistingJsonReportFile: true,
            removeOriginalJsonReportFile: true
        }
    }],


    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
    },


    beforeLaunch: () => {
        console.log(`\n==========================================================================`);
        console.log(`\nThe directory './reports', which holds reports / screenshots is being removed.\n`);
        console.log(`==========================================================================\n`);
        removeSync('./reports');
    },


    onComplete: () => {

    },
};

function getFeatureFiles() {

    if (argv.feature) {
        let pathFeature = argv.pathFeature || `${process.cwd()}/features/`
        return argv.feature.split(',').map(feature => `${pathFeature}/**/${feature}.feature`);
    }

    return [`${process.cwd()}/features/*.feature`];
}

function getCucumberOptsRequire() {

    if (production) {

        return [
            paths.steps,
            paths.support,
        ];

    }

    return [
        "../steps/*.js",
        "../support/*.js"
    ];
}