
import './App.css';
import AllProperty from './Components/AllProperty/AllProperty';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register/Register';
import Footer from './Components/Footer/Footer';
import MyProperty from './Components/MyProperty/MyProperty';
import AddProperty from './Components/AddProperty/AddProperty';
import MyTenants from './Components/MyTenants/MyTenants';
import Profile from './Components/Profile/Profile';
import EditPersonalData from './Components/EditPersonalData/EditPersonalData';
import EditAdress from './Components/EditAddress/EditAdress';

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/allproperty' element={<AllProperty />} />
        <Route exact path='/myproperty' element={<MyProperty />} />
        <Route exact path='/addproperty' element={<AddProperty />} />
        <Route exact path='/editProperty/:propertyId' element={<AddProperty />} />
        <Route exact path='/mytenants' element={<MyTenants />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/profile/pd' element={<EditPersonalData />} />
        <Route exact path='/profile/address' element={<EditAdress />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Register />} />
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;
