import React from 'react'

const Profile = () => {
  return (
    <div>
      <div className='container mt-5'>
        <h5 >My Profile</h5>
        <div className='row container border border-danger'>
          <div className='col-lg-4 col-md-4 col-sm-12 border border-danger '>
            first column

          </div>
          <div className='col-lg-8 col-md-8 col-sm-12 border border-danger'>
            
              <div className='d-flex justify-content-between'>
                <div className=''>
                  <h5 className='mt-2'>Personal Details</h5>
                </div>
                <div className=''>
                  <button type='button' className='btn btn-warning'><i class="fa-regular fa-pen-to-square"></i> Edit</button>
                </div>

              </div>
              <hr/>
              <div>

              </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile