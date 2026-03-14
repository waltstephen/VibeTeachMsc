---
name: setup-and-running-in-wsl
description: Run and verify this static HTML/CSS/JS teaching repo in WSL with minimal setup. Use when students need to confirm environment basics (git/python3/shell), launch local preview, fix path or static-serving issues, and keep stage-0 changes minimal.
---

# Skill: setup-and-running-in-wsl

## What This Skill Is
A focused workflow for getting this plain HTML/CSS/JS repo running in WSL with minimal setup.

## Why It Matters in This Project
Students should start fast without heavy tools. Early momentum is critical.

## Files Usually Touched
- `README.md`
- `stages/0-setup-and-running-in-wsl.md`
- optional tiny path/reference fixes in `index.html`

## Common Bugs
- Running server from wrong directory
- Broken relative path to `main.js` or `style.css`
- Expecting Node/npm in a static project

## Debugging Checklist
1. Confirm in repo root: `pwd`
2. Confirm files exist: `ls`
3. Start server: `python3 -m http.server 8000`
4. Open `http://localhost:8000`
5. Check browser console for 404/script errors

## How Students Should Ask Codex
"Help me run stage 0 in WSL. Keep changes minimal. Check paths first, then suggest the smallest fix."

## Done Looks Like
- Page opens in browser
- Canvas is visible
- No heavy dependencies introduced
