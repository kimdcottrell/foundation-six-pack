npm run dev
npm run prod

# Justifying Plugins
------

1. `clean-webpack-plugin` instead of `rimraf`
⋅⋅⋅ Webpack by default doesn't have a way to execute commands during the watch event. Thanks to this, you can't execute `rimraf` during the beginning of the build process, as triggered by `webpack --build`. `clean-webpack-plugin` solves this issue - it executes `rm -rf [dist_path]` at the start of every build process.

2. `browser-sync & browser-sync-webpack-plugin` instead of `webpack-dev-server`
⋅⋅⋅ `webpack-dev-server` tries to tackle too many problems at once, which forces you to make a very crazy config if you want to to compile everything properly. `browser-sync` just works - it's okay with .php files, it writes to the disk, and it reads from files where you'd expect it to read from.

3. 
