import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import Signup from './pages/Signup';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Coaching from './pages/Coaching';
import Confirmation from './pages/Confirmation';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <div className="main">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/coaching'>
            <Coaching />
          </Route>
          <Route path='/contact'>
            <Signup />
          </Route>
          <Route path='/confirm'>
            <Confirmation />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
