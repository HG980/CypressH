export class DeletePortfolio {

  // private uncheckAllPortfolios() {
  //   cy.get('.CheckboxInput input[type="checkbox"]:checked') .each(($el) => {
  //     cy.wrap($el) .uncheck({ force: true });
  //   });

  private uncheckAllPortfolios() {
    cy.get('.tableContainer .head .th .CheckboxInput') .click();
    cy.get('.tableContainer .head .th .CheckboxInput') .click();
  }

  private findPortfolio(uniqueName: string) {
    cy.get('.filtersAndSearch .SearchField input') .should('be.visible') .clear() .type(uniqueName);
  }

  private selectPortfolio(){
    cy.get('.tableWrapper .tr > .td .CheckboxInput') .click();
  }

  private clickDeleteButton() {
    cy.get('[data-cy="Button.Delete"]') .should('be.visible') .click();
  }

  private deleteConfirmationPopup(portfolioCount: number) {
    cy.get('.PopupWindow') .should('be.visible');
    cy.get('.PopupWindow > input') .type(portfolioCount.toString());
  }

  private clickDeleteButtonInDeletePopup() {
    cy.get('[data-cy="OkButton"]') .should('be.visible') .click();
  }

  deletePortfolio(uniqueName: string, portfolioCount: number) {
    this.uncheckAllPortfolios();
    this.findPortfolio(uniqueName);
    this.selectPortfolio();
    this.clickDeleteButton();
    this.deleteConfirmationPopup(portfolioCount);
    this.clickDeleteButtonInDeletePopup();

    cy.contains('.tableWrapper .tr', uniqueName).should('not.exist');
  }

}


