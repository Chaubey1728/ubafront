
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
import Team from './pages/Events/Team';
import Bhatimines from './pages/Villages/Bhatimines';
import Chandanhola from './pages/Villages/Chandanhola';
import Rajpur from './pages/Villages/Rajpur';
import Satbari from './pages/Villages/Satbari';
import Sultanpur from './pages/Villages/Sultanpur';
import Faculty from './pages/Team/Faculty';
import Students from './pages/Team/Students';
import Year21 from './pages/Events/Year21';
import Year22 from './pages/Events/Year22';
import Year23 from './pages/Events/Year23';



function App() {
  return (
    <div className="Apphome">
      <div className='content-wrap'>

        <Router>
        <Routes>

        <Route path="/" element={ <Home /> } />
        
        <Route path="/about" element={ < About /> } />

        <Route path="/team" element={ < Team /> } />
        <Route path="/signup" element={ < SignUP /> } ></Route>
        
        <Route path="/login" element={ < Login /> } ></Route>
        <Route element={<PvtRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route path='/faculty' element={<Faculty />} />
        <Route path='/students' element={<Students /> } />

        <Route path='/bhati' element={<Bhatimines />} />
        <Route path='/chandan' element={<Chandanhola />} />
        <Route path='/rajpur' element={<Rajpur /> } />
        <Route path='/satbari' element={<Satbari />} />
        <Route path='/sultanpur' element={<Sultanpur />} />

        <Route path='/yr21' element={<Year21 />} />
        <Route path='/yr22' element={<Year22 />} />
        <Route path='/yr23' element={<Year23 />} />
        </Routes>
        </Router>
      </div>
      <hr />
    <Footer />
    </div>
  );
}

export default App;
