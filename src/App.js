import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
        <Link to='/'>Home</Link>
        </li>
        <li>
        <Link to='/AboutUs'>AboutUs</Link>
        </li>
        <li>
        <Link to='/Contact'>Contact</Link>
        </li>
        </ul>
        <Switch>
          <Route path='/Contact'><Contact /></Route>
          <Route path='/AboutUs'><AboutUs /></Route>
          <Route path='/'><Home /></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
