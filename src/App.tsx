import './App.css'
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { DogPage } from './Pages/Dog'
import { CatPage } from './Pages/Cats'
import { CapybaraPage } from './Pages/Capybara';
import { AppProvider } from './components/AppContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FoxPage } from './Pages/Fox';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      refetchOnWindowFocus: false
    }
  }
})

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <div className='container'>
          <Router>
            <nav className='navigation_buttons'>
              <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/dogs">Dogs</NavLink>
              | <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/cats">Cats</NavLink>
              | <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/capybara">Capybara</NavLink>
              | <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/fox">Fox</NavLink>
            </nav>
            <Routes>
              <Route path="/Dogs" element={<DogPage />} />
              <Route path="/Cats" element={<CatPage />} />
              <Route path="/Capybara" element={<CapybaraPage />} />
              <Route path="/Fox" element={<FoxPage />} />

            </Routes>
          </Router>
        </div>
      </AppProvider>
    </QueryClientProvider>
  )
}

export default App
