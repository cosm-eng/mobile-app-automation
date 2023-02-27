// export {};
const {join} = require('path');
const {config} = require('./wdio.shared.conf');

config.port = 4723;
// path: '/wd/hubsession',

config.specs = ['../tests/features/login.feature'];
config.capabilities = [{
        platformName: 'Android',
        'appium:deviceName': 'Pixel 3a XL',
        'appium:automationName': 'UIAutomator2',
        'appium:appPackage': 'com.cosm.cosmvenueapp',
        'appium:noReset': false,
        'appium:appActivity': 'com.cosm.cosmvenueapp.MainActivity',
        'appium:app': '/Users/monikayadav/Desktop/Cosm-Automation/bdd-appium-automation/apps/android/app-release.apk',
        'appium:udid': '9ARAX0LZ6Z',
        'appium:platformVersion': '12'
    },];

exports.config = config;
