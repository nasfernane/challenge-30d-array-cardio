// ## Array Cardio Day 2
'use strict';
const people = [
    { name: 'Gwen', year: 1988 },
    { name: 'Benjamin', year: 1986 },
    { name: 'Denyze', year: 1987 },
    { name: 'Furimi', year: 2010 },
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 },
];

const mates = ['Benjamin, Deboutin', 'Denyze, Hottechamps', 'Lionel, Cosson', 'Olivier, Cholley'];

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

console.log(data);

const transports = data.reduce(function (obj, item) {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(transports);

// const alpha = mates.sort(function (lastOne, nextOne) {
//     const [aLast, aFirst] = lastOne.split(', ');
//     const [bLast, bFirst] = nextOne.split(', ');
//     return aFirst > bFirst ? 1 : -1;
// });

// console.log(alpha);

// const somme = comments.reduce((total, comment) => total + comment.id, 0);

// console.log(somme);

// const twenty = people.filter(people => people.year < 2000 && people.year > 1987);

// console.table(twenty);

// const presentation = people.map(people => people.year / 2);

// console.log(presentation);

// const orderedComments = comments.sort(function (a, b) {
//     if (a.id > b.id) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

// const orderedComments = comments.sort((a, b) => (a.id > b.id ? 1 : -1));

// console.table(orderedComments);

// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// console.log(category);

// const boulevardDe = links.map(link => link.textContent).filter(name => name.includes('de'));

// console.log(boulevardDe);

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
