export class APIUtils {
  private baseUrl = Cypress.env('apibaseUrl');

  private getAccessToken(username: string, password: string) {
    return cy.request({
      method: 'POST',
      url: `${this.baseUrl}/auth/signin`,
      headers: { 'Content-Type': 'application/json' },
      body: {
        clientID: "SRV4Developer",
        clientSecret: "Je6DqN0pmFNijjdyLAm34G552bcRfSR80jbsM5vv",
        grantType: "password",
        username: username,
        password: password
      }
    });
  }

  private createPortfolio(authToken: string, uniqueName: string) {
    return cy.request({
      method: 'PUT',
      url: `${this.baseUrl}/portfolios/create`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      body: {
        name: uniqueName,
        organizationID: "efae9cfd-dfc9-4108-ae8b-c178d7c68c52",
        portfolioTypeID: "8ca127ec-b704-4aac-a507-05964220d8e5"
      }

    });
  }

  createPortfolioUsingAPI(uniqueName: string) {
    cy.fixture('user_credentials').then((user) => {
    this.getAccessToken(user.username, user.password).then((response) => {
    const token = response.body.accessToken;

    this.createPortfolio(token, uniqueName).then((createPortfolioResponse) => {
    expect(createPortfolioResponse.status).to.eq(200);
    
    cy.log(" Portfolio created: " + uniqueName);
        });
      });
    });
  }
}