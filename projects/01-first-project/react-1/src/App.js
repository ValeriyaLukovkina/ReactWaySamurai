import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Setting from './components/Setting/Setting';
import Music from './components/Music/Music';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*' element={<Dialogs
              dispatch={props.dispatch}
              dialogsPage={props.state.dialogsPage}
              // addMessage={props.addMessage}
              // updateNewMessage={props.updateNewMessage}
            />} />
            <Route path='/profile' element={<Profile
              dispatch={props.dispatch}
              profilePage={props.state.profilePage}
              // addPost={props.addPost}
              // updateNewPostText={props.updateNewPostText}
            />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/setting' element={<Setting />} />
          </Routes>

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
