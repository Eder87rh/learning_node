console.log('Starting notes.js');

const fs = require('fs');

let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e) {
        console.error("the file does not exists: " + e);
        return [];
    }
};

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body,
    };

    let duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }

};

let getAll = () => {
    console.log('Getting all notes');
};

let getNote = (title) => {
    const notes = fetchNotes();
    const noteFounded = notes.find(note => note.title === title);
    return noteFounded;
};

let removeNote = (title) => {
    let notes = fetchNotes();
    let notesFiltered = notes.filter(note => note.title !==title);
    saveNotes(notesFiltered);

    return notes.length !== notesFiltered.length;
}

const logNote = (note) => {
    debugger;
    console.log('----');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote,
};