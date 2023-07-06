var webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit: (10000)});

class BasePage{
    constructor(){
        global.driver = driver;
    }
    async go_to_url(theURL){
        await driver.get(theURL);
    }
    async enterTextByCss(css, searchText){
        await driver.findElement(By.css(css)).sendKeys(searchText);
    }
    async enterTextByXpath(xpath, name){
        await driver.findElement(By.xpath(xpath)).sendKeys(name);
    }
    async clickById(id){
        await driver.findElement(By.id(id)).click();
    }
    async clickByCss(css){
        await driver.findElement(By.css(css)).click();
    }
    async enterTextById(id,text){
        await driver.findElement(By.id(id)).sendKeys(text);
    }
    async clickByLink(link){
        await driver.findElement(By.linkText(link)).click();
    }
    async getTextElement(css){
        await driver.findElement(By.css(css)).getText();
    }
    async isElementVisible(xpath){
        await driver.findElement(By.xpath(xpath)).isDisplayed().then(function(state){
            driver.quit();
        });
    }
    async closeBrowser(){
        await driver.quit();
    }
}

module.exports = BasePage;