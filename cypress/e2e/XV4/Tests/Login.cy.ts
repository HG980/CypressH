import { LoginPage } from "../Pages/LoginPage";

describe('Loging to the Xyicon APP' , () => {
    const loginPage = new LoginPage();
it('Login Page', () => {
    loginPage.visit();
    loginPage.login('harsha.gayathri@xyicon.com' ,'Aaaa1111');
});

});