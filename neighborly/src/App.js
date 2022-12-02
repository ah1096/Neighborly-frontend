import './App.css';
// import LandingPage from './LandingPage.js';
import Navbar from './Navbar.js';
import SideNav from './SideNav.js'
import UserProfile from './UserProfile.js'
;
function App() {
  return (
    <div className="App">
        {/* <LandingPage/> */}

        <Navbar/>
        <SideNav/>
        <UserProfile/>

    </div>
  );
}

export default App;
