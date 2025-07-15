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

## Best Practices

### Task Organization

- **Logical Grouping**: Use tags to group related tasks (e.g., by feature, branch, or milestone)
- **Clear Titles**: Use descriptive titles that explain the task's purpose
- **Proper Dependencies**: Define dependencies to ensure correct execution order
- **Detailed Instructions**: Include sufficient detail in the `details` field for implementation

### Tag Management

- **Meaningful Names**: Use descriptive tag names that reflect their purpose
- **Consistent Naming**: Establish naming conventions for tags (e.g., branch names, feature names)
- **Context Switching**: Be aware of which tag context you're working in
- **Isolation Benefits**: Leverage tag isolation to prevent merge conflicts

### Subtask Design

- **Granular Tasks**: Break down complex tasks into manageable subtasks
- **Clear Dependencies**: Define subtask dependencies to show implementation order
- **Implementation Notes**: Use subtask details to track progress and decisions
- **Status Tracking**: Keep subtask status updated as work progresses
