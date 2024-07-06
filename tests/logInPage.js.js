const { Builder, By, Key, until } = require("selenium-webdriver");

async function homePageTest() {
    // Create a new instance of the Chrome driver
    let driver = await new Builder().forBrowser("chrome").build();
    
    try {
        // Navigate to the webpage
        await driver.get("https://73.222.84.110/login");
        driver.manage().window().maximize();

        // Perform actions on the webpage
        // Example: print the title of the page
        let title = await driver.getTitle();
        console.log(`Page title is: ${title}`);

        // Find the username input field and enter the username
        let usernameElem = await driver.findElement(By.css("input.username"));
        await usernameElem.sendKeys("demo");

        // Find the password input field and enter the password
        let passwordField = await driver.findElement(By.css("input.password"));
        await passwordField.sendKeys('siriusmindshare');

        // Optionally, find and click the login button
        //let loginButton = await driver.findElement(By.css("button.login-button"));
        let loginButton = await driver.findElement(By.css("button.login-button"));
        await loginButton.click();

        // Navigate to the app dropdown
                // Wait for the Apps dropdown to be visible and click it
                let appsDropDownBtn = await driver.wait(until.elementLocated(By.css('#navbarDropdown')), 5000);
                await appsDropDownBtn.click();
                await driver.sleep(5000);
                console.log('Apps dropdown clicked successfully!');

                //emailMarketing app
                let emailMarketing = await driver.wait(until.elementLocated(By.css("#navbarNav > ul > li.nav-item.dropdown > div > a:nth-child(1)")), 10000);
                await emailMarketing.click();
                //await driver.sleep(5000);
                console.log('Apps dropdown clicked successfully!');


            //Legend page    
            // let legendPage = await driver.wait(until.elementLocated(By.xpath("//a[text()='Legend']")), 5000);
            //     legendPage.click();
                //await driver.sleep(5000);


         // Wait for the dropdown to be visible
        //  let dropdown = await driver.wait(until.elementLocated(By.css('#navbarDropdown')), 5000);
        //  // Click the dropdown to display the options
        //  await dropdown.click();
 
        //  // Wait for the option to be clickable and then click it
        //  let option = await driver.wait(until.elementLocated(By.css('#navbarNav > ul > li.nav-item.dropdown > div > a:nth-child(1)"]')), 5000);
        //  await option.click();
 
         console.log('Dropdown option selected successfully!');
        //let appEmailMarket = await driver.findElement(By.css(" #navbarNav > ul > li.nav-item.dropdown > div > a:nth-child(1)"));
        //await driver.wait(until.elementLocated(By.css('.navbar-toggler-icon')), 5000);
        //driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

    } catch (error) {
        console.error(`Error occurred: ${error}`);
    } finally {
        // Close the browser
        await driver.quit();
    }
}

// Run the test function
homePageTest().catch(console.error);