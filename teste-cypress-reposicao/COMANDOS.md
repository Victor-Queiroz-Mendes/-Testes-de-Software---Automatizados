# Comandos Úteis e Referência Rápida

## 🚀 Iniciar Rápido

```bash
# Navegar até o projeto
cd teste-cypress-reposicao

# Instalar dependências
npm install

# Executar todos os testes
npm run cypress:run

# Abrir o Test Runner interativo
npm run cypress:open
```

## 📝 Testes Disponíveis

### Executar Teste Específico
```bash
npx cypress run --spec "cypress/e2e/saucedemo.cy.js"
```

### Executar com Browser Específico
```bash
# Chrome
npx cypress run --browser chrome

# Firefox
npx cypress run --browser firefox

# Edge
npx cypress run --browser edge
```

### Modo Watch (Reexecuta ao salvar)
```bash
npx cypress run --watch
```

## 📸 Screenshots

Os screenshots são salvos automaticamente em:
```
cypress/screenshots/saucedemo.cy.js/
├── login-sucesso.png
├── login-erro.png
└── carrinho.png
```

Para visualizar:
```bash
# Windows
Start-Process "cypress/screenshots/saucedemo.cy.js"

# Linux/Mac
open cypress/screenshots/saucedemo.cy.js/
```

## 🔍 Debugging

### Abrir DevTools do Cypress
```bash
npx cypress open
```
Então clique em um teste para acompanhar passo a passo.

### Executar com Logs Detalhados
```bash
DEBUG=cypress:* npm run cypress:run
```

## 📊 Relatórios

### Gerar Relatório HTML (com plugin)
```bash
npm install --save-dev mochawesome mochawesome-merge mochawesome-reportergenerator
npx cypress run --reporter mochawesome
```

## 🌐 Credenciais de Teste - SauceDemo

| Usuário | Senha | Descrição |
|---------|-------|-----------|
| `standard_user` | `secret_sauce` | Usuário normal |
| `locked_out_user` | `secret_sauce` | Usuário bloqueado |
| `problem_user` | `secret_sauce` | Problemas visuais |
| `performance_glitch_user` | `secret_sauce` | Performance lenta |

## 💻 Seletores Principais

```javascript
// Campos de login
cy.get('#user-name')        // Campo usuário
cy.get('#password')         // Campo senha
cy.get('#login-button')     // Botão login

// Página de produtos
cy.get('.inventory-item')           // Produtos
cy.get('.shopping_cart_badge')      // Badge do carrinho
cy.get('.shopping_cart_link')       // Link do carrinho

// Página do carrinho
cy.get('[data-test="cart-item"]')   // Item no carrinho
cy.get('button[name="checkout"]')   // Botão checkout
```

## 📚 Estrutura de Arquivos

```
teste-cypress-reposicao/
├── cypress/
│   ├── e2e/
│   │   └── saucedemo.cy.js          # ← Seus testes aqui
│   ├── support/
│   │   └── e2e.js                   # ← Setup comum
│   └── screenshots/                 # Screenshots automáticos
├── cypress.config.js                # Configurações Cypress
├── package.json                     # Dependências
├── README.md                        # Documentação
├── GUIA_RAPIDO.md                   # Este guia
├── RESULTADOS.md                    # Resultados dos testes
├── TEORIA_E2E.md                    # Fundamentos E2E
└── .gitignore                       # Arquivos ignorados
```

## 🛠️ Editar Testes

### Adicionar Novo Teste
Edite `cypress/e2e/saucedemo.cy.js` e adicione:

```javascript
it('Novo teste', () => {
  cy.visit('https://www.saucedemo.com');
  // Seu código aqui
  cy.screenshot('novo-teste');
});
```

### Reutilizar Login
```javascript
// No seu teste
cy.get('#user-name').type('standard_user');
cy.get('#password').type('secret_sauce');
cy.get('#login-button').click();
cy.url().should('include', '/inventory');
```

## 🐛 Troubleshooting

### Cypress não encontra elementos
```javascript
// Aumentar timeout
cy.get('.elemento', { timeout: 10000 });

// Usar contains para texto
cy.contains('Texto esperado').should('be.visible');
```

### Testes falhando intermitentemente
```javascript
// Use cy.intercept para simular API calls
cy.intercept('GET', '/inventory/**').as('loadInventory');
cy.wait('@loadInventory');
```

### Limpar cache
```bash
rm -rf cypress/
npm run cypress:run
```

## 📞 Suporte

- **Documentação Cypress:** https://docs.cypress.io/
- **GitHub Issues:** Reporte bugs no repositório
- **Stack Overflow:** Tag `cypress`

## 📋 Checklist Antes de Commitar

- [ ] Todos os testes passam: `npm run cypress:run`
- [ ] Código segue conventions: Verifique indentação
- [ ] Screenshots são legíveis
- [ ] Comentários explicativos adicionados se necessário
- [ ] README.md atualizado

## 🚢 Deploy & CI/CD

### GitHub Actions
```yaml
name: Cypress Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: cypress-io/github-action@v2
        with:
          start: npm start
          wait-on: 'http://localhost:3000'
```

## 📈 Métricas

Após executar: `npm run cypress:run`, você verá:
- Número de testes
- Taxa de sucesso
- Tempo de execução
- Quantidade de screenshots

## 💡 Dicas Pro

1. **Use data-testid:** Adicione ao HTML `data-testid="elemento"` e use `cy.get('[data-testid="elemento"]')`
2. **Page Objects:** Crie classes para representar páginas (ver TEORIA_E2E.md)
3. **Antes de Cada Teste:** Use `beforeEach()` para setup comum
4. **Evite Hardcoded Waits:** Cypress aguarda automaticamente
5. **Capture Evidence:** Screeshot em pontos críticos

## 🎓 Próximas Etapas

1. Leia `TEORIA_E2E.md` para entender fundamentos
2. Explore `cypress.config.js` para customizações
3. Adicione mais testes (checkout, filtros, etc)
4. Implemente Page Objects para organização
5. Configure CI/CD no seu repositório

---

**Criado em:** 4 de dezembro de 2025  
**Cypress:** v15.7.1
