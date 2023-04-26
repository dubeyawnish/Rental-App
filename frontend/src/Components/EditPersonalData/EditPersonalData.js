import React from 'react'

const EditPersonalData = () => {
  return (
    <div>
      <div className='container mt-3  shadow p-3 mb-5 bg-body-tertiary rounded'>
        <h3 className='text-center text-uppercase'>Edit Persoal Details</h3>
      </div>

      <div className='container mb-4'>
        <div className="contact-form-container mx-auto text-muted shadow p-3 lh-2" >

          <form className=''>
          
            <div className="mb-3">
              <label for="firstname" className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="mb-3">
              <label for="lastname" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastname" />
            </div>
           
          
            <div className="mb-3">
              <label for="Phone" className="form-label">Phone no.</label>
              <input type="tel" className="form-control" id="Phone" />
            </div>
         
            <div className=' mt-2 d-grid'><button type="submit" className="btn btn-success">Save</button></div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default EditPersonalData