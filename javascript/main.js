// ## Array Cardio Day 2

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

const twenty = people.filter(function (people) {
    if (people.year < 2000) {
        return true; // keep it
    }
});

console.table(twenty);
ddg;
// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
