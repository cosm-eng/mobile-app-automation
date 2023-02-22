Appium is an open source, cross-platform test automation tool for native, hybrid and mobile web apps, tested on emulators (Android), and real devices (Android, macOS ).

Installation Required
1. Java(JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-18.0.2.1.jdk/Contents/Home
2. Android SDK(ANDROID_HOME=/Users/monikayadav/Library/Android/sdk)
3. Node.js 
4. NPM 
5. NVM - to maintain node versions
6. Android studio(optional): To run on emulators
7. Appium inspector(optional) : To locate elements 
8. VSC editor
9. webdriver setup and installation commands:
-- npm init
-- npm install webdriverio --save-dev
-- npm install @wdio/cli
-- ./node_modules/.bin/wdio config (NODE version must be 16.18.0):> npx command goes into the node modules and from there it takes web driver io which we just installed and then we are using the cli to run the config command

NOTE: node version 14.18.3 MUST required to run the code locally(nvm use 14.18.3) and node version 16.18.0: to install dependencies. 
