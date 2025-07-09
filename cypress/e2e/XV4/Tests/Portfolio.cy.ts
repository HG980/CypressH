import { LoginPage } from "../Pages/LoginPage";
import { CreatePortfolio } from "../Pages/CreatePortfolio";
import { CreateSpace } from "../Pages/CreateSpace";

describe('Portfolio Module' , () => {
    const loginPage = new LoginPage();
    const createportfolio = new CreatePortfolio();
    const createnewspace = new CreateSpace();

it('Create Portfolio and Add New Space', () => {

    loginPage.visit();
    loginPage.login('harsha.gayathri@xyicon.com' ,'Aaaa1111');

    createportfolio.createportfolio('Xyicon office Colombo', 'Building' );

    createnewspace.createspace('Drawing 1' , 'Floor Plan' , 32 , 'Floor 1');
});
});