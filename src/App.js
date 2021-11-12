import React from 'react';
import Header from './components/Header';
import './App.css';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Falcon from './pages/Falcon-9';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className={"app"}>
      <Header/>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route path="/vehicles/falcon-9" exact component={Falcon}/>
      </Switch>
      <Footer/>
    </div>
  )
}


export default App;