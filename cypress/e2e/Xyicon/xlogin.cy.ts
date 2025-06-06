
describe('Xyicon App', () => { 
    it('Login Page', () => {
        cy.visit('https://qaapp.xyicon.com/#auth/login');
        console.log("login test");
        cy.get('#userName').type('harsha.gayathri@xyicon.com');
        cy.get('#pwInput').type('Aaaa1111')
        cy.get('.primary').click()
    });
});
