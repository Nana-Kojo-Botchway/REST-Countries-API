import React from "react"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./directories/Header"
import Search from "./directories/Search"
import Countries from "./directories/Countries"
import Country from "./directories/Country"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:name" element={<Country />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Search />
      <Countries />
    </>
  );
}

export default App
