# Healthy App

A simple Healthy App built with React Typescript, Tailwind CSS.

### Top Page

![Top Page Overview](public/assets/assets/images/top_page.png)

### My Record Page

![My Record Page Overview](public/assets/assets/images/my_record_page.png)

### Column Page

![Column Page Overview](public/assets/assets/images/column_page.png)

## Stack

### FE

- react typescript
- axios

### CSS Framework

- Tailwind CSS

### Tools

- eslint
- prettier
- lint-staged

## Installation

```bash
# install node version
Please install at least v15.2.0 version node

# install npm version
Please install at least v7.0.10 version node
```

```bash
# install app's depndencie
$ yarn
```

## Scripts

```bash
# install typescript
$ yarn add global typescript
```

```bash
# dev server with PORT 3000 at http://localhost:3000/
$ yarn start

# run `lint:js` to tell you what is wrong code.
$ yarn lint:js
```

# Convention code

## Component's file name should be in Pascal Case.

Component names should be like ProductCard and not like productCard, product-card, etc. This way when we see a filename in Pascal Case, it is immediately clear that the file is a react component.

## Component having own folders should have a component file with the same name.

This way when we search for files, we don't get a list of <b>index.ts</b> but will receive the actual component files.

## Create an index.ts file in that component folder which export the named component.

```
import Product from './Product';
export default Product;
```

or

```
export { default } from './Product';
```

## Directory sturcture code

### Group by folder

````
├── public/          #static files
│   ├── assets/      #assets
|   |    |── images  #images
|   |    |── fonts   #fonts
│   └── index.html   #html template
│
├── src/             #project root
|   |── assets/      #assets file
|   |── components/  #common components reuse
|   |── features/    #features of app
|   |── guards/      #guard permissions
│   ├── hooks/       #hooks source
|   |── layouts/     #common layouts
|   |── routes/      #common routes
│   ├── services/    #services source
│   ├── shared/      #common constant and utils reuse
|   |── types/       #define interface
|   |── typing/      #declare global package
│   ├── App.js
│   ├── App.test.js
│   ├── index.js

└── package.json```
````
