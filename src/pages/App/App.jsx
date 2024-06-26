import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
// import NewOrderPage from '../NewOrderPage/NewOrderPage';
import NotesPage from '../NotesPage/NotesPage';
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import NewNoteForm from '../NewNoteForm/NewNoteForm';
// import { indexNotes } from "../../utilities/notes-service"


export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {user ?
        <>
        <h1>{console.log()}</h1>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* <Route path="/" element={<NotesPage user={user} notes={notes} addNote={addNote} /> } /> */}
            {/* <Route path="/notes" element={<NotesPage user={user} notes={notes} addNote={addNote} /> } /> */}
            <Route path="/" element={<NotesPage user={user}  /> } />
            <Route path="/notes" element={<NotesPage user={user}  /> } />
          </Routes>

        </>
        : <AuthPage setUser={setUser} />}
    </main>
  );
}



