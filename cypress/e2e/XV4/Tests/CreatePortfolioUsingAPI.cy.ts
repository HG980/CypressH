import { LoginPage } from "../Pages/LoginPage";
import { DeletePortfolio } from "../Pages/DeletePortfolio";

  describe("Create Portfolio using API", () => {
    let authToken: string;
    const loginPage = new LoginPage();
    const deletePortfolio = new DeletePortfolio();

  before("Create Access Token", () => {
    cy.request({
      method: 'POST',
      url: 'https://qaapi.xyicon.com/auth/signin',
      headers: { 'Content-Type': 'application/json' },
      body: {
        clientID: "SRV4Developer",
        clientSecret: "Je6DqN0pmFNijjdyLAm34G552bcRfSR80jbsM5vv",
        grantType: "password",
        username: "harsha.gayathri@xyicon.com",
        password: "Aaaa1111"
      }
    })
    .then((response) => {
      expect(response.status).to.eq(200);
      authToken = response.body.accessToken;
    });
    });

  it("Create and delete a portfolio via UI", () => {
    const uniqueName = `XO ${Date.now()}`;

    cy.request({
      method: 'PUT',
      url: 'https://qaapi.xyicon.com/portfolios/create',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authToken
      },
      body: {
        name: uniqueName,
        organizationID: "efae9cfd-dfc9-4108-ae8b-c178d7c68c52",
        portfolioTypeID: "8ca127ec-b704-4aac-a507-05964220d8e5"
      }
    })
    .then((response) => {
      expect(response.status).to.eq(200);
      cy.log(" Portfolio Created: " + uniqueName);

      
      cy.fixture('user_credentials').then((user) => {
        loginPage.visit();
        loginPage.login(user.username, user.password);

        
        cy.wait(2000);
        deletePortfolio.deletePortfolio(uniqueName, 1);
      });
    });
  });
});