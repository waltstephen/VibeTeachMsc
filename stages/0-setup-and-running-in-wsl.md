# Stage 0: Setup and Running in WSL

## Current State
You have the starter files and a minimal canvas page.

## Goal
Run the project locally and confirm the baseline scene appears.

## Tasks
1. Confirm tools:
   - `git --version`
   - `python3 --version` (optional but recommended)
2. Preview the page:
   - Preferred: `python3 -m http.server 8000`
   - Fallback: open `index.html` directly
3. Verify canvas loads with ground line and placeholder dino.
4. Initialize Git if not already initialized.

## Acceptance Criteria
- The page opens without build tools.
- You can see the game container and canvas scene.
- Git repository exists.

## Suggested Prompt for Codex
"I am at stage 0. Do not add gameplay. Help me verify this repo runs in WSL with minimal setup, and give me only small fixes if the canvas does not render."

## Common Mistakes
- Forgetting to open the correct folder before serving files.
- Expecting npm/Vite even though this project is plain HTML/CSS/JS.
- Skipping visual verification in browser.

## Recommended Git Checkpoint
`stage 0: setup repo and preview`
