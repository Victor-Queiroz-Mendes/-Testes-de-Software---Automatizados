describe('Testes E2E - SauceDemo', () => {
  // Executado antes de cada teste
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
  });

  it('Teste 1: Deve fazer login com sucesso', () => {
    // Preencher campo de usuário
    cy.get('#user-name').type('standard_user');
    
    // Preencher campo de senha
    cy.get('#password').type('secret_sauce');
    
    // Clicar no botão de login
    cy.get('#login-button').click();
    
    // Verificar se foi redirecionado para a página de produtos
    cy.url().should('include', '/inventory');
    
    // Verificar se a página contém "Products"
    cy.contains('Products').should('be.visible');
    
    // Capturar screenshot
    cy.screenshot('login-sucesso');
  });

  it('Teste 2: Deve exibir erro com credenciais inválidas', () => {
    // Preencher campo de usuário com credenciais inválidas
    cy.get('#user-name').type('usuario_invalido');
    
    // Preencher campo de senha com senha errada
    cy.get('#password').type('senha_errada');
    
    // Clicar no botão de login
    cy.get('#login-button').click();
    
    // Verificar se mensagem de erro é exibida
    cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible');
    
    // Capturar screenshot
    cy.screenshot('login-erro');
  });

  it('Teste 3: Deve adicionar produto ao carrinho', () => {
    // Fazer login com credenciais válidas
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    
    // Verificar redirecionamento
    cy.url().should('include', '/inventory');
    
    // Clicar no botão "Add to cart" do primeiro produto
    cy.get('button[data-test="add-to-cart-sauce-labs-backpack"]').click();
    
    // Verificar se o ícone do carrinho mostra "1" item
    cy.get('.shopping_cart_badge').should('have.text', '1');
    
    // Clicar no ícone do carrinho
    cy.get('.shopping_cart_link').click();
    
    // Verificar se foi redirecionado para o carrinho
    cy.url().should('include', '/cart');
    
    // Verificar se o produto está listado no carrinho
    cy.contains('Sauce Labs Backpack').should('be.visible');
    
    // Capturar screenshot
    cy.screenshot('carrinho');
  });
});
