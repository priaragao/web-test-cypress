describe("Login", () => {
  it("Realizar login com sucesso", () => {
    //Arrang
    cy.visit("https://www.saucedemo.com/");

    //Act
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.screenshot("Login");

    //Assert
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
  });

  //   it.only("Realizar login informando credenciads inválidas", () => {
  it("Realizar login informando credenciads inválidas", () => {
    //Arrang
    cy.visit("https://www.saucedemo.com/");

    //Act
    cy.get('[data-test="username"]').type("user");
    cy.get('[data-test="password"]').type("12345");
    cy.get('[data-test="login-button"]').click();
    cy.screenshot("Erro credenciais inválidas");

    //Assert
    cy.get('[data-test="error"]').should(
      "contain.text",
      "Username and password do not match any user in this service",
    );
    cy.url().should("eq", "https://www.saucedemo.com/");
  });
});
