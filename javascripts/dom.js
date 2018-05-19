const outputDiv = $('#insultDiv');
const domString = (word1, word2, noun) => {
  let strang = '';
  strang += `${word1} ${word2} ${noun}`;
  printToDom(strang);
};

const printToDom = (insults) => {
  outputDiv.html(insults);
};

module.exports = {
  domString,
};
