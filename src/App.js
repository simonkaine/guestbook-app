import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ProvideAuth } from './Context/ProvideAuth';
import Home from './Prensentationals/Home/Home';
import LayoutDesign from './Prensentationals/Layout-Design/LayoutDesign';

function App() {
  // need to wrap home with layouts but will only work with context props children passing
  
  return (
    <div className="App">
    <ProvideAuth>
      <Router>
        <Switch>
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
