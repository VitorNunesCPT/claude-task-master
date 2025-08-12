# Task Master

## Installation

```bash
# Install globally
npm install -g task-master-ai

# OR install locally within your project
npm install task-master-ai
```

### Initialize a new project

```bash
# If installed globally
task-master init

# If installed locally
npx task-master init
```

This will prompt you for project details and set up a new project with the necessary files and structure.

### Important Notes

1. **ES Modules Configuration:**

   - This project uses ES Modules (ESM) instead of CommonJS.
   - This is set via `"type": "module"` in your package.json.
   - Use `import/export` syntax instead of `require()`.
   - Files should use `.js` or `.mjs` extensions.
   - To use a CommonJS module, either:
     - Rename it with `.cjs` extension
     - Use `await import()` for dynamic imports
   - If you need CommonJS throughout your project, remove `"type": "module"` from package.json, but Task Master scripts expect ESM.

2. The Anthropic SDK version should be 0.39.0 or higher.

## Quick Start with Global Commands

After installing the package globally, you can use these CLI commands from any directory:

```bash
# Initialize a new project
task-master init

# Parse a PRD and generate tasks
task-master parse-prd your-prd.txt

# List all tasks
task-master list

# Show the next task to work on
task-master next

# Generate task files
task-master generate
```

## Troubleshooting

### If `task-master init` doesn't respond:

Try running it with Node directly:

```bash
node node_modules/claude-task-master/scripts/init.js
```

Or clone the repository and run:

```bash
git clone https://github.com/eyaltoledano/claude-task-master.git
cd claude-task-master
node scripts/init.js
```

## Task Structure

Tasks in tasks.json have the following structure:

- `id`: Unique identifier for the task (Example: `1`)
- `title`: Brief, descriptive title of the task (Example: `"Initialize Repo"`)
- `description`: Concise description of what the task involves (Example: `"Create a new repository, set up initial structure."`)
- `status`: Current state of the task (Example: `"pending"`, `"done"`, `"deferred"`)
- `dependencies`: IDs of tasks that must be completed before this task (Example: `[1, 2]`)
  - Dependencies are displayed with status indicators (✅ for completed, ⏱️ for pending)
  - This helps quickly identify which prerequisite tasks are blocking work
- `priority`: Importance level of the task (Example: `"high"`, `"medium"`, `"low"`)
- `details`: In-depth implementation instructions (Example: `"Use GitHub client ID/secret, handle callback, set session token."`)
- `testStrategy`: Verification approach (Example: `"Deploy and call endpoint to confirm 'Hello World' response."`)
- `subtasks`: List of smaller, more specific tasks that make up the main task (Example: `[{"id": 1, "title": "Configure OAuth", ...}]`)

## Integrating with Cursor AI

