import React from 'react';
import Header from './components/Header';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Falcon from './pages/Falcon-9';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className={"app"}>
      <Header/>
      <Navbar/>

      <Route exact path="/" component={MainPage}/>
      <Route path="/falcon-9" component={Falcon}/>
      <Route path="/falcon-heavy" render={() => <Redirect to="/" />}/>

      <Footer/>
    </div>
  )
}


export default App;