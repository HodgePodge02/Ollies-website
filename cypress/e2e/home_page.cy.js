/// <reference types="cypress"/>
it("use requests to navigation bar links", () => {
  const pages = ["HOME", "CONTACT", "PROJECTS"];

  cy.visit("/");

  pages.forEach((page) => {
    cy.contains(page).then((link) => {
      cy.request(link.prop("href"));
    });
  });

  //CONTACT FORM
  describe("Fills out the contact form", () => {
    cy.visit("https://joliverhodges.com/contact/");
    cy.get(cy.get("#contact_Form").should("be.visible"));
    cy.get('[type="name"]').should("be.visible").type("John Doe");
    cy.get('[type="email"]').should("be.visible").type("john-doe@example.com");
    cy.get("textarea").should("be.visible");
  });

  //testing project links
  context("Testing the live links/img links of the PROJECTS page", () => {
    cy.visit("https://joliverhodges.com/projects/");
    cy.get("#QG_img > a > img").should("be.visible");
    cy.get(":nth-child(1) > .ColumnContent > :nth-child(3) > button").should(
      "be.visible"
    );
  });
});
