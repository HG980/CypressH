
export class CreateSpace {
    
    private enterVersionName(newversionname: string){
        cy.get('[data-cy="xyicon-fields"] > .element') .first() .should('be.visible') .type(newversionname) .type('{enter}');
    }

    private clickNextButtonInStep1(){
       cy.get('[data-cy="Button.Next"]') .should('be.visible') .click(); 
    }

    private selectSpaceType(spaceType: string){
        cy.get('.SelectInput') .should('be.visible') .click();
        cy.get('.option') .contains(spaceType) .should('be.visible') .click();
    }

    private addNewPDF(){
        cy.get('.FileDropper > input').selectFile('cypress/fixtures/sample.pdf', {force: true});
    }

    private clickNextButtonInStep2(){
        cy.get('[data-cy="Button.Next"]') .should('be.visible') .click();
    }

    private clickNextButtonInStep3(){
        cy.get('[data-cy="Button.Next"]') .should('be.visible') .click();
    }

    private setSpaceScales(){
        cy.get('[title="Set Scale"]') .should('be.visible') .click();
        cy.get('#canvas-div').should('be.visible'); 
        cy.wait(1000);

        cy.get('#canvas-div') 
        .trigger('mousedown', { clientX: 300, clientY: 200, force: true })
        .trigger('mousemove', { clientX: 330, clientY: 200, force: true })
        .wait(300)
        .trigger('mouseup', { force: true });
    }

    private enterDistance(distance: number){
        cy.get('.PopupWindow') .should('be.visible');
        cy.get('input[type="number"]') .first() .should('be.visible') .type(distance.toString()) .type('{enter}');
    }

    private clickNextButtonInStep4(){
        cy.get('[data-cy="Button.Next"]') .should('be.visible') .click();
    }

    private clickCreateButtonInLastStep(){
        cy.get('[data-cy="Button.Create"]') .first() .should('be.visible') .click();
    }

    private verifyCreatedSpace(spaceName: string) {
        cy.get('.itemName') .contains(spaceName).should('be.visible');
    }

    createspace(newversionname: string , spaceType: string , distance: number , spaceName: string){
        this.enterVersionName(newversionname);
        this.clickNextButtonInStep1();
        this.selectSpaceType(spaceType);
        this.addNewPDF();
        this.clickNextButtonInStep2();
        this.clickNextButtonInStep3();
        this.setSpaceScales();
        this.enterDistance(distance);
        this.clickNextButtonInStep4();
        this.clickCreateButtonInLastStep();
        this.verifyCreatedSpace(spaceName);
    }
}
