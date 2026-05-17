# Waelio Utils - AI Agent Instructions

## Project Overview

This repository (`waelio-utils`) is a TypeScript/Node.js utility library containing helper functions frequently used in websites and web applications (Vue, React, Nuxt3, Quasar, etc.).

## Tech Stack & Guidelines

- **Language**: TypeScript (`src/**/*.ts`).
- **Module System**: Exported as JavaScript modules, with TypeScript types included.
- **Testing**: Jest (`__tests__` directory, `ts-jest`).
- **Formatting & Linting**: Prettier and TSLint.

## Coding Standards

1. **Functional Style**: Keep utility functions pure and side-effect free where possible.
2. **Types**: Always include strict TypeScript typing for parameters and return types.
3. **Documentation**: Add JSDoc comments to all exported utility functions. Update the `README.md` docs table when adding new functions.
4. **Testing**: Every new utility function must have a corresponding unit test in the `__tests__` directory.
5. **Naming Convention**: Follow the existing naming conventions (e.g., `_snakeToCamel`, `_isString`, etc. often prefixed with an underscore for the exports).

## Common Tasks

- **To build**: `npm run build` (uses `tsc`)
- **To test**: `npm test`
- **To format code**: `npm run format`
- **To lint**: `npm run lint`

## AI Assistant Persona & Rules

- When adding new utilities, look at existing patterns in `src/`.
- Prefer lightweight, dependency-free implementations. Only use existing dependencies like `crypto-js` or `axios` if absolutely necessary.
- Ensure that the generated code is compatible with both Node.js and browser environments whenever possible.
- Provide clear, concise answers, and always prioritize writing tests for new code.
