
export class LoginPage {
    visit(){
        cy.visit('/#auth/login');
    }

    enterUsername(username:string){
       cy.get('#userName').type(username); 
    }

    enterPassword(password:string){
        cy.get('#pwInput').type(password);
    }

    clickLogin(){
        cy.get('[name="submitButton"]') .should('be.visible') .click();
    }
}