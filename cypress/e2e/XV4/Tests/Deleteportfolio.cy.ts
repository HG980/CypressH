
import { LoginPage } from "../Pages/LoginPage";
import { DeletePortfolio } from "../Pages/DeletePortfolio";

describe('Delete Portfolio Test', () => {
  const loginPage = new LoginPage();
  const deletePortfolio = new DeletePortfolio();

  before(() => {
    cy.fixture('user_credentials').then((user) => {
      loginPage.visit();
      loginPage.login(user.username, user.password);
    });
  });

  it('Delete Portfolio', () => {
    const portfolioName = 'Z123';
    deletePortfolio.deletePortfolio(portfolioName , 1 );
  });
});

