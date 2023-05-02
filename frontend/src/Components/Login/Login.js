import React, { useState } from 'react'
import axios from 'axios';
import { API_BASE_URL } from '../../config';
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const login = (e) => {
    e.preventDefault();
    setLoader(true);
    const reqbody = { email, password }
    //debugger;
    axios.post(`${API_BASE_URL}/login`, reqbody)
      .then((result) => {
        //debugger;
        //console.log(result);
        if (result.status === 201) {
          setLoader(false);
          // Swal.fire({
          //   icon: 'success',
          //   title: 'Login Successfully'
          // });
          //console.log(result);
          localStorage.setItem("token", result.data.result.token)
          localStorage.setItem("user", JSON.stringify(result.data.result.user))
          localStorage.setItem("id", result.data.result.id)
          dispatch({ type: "APISUCCESS", payload: result.data.result.user }) // type and payload that is user data goes in reducer in action 


          navigate('/');

        }
        

      })
      .catch((err) => {
        setLoader(false);
        // console.log(err);
        Swal.fire({
          icon: 'error',
          title: err.response.data.error
        });

      })




  }

  return (
    <div>
      <div className='container mt-3  shadow p-3 mb-5 bg-body-tertiary rounded'>
        <h3 className='text-center text-uppercase'>Login User</h3>
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

          <form onSubmit={login}>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label for="paswd" className="form-label">Password</label>
              <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="form-control" id="paswd" />
            </div>


            <div className=' mt-2 d-grid'><button type="submit" className="btn btn-primary">Submit</button></div>

          </form>
          <div>
            <p className='pt-2'>Newuser?<Link to={'/signup'}>Click here to register</Link> <a href=''>forgot Password</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login