# Stage 4: Collision and Score

## Current State
The game has jump and obstacle but no win/lose state.

## Goal
Detect dino-obstacle collision and show a simple score.

## Tasks
1. Track score over time or distance.
2. Add AABB-style collision check.
3. Stop updates when collision happens.
4. Display `Game Over` and restart hint.

## Acceptance Criteria
- Collision is reliably detected.
- Score updates while alive.
- Game stops on collision and restart works.

## Suggested Prompt for Codex
"I am on stage 4. Add basic collision and score in `main.js` with minimal edits. Keep logic readable and include how to test collision intentionally."

## Common Mistakes
- Collision boxes not matching draw positions.
- Score keeps increasing after game over.
- Restart not resetting all state.

## Recommended Git Checkpoint
`stage 4: add collision and score`
