import React from 'react'
import Header from './components/Header'
import {Link, BrowserRouter as Router, HashRouter} from 'react-router-dom'
import {Route, Redirect} from 'react-router-dom'
import HomePage from './components/HomePage'


class App  extends React.Component {
  render() {
    return(

      <div className="app">
        <div className="header"><Header style={{backgroundImage: 'url(https://www.spacex.com/static/images/backgrounds-2021/HP_SN11_Vertical_20210311_IMG_01221.webp)'}}/></div>
        <div className="homepage"></div>
        





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