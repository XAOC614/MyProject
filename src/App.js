import React from "react";
import './App.css';
import Header from './components/Header/Header';
import NavBar from "./components/NavBar/NavBar";
import Content from "./components/Content/Content";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>

                <Route path='/dialogs' render={() => <DialogsContainer />} />

                <Route path='/content' render={() => <Content />} />

                <Route path='/users' render={() => <UsersContainer /> } />

                    <Route path='/news' render={() => <News/> }/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        
    );
}

export default App;
