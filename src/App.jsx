import {
  Route,
  Routes,
  useLocation
} from 'react-router-dom';
import React, { useEffect } from 'react';
import './App.css';
import MainLayout from './layouts/MainLayout';
import PortfolioPage from './pages/PortfolioPage'
import ResumePage from './pages/ResumePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import ProjectDetails from './components/ProjectDetails/ProjectDetails.json'
import Game from './components/Game/Game'

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <Routes>
            <Route path="/" element={<MainLayout location={location}/>}>
              <Route index element={<AboutPage />} />
              <Route path="/portfolio" element={<PortfolioPage />}/>
              <Route path="/resume" element={<ResumePage />}/>
              <Route path="/contact" element={<ContactPage />}/>
              <Route path="/projects">
                {ProjectDetails.map((project, index) => (
                  <Route key={index} path={`${project.id}`} element={<ProjectPage project={project} />}/>
                ))}
              </Route>
              <Route path="/game" element={<Game />}/>
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
