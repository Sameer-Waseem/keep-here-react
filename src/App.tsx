import "./App.css";
import Header from "./components/Header";
import NoteCard from "./components/NoteCard";
import { Route, Routes } from "react-router-dom";
import Note from "./components/Note";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState<any>();

  useEffect(() => {
    if (!currentUser) {
      try {
        const jwt = localStorage.getItem("token");
        const user: any = jwtDecode(jwt ?? "");
        setCurrentUser(user);
      } catch (error) {}
    }
  }, [currentUser]);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout user={currentUser} />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/cards" element={<NoteCard />} />
        <Route path="/new-note" element={<Note user={currentUser} />} />
        <Route path="/note/:id" element={<Note />} />
        <Route path="/" element={<Home user={currentUser} />} />
      </Routes>
    </>
  );
}

export default App;
