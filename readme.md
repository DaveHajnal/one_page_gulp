API documentation

setup full dev env:

`npm i`

Details:

Make sure that you've installed Node and npm before attempting to install gulp.

`node -v`
`npm -v`

nodeJs setup:
https://nodejs.org/en/

LINUX:
`curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs`

`sudo apt-get install -y build-essential`

WIN:
https://nodejs.org/en/#download

Dependencies:

Bootstrap 4 beta
http://getbootstrap.com/docs/4.0/getting-started/download/

`npm i -S bootstrap@4.0.0-beta.2`

Express setup:
https://expressjs.com/

`npm i -S express`

Express-handlebars setup:
http://handlebarsjs.com/

`npm i -S express-handlebars`

Gulp setup
https://gulpjs.com/

`npm i -S gulp`
https://www.npmjs.com/package/gulp

Gulp-autoprefixer:
https://www.npmjs.com/package/gulp-autoprefixer

`npm i -D gulp-autoprefixer`

Gulp-sass setup

`npm i -S gulp-sass`
https://www.npmjs.com/package/gulp-sass

Jquery setup
http://jquery.com/download/

`npm i -S jquery`

Popper setup
https://popper.js.org/
https://github.com/FezVrasta/popper.js#installation

`npm i -S popper.js`

Dev dependencies:

Gulp-sass-lint
https://www.npmjs.com/package/gulp-sass-lint

`npm i -D gulp-sass-lint`

ESLint
https://eslint.org/docs/user-guide/getting-started

`npm i -D gulp-eslint`
https://www.npmjs.com/package/gulp-eslint

You should then setup a configuration file:
`./node_modules/.bin/gulp-eslint --init`
we use our rules, put into the eslintrc.json|js|yaml file (according to file format!)

`{
  "env": {
    "node": true,
    "es6": false
  },
  "parserOptions": {
    "sourceType": "module"
  },
  "extends": "standard"
}`

Rendering & diff linter usage:
`npm run watch`

`npm run sasslint`

`npm run eslint`
