import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {useState} from 'react';

import Header from './Header.js';
import ColorButtons from './ColorButtons.js';
import Navbar from './components/Navbar.js';
import SideSection from './components/SideSection';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import Teaching from './components/pages/Teaching';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {
  const [artistactivated, setArtistactivated] = useState(false);
  return (
    <>
      <Router>
        <Navbar artistactivated={artistactivated}/>
        <div className='main'>
          <SideSection artistactivated={artistactivated} setArtistactivated={setArtistactivated} />
          <Routes>
            <Route path='/' element={<Home artistactivated={artistactivated} setArtistactivated={setArtistactivated} />}/>
            <Route path='/resume' element={<Resume />}/>
            <Route path='/teaching' element={<Teaching />}/>
            <Route path='/sign-up' element={<SignUp />}/>
          </Routes>
        </div>
        <Footer/>
      </Router>
      

      {/*<Header name="Hello, visitor to this work in progress! Try clicking the buttons if you so desire."/>
      <ColorButtons />*/}
    </>
  );
}

export default App;
