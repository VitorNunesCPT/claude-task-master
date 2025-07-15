# Taskmaster AI Installation Guide

This guide helps AI assistants install and configure Taskmaster for users in their development projects.

## What is Taskmaster?

Taskmaster is an AI-driven task management system designed for development workflows. It helps break down projects into manageable tasks, track dependencies, and maintain development momentum through structured, AI-enhanced planning.

### Step 3: Initialize Project

Once the MCP server is configured and API keys are added, initialize Taskmaster in the user's project:

> Can you initialize Task Master in my project?

This will run the `initialize_project` tool to set up the basic file structure.

### Step 4: Create Initial Tasks

Users have two options for creating initial tasks:

**Option A: Parse a PRD (Recommended)**
If they have a Product Requirements Document:

> Can you parse my PRD file at [path/to/prd.txt] to generate initial tasks?

If the user does not have a PRD, the AI agent can help them create one and store it in scripts/prd.txt for parsing.

**Option B: Start from scratch**

> Can you help me add my first task: [describe the task]

## Common Usage Patterns

### Daily Workflow

> What's the next task I should work on?
> Can you show me the details for task [ID]?
> Can you mark task [ID] as done?

### Task Management

> Can you break down task [ID] into subtasks?
> Can you add a new task: [description]
> Can you analyze the complexity of my tasks?

### Project Organization

> Can you show me all my pending tasks?
> Can you move task [ID] to become a subtask of [parent ID]?
> Can you update task [ID] with this new information: [details]


## Next Steps

Once installed, users can:

- Create new tasks with `add-task` or parse a PRD (scripts/prd.txt) into tasks with `parse-prd`
- Set up model preferences with `models` tool
- Expand tasks into subtasks with `expand-all` and `expand-task`
- Explore advanced features like research mode and complexity analysis

For detailed documentation, refer to the Task Master docs directory.``
