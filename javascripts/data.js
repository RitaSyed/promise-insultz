const nounsJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/nouns.json')
      .done((data) => {
        resolve(data.nouns);
      })
      .fail((err) => {
        reject(err);
      });
  });
};
const descriptorsJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/descriptors.json')
      .done((data) => {
        resolve(data.descriptors);
      })
      .fail((err) => {
        reject(err);
      });
  });
};
let noun = [];
let descriptors = [];
const getAllData = () => {
// resolve promises
  return Promise.all([nounsJSON(), descriptorsJSON(),])
    .then((results) => {
      noun = results[0];
      descriptors = results[1];
    })
    .catch((err) => {
      console.error('error', err);
    });
};

const getNouns = () => {
  return noun[Math.floor(Math.random() * noun.length)].text;
};
const getDescriptors = () => {
  return descriptors[Math.floor(Math.random() * descriptors.length)].text;
};

const initializer = () => {
  getAllData();
};

module.exports = {
  initializer,
  getNouns,
  getDescriptors,
};
