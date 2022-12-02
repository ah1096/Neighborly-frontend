import './App.css';
import LandingPage from './LandingPage.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import { useState } from 'react';
import ProfilePage from './ProfilePage.js';
import Login from './Login.js';
import CreateAccount from './CreateAccount.js'

function App() {

  const [page, setPage] = useState('home')

  return (
    <div className="App">

        <Navbar setpage={setPage}/>
          {page === 'home' && <LandingPage />}
          {page === 'profile' && <ProfilePage />}  
          {page === 'login' && <Login />}
          {page === 'createaccount' && <CreateAccount />}
        <Footer />
    

    </div>
  );
}

export default App;
