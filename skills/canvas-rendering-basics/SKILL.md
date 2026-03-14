---
name: canvas-rendering-basics
description: Draw the early-stage Dino scene with Canvas API using simple primitives. Use when students are at render-focused stages and need help with canvas setup, coordinate placement, draw order, and minimal readable edits in main.js.
---

# Skill: canvas-rendering-basics

## What This Skill Is
Guidance for drawing the initial world (ground + placeholder dino) using simple Canvas API calls.

## Why It Matters in This Project
Rendering is the first visible milestone and foundation for later movement/collision.

## Files Usually Touched
- `main.js`
- sometimes `index.html` (canvas sizing)
- sometimes `style.css` (container display)

## Common Bugs
- `getContext("2d")` fails due wrong canvas id
- Draw order causes hidden shapes
- Coordinates place dino off-screen

## Debugging Checklist
1. Verify `canvas` and `ctx` are not `null`
2. Clear and redraw in predictable order
3. Use temporary outlines to validate positions
4. Refresh and confirm static render consistency

## How Students Should Ask Codex
"Stage 1 render only. Improve dino drawing with minimal edits in `main.js` and explain how to verify positions in canvas."

## Done Looks Like
- Ground and dino render every load
- Code is simple enough for beginners to trace line-by-line
