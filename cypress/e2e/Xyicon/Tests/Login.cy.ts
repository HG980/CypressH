import { LoginPage } from "../Pages/LoginPage";

describe('Loging to the Xyicon APP' , () => {
    const loginPage = new LoginPage();
it('Login Page', () => {
    loginPage.visit();
    loginPage.enterUsername('harsha.gayathri@xyicon.com');
    loginPage.enterPassword('Aaaa1111');
    loginPage.clickLogin();
});
});