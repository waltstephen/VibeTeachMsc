# Skill: debugging-and-git-checkpoints

## What This Skill Is
A lightweight workflow that combines bug isolation and Git checkpoints for safe iteration.

## Why It Matters in This Project
Students should learn to verify AI edits and recover quickly when a change goes wrong.

## Files Usually Touched
- usually none (workflow skill)
- sometimes `README.md` for clarifying process

## Common Bugs
- Fixing multiple issues at once
- No checkpoint before risky edits
- Skipping `git diff` review

## Debugging Checklist
1. Reproduce bug consistently
2. Make a checkpoint commit
3. Change one likely cause only
4. Re-test and inspect `git diff`
5. Commit a focused fix

## How Students Should Ask Codex
"Help me debug this stage with minimal edits. Find the smallest likely cause first and give me verification steps before and after fix."

## Done Looks Like
- Bug is reproducible then fixed
- Commit history is small and understandable
- Student can explain what changed and why
