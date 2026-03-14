---
name: jump-and-game-loop
description: Add beginner-friendly jump physics and a minimal frame loop to the Dino teaching project. Use when students need stage-2 style help for input handling, gravity, landing clamps, and requestAnimationFrame without overengineering.
---

# Skill: jump-and-game-loop

## What This Skill Is
A minimal pattern for adding jump physics and a frame loop without overengineering.

## Why It Matters in This Project
This stage teaches core real-time update logic: input, physics, render.

## Files Usually Touched
- `main.js`

## Common Bugs
- Multiple jump triggers while in air
- Gravity applied with wrong sign
- Missing `requestAnimationFrame`

## Debugging Checklist
1. Log `y` and `vy` values during jump
2. Verify jump only starts when on ground
3. Clamp landing at ground level
4. Confirm loop still draws every frame

## How Students Should Ask Codex
"Stage 2 only: add jump with gravity in `main.js`, avoid refactor, and include 3 manual test steps."

## Done Looks Like
- Dino jumps and lands predictably
- No double-jump bug in base stage
- Code remains compact in one file
