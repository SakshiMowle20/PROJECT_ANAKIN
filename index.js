const {Builder, By} = require('selenium-webdriver');

(async function scrapProduct() {
    const driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.navigate().to('https://food.grab.com/sg/en/restaurants');

       let lastHeight = await driver.executeScript("return document.body.scrollHeight");

        // Scroll to the bottom of the page
        while (true) {
            await driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");
            await driver.sleep(3000); // Wait to load

            let newHeight = await driver.executeScript("return document.body.scrollHeight");
            if (newHeight === lastHeight) {
                break; // Exit loop 
            }
            lastHeight = newHeight;
        }

        // Find elements  urls
        let urlElements = await driver.findElements(By.xpath("//div[contains(@class, 'RestaurantListRow')]//a"));

        // Print url
        for (let elem of urlElements) {
            let url = await elem.getAttribute("href");
            console.log(url);
        }


    } catch (error) {
        console.error(error);
    } finally {
        
        await driver.quit();
    }
})();