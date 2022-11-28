describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://127.0.0.1:5501/index.html");
  });
});
describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
});
