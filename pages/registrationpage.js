const {Key} = require('selenium-webdriver');
var BasePage = require ('../pages/basepage');

class RegistrationPage extends BasePage{

    async typeInformations(name,lastNameame,email,password){
        var radioButton = 'label[data-qa="RadioButtonMR"]';
        var idName = 'firstName';
        var idLastName = 'lastName';
        var idEmail = 'emailAddress';
        var idPassword = 'password';
        var submitButton = 'button[data-qa="LoadingButton"]';

        
        await this.clickByCss(radioButton);
        await this.enterTextById(idName,name);
        await this.enterTextById(idLastName,lastNameame);
        await this.enterTextById(idEmail,email);
        await this.enterTextById(idPassword,password);
        await this.clickByCss(submitButton);
    }

    
}
module.exports = new RegistrationPage();