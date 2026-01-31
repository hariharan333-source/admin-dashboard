
import { useState } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Sidebar from './Sidebar';


function App() {
  const [openSidebarToggel, setOpenSidebarToggle]=useState(false)
  const OpenSidebar = ()=>{
    setOpenSidebarToggle(!openSidebarToggel)
  }
  return (
    <div className="grid-container">
     <Header OpenSidebar={OpenSidebar}/>
     <Sidebar openSidebarToggel={openSidebarToggel}/>
     <Home/>
    </div>
  );
}

export default App;
