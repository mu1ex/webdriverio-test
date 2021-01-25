const wdio = require("webdriverio");
const assert = require('assert');

const opts = {
  path: "/wd/hub",
  port: 4723,
  capabilities: {
    platformName: "iOS",
    platformVersion: "13.3",
    app: "path to app build",
    appPackage: "apps bundle id",
    appActivity: ".MainActivity",
    automationName: "XCUITest",
  },
};

async function main() {
  const client = await wdio.remote(opts);
  const phoneField = await client.$("~Phone number");
  await phoneField.setValue("+914111111111");
  const value = await phoneField.getText();
  assert.strictEqual(value, "914111111111");
  await client.deleteSession();
}

main();

// For Android
// capabilities: {
//   platformName: "Android",
//   platformVersion: "8",
//   avd: "Pixel_2_API_24",
//   app: /absolute path to app build/
//   appPackage: "app.package.name",
//   appActivity: ".MainActivity",
//   automationName: "UiAutomator2",
// },