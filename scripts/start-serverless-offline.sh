#!/usr/bin/env bash

TMPFILE=tmp/.offline.log

if [ -f .offline.pid ]; then
    echo "Found file .offline.pid. Not starting."
    exit 1
fi

# shellcheck disable=SC2210
npx sls offline start 2>1 > $TMPFILE &
PID=$!
echo $PID > .offline.pid

