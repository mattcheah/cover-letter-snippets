#!/usr/bin/env sh

# Find directory of bin link that calls cl-snippets.sh, cd in and run snippets.
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
cd "${DIR}" || exit

node index.js