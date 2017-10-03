const css = require('./app.scss'); //you need this to get the index html to auto generate the css
console.log('hello from app.js');

import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
// import './foundation-pieces';

$(document).foundation();
