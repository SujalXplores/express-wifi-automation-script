const { By, Builder, until } = require('selenium-webdriver');
const { URL_HOME, WATCH_AD_BUTTON_SELECTOR } = require('./constants');
require('chromedriver');

(() => {
  'use strict';

  async function exWifi() {
    //To wait for browser to build and launch properly
    const driver = await new Builder().forBrowser('chrome').build();
    try {
      // Enters the given URL
      await driver.get(URL_HOME);

      // Maximize window and wait for button to load
      // TODO: Find a way to wait until the button loads properly in the DOM.
      await driver.manage().window().maximize();
      await driver.sleep(4000);

      // Find and click on the button by cssSelector
      await driver.findElement(By.css(WATCH_AD_BUTTON_SELECTOR)).click();

      // Waiting for ads to finish
      await driver.sleep(2000);
      await driver.wait(until.urlIs(URL_HOME));
      await driver.sleep(2000);

      //Verify the page title and print it
      const title = await driver.getTitle();
      const url = await driver.getCurrentUrl();

      console.log('----------------------------------------------------');
      console.log('📝 App name:', title);
      console.log('🚨 URL:', url);
      console.log('✅ Data successfully credited to your account.');
      console.log('----------------------------------------------------');

      //It is always a safe practice to quit the browser after execution
      await driver.close();
      console.log('Window closed!');
    } catch (e) {
      console.log('🥅 Error Occurred!!!', e.message);
      await driver.close();
      return;
    }
  }

  Promise.all([exWifi(), exWifi(), exWifi(), exWifi()]);
})();
