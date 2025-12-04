# Fundamentos de Testes E2E com Cypress

## O que é Teste End-to-End (E2E)?

Testes End-to-End (E2E) são testes automatizados que validam a funcionalidade completa de uma aplicação através da interface do usuário, simulando o comportamento real de um usuário final. Eles verificam o fluxo completo da aplicação, desde a entrada do usuário até a saída esperada.

### Características dos Testes E2E

1. **Simula Comportamento Real:** Testa a aplicação como um usuário real faria
2. **Cobertura Completa:** Verifica múltiplos componentes funcionando juntos
3. **Interface Gráfica:** Interage com botões, campos de texto, etc.
4. **Validação Funcional:** Confirma que o sistema funciona como esperado
5. **Captura de Evidências:** Gera screenshots e vídeos para documentação

## Por que Usar Cypress?

### Vantagens do Cypress

| Aspecto | Cypress | Selenium |
|--------|---------|----------|
| Instalação | Simples | Complexa |
| Sintaxe | JavaScript limpo | Verbosa |
| Debugging | Excelente | Difícil |
| Velocidade | Rápido | Lento |
| Confiabilidade | Muito confiável | Flaky |
| Documentação | Ótima | Média |

### Por que Cypress é Melhor que Outras Ferramentas

1. **Arquitetura Moderna:** Executa no navegador, não via WebDriver
2. **Retry Automático:** Tenta novamente automaticamente quando elementos não estão prontos
3. **Time Travel:** Vê cada comando executado passo a passo
4. **Debugging:** DevTools integradas e logs detalhados
5. **Velocidade:** Executa comandos diretamente no contexto do navegador

## Estrutura de um Teste E2E

```javascript
describe('Suite de Testes', () => {      // Agrupa testes relacionados
  
  beforeEach(() => {                      // Executa antes de cada teste
    cy.visit('URL');                      // Navega para a URL
  });

  it('Deve validar funcionalidade X', () => {  // Um teste individual
    cy.get('.elemento').type('valor');        // Interage com elementos
    cy.get('button').click();                  // Clica em elementos
    cy.contains('Texto').should('exist');      // Valida resultados
    cy.screenshot('nome');                     // Captura evidências
  });
});
```

## Boas Práticas em Testes E2E

### 1. Selecione Elementos Corretamente
```javascript
// ✅ BOM: Use data-testid ou atributos específicos
cy.get('[data-test="login-button"]').click();

// ❌ RUIM: Evite seletores frágeis
cy.get('button.btn.btn-primary.ml-2').click();
```

### 2. Use Asserções (Validações)
```javascript
// ✅ BOM: Validações claras
cy.url().should('include', '/dashboard');
cy.contains('Welcome').should('be.visible');

// ❌ RUIM: Sem validações
cy.visit('/dashboard');
```

### 3. Evite Timeouts Hardcoded
```javascript
// ✅ BOM: Cypress aguarda automaticamente
cy.get('.loading-spinner').should('not.exist');

// ❌ RUIM: Timeouts arbitrários
cy.wait(5000);
```

### 4. Use beforeEach para Setup Comum
```javascript
// ✅ BOM: Reutiliza código
beforeEach(() => {
  cy.visit('https://exemplo.com');
  cy.login('user@email.com', 'senha');
});

// ❌ RUIM: Repetição desnecessária
it('teste 1', () => {
  cy.visit('https://exemplo.com');
  cy.login('user@email.com', 'senha');
  // teste
});
```

### 5. Organize Testes Logicamente
```javascript
// ✅ BOM: Agrupa por funcionalidade
describe('Autenticação', () => {
  describe('Login', () => {
    it('com credenciais válidas', () => {});
    it('com credenciais inválidas', () => {});
  });
});

// ❌ RUIM: Sem organização
it('teste 1', () => {});
it('teste 2', () => {});
```

## Padrão Page Object Model (POM)

O Page Object Model é um padrão que organiza o código criando classes para representar páginas:

```javascript
// login.page.js
class LoginPage {
  visit() {
    cy.visit('https://www.saucedemo.com');
  }
  
  fillUsername(username) {
    cy.get('#user-name').type(username);
  }
  
  fillPassword(password) {
    cy.get('#password').type(password);
  }
  
  clickLogin() {
    cy.get('#login-button').click();
  }
  
  getErrorMessage() {
    return cy.get('[data-test="error"]');
  }
}

// teste.spec.js
const loginPage = new LoginPage();
describe('Login Tests', () => {
  it('deve fazer login com sucesso', () => {
    loginPage.visit();
    loginPage.fillUsername('user');
    loginPage.fillPassword('pass');
    loginPage.clickLogin();
  });
});
```

