import React from 'react'

const MyProperty = () => {
  return (
    <div className='container'>
      <div className='container mt-3  shadow p-3 mb-5 bg-body-tertiary rounded'>
        <h3 className='text-center text-muted text-uppercase'>My Properties</h3>
      </div>
      <h5 className='text-muted'>My Properties:3</h5>
      <div className='my-3'>
        <input className=" text-muted  me-2" type="search" placeholder="Search Title..." />
      </div>
      <div className='row mb-3'>
        <div className='col-lg-4 col-md-4 col-sm-12 mb-3'>
          <div className="card" >
            <img src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8SG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" height={300} className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-title text-muted">2BHK flat in Delhi</h6>
              <p className="card-text text-muted">2BHK Flatt in Btm layout Delhi</p>
              <div className='d-flex justify-content-around'>
                <a href="#" className="btn btn-primary">Details</a>
                <a href="#" className="btn btn-warning">Edit</a>
                <a href="#" className="btn btn-danger">Delete</a>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default MyProperty