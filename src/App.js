import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./directories/Header"
import Search from "./directories/Search"
import Countries from "./directories/Countries"
import Country from "./directories/Country"

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <Search />
        <Countries />
      </Route>
      <Route path="/countries/:name" children={<Country />}></Route>
    </Router>
  )
}

export default App
