import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Header from "./directories/Header"
import Search from "./directories/Search"
import Countries from "./directories/Countries"

function App() {
  return (
    <>
      <Header />
      <Search />
      <Countries />
    </>
  )
}

export default App
