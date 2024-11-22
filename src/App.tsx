import './App.css'
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { DogPage } from './Pages/Dog'
import { CatPage } from './Pages/Cats'
import { CapybaraPage } from './Pages/Capybara';
import { AppProvider } from './components/AppContext';

function App() {


  return (
    <AppProvider>
      <div className='container'>
        <Router>
          <nav className='navigation_buttons'>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/dogs">Dogs</NavLink>
            | <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/cats">Cats</NavLink>
            | <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/capybara">Capybara</NavLink>
          </nav>
          <Routes>
            <Route path="/Dogs" element={<DogPage />} />
            <Route path="/Cats" element={<CatPage />} />
            <Route path="/Capybara" element={<CapybaraPage />} />
          </Routes>
        </Router>
      </div>
    </AppProvider>
  )
}

export default App
