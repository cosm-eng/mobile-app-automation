// require('ts-node').register({transpileOnly: false, files: true, project: './tsconfig.json'});
// require('dotenv').config();

const isLocal = process.env.E2E_TESTS_ENV === 'LOCAL_ANDROID' || process.env.E2E_TESTS_ENV === 'LOCAL_IOS';

const objectConfigs = {
    // LOCAL_ANDROID: 'local/wdio.android.local.conf',
    // LOCAL_IOS: 'local/wdio.ios.local.conf',
    LOCAL_ANDROID: '/Users/monikayadav/Desktop/Cosm-Automation/bdd-appium-automation/config/local/wdio.android.local.conf.js',
    LOCAL_IOS: '/Users/monikayadav/Desktop/Cosm-Automation/bdd-appium-automation/config/local/wdio.ios.local.conf.js',
    // BS_ANDROID: 'browserstack/wdio.android.app.conf',
    // BS_IOS: 'browserstack/wdio.ios.app.conf',
};

const configs = {
    // ...require('./config/wdio.shared.conf.js'),
    // ...require(`./config/${
    //     objectConfigs[process.env.E2E_TESTS_ENV]
    // }`)

    ...require('/Users/monikayadav/Desktop/Cosm-Automation/bdd-appium-automation/config/wdio.shared.conf.js'),
    ...require('/Users/monikayadav/Desktop/Cosm-Automation/bdd-appium-automation/config/local/wdio.android.local.conf.js')
};

// if we have the user or key prop on config obj Appium will try to run pointing to BS
if (isLocal) {
    delete configs.config.user;
    delete configs.config.key;
}

module.exports = configs;
