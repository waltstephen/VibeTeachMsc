# Skill: collision-and-state

## What This Skill Is
A practical approach for adding obstacle collision, score, and simple game state transitions.

## Why It Matters in This Project
Students learn how game state changes over time and how to stop/update loops safely.

## Files Usually Touched
- `main.js`
- optional UI text tweak in `index.html`

## Common Bugs
- Collision box mismatches sprite draw positions
- Score keeps counting after game over
- Restart fails to reset one variable

## Debugging Checklist
1. Print collision box coordinates for one frame
2. Force obstacle close to dino for test
3. Verify score stops on game over
4. Verify restart resets all state

## How Students Should Ask Codex
"Stage 4: add minimal AABB collision and score in `main.js`, keep beginner readability, and show how to test edge cases."

## Done Looks Like
- Collision triggers reliably
- Score behavior matches game state
- Restart returns to clean run
