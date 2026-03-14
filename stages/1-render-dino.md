# Stage 1: Render Dino

## Current State
A static canvas with a placeholder dino and ground line is available.

## Goal
Cleanly render a readable dino shape and baseline world using simple canvas drawing.

## Tasks
1. Keep drawing logic in `main.js`.
2. Improve dino proportions with basic rectangles/lines only.
3. Keep one `drawScene()` entry point.
4. Add tiny comments only where helpful.

## Acceptance Criteria
- Dino and ground render consistently on refresh.
- Code remains beginner-readable.
- No external dependencies added.

## Suggested Prompt for Codex
"I am on stage 1 (render only). Please make minimal edits in `main.js` to improve the placeholder dino drawing, keep it simple, and explain how to verify in browser."

## Common Mistakes
- Jumping ahead to animation and physics.
- Splitting into many modules too early.
- Over-abstracting draw utilities.

## Recommended Git Checkpoint
`stage 1: render dino`