## Tipos de Asserções (Validações)

### Validações de URL
```javascript
cy.url().should('include', '/dashboard');
cy.url().should('eq', 'https://exemplo.com/home');
```

### Validações de Visibilidade
```javascript
cy.get('.elemento').should('be.visible');
cy.get('.elemento').should('not.be.visible');
cy.get('.elemento').should('exist');
```

### Validações de Conteúdo
```javascript
cy.contains('Texto esperado').should('exist');
cy.get('h1').should('have.text', 'Título');
cy.get('input').should('have.value', 'valor esperado');
```

### Validações de Quantidade
```javascript
cy.get('li').should('have.length', 5);
cy.get('[data-test="items"]').should('have.length.greaterThan', 0);
```

## Capturando Evidence (Screenshots e Vídeos)

### Screenshots
```javascript
// Screenshot simples
cy.screenshot();

// Screenshot nomeado
cy.screenshot('login-sucesso');

// Screenshot de elemento específico
cy.get('.modal').screenshot('modal-confirmacao');
```

### Vídeos
O Cypress gera vídeos automaticamente em testes headless. Para habilitar:

```javascript
// cypress.config.js
module.exports = defineConfig({
  e2e: {
    video: true,
    videoOnFailOnly: true // Apenas se falhar
  }
});
```

## Ciclo de Vida do Teste E2E

```
1. Setup (beforeEach)
   ↓
2. Executar Ações
   - Navegar
   - Preencher formulários
   - Clicar botões
   ↓
3. Validar (Asserções)
   - Verificar URLs
   - Verificar textos
   - Verificar elementos
   ↓
4. Capturar Evidence
   - Screenshots
   - Vídeos
   ↓
5. Cleanup (afterEach)
   - Logout (se necessário)
   - Limpar dados
```

## Casos de Uso para Testes E2E

| Caso de Uso | Descrição |
|-------------|-----------|
| Fluxos Críticos | Login, checkout, pagamento |
| Funcionalidades Principais | Busca, filtros, criação |
| Integrações | APIs, bancos de dados, serviços |
| Regressão | Validar que mudanças não quebram funcionalidades |
| Compatibilidade | Testar em diferentes navegadores |

## Como Ajudam no Desenvolvimento

1. **Detecção Precoce de Bugs:** Erros encontrados antes de produção
2. **Confiança no Código:** Mudanças seguras com testes validando
3. **Documentação Viva:** Testes mostram como a app funciona
4. **Redução de Custos:** Menos testes manuais = mais economia
5. **Qualidade:** Aplicação mais confiável e estável
6. **Velocidade:** Deploy mais rápido com confiança

## Desafios e Como Superá-los

| Desafio | Solução |
|---------|---------|
| Testes Flaky (instáveis) | Usar aguardas inteligentes, evitar hardcoded waits |
| Manutenção | Seguir POM, evitar seletores frágeis |
| Velocidade | Paralelizar testes, usar data válida |
| Cobertura | Focar em fluxos críticos, não 100% |
| Ambiente | Usar dados específicos, não dados de produção |

## Exemplo Prático: Fluxo Completo

```javascript
describe('E-commerce Checkout', () => {
  beforeEach(() => {
    cy.visit('https://loja.exemplo.com');
    cy.login('user@email.com', 'senha123');
  });

  it('deve completar compra com sucesso', () => {
    // 1. Buscar produto
    cy.get('[data-test="search"]').type('notebook');
    cy.get('[data-test="search-btn"]').click();
    
    // 2. Validar resultado
    cy.contains('Notebook').should('be.visible');
    
    // 3. Adicionar ao carrinho
    cy.get('[data-test="add-to-cart"]').first().click();
    
    // 4. Ir para checkout
    cy.get('[data-test="cart-icon"]').click();
    cy.get('[data-test="checkout"]').click();
    
    // 5. Preencher dados
    cy.get('[data-test="address"]').type('Rua X, 123');
    cy.get('[data-test="city"]').type('São Paulo');
    
    // 6. Confirmar compra
    cy.get('[data-test="confirm-order"]').click();
    
    // 7. Validar sucesso
    cy.contains('Pedido confirmado').should('be.visible');
    cy.url().should('include', '/order-success');
    
    // 8. Capturar evidência
    cy.screenshot('compra-completa');
  });
});
```

## Recursos Adicionais

- **Documentação Cypress:** https://docs.cypress.io/
- **Best Practices:** https://docs.cypress.io/guides/references/best-practices
- **Cypress Examples:** https://github.com/cypress-io/cypress-example-kitchensink

---

**Desenvolvido com Cypress 15.7.1** | **Dezembro 2025**
