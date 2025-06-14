# Poketest 2022

## Requirements

* VSCode Dev Container (Docker) -- ***Suggested***

or
* node 18+ with yarn 4.7.0

## Project setup
### With VSCode Dev Container -- ***Suggested***

* `cmd` + `shift` + `p`. Search for : `Dev Containers: Reopen in Container`
    * This should open the workspace in a new window / container running proper requirements.
    * `yarn install` should have been run.
* Open a new terminal (bash or zsh) in VSCode and run `yarn -v` to validate you are running on yarn `4.7.0`.
  * If not, you need to execute the `.devcontainer/postCreateCommand.sh` again.
  * If you are on Windows, make sure VSCode doesn't detect modification in every file of the project. If so, you need to revert the changes and run the command again.
  * run `yarn install` again to make sure everything is up to date.

#### Potential issues on windows
* ERROR: failed to solve: error getting credentials
  * in WSL, run `sudo chown -R $(id -u):$(id -g) $HOME/.docker` to fix the permissions on the `.docker` folder.

### With Manual approach
 * Make sure you have the proper node and yarn requirement.
 * run `yarn install`

## Start dev server
```
yarn dev
```

## Compiles and minifies for production
```
yarn build
```

## Context
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

- [VS Code](https://code.visualstudio.com/)
- [Vue](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [Tailwind](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

These should be suggested directly when using VS Code.
