import "./App.css";
import Header from "./components/Header";
import NoteCard from "./components/NoteCard";
import { Route, Routes } from "react-router-dom";
import NewCard from "./components/NewCard";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/cards" element={<NoteCard />} />
        <Route path="/new-card" element={<NewCard />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
