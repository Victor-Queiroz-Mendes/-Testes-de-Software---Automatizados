# Testes E2E - SauceDemo com Cypress

## Descrição do Projeto

Este projeto implementa testes automatizados end-to-end (E2E) utilizando o framework **Cypress** para validar funcionalidades do site de demonstração [SauceDemo](https://www.saucedemo.com).

## Objetivo

Validar três cenários principais de teste:
1. Login com credenciais válidas
2. Login com credenciais inválidas (verificação de mensagem de erro)
3. Adição de produtos ao carrinho de compras

## Estrutura do Projeto

```
teste-cypress-reposicao/
├── cypress/
│   ├── e2e/
│   │   └── saucedemo.cy.js       # Arquivo com todos os testes E2E
│   ├── screenshots/               # Screenshots gerados automaticamente
│   └── support/
├── node_modules/                 # Dependências do projeto
├── cypress.config.js             # Configuração do Cypress
├── package.json                  # Gerenciador de dependências
├── package-lock.json             # Lock das dependências
└── README.md                      # Este arquivo
```

## Instalação e Configuração

### Pré-requisitos
- Node.js 12+ instalado
- npm (gerenciador de pacotes do Node.js)

### Passos para Instalação

1. **Clone ou acesse o repositório:**
   ```bash
   cd teste-cypress-reposicao
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

## Como Executar os Testes

### Modo Interativo (Test Runner)
Para abrir o Cypress Test Runner com interface gráfica:
```bash
npm run cypress:open
```

Ou:
```bash
npx cypress open
```

Em seguida, clique em **E2E Testing** e selecione o arquivo `saucedemo.cy.js`.

### Modo Headless (Linha de Comando)
Para executar todos os testes em modo headless (sem interface gráfica):
```bash
npm run cypress:run
```

Ou:
```bash
npx cypress run
```

### Executar um Teste Específico
```bash
npx cypress run --spec "cypress/e2e/saucedemo.cy.js"
```

## Testes Implementados

### Teste 1: Login com Sucesso
**Objetivo:** Validar que um usuário pode fazer login com credenciais válidas.

**Passos:**
1. Acessa https://www.saucedemo.com
2. Preenche o campo de usuário com: `standard_user`
3. Preenche o campo de senha com: `secret_sauce`
4. Clica no botão "Login"
5. Verifica redirecionamento para página de produtos (`/inventory`)
6. Verifica presença do texto "Products"
7. Captura screenshot: `login-sucesso.png`

**Credenciais de Teste:**
- Usuário: `standard_user`
- Senha: `secret_sauce`

---

### Teste 2: Login com Credenciais Inválidas
**Objetivo:** Validar que o sistema exibe mensagem de erro ao tentar login com credenciais inválidas.

**Passos:**
1. Acessa https://www.saucedemo.com
2. Preenche o campo de usuário com: `usuario_invalido`
3. Preenche o campo de senha com: `senha_errada`
4. Clica no botão "Login"
5. Verifica a exibição da mensagem de erro: "Epic sadface: Username and password do not match any user in this service"
6. Captura screenshot: `login-erro.png`

---

### Teste 3: Adicionar Produto ao Carrinho
**Objetivo:** Validar que um usuário pode adicionar produtos ao carrinho.

**Passos:**
1. Faz login com credenciais válidas (`standard_user`/`secret_sauce`)
2. Verifica redirecionamento para página de produtos
3. Clica no botão "Add to cart" do primeiro produto (Sauce Labs Backpack)
4. Verifica se o ícone do carrinho mostra "1" item
5. Clica no ícone do carrinho
6. Verifica redirecionamento para página do carrinho (`/cart`)
7. Verifica presença do produto "Sauce Labs Backpack" no carrinho
8. Captura screenshot: `carrinho.png`

---

## Comandos Cypress Utilizados

| Comando | Descrição |
|---------|-----------|
| `cy.visit(url)` | Acessa uma URL |
| `cy.get(selector)` | Seleciona um elemento usando seletor CSS |
| `cy.type(text)` | Digita texto em um campo |
| `cy.click()` | Clica em um elemento |
| `cy.url().should(...)` | Valida a URL atual |
| `cy.contains(text)` | Seleciona elemento que contém texto |
| `cy.screenshot(name)` | Captura uma screenshot com nome específico |

## Resultados dos Testes

### Execução Bem-sucedida
Todos os 3 testes foram implementados e devem passar com sucesso:
- ✅ Teste 1: Login com Sucesso
- ✅ Teste 2: Login com Credenciais Inválidas
- ✅ Teste 3: Adicionar Produto ao Carrinho

### Screenshots Gerados
Os screenshots são gerados automaticamente durante a execução dos testes e salvos em:
- `cypress/screenshots/saucedemo.cy.js/login-sucesso.png`
- `cypress/screenshots/saucedemo.cy.js/login-erro.png`
- `cypress/screenshots/saucedemo.cy.js/carrinho.png`

## Configurações do Cypress

O arquivo `cypress.config.js` contém as seguintes configurações:
- **baseUrl:** https://www.saucedemo.com
- **Viewport:** 1280x720px
- **specPattern:** cypress/e2e/**/*.cy.js

## Usuários de Teste do SauceDemo

O site fornece os seguintes usuários de teste:

| Usuário | Senha | Descrição |
|---------|-------|-----------|
| `standard_user` | `secret_sauce` | Usuário padrão com acesso normal |
| `locked_out_user` | `secret_sauce` | Usuário bloqueado |
| `problem_user` | `secret_sauce` | Usuário com problemas visuais |
| `performance_glitch_user` | `secret_sauce` | Usuário com atraso de carregamento |

## Dependências

- **cypress:** Framework de testes E2E

## Como Contribuir

1. Crie uma nova branch para suas alterações
2. Faça as modificações
3. Execute os testes para garantir que tudo funciona
4. Envie um pull request com as alterações

## Referências

- [Documentação oficial do Cypress](https://docs.cypress.io/)
- [SauceDemo - Site de Teste](https://www.saucedemo.com)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)

## Victor Hugo de Queiroz Mendes

Desenvolvido como parte do desafio prático de testes automatizados E2E.
