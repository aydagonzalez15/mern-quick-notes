import * as notesAPI from './notes-api';


export async function createNote(note) {
  const n = await notesAPI.createNote(note);
  return n  //I dont think we need this here
}

export async function indexNotes(note) {
  const n = await notesAPI.indexNotes(note);
  return n  //I dont think we need this here
}

export async function deleteNote(id) {
  const n = await notesAPI.deleteNote(id);
  return n  //I dont think we need this here
}




