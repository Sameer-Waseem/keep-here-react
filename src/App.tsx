import "./App.css";

import axios from "axios";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Note from "./components/Note";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import Header from "./components/Header";
import NoteCard from "./components/NoteCard";
import ProtectedRoute from "./components/ProtectedRoute";

axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");

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
        <Route
          path="/cards"
          element={<ProtectedRoute user={currentUser} Component={NoteCard} />}
        />
        <Route
          path="/new-note"
          element={<ProtectedRoute user={currentUser} Component={Note} />}
        />
        <Route
          path="/note/:id"
          element={<ProtectedRoute user={currentUser} Component={Note} />}
        />
        <Route path="/" element={<Home user={currentUser} />} />
      </Routes>
    </>
  );
}

export default App;
