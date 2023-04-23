import React from 'react'

const Login = () => {
  return (
    <div>
      <div className='container mt-3  shadow p-3 mb-5 bg-body-tertiary rounded'>
        <h3 className='text-center text-uppercase'>Login User</h3>
      </div>

      <div className='container mb-4'>
        <div className="contact-form-container mx-auto text-muted shadow p-3 lh-2" >

          <form>
           
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label for="paswd" className="form-label">Password</label>
              <input type="password" className="form-control" id="paswd" />
            </div>
           
            
            <div className=' mt-2 d-grid'><button type="submit" className="btn btn-primary">Submit</button></div>

          </form>
          <div>
            <p className='pt-2'>Newuser?<a href=''>Click here to register</a> <a href=''>forgot Password</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login