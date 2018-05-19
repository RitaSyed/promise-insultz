const dom = require('./dom');
const data = require('./data');
const buttonEvents = () => {
  $('.btn').click(() => {
    dom.domString(data.getDescriptors(), data.getDescriptors(), data.getNouns());
  });
};

module.exports = buttonEvents;
