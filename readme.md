# Formation DEMO

This is a demo component UI for building prototypes in Figma Make using the Formation Design System.

## Prerequisites

Before getting started, ensure you have the following installed:

* Node.js 20+
* pnpm 10+

Check your versions:

```bash
node --version
pnpm --version
```

## Installation

Clone the repo:

```bash
git clone https://github.com/mattjohnhall/formation-demo.git
cd formation
```

Install all dependencies:

```bash
pnpm install
```

## Running Storybook

Storybook is used for developing, testing and documenting components.

Start Storybook:

```bash
pnpm --filter storybook dev
```

Once running, open:

```text
http://localhost:6006
```

## Repo Structure

```text
apps/
  storybook/

packages/
  formation-england-football/
  formation-icons/
```

## Building a Package

Build an individual package:

```bash
pnpm --filter @thefa/formation-england-football build
```

Build all packages:

```bash
pnpm -r build
```

## Adding Dependencies

To add a dependency to a specific package:

```bash
pnpm add <package-name> --filter @thefa/formation-england-football
```

For example:

```bash
pnpm add @radix-ui/react-tooltip --filter @thefa/formation-england-football
```
