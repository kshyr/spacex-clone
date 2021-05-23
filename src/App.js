import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router} from 'react-router-dom'
import {Route, Redirect} from 'react-router-dom'
import ContentBlock from "./components/ContentBlock";


class App  extends React.Component {
  render() {
    return(

      <div className="app">
        <Header />
        <ContentBlock />
        <ContentBlock />
        <ContentBlock />
        <Router>
          <Route exact path="/vehicles">
            <Redirect to="/" />
          </Route>
        </Router>
        <Router>

        </Router>
      </div>

    )
  }
}

export default App