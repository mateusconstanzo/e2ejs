
import { config } from 'e2ejs'

config.baseUrl = 'http://www.google.com.br';

config.multiCapabilities = [
    {
        browserName: 'chrome',
        chromeOptions: {
            args: ['disable-infobars']
        },
        shardTestFiles: true,
        maxInstances: 5,
        deviceProperties: {
            browser: {
                name: 'chrome',
                version: 'latest'
            },
            device: 'local development machine',
            platform: {
                name: 'Ubuntu',
                version: '17.10'
            }
        }
    },
    {
        browserName: 'firefox',
        shardTestFiles: true,
        maxInstances: 5,
        deviceProperties: {
            browser: {
                name: 'firefox',
                version: 'latest'
            },
            device: 'local development machine',
            platform: {
                name: 'Ubuntu',
                version: '17.10'
            }
        }
    }
];

exports.config = config