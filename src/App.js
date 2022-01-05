import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProvideAuth } from './Context/ProvideAuth.jsx';
import { PrivateRoute } from './Components/PrivateRoute/PrivateRoute.jsx';
import LayoutDesign from './Prensentationals/Layout-Design/LayoutDesign.jsx';
import Login from './Prensentationals/Auth/Login.jsx';
import Home from './Prensentationals/Home/Home.jsx';

function App() {
  // need to wrap home with layouts but will only work with context props children passing
  
  return (
    <div className="App">
    <ProvideAuth>
      <Router>
        <Switch>

          <Route exact path="/login">
              <Login />
          </Route>
          
          <PrivateRoute exact path='/'>
            <LayoutDesign>
              <Home />
            </LayoutDesign>
          </PrivateRoute>
          
        </Switch>
      </Router>
    </ProvideAuth>
    </div>
  );
}

export default App;
