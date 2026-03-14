# Stage 3: Obstacle

## Current State
Jump works, but there is nothing to avoid.

## Goal
Add one simple obstacle that moves from right to left and resets.

## Tasks
1. Add obstacle state in `main.js`.
2. Move obstacle left each frame.
3. Reset obstacle after it exits the screen.
4. Draw obstacle with simple shape.

## Acceptance Criteria
- Obstacle continuously moves across the scene.
- Dino can jump over it.
- Game still runs smoothly in browser.

## Suggested Prompt for Codex
"Stage 3 only: add one moving obstacle with reset behavior in `main.js`. Keep implementation simple and beginner-friendly."

## Common Mistakes
- Obstacle speed tied to key events instead of frame updates.
- Obstacle never reset after leaving canvas.
- Introducing arrays/spawn systems too early.

## Recommended Git Checkpoint
`stage 3: add obstacle`
