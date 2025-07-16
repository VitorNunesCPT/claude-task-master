4. **Prompt the AI** to initialize Task Master:

```
Can you please initialize taskmaster-ai into my project?
```

The AI will:

- Create necessary project structure
- Set up initial configuration files
- Guide you through the rest of the process

5. Place your PRD document in the `.taskmaster/docs/` directory (e.g., `.taskmaster/docs/prd.txt`)

6. **Use natural language commands** to interact with Task Master:

```
Can you parse my PRD at .taskmaster/docs/prd.txt?
What's the next task I should work on?
Can you help me implement task 3?
```

### Option 2: Manual Installation

If you prefer to use the command line interface directly:

```bash
# Install globally
npm install -g task-master-ai

# OR install locally within your project
npm install task-master-ai
```

Initialize a new project:

```bash
# If installed globally
task-master init

# If installed locally
npx task-master init
```

This will prompt you for project details and set up a new project with the necessary files and structure.

## Common Commands

After setting up Task Master, you can use these commands (either via AI prompts or CLI):

```bash
# Parse a PRD and generate tasks
task-master parse-prd your-prd.txt

# List all tasks
task-master list

# Show the next task to work on
task-master next

# Generate task files
task-master generate
```


## Initial Task Generation

In Cursor's AI chat, instruct the agent to generate tasks from your PRD:

```
Please use the task-master parse-prd command to generate tasks from my PRD. The PRD is located at .taskmaster/docs/prd.txt.
```

The agent will execute:

```bash
task-master parse-prd .taskmaster/docs/prd.txt
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


