/* let obj = {
    name: 'Andrew'
};
let stringObj = JSON.stringify(obj);
console.log(typeof stringObj)
console.log('stringObj',stringObj) */

/* let personString = '{"name": "Eder", "age": "31"}';
let person = JSON.parse(personString);
console.log(typeof person)
console.log(person) */

const fs = require('fs');

let originalNote = {
    title: 'Some title',
    body: 'Some body'
};

const originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');

const note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);