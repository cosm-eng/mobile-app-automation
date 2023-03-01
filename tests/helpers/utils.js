export function getSelectorByPlatform(selectors) {
    return driver.isAndroid ? selectors.ANDROID : selectors.IOS;
}

// export const wait = (ms = 0) => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// };
