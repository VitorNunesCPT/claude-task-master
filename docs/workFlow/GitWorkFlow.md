## Git Integration and Tag Management

Task Master supports tagged task lists for multi-context development, which is particularly useful when working with git branches or different project phases.

### Working with Tags

Tags provide isolated task contexts, allowing you to maintain separate task lists for different features, branches, or experiments:

```
I'm starting work on a new feature branch. Can you create a new tag for this work?
```

The agent will execute:

```bash
# Create a tag based on your current git branch
task-master add-tag --from-branch
```

Or you can create a tag with a specific name:

```
Create a new tag called 'user-auth' for authentication-related tasks.
```

The agent will execute:

```bash
task-master add-tag user-auth --description="User authentication feature tasks"
```

### Switching Between Contexts

When working on different features or branches:

```
Switch to the 'user-auth' tag context so I can work on authentication tasks.
```

The agent will execute:

```bash
task-master use-tag user-auth
```

### Copying Tasks Between Tags

When you need to duplicate work across contexts:

```
Copy all tasks from the current tag to a new 'testing' tag for QA work.
```

The agent will execute:

```bash
task-master add-tag testing --copy-from-current --description="QA and testing tasks"
```

### Tag Management

View and manage your tag contexts:

```
Show me all available tags and their current status.
```

The agent will execute:

```bash
task-master tags --show-metadata
```

### Benefits of Tagged Task Lists

- **Branch Isolation**: Each git branch can have its own task context
- **Merge Conflict Prevention**: Tasks in different tags don't interfere with each other
- **Parallel Development**: Multiple team members can work on separate contexts
- **Context Switching**: Easily switch between different project phases or features
- **Experimentation**: Create experimental task lists without affecting main work

### Git Workflow Integration

A typical git workflow with Task Master tags:

1. **Create feature branch**: `git checkout -b feature/user-auth`
2. **Create matching tag**: Ask agent to run `task-master add-tag --from-branch`
3. **Work in isolated context**: All task operations work within the new tag
4. **Switch contexts as needed**: Use `task-master use-tag <name>` to switch between different work streams
5. **Merge and cleanup**: After merging the branch, optionally delete the tag with `task-master delete-tag <name>`

This workflow ensures your task management stays organized and conflicts are minimized when working with teams or multiple features simultaneously.


