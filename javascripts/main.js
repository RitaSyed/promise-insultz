const data = require('./data');
const events = require('./events');
// const data = require('./promises');

$(document).ready(() => {
  data.initializer();
  events();
});
