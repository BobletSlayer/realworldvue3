# Vue3 + TypeScript + Vite + Vuetify3 + Vuex4 + Axios + i18n + Vitest + ESLint + Prettier

This template should help get you started developing with Vue 3 and TypeScript in Vite.
The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Test on Netlify

https://jedlik-vite-ts-template.netlify.app

## Links

- Template base<br>
  https://github.com/yooneskh/vite-tauri-template<br>
  https://github.com/peshanghiwa/Vue3-Vite-Vuetify3-Typescript-Template<br>
  https://github.com/antfu/vitesse

- ESLint+Prettier:<br>
  https://vueschool.io/articles/vuejs-tutorials/eslint-and-prettier-with-vite-and-vue-js-3/

- Vuex:<br>
  https://github.com/infantiablue/vhnews


## Recommended Node.js and npm versions

- `node -v` -> v14.18.2
- `npm -v` -> 8.3.1

## Some useful npm (Node Package Manager) commands:

- Update npm: `npm i npm@latest -g`
- Clean npm chache: `npm cache clean --force`
- Check npm chache status: `npm cache verify`
- List globally installed node packages: `npm list -g --depth=0`
- List locally installed node packages: `npm list --depth=0`
- List all versions of an npm package: `npm view package_name versions`
- View information about the package: `npm view package_name`
- Show outdated npm packages: `npm outdated`
- Update package: `npm update package_name`
- Uninstall package: `npm remove package_name` or `npm uninstall package_name`

## vue3-table-lite

https://linmasahiro.github.io/vue3-table-lite/

## Vite.js

[Vite.js](https://vitejs.dev/) is a new modern dev server for javascript which is blazing fast and includes many sensible defaults.

## Vue 3

[Vue.js](https://vuejs.org/) is an incremental frontend framework which is an absolute joy to work with. It has seen very impressive improvements in version 3 including Composition Api, script setup, dynamic css binding and ... .

## Vuetify 3

[Vuetif 3 Alpha](https://next.vuetifyjs.com/en/getting-started/installation) is arguably the best component library for Vue 3 and is currently in alpha stage but will soon be ready for production. Lots of premade components will make your job as application developer easier and more fun.

## Add translations to locales files
Translations are ready to go with [vue-i18](https://vue-i18n.intlify.dev/)
Add your files to `/locales` and are you are set.

## Vitest
[Vitest](https://vitest.dev) A blazing fast unit-test framework for Vue3 powered by Vite.
## ESLint
[Eslint](https://eslint.org/) Find and fix problems in your JavaScript code<br>
Change your config at `.eslintrc.js`

## Prettier
[Prettier](https://prettier.io/) is an opinionated code formatter<br>
Change config at `.prettierrc.js`

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## VS-Code settings.json:

```
"editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
          "source.fixAll.eslint": true
    },
    "eslint.validate": ["javascript", "vue"],
    "[vue]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
```
