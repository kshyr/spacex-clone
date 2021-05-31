import React from 'react';
import Header from './components/Header';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Redirect} from 'react-router-dom';
import ContentBlock from "./components/ContentBlock";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            animate: true,
        }
    }

    componentDidMount() {
        if (window.sessionStorage.getItem("firstLoadDone") === null) {
            this.setState({animate: true})
            window.sessionStorage.setItem("firstLoadDone", 1)
        } else {
            this.setState({animate: false})
        }
    }

    render() {
        return (
            <div className={"app"}>

                <Header/>
                <ContentBlock bgImg={"crew-2/splashdown/Crew-1_Crew_Desktop.webp"}/>
                <ContentBlock bgImg={"crew-2/docking/Homepage_Dragon_Docking_Desktop.webp"}/>
                <ContentBlock bgImg={"backgrounds-2021/sn15/post-launch/HP_SN15_Desktop.webp"}/>
                <ContentBlock bgImg={"backgrounds-2021/sl26/Homepage_SL26_7371_Desktop.webp"}/>
                <ContentBlock bgImg={"backgrounds-2021/hls-resized-2.webp"}/>
                <ContentBlock bgImg={"backgrounds/iss_game.webp"}/>
                <Router>
                    <Route exact path="/vehicles">
                        <Redirect to="/"/>
                    </Route>
                </Router>
                <Router>

                </Router>

            </div>
        )
    }
}

export default App