const { By, Key, Builder } = require('selenium-webdriver');
require('chromedriver');

async function example() {
  // var searchString = 'Automation testing with Selenium';

  //To wait for browser to build and launch properly
  const driver = await new Builder().forBrowser('chrome').build();

  //To fetch http://google.com from the browser with our code.
  await driver.get(
    'https://tikona-standalone-ccpl-xwf-internet-org.tikona.in.expresswifi.com/customer/app'
  );

  //To send a search query by passing the value in searchString.
  // console.log(await driver.findElement(By.js()));

  await driver.sleep(7000);

  await driver
    .findElement(By.css('button.ButtonMedium.BlockButton.PrimaryButton'))
    .click(); // .sendKeys(searchString, Key.RETURN);

  //Verify the page title and print it
  const title = await driver.getTitle();
  console.log('Title is:', title);

  //It is always a safe practice to quit the browser after execution
  await driver.sleep(40000);

  await driver.quit();
}

example();
