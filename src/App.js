import "./App.css"
import HomePage from "./home/HomePage"
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./components/watch/SinglePage"

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/singlepage/:id' component={SinglePage} exact />
        </Switch>
      </Router>
    </>
  )
}

export default App
