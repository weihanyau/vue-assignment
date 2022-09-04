// https://docs.cypress.io/api/introduction/api.html

describe("Test Drag Drop Page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".dragDropBtn").click();
  });

  it("Drag from Card Container 1 to Card Container 2", () => {
    const dataTransfer = new DataTransfer();
    cy.get("#card1").trigger("dragstart", { dataTransfer });
    cy.get("#container2").trigger("drop", { dataTransfer });
  });

  it("Drag from Card Container 2 to Card Container 1", () => {
    const dataTransfer = new DataTransfer();
    cy.get("#card3").trigger("dragstart", { dataTransfer });
    cy.get("#container1").trigger("drop", { dataTransfer });
  });
});
