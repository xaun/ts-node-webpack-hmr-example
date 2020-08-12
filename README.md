# TS Webpack HMR

## Usage

```bash
npm i
webpack --watch &
node build/bundle.js
```

Edit the lib2.ts file and see that the lib.ts and lib2.ts file are reloaded, but not the index.ts file. The interval should continue.

There is also an accept statement for
