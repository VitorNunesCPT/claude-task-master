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
      label: 'Getting Started',
      items: [
        'configuration',
        'tutorial',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'command-reference',
        'task-structure',
        'models',
      ],
    },
    {
      type: 'category',
      label: 'Examples & Licensing',
      items: [
        'examples',
        'licensing',
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
      label: 'Advanced',
      items: [
        'migration-guide',
      ],
    },
    {
      type: 'category',
      label: 'Contributor Documentation',
      items: [
        'contributor-docs/testing-roo-integration',
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        'examples/claude-code-usage',
      ],
    },
    {
      type: 'category',
      label: 'Providers',
      items: [
        'providers/gemini-cli',
      ],
    },
    {
      type: 'category',
      label: 'Scripts',
      items: [
        'scripts/models-json-to-markdown',
      ],
    },
  ],
};

export default sidebars;
