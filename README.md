
# DESAFIO Projeto React estruturado

## Requisitos
- Pelo menos 20 commits no Github com seu usuário.

- Cabeçalho cliente: link para home, link entrar/sair, contagem de itens do carrinho.

- Tela de catálogo: listagem paginada, filtro por nome, botão próxima página.

- Tela de detalhes do produto.

- Tela de carrinho: listagem de itens, mudança de quantidades, subtotais e total.

- Tela de login: validação de email, mensagem de erro em caso de credenciais inválidas.

- Cabeçalho admin: menu de navegação home/produtos.

- Tela de listagem de produtos: listagem paginada, filtro por nome, botão próxima página.

- Tela de formulário de produtos: validações dos campos, botão cancelar, botão salvar funcionando.

## Competencias
- Estruturação de projeto React com componentes e comunicação entre eles.

- Rotas e navegação.

- Utilização de React hooks, useState, useEffect, dentre outros.

- Gerenciamento de estado em localStorage.

- Formulários e validação de dados.

- Exibição e controle de telas e eventos do usuário.

- Exibição e controle de janela modal.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


