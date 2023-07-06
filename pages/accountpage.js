const {Key, By} = require('selenium-webdriver');
const BasePage = require ('../pages/basepage');
const homepage = require('../pages/homepage');

class AccountPage extends BasePage{

    async verifyLogin(element){
      var closeSessionButton = "//body/div[@id='root']/div[5]/div[1]/button[1]";

      try{
        this.isElementVisible(element);
      }catch(error){
        console.log("You did not click on the account button and couldn't ");
      }
      
    }
    
}
module.exports = new AccountPage();