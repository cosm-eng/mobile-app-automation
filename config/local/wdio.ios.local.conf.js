export {};
const {join} = require('path');
const {config} = require('./wdio.shared.conf');

config.capabilities = [{
        platformName: 'iOS',
        maxInstances: 1,
        // deviceName: 'iPhone 12',
        // os_version: '15.2',
        // 'appium:orientation': 'PORTRAIT',
        // 'appium:automationName': 'XCUITest',
        // 'appium:app': join(process.cwd(), './e2e/apps/app_ios.app'),
        // 'appium:default': true,
        // 'appium:newCommandTimeout': 60
    },];

exports.config = config;
