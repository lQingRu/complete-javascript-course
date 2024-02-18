# JS Development

![alt text](image.png)

## Node Package Manager (`npm`)

- Modules (Packages) are shared on the `npm` repository
- `npm` software to download, use and share packages
- `npm i xx` vs `npm i xx -g`
  - `-g`: To install globally, so as to use in every directory without the intermediate step of an NPM script
  - locally: Recommended so that we can always stay on the latest version

## Step 1 Build Process: Bundling

- Quite a complex process which can eliminate unused code and compress/code
- Important because:
  - Older browsers don't support modules at all
    - Hence code that is in a module cannot be executed by any older browser
    - More performant (less files to browser)
  - Beneficial that bundling step compresses code

## Step 2 Build Process: Transpiling / Polyfilling

- Convert all modern JS syntax and features back to old ES5 syntax, so even older browsers can understand the codes without breaking
- Usually done by `Babel`

## Build Process

- Populate Js bundlers: `webpack`, `Parcel`
- Js bundlers: transform raw code to JS bundle

# Modules

- Module: reusuable piece of code that encapsulates implemention details
- Different from just function/class
  - Module is usually a standalone file
- Benefits:
  - Compose software
  - Isolate components
  - Abstract code
  - Organized code
  - Reuse code

## Native JS (ES6) Modules

- Js has a native built-in module system
- ES6 modules are stored in files, exactly 1 module per file

### ES6 modules VS Old school scripts

![alt text](image-1.png)

- All imported modules are hoisted
  - They will be executed first

**How ES6 modules are imported**
![alt text](image-2.png)

- `parsing`: Read the code without executing it
- Imports are not copies of export, they are live connection
  - i.e. point to the same place
- Should not mix named and default exports in the same module
  - `export default ...`: can just name it anything

## Top-level `await`

- From ES2022 version, can use `await` outside of `async` functions, at least in modules
  - Called `top-level await`
- This only works in modules
- BEFORE (to use `await`):

```js
async function x(){
    ...
}

const res = await x();
```

- AFTER:

```js
const res = await fetch('...');
const data = await res.json();
```

- BUT this top-level `await` blocks the execution of the entire module
  - Esp those long running tasks

## CommonJS modules

- There are different module systems (e.g.: ES6 Modules, CommonJS modules)

```js
// Export
export.addToCart = function (product, quality) {
    ...
}

// Import
const {addToCart} = require('./shoppingCart.js')

```

## Bundling with `Parcel` and `Npm` scripts

### `parcel`

- Creates `dist` folder
  - e.g.: in `index.html`: `<script defer="" src="/index.3ec6c1be.js"></script>`
- `package.json`

```json
{
  "dependencies": {
    "parcel": "^2.11.0"
  }
}
```

- What
  - Uses default port of `1234`, and acts like the live-server
  - Bundle the imported modules (own modules, 3rd party modules)
  - Automatically uses `babel` to transpile / code
- Importing modules:
  - BEFORE (without `parcel`):
  ```js
  import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
  ```
  - NOW:
  ```js
  import cloneDeep from 'lodash-es'; // OR import cloneDeep from 'lodash';
  ```
- Methods to use `parcel`:

  - Execute `npx parcel index.html` directly
  - (In practice) Include in `npm scripts` - `package.json`:

  ```json
    {
        ...,
        "scripts": {
            "start": "parcel index.html",
            "build": "parcel build index.html" // to build (+compress) final product
        }
    }
  ```

## `Babel`

- What
  - Compiler (`source code ==> output code`)
- Important because even after the new ES6 standard has been introduced, there are still many people who are stuck with old versions of Windows (e.g.: Window XP) which cannot upgrade old internet explorers
  - Hence, we use tools like `Babel to tranpile modern code back to ES5 code for codes to still be used on old IE
- We can configure `Babel` a lot if we want to define exactly what browsers should be supported, but that will be a lot of work
  - `Parcel` however make very good default decisions for us which we usually just go with the default
- `Babel` works with plugins and presets that can be both configured
  - Plugin is a specific JS feature that we want to transpile
- `Babel` used to do polyfilling out of the box, but recently they started to recommend another library
  - HENCE, now we need to manually import that, i.e. `core-js`

### Polyfill

- `Polyfill`: piece of code used to provide modern functionality on older browsers that do not natively support it

  - The reason why polyfills are not used exclusively is for better functionality and better performance

- Polyfill will polyfill everything even if we do not need it
  - e.g.: functions in `import 'core-js/stable'`
- So instead of importing everything there is in say `core-js/stable`, we can just include specific functions that we need
  - e.g.: `import 'core-js/stable/array/find';`
  - BUT this will be a lot of work though will greatly reduce the bundle size
- There is still feature that is not polyfilled by `import 'core-js/stable'`:
  - Will need to install this file: `regenerator-runtime/runtime`
  - To allow polyfilling `async functions`