Claude Task Master is designed to work seamlessly with [Cursor AI](https://www.cursor.so/), providing a structured workflow for AI-driven development.

### Setup with Cursor

1. After initializing your project, open it in Cursor
2. The `.cursor/rules/dev_workflow.mdc` file is automatically loaded by Cursor, providing the AI with knowledge about the task management system
3. Place your PRD document in the `scripts/` directory (e.g., `scripts/prd.txt`)
4. Open Cursor's AI chat and switch to Agent mode

### Setting up MCP in Cursor

To enable enhanced task management capabilities directly within Cursor using the Model Control Protocol (MCP):

1. Go to Cursor settings
2. Navigate to the MCP section
3. Click on "Add New MCP Server"
4. Configure with the following details:
   - Name: "Task Master"
   - Type: "Command"
   - Command: "npx -y task-master-ai"
5. Save the settings

Once configured, you can interact with Task Master's task management commands directly through Cursor's interface, providing a more integrated experience.

### Initial Task Generation

In Cursor's AI chat, instruct the agent to generate tasks from your PRD:

```
Please use the task-master parse-prd command to generate tasks from my PRD. The PRD is located at scripts/prd.txt.
```

The agent will execute:

```bash
task-master parse-prd scripts/prd.txt
```

This will:

- Parse your PRD document
- Generate a structured `tasks.json` file with tasks, dependencies, priorities, and test strategies
- The agent will understand this process due to the Cursor rules

### Generate Individual Task Files

Next, ask the agent to generate individual task files:

```
Please generate individual task files from tasks.json
```

The agent will execute:

```bash
task-master generate
```

This creates individual task files in the `tasks/` directory (e.g., `task_001.txt`, `task_002.txt`), making it easier to reference specific tasks.

## Feature Details

### Analyzing Task Complexity

The `analyze-complexity` command:

- Analyzes each task using AI to assess its complexity on a scale of 1-10
- Recommends optimal number of subtasks based on configured DEFAULT_SUBTASKS
- Generates tailored prompts for expanding each task
- Creates a comprehensive JSON report with ready-to-use commands
- Saves the report to scripts/task-complexity-report.json by default

The generated report contains:

- Complexity analysis for each task (scored 1-10)
- Recommended number of subtasks based on complexity
- AI-generated expansion prompts customized for each task
- Ready-to-run expansion commands directly within each task analysis

### Viewing Complexity Report

The `complexity-report` command:

- Displays a formatted, easy-to-read version of the complexity analysis report
- Shows tasks organized by complexity score (highest to lowest)
- Provides complexity distribution statistics (low, medium, high)
- Highlights tasks recommended for expansion based on threshold score
- Includes ready-to-use expansion commands for each complex task
- If no report exists, offers to generate one on the spot

### Smart Task Expansion

The `expand` command automatically checks for and uses the complexity report:

When a complexity report exists:

- Tasks are automatically expanded using the recommended subtask count and prompts
- When expanding all tasks, they're processed in order of complexity (highest first)
- Research-backed generation is preserved from the complexity analysis
- You can still override recommendations with explicit command-line options

Example workflow:

```bash
# Generate the complexity analysis report with research capabilities
task-master analyze-complexity --research

# Review the report in a readable format
task-master complexity-report

# Expand tasks using the optimized recommendations
task-master expand --id=8
# or expand all tasks
task-master expand --all
```

### Finding the Next Task

The `next` command:

- Identifies tasks that are pending/in-progress and have all dependencies satisfied
- Prioritizes tasks by priority level, dependency count, and task ID
- Displays comprehensive information about the selected task:
  - Basic task details (ID, title, priority, dependencies)
  - Implementation details
  - Subtasks (if they exist)
- Provides contextual suggested actions:
  - Command to mark the task as in-progress
  - Command to mark the task as done
  - Commands for working with subtasks

### Viewing Specific Task Details

The `show` command:

- Displays comprehensive details about a specific task or subtask
- Shows task status, priority, dependencies, and detailed implementation notes
- For parent tasks, displays all subtasks and their status
- For subtasks, shows parent task relationship
- Provides contextual action suggestions based on the task's state
- Works with both regular tasks and subtasks (using the format taskId.subtaskId)

## Best Practices for AI-Driven Development

1. **Start with a detailed PRD**: The more detailed your PRD, the better the generated tasks will be.

2. **Review generated tasks**: After parsing the PRD, review the tasks to ensure they make sense and have appropriate dependencies.

3. **Analyze task complexity**: Use the complexity analysis feature to identify which tasks should be broken down further.

4. **Follow the dependency chain**: Always respect task dependencies - the Cursor agent will help with this.

5. **Update as you go**: If your implementation diverges from the plan, use the update command to keep future tasks aligned with your current approach.

6. **Break down complex tasks**: Use the expand command to break down complex tasks into manageable subtasks.

7. **Regenerate task files**: After any updates to tasks.json, regenerate the task files to keep them in sync.

8. **Communicate context to the agent**: When asking the Cursor agent to help with a task, provide context about what you're trying to achieve.

9. **Validate dependencies**: Periodically run the validate-dependencies command to check for invalid or circular dependencies.
