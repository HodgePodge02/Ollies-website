/// <reference types="cypress"/>
it("asserts HTML elements are present/visible", () => {
  cy.visit("/");
  cy.get("h1").should("be.visible");
  cy.get("h3").should("be.visible");
  cy.get("h4").should("be.visible");
  cy.get("#bigsquare").should("be.visible");
});

it("Tests nav bar links", () => {
  const pages = ["HOME", "CONTACT", "PROJECTS"];

  cy.visit("/");

  pages.forEach((page) => {
    cy.contains(page).then((link) => {
      cy.request(link.prop("href"));
    });
  });
});
//CONTACT FORM
it("Fills out the contact form", () => {
  cy.visit("https://joliverhodges.com/contact/");
  cy.get(cy.get("#contact_Form").should("be.visible"));
  cy.get('[type="name"]').should("be.visible").type("John Doe");
  cy.get('[type="email"]').should("be.visible").type("john-doe@example.com");
  cy.get("textarea").should("be.visible").type("I'm John.");
});

//testing project links
it("Testing the live links/img links of the PROJECTS page", () => {
  cy.visit("https://joliverhodges.com/projects/");
  cy.get("#QG_img > a > img").should("be.visible");
  cy.get(":nth-child(1) > .ColumnContent > :nth-child(3) > button").should(
    "be.visible"
  );
  cy.visit("https://joliverhodges.com/projects/");
  cy.get(":nth-child(2) > img").should("be.visible");
  cy.get(":nth-child(2) > .ColumnContent > :nth-child(3) > button").should(
    "be.visible"
  );
});
