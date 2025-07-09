import './commands';
//import { LoginPage } from 'cypress/e2e/XV4/Pages/LoginPage';


Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('isTrusted') || err.message.includes('[object Event]')) {
    return false; // prevent test from failing
  }
});


// describe('Logging into the Xyicon App', () => {
//   const loginPage = new LoginPage();

//   beforeEach(() => {
//     loginPage.visit();
//   });

//   it('Login Page', () => {
//     loginPage.login('harsha.gayathri@xyicon.com', 'Aaaa1111');
//   });
// });