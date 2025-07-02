
export class CreatePortfolio {

    private clickCreatePortfolio(){
        cy.get('[title="Create Portfolio Item"]', { timeout: 10000 } ) .should('be.visible') .click();
    }
    
    private enterPortfolioName(portfolioname: string){
       cy.get('.CreatePortfolioPanel .ClickToEditInput') .should('be.visible') .type(portfolioname);
    }

    private selectPortfolioType(portfoliotype: string){
     cy.get('.CreatePortfolioPanel .SelectInput') .should('be.visible') .click();
     cy.get('.list-search') .type(portfoliotype);
     cy.get('.option') .should('be.visible').click();
    }

    private clickCreateButton(){
    cy.get('[title="Create"]') .should('be.visible') .click();
    }

    private clickAddNewSpaceButton(){
        cy.get('.EmptyListView', { timeout: 10000 }) .scrollIntoView();
        cy.get('[data-cy="Button.Add New Space"]', { timeout: 10000 } ) .should('be.visible') .click();
    }

    createportfolio(portfolioname: string , portfoliotype: string ){
        this.clickCreatePortfolio();
        this.enterPortfolioName(portfolioname);
        this.selectPortfolioType(portfoliotype);
        this.clickCreateButton();
        this.clickAddNewSpaceButton();
    }

}

