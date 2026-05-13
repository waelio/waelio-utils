---
description: 'Audit and clean up README badges/links: remove outdated sections, test URLs, fix broken links to current formats'
name: 'README Maintenance'
argument-hint: "Describe what to remove or fix (e.g. 'remove donate badge, fix CodeSandbox link')"
agent: 'agent'
tools: [fetch, search, edit]
---

Perform README maintenance on [README.md](../../README.md) based on the arguments provided.

## Steps

1. **Remove sections/badges** listed in the arguments (e.g. PayPal donate, sponsor banners).
2. **Test each external link** (badges, demo links, sandbox links) by fetching the URL:
   - If the response is a 4xx/5xx error or returns no meaningful content → remove or replace it.
   - If the link redirects to a new URL format → update to the new URL.
3. **Fix known deprecated URL patterns**:
   - CodeSandbox legacy: `codesandbox.io/s/github/` → new format: `codesandbox.io/p/github/{owner}/{repo}/{branch}`
   - RunKit: `runkit.com/npm/{package}` — verify it loads; remove if broken.
4. Preserve all other badges and links that resolve successfully.

## Output

Apply all changes directly to the README. Do not summarize changes unless asked.
