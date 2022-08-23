# Poketest 2022

## Project setup
```
yarn install
```
or
```
npm install
```

### Start dev server
```
yarn dev
```
or
```
npm run dev
```

### Compiles and minifies for production
```
yarn build
```
or
```
npm run build
```

### Context
A client wants us to make an app that displays pokemons and allows a user to add one to its team but unfortunately some things are not working properly or are really, really, bad!

That's where you come in! I choose you (!!!) to fix these issues and implement what you think is best for the client need.
Here is a ***sample*** list of things that needs doing but ultimately it's your decision as to what to tackle first.

- We need to fix the obvious bugs and errors
- We want to get the pokemons from an api (https://pokeapi.co/), the first generation is what we want (151 first)
- We want a new layout for the pokemon list
- We want individual views for each pokemon with more data
- We want to be able to switch between the shiny version and the normal versions sprites on each individual views
- We want a view of the selected team with some basic infos on each selected team member
- We want to be able to access each team members view easily with the bottom bar and have a way (UX wise) to have some relevant infos without clicking on it
- We want a view where each pokemon is filtered by type, better yet, we want to be able to filter by types on the home page
- Spring clean the view and have a decent, usable UI

## Recommended IDE Setup

- Node 16+
- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
