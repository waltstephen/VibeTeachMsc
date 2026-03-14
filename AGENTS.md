# AGENTS.md

## Repository Intent
This is a teaching repository, not a one-shot product repository.
The goal is to teach incremental AI-assisted development of a small Dino-style browser game.

## Core Behavior Rules for Coding Agents
- Do not jump directly to the final polished game unless explicitly requested.
- Prefer small, stage-aligned edits over broad rewrites.
- Keep code beginner-readable and easy to explain.
- Keep early logic mostly in `main.js` unless there is a clear teaching reason to split.
- Do not add heavy dependencies or toolchains.
- Do not rewrite the repository structure unless explicitly asked.

## Change Communication
For every meaningful edit:
- Explain what changed.
- Explain why this matches the current stage.
- Explain how to verify the change in browser.

## Git Checkpoint Discipline
Encourage checkpoints before and after major edits.

Recommended flow:
1. Before risky edits: `git add -A && git commit -m "checkpoint: before <task>"`
2. Apply minimal change set.
3. Review: `git diff`
4. Stage commit: `git add -A && git commit -m "stage X: <summary>"`

## Debugging Strategy
- Start with the smallest likely cause first.
- Reproduce before fixing.
- Fix one issue at a time.
- Re-test after each fix.
- Avoid “full rewrite to fix bug” unless explicitly requested.
