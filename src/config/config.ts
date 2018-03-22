import * as path from "path";
import { browser, Config } from "protractor";

export const config: Config = {

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: "http://www.google.com",

    capabilities: {
        browserName: "chrome",
    },

    specs: [
        "../features/*.feature",
    ],

    /**
     * CucumberJS specific
     */
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        require: [
            "../steps/*", 
            "../support/*"
        ],
        format: "json:./reports/cucumber_report.json",
        tags: "@TypeScriptScenario or @CucumberScenario or @ProtractorScenario",
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
        console.log(`\nThe directory './tmp', which holds reports / screenshots is being removed.\n`);
        console.log(`==========================================================================\n`);
        //fs.removeSync('./.tmp');
    },
    

    onComplete: () => {
        
    },
};
