import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import { useState } from 'react';
import { GlobalProvider } from './context/GlobalState.js';

function App() {

  const [page, setPage] = useState('home')

  return (
    <GlobalProvider>
      <Navbar />
      <Footer />
      <Outlet />
    </GlobalProvider>
  );
}

export default App;
