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

//let loginButton = await driver.findElement(By.css("button.login-button"));
let loginButton = await driver.findElement(By.css("button.login-button"));
await loginButton.click();

// Navigate to the app dropdown
let appsDropDownBtn = await driver.wait(until.elementLocated(By.css('#navbarDropdown')), 5000);
await appsDropDownBtn.click();
await driver.sleep(5000);

//emailMarketing app
let emailMarketing = await driver.wait(until.elementLocated(By.css("#navbarNav > ul > li.nav-item.dropdown > div > a:nth-child(1)")), 10000);
await emailMarketing.click();

// Wait for the dropdown to be visible and click on it
let dropdown = await driver.wait(until.elementLocated(By.css('#navbarDropdown')), 5000);
await dropdown.click();

//  find and click on Email Marketing
const element = await driver.findElement(By.xpath("//*[text()='Email Marketing']"));
await element.click();
await driver.sleep(5000);
console.log('Dropdown option selected successfully!');

//click on Submit
let submitBtn = await driver.findElement(By.xpath("//*[text()='Start']"));
await submitBtn.click();
//await driver.sleep(5000);

//Click on Legend page    
// let legendPage = await driver.wait(until.elementLocated(By.xpath("//a[text()='Legend']")), 5000);
// await legendPage.click();
// await driver.sleep(5000);

let emailSubject = await driver.wait(until.elementLocated(By.xpath("//input[@type='text']")), 5000);
await emailSubject.sendKeys("John");


//let inputMean = await driver.findElement(By.xpath(("//*[text()='Enter The Mean Openrate']")), 5000);
let inputMean = await driver.findElement(By.xpath("//input[@placeholder='Enter The Mean Openrate']"));
await inputMean.sendKeys(637);


let standDeviation= await driver.findElement(By.xpath("//input[@placeholder='Enter The Standard Deviation']"));
await standDeviation.sendKeys(0.5);
await driver.sleep(5000);

let runOpenRate = await driver.findElement(By.xpath("//*[text()='Run Open Rate']"));
await runOpenRate.click();
await driver.sleep(10000);






} catch (error) {
console.error(`Error occurred: ${error}`);
} finally {
// Close the browser
await driver.quit();
}
}

// Run the test function
homePageTest().catch(console.error);