
export class CreatePortfolio {

    clickCreatePortfolio(){
        cy.get('[title="Create Portfolio Item"]', { timeout: 10000 } ) .should('be.visible') .click();
    }
    enterPortfolioName(portfolioname: string){
       cy.get('.CreatePortfolioPanel .ClickToEditInput') .should('be.visible') .type(portfolioname);
    }

    selectPortfolioType(portfoliotype: string){
     cy.get('.CreatePortfolioPanel .SelectInput') .should('be.visible') .click();
     cy.get('.list-search') .type(portfoliotype);
     cy.get('.option') .should('be.visible').click();
    }

    clickCreateButton(){
    cy.get('[title="Create"]') .should('be.visible') .click();
    cy.get('.EmptyListView', { timeout: 10000 }) .scrollIntoView();
}
    clickAddNewSpaceButton(){
        cy.get('[data-cy="Button.Add New Space"]', { timeout: 10000 } ) .should('be.visible') .click();
    }

}