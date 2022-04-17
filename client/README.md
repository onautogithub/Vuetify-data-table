
# Please read, there are several things I had to do get the project going:
# Pre-work before following the instructions in the article.
# Article: Vuetify data-table example Overview with CRUD App
# URL: https://www.bezkoder.com/vuetify-data-table-example/

## Icons to work you have to do some additonal work. 
#   See the plugins/vuetify.js file for the correct setup.
#   You must add the following to the main.js: import 'material-design-icons-iconfont/dist/material-design-icons.css'


# Install the client
# Setup the git repositofy
### First create the git repository in github
> git clone https://github.com/onautogithub/Vuetify-data-table.git
> cd Vuetify-data-table
> git add --all
> git commit -m "Start of the project"
> git push

## Note to self:
## Mounted must be outside the Method. Otherwise, it won't execute.

# Start the Install
> C:\Users\admin\AppData\Roaming\npm\vue-init webpack@4.8.1 client

> cd client
> npm i --save vuetify@2.2.11
> npm i --save axios@0.20.0
> vue add vuetify@2.2.11

# Intialize eslint
> cd node_modules/eslint
> npm init @eslint/config
#### 
    √ How would you like to use ESLint? · problems
    √ What type of modules does your project use? · esm
    √ Which framework does your project use? · vue
    √ Does your project use TypeScript? · No / Yes
    √ Where does your code run? · browser
    √ What format do you want your config file to be in? · JavaScript
    Local ESLint installation not found.
    The config that you've selected requires the following dependencies:

    eslint-plugin-vue@latest eslint@latest
    √ Would you like to install them now with npm? · No / Yes
################

# start VSCode
> cd client 
> code .

> Create the "plugin" folder under the "src" folder
> Create the "vuetify.js" file under the "plugin" folder

Now follow the rest of the instructions in the article.

## I was getting couple of issues:
First Issue - Unknown custom element: <v-main> - did you register the component correctly? 
For recursive components, make sure to provide the "name" option.
-- The only solution I was able to find to resolve the issue is to replace 
<v-main> </v-main> with <v-content>
Second Issue - Vuetify: v-ripple can only be used on block-level elements
To resolve this issue, I had to do the following:
a) npm install material-design-icons-iconfont

b) Now import in main.js file:

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
###

## I used the backend project to serve the frontend.


# client

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
