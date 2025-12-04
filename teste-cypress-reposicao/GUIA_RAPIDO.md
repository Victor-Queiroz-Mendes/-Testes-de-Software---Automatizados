# Guia Rápido - Teste E2E com Cypress

## ⚡ Começo Rápido

### 1. Instalação
```bash
cd teste-cypress-reposicao
npm install
```

### 2. Executar Testes
```bash
# Modo interativo (recomendado para desenvolvimento)
npm run cypress:open

# Modo headless (para CI/CD ou execução em batch)
npm run cypress:run
```

## 📁 Estrutura do Projeto

```
cypress/
├── e2e/
│   └── saucedemo.cy.js          # 3 testes E2E
├── screenshots/                  # Screenshots dos testes
└── support/
    └── e2e.js                   # Arquivo de suporte
```

## 🧪 Testes Implementados

| # | Nome | Status | Tempo |
|---|------|--------|-------|
| 1 | Login com Sucesso | ✅ PASSOU | 2.8s |
| 2 | Login com Erro | ✅ PASSOU | 1.0s |
| 3 | Adicionar Carrinho | ✅ PASSOU | 1.4s |

## 👤 Credenciais de Teste

- **Usuário válido:** `standard_user`
- **Senha válida:** `secret_sauce`
- **Usuário inválido:** Qualquer outro (ex: usuario_invalido)
- **Senha inválida:** Qualquer outra (ex: senha_errada)

## 🎯 Validações Realizadas

### Teste 1: Login Sucesso
- ✓ URL muda para `/inventory`
- ✓ Texto "Products" é visível
- ✓ Screenshot: `login-sucesso.png`

### Teste 2: Login Erro
- ✓ Mensagem de erro é exibida
- ✓ Usuário permanece na página de login
- ✓ Screenshot: `login-erro.png`

### Teste 3: Carrinho
- ✓ Produto adicionado ao carrinho
- ✓ Badge mostra "1" item
- ✓ Produto listado em `/cart`
- ✓ Screenshot: `carrinho.png`

## 📸 Screenshots

Os screenshots estão em:
```
cypress/screenshots/saucedemo.cy.js/
├── login-sucesso.png
├── login-erro.png
└── carrinho.png
```

## 🔧 Configurações

Arquivo: `cypress.config.js`
- Base URL: https://www.saucedemo.com
- Viewport: 1280x720px
- Suporte a Chrome e Edge

## 📚 Comandos Úteis

```bash
# Rodar teste específico
npx cypress run --spec "cypress/e2e/saucedemo.cy.js"

# Rodar no navegador Chrome
npx cypress run --browser chrome

# Gerar relatório HTML (requer plugin)
npx cypress run --reporter html

# Modo watch (reexecuta ao salvar)
npx cypress run --watch
```

## 🚀 Próximos Passos

1. Adicionar mais testes (checkout, logout, filtros)
2. Implementar Page Objects Pattern
3. Adicionar logs customizados
4. Configurar CI/CD (GitHub Actions, Jenkins)
5. Adicionar relatórios Allure

## 📖 Documentação

- [README.md](README.md) - Documentação completa
- [RESULTADOS.md](RESULTADOS.md) - Detalhes da execução
- [Cypress Docs](https://docs.cypress.io/)

---

**Desenvolvido com Cypress 15.7.1**
