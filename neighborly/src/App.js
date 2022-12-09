import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
// import SideNav from './components/SideNav.js';
import { Outlet } from "react-router-dom";
import { GlobalProvider } from './context/GlobalState.js';

import MainPage from './components/MainPage.js'

function App() {

  return (
    <GlobalProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </GlobalProvider>
  );
}

export default App;
