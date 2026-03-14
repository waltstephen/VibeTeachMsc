# Stage 2: Jump

## Current State
The dino renders but does not move.

## Goal
Add a basic jump mechanic with gravity and simple keyboard input.

## Tasks
1. Add dino state (`y`, `vy`, `isJumping`) in `main.js`.
2. Add `keydown` handling (Space/ArrowUp).
3. Implement gravity update in a game loop.
4. Prevent double-jump at this stage.

## Acceptance Criteria
- Press jump key and dino rises then lands.
- Dino does not sink below ground.
- No obstacle/collision logic yet.

## Suggested Prompt for Codex
"I am on stage 2. Add a minimal jump system with gravity in `main.js` only. Do not add obstacles yet. Include a short verification checklist."

## Common Mistakes
- Missing `requestAnimationFrame` loop.
- Re-triggering jump while airborne.
- Not clamping dino to ground on landing.

## Recommended Git Checkpoint
`stage 2: add jump`
