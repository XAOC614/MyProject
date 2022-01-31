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
import DialogsContainer from "./components/Dialogs/DialogsContainer";
const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    {/* <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} message={props.message}
                    addMessage={props.addMessage} updateNewMessage={props.updateNewMessage}/>}/>
                    
                    <Route path='/content' render={() => <Content posts={props.posts} text={props.text} 
                    addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/> */}


                <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>} />

                <Route path='/content' render={() => <Content store={props.store}  />} />

                    <Route path='/news' render={() => <News/> }/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        
    );
}

export default App;
