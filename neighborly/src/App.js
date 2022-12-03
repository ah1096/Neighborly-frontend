import './App.css';
import LandingPage from './components/LandingPage.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import { useState } from 'react';
import ProfilePage from './components/ProfilePage.js';
import Login from './components/Login.js';
import CreateAccount from './components/CreateAccount.js';
import { GlobalProvider } from './context/GlobalState.js';

function App() {

  const [page, setPage] = useState('home')

  return (
    <GlobalProvider>
          <Navbar setpage={setPage}/>
            {page === 'home' && <LandingPage />}
            {page === 'profile' && <ProfilePage />}  
            {page === 'login' && <Login />}
            {page === 'createaccount' && <CreateAccount />}
          <Footer />
    </GlobalProvider>
  );
}

export default App;
