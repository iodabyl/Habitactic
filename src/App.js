import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Error from './pages/Error'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import OurRooms from './pages/OurRooms';
import SingleRoom from './pages/SingleRoom';
import Coaching from './pages/Coaching';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/rooms'>
            <OurRooms />
          </Route>
          <Route exact path='/coaching'>
            <Coaching />
          </Route>
          <Route path='/rooms/:slug'>
            <SingleRoom />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
