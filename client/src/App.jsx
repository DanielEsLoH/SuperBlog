import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Nabvar';
import AppRoutes from './components/AppRoutes';

function App() {

  return (
    <Router>
      <div className='flex flex-col w-screen'>
        <Navbar />
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App;
