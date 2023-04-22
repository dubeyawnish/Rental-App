
import './App.css';
import AllProperty from './Components/AllProperty/AllProperty';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register/Register';

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/allproperty' element={<AllProperty />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Register />} />
      </Routes>



    </Router>
  );
}

export default App;
