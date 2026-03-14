#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-8000}"

if ! command -v python3 >/dev/null 2>&1; then
  echo "python3 not found. Install python3 or open index.html directly."
  exit 1
fi

echo "Serving on remote server: http://127.0.0.1:${PORT}"
echo
echo "If you are connecting from your local machine, start SSH forwarding there:"
echo "ssh -N -L ${PORT}:127.0.0.1:${PORT} <user>@<server-host>"
echo
echo "Then open this URL in your local browser:"
echo "http://127.0.0.1:${PORT}"
echo

python3 -m http.server "${PORT}" --bind 127.0.0.1
