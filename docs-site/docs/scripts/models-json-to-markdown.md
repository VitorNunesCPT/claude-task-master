---
id: models-json-to-markdown
title: Models JSON to Markdown Script
sidebar_label: Models JSON to Markdown
---

# Models JSON to Markdown Script

This script converts the `supported-models.json` file into a formatted Markdown table for the documentation.

## Purpose

The `models-json-to-markdown.js` script automatically generates the `models.md` file by:

1. Reading the `supported-models.json` file from `scripts/modules/`
2. Converting the JSON data into formatted Markdown tables
3. Organizing models by their allowed roles (main, research, fallback)
4. Including provider information, model names, SWE scores, and costs
5. Adding a timestamp of when the documentation was generated

## Usage

```bash
# Run the script to update models.md
node docs/scripts/models-json-to-markdown.js
```

## Output

The script generates a `models.md` file with:

- **Main Models**: Models that can be used as the primary AI model
- **Research Models**: Models optimized for research tasks
- **Fallback Models**: Backup models when primary models fail

Each table includes:
- Provider name
- Model name/ID
- SWE Score (Software Engineering benchmark)
- Input cost per 1M tokens
- Output cost per 1M tokens

## File Structure

```
docs/
├── scripts/
│   └── models-json-to-markdown.js  # The conversion script
└── models.md                       # Generated documentation
```

## Integration

This script is typically run as part of the documentation build process to ensure the models documentation is always up-to-date with the latest supported models configuration.