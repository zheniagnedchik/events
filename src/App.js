
import './App.css';

import MainEvents from './components/MainEvents'
import {BrowserRouter as Router} from 'react-router-dom'



function App() {
  return (
    <div >
      <Router>
      <MainEvents/>
      </Router>
    </div>
  );
}

export default App;
