# TS Webpack HMR

## Usage

Load deps & create an initial build 
```bash
yarn
webpack
```

Watch for changes & server the bundle
```bash
webpack --watch & node build/bundle.js
```

Edit the lib2.ts file and see that the lib.ts and lib2.ts file are reloaded, but not the index.ts file. The interval should continue.
