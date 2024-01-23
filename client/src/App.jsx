import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Nabvar';
import AppRoutes from './components/AppRoutes';

function App() {

  return (
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  )
}

export default App;
