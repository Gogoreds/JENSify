import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SpotifyLogin from './components/SpotifyLogin';
import LoginPage from './components/LoginPage';
import Startpage from './components/Startpage';
import Errorpage from './components/Errorpage'
import About from './components/About';
import Register from './components/Register';
import Loggedinprofile from './components/LoggedIn/Loggedinprofile';
import Mypage from './components/LoggedIn/Mypage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path='/About' element={<About />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/SpotifyLogin' element={<SpotifyLogin />} />
        <Route path='/UserLoggedIn' element={<Loggedinprofile />} />
        <Route path='/Mypage' element={<Mypage />} />
        <Route path='*' element={<Errorpage />} />
      </Routes>
    </Router >
  );
}

export default App;
