const homepage = require('../pages/homepage');
const registrationForm = require('../pages/registrationpage');
const accountPage = require('../pages/accountpage');

async function wrongRegistration(){

    var baseurl = 'https://www.c-and-a.com/es/es/shop';
    var name = 'Samuel';
    var lastNameame = 'Mahieu';
    var email = 'Mirem1983@fleckens.hu';
    var password = 'fhueij'
    var errorMessage = "//span[contains(text(),'¡Lo sentimos, pero algo ha fallado!')]";

    await homepage.enter_url(baseurl);

    //Calling the function to open the registration form
    await homepage.clickToOpenRegistrationForm();

    //Filling in the form
    await registrationForm.typeInformations(name,lastNameame,email,password);

    //Verifying that the registration went throught
    await accountPage.verifyLogin(errorMessage);

}
wrongRegistration();