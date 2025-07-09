export class LoginPage {
    visit(){
        cy.visit('/#auth/login');
    }

   private enterUsername(username:string){
       cy.get('#userName').type(username); 
    }

    private enterPassword(password:string){
        cy.get('#pwInput').type(password);
    }

    private clickLogin(){
        cy.get('[name="submitButton"]') .should('be.visible') .click();
    }

    login(username: string, password: string){
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }
}