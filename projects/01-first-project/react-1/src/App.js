import './App.css';
import React, { useEffect, useState, Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
// import News from './components/News/News';
// import Setting from './components/Setting/Setting';
// import Music from './components/Music/Music';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import UsersContainer from './components/Users/UsersContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Setting = React.lazy(() => import('./components/Setting/Setting'));

const App = (props) => {
  const [initialized, setInitialized] = useState(props.initialized)

  useEffect(() => {
    props.initializeApp()
    setInitialized(props.initialized)
  })

  return (
    <div>
    {!initialized && <Preloader/>}
    {initialized && <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
        <Suspense>
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

          </Suspense>

        </div>

      </div>
    </BrowserRouter> }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, {initializeApp})(App);
