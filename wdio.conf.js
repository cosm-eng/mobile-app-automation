const allure = require('allure-commandline')
exports.config = {
    runner: 'local',

    port: 4723,
    path: '/wd/hubsession',
    // specs: [
    //     './tests/features/login.feature', './tests/features/signup.feature'
    // ],
    specs: ['./tests/features/login.feature'],
    // specs: ['./tests/features/ticketsflow.feature'],
    // specs: ['./tests/features/signup.feature'],
    // specs: [
    //     './tests/features/signup.feature', './tests/features/login.feature', './tests/features/ticketsflow.feature',
    // ],

    // specs: [
    //     'e2e/tests/features/Login.feature', 'e2e/tests/features/Logout.feature',
    // ],

    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,
    // //For real device
    capabilities: [
        {
            platformName: 'Android',
            'appium:deviceName': 'Pixel 3a XL',
            'appium:automationName': 'UIAutomator2',
            'appium:appPackage': 'com.cosm.cosmvenueapp',
            'appium:noReset': false,
            'appium:appActivity': 'com.cosm.cosmvenueapp.MainActivity',
            'appium:app': '/Users/monikayadav/Desktop/Cosm-Automation/bdd-appium-automation/apps/android/app-release.apk',
            'appium:udid': '9ARAX0LZ6Z',
            'appium:platformVersion': '12'
        }
    ],

    // //For Emulator
    // capabilities: [
    //     {
    //         platformName: 'Android',
    //         'appium:platformVersion': '12',
    //         'appium:deviceName': 'Pixel 3a API 31',
    //         'appium:automationName': 'UIAutomator2',
    //         'appium:app': '/Users/monikayadav/Desktop/Cosm-Automation/appium-automation/app/android/app-release.apk'
    //     }

    // ],


    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://0.0.0.0',

    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        [
            'appium', {
                args: {
                    address: 'localhost',
                    port: 4723,
                    relaxedSecurity: true
                },
                logPath: './'
            }
        ]
    ],
    framework: 'cucumber',
    reporters: [
        'spec',
        [
            'allure', {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false
            }
        ]
    ],


    //
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        requireModule: [],
        // require: ['./tests/step-definitions/login.step.js'],
        // require: ['./tests/step-definitions/ticketsflow.step.js'],
        // require: ['./tests/step-definitions/signup.step.js'],
        require: [
            './tests/step-definitions/login.step.js', './tests/step-definitions/common.step.js'
        ],
        // require: [
        //     './tests/step-definitions/login.step.js', './tests/step-definitions/signup.step.js'
        // ],
        // require: [
        //     './tests/step-definitions/signup.step.js', './tests/step-definitions/login.step.js', './tests/step-definitions/ticketsflow.step.js',
        // ],
        backtrace: false,
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        source: true,
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },
    appium: {
        log: false,
        command: 'appium'
    },

    beforeStep: function (step, scenario, context) {
        driver.pause(1000);
    },
    // beforeScenario: function (world, context) {
    //     driver.launchApp();
    // },
    // afterScenario: function (world, result, context) { // browser.closeApp()
    //     driver.closeApp();
    // },
    onComplete: function () {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(() => reject(reportError), 5000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    }
    // afterStep: async function (step, scenario, {
    //     error,
    //     duration,
    //     passed
    // }, context) {
    //     if (error) {
    //         await driver.takeScreenshot;
    //     }
    // }


};
