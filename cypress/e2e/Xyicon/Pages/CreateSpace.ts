
export class CreateSpace {
    
    enterVersionName(newversionname){
        cy.get('[data-cy="xyicon-fields"] > .element') .first() .should('be.visible') .type(newversionname) .type('{enter}');
    }

    clickNextButtonInStep1(){
       cy.get('[data-cy="Button.Next"]') .should('be.visible') .click(); 
    }

    selectSpaceType(spaceType: string){
        cy.get('.SelectInput') .should('be.visible') .click();
        cy.get('.option') .contains(spaceType) .should('be.visible') .click();
    }

    addNewPDF(){
        // cy.get('.FileDropper > input').attachFile({filePath: 'cypress/fixtures/sample.pdf'}, {force: true});
        cy.get('.FileDropper > input').selectFile('cypress/fixtures/sample.pdf', {force: true});
    }

    clickNextButtonInStep2(){
        cy.get('[data-cy="Button.Next"]') .should('be.visible') .click();
    }

    clickNextButtonInStep3(){
        cy.get('[data-cy="Button.Next"]') .should('be.visible') .click();
    }

    setSpaceScales(){
        cy.get('[title="Set Scale"]') .should('be.visible') .click();
        cy.get('#canvas-div').should('be.visible'); 
        cy.wait(1000);

        cy.get('#canvas-div') 
        .trigger('mousedown', { clientX: 300, clientY: 200, force: true })
        .trigger('mousemove', { clientX: 330, clientY: 200, force: true })
        .wait(300)
        .trigger('mouseup', { force: true });

        //cy.get('#canvas-div') .should('be.visible') .click(300, 200) .click(330, 200); 
    }

    enterDistance(distance: number){
        cy.get('.PopupWindow') .should('be.visible');
        cy.get('input[type="number"]') .first() .should('be.visible') .type(distance.toString()) .type('{enter}');
        //cy.get('input[type="number"]') .first() .should('be.visible') .type(`${distance}{enter}`);
    }

    clickNextButtonInStep4(){
        cy.get('[data-cy="Button.Next"]') .should('be.visible') .click();
    }

    clickCreateButtonInLastStep(){
        cy.get('[data-cy="Button.Create"]') .first() .should('be.visible') .click();
    }

    verifyCreatedSpace(spaceName: string) {
        cy.get('.itemName') .contains(spaceName).should('be.visible');
}
}
