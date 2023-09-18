import React, { useState } from 'react'
import { API_BASE_URL } from '../../config';
import Swal from 'sweetalert2'
import axios from 'axios';
import './Register.css'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate=useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [loader, setLoader] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    const reqData = { firstName, lastName, email, password, phone,role };
    axios.post(`${API_BASE_URL}/signup`, reqData)
      .then((result) => {
        if (result.status === 201) {
          setLoader(false);
          Swal.fire({
            icon: 'success',
            title: 'Successfully Registered'
          });
          navigate('/login');

        }
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setPhone('');

      })
      .catch((err) => {
        setLoader(false);
        Swal.fire({
          icon: 'error',
          title: 'Some error occured plzz try later'
        })

      })

  }

  return (
    <div>
      <div className='container mt-3  shadow p-3 mb-5 bg-body-tertiary rounded'>
        <h3 className='text-center text-uppercase'>Register User</h3>
      </div>
      {loader ?
        <div className='mb-3 col-md-12 text-center'>
          <div className="  spinner-border text-primary" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
        : ""}

      <div className='container mb-4'>
        <div className="contact-form-container mx-auto text-muted shadow p-3 lh-2" >

          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label for="firstname" className="form-label">First Name</label>
              <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control" id="firstname" />
            </div>
            <div className="mb-3">
              <label for="lastname" className="form-label">Last Name</label>
              <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="form-control" id="lastname" />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label for="paswd" className="form-label">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="paswd" />
            </div>
            <div className="mb-3">
              <label for="Phone" className="form-label">Phone no.</label>
              <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="Phone" />
            </div>
            <div className=' mb-2 d-flex justify-content-between '>
              <div >
                <input onChange={(e)=>setRole(e.target.value)}  type="radio" id="huey" name="drone" value="owner"
                />
                <label for="huey">Owner</label>
              </div>
              <div>
                <input onChange={(e)=>setRole(e.target.value)} type="radio" id="huey" name="drone" value="tenent"
                />
                <label for="huey">Tenent</label>
              </div>
            </div>
            <div className=' mt-2 d-grid'><button type="submit" className="btn btn-primary">Submit</button></div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;