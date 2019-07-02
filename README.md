# Getting started

### Docker

Run ```docker-compose up -d``` to install the latest version of WordPress and install the container.

### Theme dependencies

Rename ```wp-content/themes/placeholder``` to the name of your site's theme. Run ```npm install``` from the theme directory to install dependencies.

### Compiling Sass and JS files with GruntJS

Run ```grunt``` from the terminal to listen for changes to ```assets/scss``` and ```assets/js/src``` in the theme.
