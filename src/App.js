import React from "react";
import './App.css';
import Header from './components/Header/Header';
import NavBar from "./components/NavBar/NavBar";
import Content from "./components/Content/Content";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path='/content' render={() => <Content posts={props.posts} addPost={props.addPost}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        
    );
}

export default App;
