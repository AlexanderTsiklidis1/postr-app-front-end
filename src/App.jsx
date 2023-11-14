import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import SidebarLeft from '../Components/SidebarLeft';
import SidebarRight from '../Components/SidebarRight';
import Footer from '../Components/Footer';
import Edit from '../Pages/Edit';
import FourOFour from '../Pages/FourOFour';
import Home from '../Pages/Home';
import Index from '../Pages/Index';
import New from '../Pages/New';
import Show from '../Pages/Show';
import NavBar from '../Components/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="main-content">
          <SidebarLeft />
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<Index />} />
              <Route path="/posts/new" element={<New />} />
              <Route path="/posts/:index" element={<Show />} />
              <Route path="/posts/:index/edit" element={<Edit />} />
              <Route path="*" element={<FourOFour />} />
            </Routes>
          </main>
          <SidebarRight />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;