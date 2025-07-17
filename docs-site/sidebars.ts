import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'README',
    {
      type: 'category',
      label: 'Começando',
      items: [
        'tutorial',
        'examples',
      ],
    },
    {
      type: 'category',
      label: 'Referência',
      items: [
        'command-reference',
        'task-structure',
        'configuration',
        'models',
      ],
    },
    {
      type: 'category',
      label: 'MCP (Model Context Protocol)',
      items: [
        'mcp-provider',
        'mcp-provider-guide',
      ],
    },
    {
      type: 'category',
      label: 'Avançado',
      items: [
        'migration-guide',
        'licensing',
      ],
    },
  ],
};

export default sidebars;
