import { LoginPage } from "../Pages/LoginPage";
import { CreatePortfolio } from "../Pages/CreatePortfolio";
import { CreateSpace } from "../Pages/CreateSpace";

describe('Portfolio Module' , () => {
    const loginPage = new LoginPage();
    const createportfolio = new CreatePortfolio();
    const createnewspace = new CreateSpace();
    
beforeEach(() => {
        loginPage.visit();
        loginPage.enterUsername('harsha.gayathri@xyicon.com');
        loginPage.enterPassword('Aaaa1111');
        loginPage.clickLogin(); 

});

it('Create Portfolio and Add New Space', () => {
    createportfolio.clickCreatePortfolio();
    createportfolio.enterPortfolioName('Xyicon Office Colombo');
    createportfolio.selectPortfolioType('Building');
    createportfolio.clickCreateButton();
    createportfolio.clickAddNewSpaceButton();

    createnewspace.enterVersionName('Drawing 1');
    createnewspace.clickNextButtonInStep1();

    createnewspace.selectSpaceType('Floor Plan');
    createnewspace.addNewPDF();
    createnewspace.clickNextButtonInStep2();

    createnewspace.clickNextButtonInStep3();

    createnewspace.setSpaceScales();
    createnewspace.enterDistance(32);

    createnewspace.clickNextButtonInStep4();
    
    createnewspace.clickCreateButtonInLastStep();

    createnewspace.verifyCreatedSpace('Floor 1');
});

});