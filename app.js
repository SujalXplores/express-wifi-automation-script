const { URL_HOME } = require('./constants');

const { By, Builder, until } = require('selenium-webdriver');
require('chromedriver');

(() => {
  'use strict';
  const exWifi = async () => {
    //To wait for browser to build and launch properly
    const driver = await new Builder().forBrowser('chrome').build();
    try {
      // Enters the given URL
      await driver.get(URL_HOME);
      await driver.get(URL_HOME + '/ads');
      await driver.wait(until.urlIs(URL_HOME));
      await driver.sleep(2000);
      //Verify the page title and print it
      const title = await driver.getTitle();
      const url = await driver.getCurrentUrl();

      console.log('Time:', new Date().toLocaleString());
      console.log('📝 App name:', title);
      console.log('🚨 URL:', url);
      console.log('✅ Data successfully credited to your account.');
      console.log('----------------------------------');

      //It is always a safe practice to quit the browser after execution
      await driver.close();
    } catch (e) {
      console.log('🥅 Error:', e.message);
      await driver.close();
      return;
    }
  };

  Promise.all([
    exWifi(),
    exWifi(),
    exWifi(),
    exWifi(),
    exWifi(),
    exWifi(),
    exWifi(),
    exWifi(),
  ]).then(() => {
    console.log('🚀 All done!');
  });
})();
