export function getSelectorByPlatform<T>(selectors: { ANDROID: T; IOS: T }): T {
  return driver.isAndroid ? selectors.ANDROID : selectors.IOS;
}

export const wait = (ms = 0) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
