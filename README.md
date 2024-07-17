# Konbu Education

## Integrate with editors

Enhance your Nx experience by installing [Nx Console](https://nx.dev/nx-console) for your favorite editor. Nx Console
provides an interactive UI to view your projects, run tasks, generate code, and more! Available for VSCode, IntelliJ and
comes with a LSP for Vim users.

## Start the editor application

Run `npx nx serve konbu-editor` to start the development server.

## Build editor app for production

Run `npx nx build konbu-education` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Start the client application

Run `npx nx serve konbu-education` to start the development server.

## Build client app for production

Run `npx nx build konbu-education` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Commits convention

&lt;type&gt;: &lt;description&gt;

### Types:

`feat` - commits, that adds or remove a new feature

`fix` - commits, that fixes a bug

`refactor` - commits, that rewrite/restructure your code, however does not change any API behaviour

`perf` - commits are special refactor commits, that improve performance

`style` - commits, that do not affect the meaning (white-space, formatting, missing semi-colons, etc)

`test` - commits, that add missing tests or correcting existing tests

`docs` - commits, that affect documentation only

`build` - commits, that affect build components like build tool, ci pipeline, dependencies, project version

`ops` - commits, that affect operational components like infrastructure, deployment, backup, recovery

`chore` - miscellaneous commits e.g. modifying .gitignore

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)
