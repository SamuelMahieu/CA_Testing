const homepage = require('../pages/homepage');
const accountpage = require('../pages/accountpage');

async function login(){

    var baseurl = 'https://www.c-and-a.com/es/es/shop';
    
    var email = 'Hato1981@cuvox.de';
    var password = 'S@mu3l31';

    await homepage.enter_url(baseurl);

    //Calling the function to login
    await homepage.clickToLogin(email,password);

    //Verrifying that the HeadLine of the account is there
    await accountpage.VerifyLogin();
}
login();