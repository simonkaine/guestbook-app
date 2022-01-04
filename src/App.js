import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProvideAuth } from './Context/ProvideAuth';
import Login from './Prensentationals/Auth/Login';
import Home from './Prensentationals/Home/Home';
import LayoutDesign from './Prensentationals/Layout-Design/LayoutDesign';

function App() {
  // need to wrap home with layouts but will only work with context props children passing
  
  return (
    <div className="App">
    <ProvideAuth>
      <Router>
        <Switch>

          <Route path="/login">
              <Login />
          </Route>

            <LayoutDesign>
              <Home />
            </LayoutDesign>
          
        </Switch>
      </Router>
    </ProvideAuth>
    </div>
  );
}

export default App;
