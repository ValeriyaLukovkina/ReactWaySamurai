import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Setting from './components/Setting/Setting';
import Music from './components/Music/Music';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/Login';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/' element={<DialogsContainer />} />
            <Route path='/profile' element={<ProfileContainer />}>
              <Route path='/profile/:userId' element={<ProfileContainer />} />
            </Route>
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/setting' element={<Setting />} />
            <Route path='/login' element={<LoginContainer />} />
          </Routes>

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
