# VibeTeachMsc

A compact teaching repository for learning how to use Codex to vibe-code a small Chrome-Dino-style game in small, testable steps.

## Who This Is For
- Beginners learning HTML/CSS/JavaScript
- Students working in WSL and Git
- Learners practicing AI-assisted coding with Codex

## What You Will Learn
- How to break a mini-game into small tasks
- How to prompt Codex incrementally instead of one-shot
- How to verify and debug AI-generated code
- How to use Git checkpoints during development

## 6-Stage Learning Path
1. `0-setup-and-running-in-wsl`
2. `1-render-dino`
3. `2-jump`
4. `3-obstacle`
5. `4-collision-and-score`
6. `5-polish-and-deploy`

Stage docs are in `stages/`.

## Run in WSL
Minimal dependencies only.

1. Open this repo in your WSL terminal.
2. Preferred local preview (if Python is available):
   - `python3 -m http.server 8000`
   - Open `http://localhost:8000`
3. Fallback if no Python:
   - Open `index.html` directly in a browser.

## Run on a Remote Server (with forwarding)
If this repo is running on a remote Linux server, use SSH port forwarding.

1. On the remote server, start preview:
   - `./dev-serve.sh 8000`
2. On your local machine, forward the port:
   - `ssh -N -L 8000:127.0.0.1:8000 <user>@<server-host>`
3. Open in your local browser:
   - `http://127.0.0.1:8000`

## Codex Workflow in This Repo
- Keep prompts narrow: one stage or one bug at a time.
- Ask for minimal edits in existing files.
- Ask Codex to include verification steps.
- Avoid asking for the full final game at once.

Use the templates in `prompts/`:
- `prompt-template.md`
- `debug-template.md`
- `refactor-template.md`

## Git Workflow for Vibecoding
Use Git checkpoints aggressively.

- Initialize Git if needed: `git init -b main`
- Before a risky Codex edit:
  - `git add -A`
  - `git commit -m "checkpoint: before <task>"`
- After Codex edits:
  - `git diff`
  - test in browser
  - `git add -A && git commit -m "stage X: <short summary>"`

Suggested commit sequence:
- `stage 0: setup repo and preview`
- `stage 1: render dino`
- `stage 2: add jump`
- `stage 3: add obstacle`
- `stage 4: add collision and score`
- `stage 5: polish and deploy`

## Repository Structure
```text
.
├── .codex/
│   └── config.toml
├── AGENTS.md
├── dev-serve.sh
├── README.md
├── index.html
├── main.js
├── style.css
├── prompts/
├── skills/
└── stages/
```

## Next Steps
1. Run the project and confirm you see the canvas, ground line, and placeholder dino.
2. Read `stages/1-render-dino.md` and complete that stage intentionally.
3. Commit after each stage.
