import { APIUtils } from "../Pages/ApiUtils";
import { LoginPage } from "../Pages/LoginPage";
import { DeletePortfolio } from "../Pages/DeletePortfolio";

describe("Create Portfolio using API", () => {
  const apiUtils = new APIUtils();
  const loginPage = new LoginPage();
  const deletePortfolio = new DeletePortfolio();

  let uniqueName: string;

  before(" Create an unique portfolio ", () => {
    uniqueName = `XO ${Date.now()}`;
    apiUtils.createPortfolioUsingAPI(uniqueName);
});

  it("Delete Portfolio", () => {
    cy.fixture('user_credentials').then((user) => {
    // Loging to the App  
    loginPage.visit();
    loginPage.login(user.username, user.password);

    // Delete Portfolio
    cy.wait(1000);
    deletePortfolio.deletePortfolio(uniqueName, 1);
    });
  });
});
