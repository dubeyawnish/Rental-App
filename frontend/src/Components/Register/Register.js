import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <div>
      <div className='container mt-3  shadow p-3 mb-5 bg-body-tertiary rounded'>
        <h3 className='text-center text-uppercase'>Register User</h3>
      </div>

      <div className='container mb-4'>
        <div className="contact-form-container mx-auto text-muted shadow p-3 lh-2" >

          <form>
            <div className="mb-3">
              <label for="firstname" className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="mb-3">
              <label for="lastname" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastname" />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label for="paswd" className="form-label">Password</label>
              <input type="password" className="form-control" id="paswd" />
            </div>
            <div className="mb-3">
              <label for="Phone" className="form-label">Phone no.</label>
              <input type="tel" className="form-control" id="Phone" />
            </div>
            <div className=' mb-2 d-flex justify-content-between '>
              <div >
                <input type="radio" id="huey" name="drone" value="huey"
                />
                <label for="huey">Owner</label>
              </div>
              <div>
                <input type="radio" id="huey" name="drone" value="huey"
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

export default Register