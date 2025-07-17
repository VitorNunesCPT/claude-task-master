# Task Master AI - Documentação

Este é o site de documentação do Task Master AI, construído com Docusaurus.

## 🚀 Início Rápido

### Desenvolvimento Local

Para iniciar o servidor de desenvolvimento:

```bash
# A partir do diretório raiz do projeto
npm run docs:dev

# Ou diretamente no diretório docs-site
cd docs-site
npm start
```

O site estará disponível em: http://localhost:3000

### Build para Produção

```bash
# A partir do diretório raiz do projeto
npm run docs:build

# Ou diretamente no diretório docs-site
cd docs-site
npm run build
```

### Servir Build de Produção

```bash
# A partir do diretório raiz do projeto
npm run docs:serve

# Ou diretamente no diretório docs-site
cd docs-site
npm run serve
```

## 📁 Estrutura da Documentação

A documentação está organizada nas seguintes seções:

- **Começando**: Tutorial e exemplos para novos usuários
- **Referência**: Documentação técnica completa
- **MCP (Model Context Protocol)**: Guias de integração
- **Avançado**: Migração e licenciamento

## 🔧 Personalização

- **Configuração**: `docusaurus.config.ts`
- **Sidebar**: `sidebars.ts`
- **Estilos**: `src/css/custom.css`
- **Componentes**: `src/components/`

## 📝 Adicionando Nova Documentação

1. Adicione arquivos Markdown na pasta `docs/`
2. Atualize o `sidebars.ts` para incluir os novos arquivos
3. Use frontmatter para metadados:

```markdown
---
id: meu-arquivo
title: Título da Página
sidebar_label: Rótulo na Sidebar
---

Conteúdo da página...
```

## 🌐 Deploy

O site está configurado para deploy no GitHub Pages. Para fazer deploy:

1. Faça commit das mudanças
2. Push para o repositório
3. O GitHub Actions irá fazer o build e deploy automaticamente

## 📚 Recursos Úteis

- [Documentação do Docusaurus](https://docusaurus.io/docs)
- [Guia de Markdown](https://docusaurus.io/docs/markdown-features)
- [Componentes React](https://docusaurus.io/docs/markdown-features/react)
