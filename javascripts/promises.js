// const outputDiv = $('#insultDiv');
// const loadDescr = () => {
//   return new Promise((resolve, reject) => {
//     $.get('/db/descriptors.json')
//       .done((data) => {
//         resolve(data.descriptors);
//       })
//       .fail((err) => {
//         reject('error!', err);
//       });
//   });
// };

// const loadNoun = () => {
//   return new Promise((resolve, reject) => {
//     $.get('/db/nouns.json')
//       .done((data) => {
//         resolve(data.nouns);
//       })
//       .fail((err) => {
//         reject('error!', err);
//       });
//   });
// };

// const randomDescr = () => {
//   let descr = [];
//   let answer = [];
//   return loadDescr()
//     .then((result) => {
//       descr = [...result,];
//       const number = Math.floor(Math.random() * 111);
//       const matching = descr.filter((descrId) => {
//         if (descrId.id === number) {
//           return true;
//         };
//         return false;
//       });
//       answer = matching;
//       return Promise.resolve(answer);
//     });
// };
// const randomNoun = () => {
//   let descr = [];
//   let answer = [];
//   return loadNoun()
//     .then((result) => {
//       descr = [...result,];
//       const number = Math.floor(Math.random() * 40);
//       const matching = descr.filter((descrId) => {
//         if (descrId.id === number) {
//           return true;
//         };
//         return false;
//       });
//       answer = matching;
//       return Promise.resolve(answer);
//     });
// };

// $('.btn').click((e) => {
//   randomDescr().then((descr1) => {
//     domString(descr1);
//     randomDescr().then((descr2) => {
//       domString(descr2);
//       randomNoun().then((noun) => {
//         console.log('noun', noun);
//         domString(noun);
//       });
//     });
//   });
// });

// const domString = (pups) => {
//   let pupString = '';
//   pupString += `<p>${pups[0].text}<p>`;
//   printToDom(pupString);
// };
// const printToDom = (array) => {
//   outputDiv.append(array);
// };

// const initializer = () => {
//   randomDescr();
// };

// module.exports = {
//   initializer,
// };
