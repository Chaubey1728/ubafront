
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SignUP from './pages/SignUP';
import PvtRoute from './components/PvtRoute';



function App() {
  return (
    <div className="Apphome">
      <div className='content-wrap'>

        <Router>
        <Routes>

        <Route path="/" element={ <Home /> } />
        
        <Route path="/about" element={ < About /> } />
        <Route path="/signup" element={ < SignUP /> } ></Route>
        
        <Route path="/login" element={ < Login /> } ></Route>
        <Route element={<PvtRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
 
        </Routes>
        </Router>
      </div>
      <hr />
    <Footer />
    </div>
  );
}

export default App;
