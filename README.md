## Setup

First, of course, download this repo. Then, from the Terminal (assuming Node.js installed), install RequireJS.

    npm install requirejs -g

Next, we need an easy way to deal with dependency management. We'll use Bower, from the guys at Twitter.

    npm install bower -g

Let's now install the dependencies for this project. I'm assuming that we're building a Backbone project, so I've listed RequireJS, jQuery, Underscore, and Backbone as dependencies.

    bower install

When ready to build the project, run:

    ./build.sh

this will create a new `public` directory, copy the files over, run the r.js optimizer on assets, and clean it the file structure a bit for production. Refer to `app.build.js`for configuration options.

### CSS Imports

If you're not using a preprocessor, feel free to modularize your stylesheets, and `@import` them into a master stylesheet. During the build process, r.js will merge these files together, so that you don't have to deal with any performance hits from using `@import`.
