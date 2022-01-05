import './App.css';
import Home from './Prensentationals/Home/Home';
import LayoutDesign from './Prensentationals/Layout-Design/LayoutDesign';

function App() {
  // need to wrap home with layouts but will only work with context props children passing
  
  return (
    <div className="App">
    <LayoutDesign>
      <Home />
    </LayoutDesign>
    </div>
  );
}

export default App;
