# frontend-challenge-vue

# Frontend Challenge
Max estimated time: 3 hours

What we are looking for:
- We are very intrigued on how well you code your CSS (structure, methodologies, choose of tools, etc.)
- React! We love React, and we look for somebody who loves the latest in React (syntax, hooks, patterns).
- Tests: Unit testing is not a must, but definitely something we would love to see. Prove to us you know how it works.
- Extras: Do you think on something we are missing? Please let us know and include it in your project



We want to provide a tool for fashion influencers, where they can filter a list of clothes and select the ones the like best.

Here is the mockup that we would like you to build: 
https://www.figma.com/file/uC7dvrh3wNHs9W7DdKQhwb/Frontend-test?node-id=0%3A1

## Instructions:

When the user opens the app, it will list a few categories.

Users will be able to navigate, filter and check different products.

When they find one that they like, they will press "Like" and it will go to their favorite list.
In order to remove favorites, they will have to press the heart icon again, either in the navigation area on in their favorites section.
This list will be saved on the browser, so if they refresh the page, their list won't be deleted.


## Aditional considerations:
- We will provide a small server to retrieve categories, products and filter. 
- Run the given project after installing the packages (npm install) using "node mock_server.js"


### Endpoints: 

GET /categories
GET /products?size=L,M
GET /products?category=new
GET /products?text=blo
GET /products?size=L&category=shoes

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
