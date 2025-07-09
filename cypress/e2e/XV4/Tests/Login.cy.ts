import { LoginPage } from "../Pages/LoginPage";

describe('Logging in to the Xyicon App', () => {
  const loginPage = new LoginPage();

  it('Login using credentials from fixture', () => {
    cy.fixture('user_credentials').then((user) => {
      loginPage.visit();
      loginPage.login(user.username, user.password);
    });
  });
});
