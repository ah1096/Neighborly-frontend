import './App.css';
import LandingPage from './LandingPage.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
// import SideNav from './SideNav.js';
// import UserProfile from './UserProfile.js';
import { useState } from 'react';
import ProfilePage from './ProfilePage.js';

function App() {

  const [page, setPage] = useState('home')

  return (
    <div className="App">

        <Navbar setpage={setPage}/>
          {page === 'home' && <LandingPage />}
          {page === 'profile' && <ProfilePage />}  
        <Footer />
    

    </div>
  );
}

export default App;
