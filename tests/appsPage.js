const{Builder, By, Key}=require("selenium-webdriver");

const assert = require("assert");


async function appsPage(){
    //launch browser
    let driver = await new Builder().forBrowser("chrome").build();
    //navigate to app-n
    await driver.get("https://73.222.84.110/login");
        driver.manage().window().maximize();

        // Perform actions on the webpage
        // Example: print the title of the page
        let title = await driver.getTitle();
        console.log(`Page title is: ${title}`);
        let appsDropDownBtn = await driver.findElement(By.xpath("//a[@href='#']"));
}




