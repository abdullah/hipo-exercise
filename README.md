# hipo-exercise

> Hipo Exercise Project

### Directory Structure

```bash
├── build # Root folder for build system related config.
├── config
├── src
|  ├── App.vue                # Main container component
|  ├── assets
|  |  ├── fonts
|  |  └── scss
|  ├── components             # Vue components.
|  ├── helpers                # Helper functions & components.
|  ├── main.js                # Entry point for the application.
|  ├── router                 # Vue Router configuration
|  └── services               # API services.
├── static                    # Static files.
|  ├── common                 # Common static files.
|  └── home                   # Only home static files.
├── .editorconfig             # Editor Config file for generalized syntax.
├── .gitignore                # Tells git which files to ignore.
├── VERSION                   # Version info.
├── README.md                 # This file...
└── package.json              # List of dependencies (node packages).

```
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
```


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
