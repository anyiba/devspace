#!/usr/bin/env node

process.env.DEVSPACE_TOOL_MODE ??= "codex";
await import("./cli.js");
