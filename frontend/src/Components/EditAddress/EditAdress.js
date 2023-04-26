import React from 'react'

const EditAdress = () => {
  return (
    <div>
      <div className='container mt-3  shadow p-3 mb-5 bg-body-tertiary rounded'>
        <h3 className='text-center text-uppercase'>Edit User Address</h3>
      </div>

      <div className='container mb-4'>
        <div className="contact-form-container mx-auto text-muted shadow p-3 lh-2" >

          <form>
          <div className="mb-3">
              <label for="add1" className="form-label">Address Line 1</label>
              <input type="text" className="form-control" id="add1" />
            </div>
            <div className="mb-3">
              <label for="add2" className="form-label">Address Line 2</label>
              <input type="text" className="form-control" id="add2" />
            </div>
            <div className="mb-3">
              <label for="city" className="form-label">City</label>
              <input type="text" className="form-control" id="city" />
            </div>
            <div className="mb-3">
              <label for="state" className="form-label">State</label>
              <input type="text" className="form-control" id="state" />
            </div>
            <div className="mb-3">
              <label for="pcode" className="form-label">Pincode</label>
              <input type="text" className="form-control" id="pcode" />
            </div>

            <div className=' mt-2 d-grid'><button type="submit" className="btn btn-success">Save</button></div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default EditAdress;