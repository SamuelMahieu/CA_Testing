const homepage = require('../pages/homepage');
const registrationForm = require('../pages/registrationpage');
const accountPage = require('../pages/accountpage');

async function registration(){

    var baseurl = 'https://www.c-and-a.com/es/es/shop';
    var name = 'Samuel';
    var lastNameame = 'Mahieu';
    //Change the address mail
    var email = 'Venceptant45@einrot.com';
    var password = 'S@mu3l31'
    var closeSessionButton = "//body/div[@id='root']/div[5]/div[1]/button[1]";


    await homepage.enter_url(baseurl);

    //Calling the function to open the registration form
    await homepage.clickToOpenRegistrationForm();

    //Filling in the form
    await registrationForm.typeInformations(name,lastNameame,email,password);

    //Verifying that the registration went throught
    await accountPage.verifyLogin(closeSessionButton);

}
registration();