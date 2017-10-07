#!/usr/bin/env bash

now="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/node_modules/.bin/now"

$now -C "$(pwd)"
