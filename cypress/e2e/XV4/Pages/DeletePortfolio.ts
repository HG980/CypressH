export class DeletePortfolio {

private findPortfolio(portfolioName: string){
  cy.get('.filtersAndSearch .SearchField input') .should('be.visible') .type(portfolioName);
}

private selectPortfolio(portfolioName: string) {
  cy.contains('.tableWrapper', portfolioName) .should('be.visible') .within(() => {
  cy.get('.CheckboxInput input[type="checkbox"]').check({ force: true });
    });
}

private clickDeleteButton() {
  cy.get('[data-cy="Button.Delete"]').should('be.visible').click();
}

private deleteConfirmationPopup(portfolioCount: number){
  cy.get('.PopupWindow') .should('be.visible');
  cy.get('.PopupWindow > input') .type(portfolioCount.toString());
}

private clickDeleteButtonInDeletePopup(){
  cy.get('[data-cy="OkButton"]') .should('be.visible').click();
}

deletePortfolio(portfolioName: string , portfolioCount: number) {
  this.findPortfolio(portfolioName);
  this.selectPortfolio(portfolioName);
  this.clickDeleteButton();
  this.deleteConfirmationPopup(portfolioCount);
  this.clickDeleteButtonInDeletePopup();

cy.contains('.tableWrapper', portfolioName).should('not.exist')
}
}