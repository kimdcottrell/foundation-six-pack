# What is this?
------

Foundation 6 compiled using webpack and working with browser-sync and .php files, instead of the usual gulp + 500 plugins + webpack setup.

This solves a few problems from the [setup built into Foundation Zurb template](https://github.com/zurb/foundation-zurb-template):

1. Gulp is removed, so less bloat

2. Bower is removed, so less bloat (install all things through npm, so we utilize just one package manager)

3. Webpack was seemingly only included to get babel included, even though it can just straight up replace gulp...

4. You no longer have to depend on the Foundation CLI - just write any command you want in `package.json` and run `npm run [your command here]`

5. You can easily update Foundation in the future without hitting a mass of errors in your duplicated `_settings.scss` (refer to `/src/scss/config/_override-base-settings.scss` for more details)

6. You can load individual Foundation javascript modules for individual pages, instead of loading all needed JS modules across all pages (refer to `/src/js/pages/contact.js` for an idea on how to)

Still needs a bit of work, but it's compiling.

# Get Started
------

```
git clone https://github.com/kimdcottrell/foundation-six-pack.git
cd foundation-six-pack
npm install
npm run dev
```

A new browser window should appear that shows you http://localhost:8080.

`./index.php` reflects what is initially seen on the page

`./contact.php` reflects http://localhost:3000/contact.php

# Commands
------

`npm run dev`

Runs webpack in development mode. TODO: detail what this is

`npm run prod`

Runs webpack in production mode. TODO: Solve bug where UglifyJS errors on `contact.js`

# TODO
------

1. Make production version create compressed assets (check `contact.[hash].js`)

2. Add in images and fonts loader

3. Check if hashing is done the correct way for production env

4. Sourcemaps?

# Known bugs
------

1. UglifyJS errors on `contact.js`

This will only occur when running `npm run prod`. Webpack should still create the file, just uncompressed

# Justifying Plugins
------

1. `clean-webpack-plugin` instead of `rimraf`

Webpack by default doesn't have a way to execute commands during the watch event. Thanks to this, you can't execute `rimraf` during the beginning of the build process, as triggered by `webpack --build`. `clean-webpack-plugin` solves this issue - it executes `rm -rf [dist_path]` at the start of every build process.

2. `browser-sync & browser-sync-webpack-plugin` instead of `webpack-dev-server`

`webpack-dev-server` tries to tackle too many problems at once, which forces you to make a very crazy config if you want to to compile everything properly. `browser-sync` just works - it's okay with .php files, it writes to the disk, and it reads from files where you'd expect it to read from.
