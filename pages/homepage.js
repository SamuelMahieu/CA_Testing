const {Key} = require('selenium-webdriver');
var BasePage = require ('../pages/basepage');

class HomePage extends BasePage{

   
    async enter_url(theURL){
        await this.go_to_url(theURL);
    }

    async clickToOpenRegistrationForm(){
        var accountIcon = 'button[data-qa="HeaderAccountButton"]';
        var linkToRegistrate = 'Regístrate ahora';
        await this.clickByCss(accountIcon);
        await this.clickByLink(linkToRegistrate);
    }

    async clickToLogin(email,password){
        
        var accountIcon = 'button[data-qa="HeaderAccountButton"]';
        var emailTextField = 'myaccount_login_email';
        var passwordTextField = 'myaccount_login_password';
        var buttonSubmit = 'button[data-qa="LoadingButton"]';
        var buttonCookies = "onetrust-accept-btn-handler";

        await this.clickByCss(accountIcon);
        await this.enterTextById(emailTextField,email);
        await this.enterTextById(passwordTextField,password);
        await this.clickByCss(buttonSubmit);
        //Click on Accept cookies
        await this.clickById(buttonCookies)
        //Clicking again on the accountIcon to go the account page
        await this.clickByCss(accountIcon);
    }


}
module.exports = new HomePage();