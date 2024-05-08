import {
  Route,
  Routes,
  BrowserRouter
  // createBrowserRouter,
  // createRoutesFromElements,
  // RouterProvider,
  // Outlet
} from 'react-router-dom';
import React from 'react';
import './App.css';
import MainLayout from './layouts/MainLayout';
import PortfolioPage from './pages/PortfolioPage'
import ResumePage from './pages/ResumePage'
import ContactPage from './pages/ContactPage'
import AboutMe from './components/AboutMe/AboutMe';

const App = () => {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<AboutMe />} />
                <Route path="/portfolio" element={<PortfolioPage />}/>
                <Route path="/resume" element={<ResumePage />}/>
                <Route path="/contact" element={<ContactPage />}/>
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default App;
