const { By, Key, Builder } = require('selenium-webdriver');
require('chromedriver');

async function example() {
  //To wait for browser to build and launch properly
  const driver = await new Builder().forBrowser('chrome').build();

  //To fetch from the browser with our code.
  await driver.get(
    'https://tikona-standalone-ccpl-xwf-internet-org.tikona.in.expresswifi.com/customer/app'
  );

  await driver.manage().window().maximize();

  await driver.sleep(3000);

  await driver
    .findElement(By.css('button.ButtonMedium.BlockButton.PrimaryButton'))
    .click();

  //Verify the page title and print it
  const title = await driver.getTitle();
  const url = await driver.getCurrentUrl();

  console.log('----------------------------------------------------');
  console.log('App name:', title);
  console.log('URL:', url);
  console.log('Data successfully credited to your account.');
  console.log('----------------------------------------------------');

  //It is always a safe practice to quit the browser after execution
  await driver.sleep(40000);

  await driver.quit();
}

Promise.all([example(), example(), example(), example()]);
