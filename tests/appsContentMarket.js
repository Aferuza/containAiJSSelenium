const { Builder, By, Key, until } = require("selenium-webdriver");

async function homePageTest() {
// Create a new instance of the Chrome driver
let driver = await new Builder().forBrowser("chrome").build();

try {
// Navigate to the webpage
await driver.get("https://73.222.84.110/login");
driver.manage().window().maximize();


//print the title of the page
let title = await driver.getTitle();
console.log(`Page title is: ${title}`);

// Find the username input field and enter the username
let usernameElem = await driver.findElement(By.css("input.username"));
await usernameElem.sendKeys("demo");

// Find the password input field and enter the password
let passwordField = await driver.findElement(By.css("input.password"));
await passwordField.sendKeys('siriusmindshare');

//Login btn
let loginButton = await driver.findElement(By.css("button.login-button"));
await loginButton.click();

//Navigate to the app dropdown icon
let appsDropDownBtn = await driver.wait(until.elementLocated(By.css('#navbarDropdown')), 5000);
await appsDropDownBtn.click();
await driver.sleep(5000);

//  find and click on Content marketing
let contentMarket = await driver.findElement(By.xpath("//*[text()='Content marketing']"));
await contentMarket.click();
await driver.sleep(5000);

} catch (error) {
    console.error(`Error occurred: ${error}`);
    } finally {
    // Close the browser
    await driver.quit();
    }
    }
    
    // Run the test function
    homePageTest().catch(console.error);