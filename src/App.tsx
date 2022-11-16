import "./App.css";
import Header from "./components/Header";
import NoteCard from "./components/NoteCard";
import { Route, Routes } from "react-router-dom";
import Note from "./components/Note";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/cards" element={<NoteCard />} />
        <Route path="/new-note" element={<Note />} />
        <Route path="/note/:id" element={<Note />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
