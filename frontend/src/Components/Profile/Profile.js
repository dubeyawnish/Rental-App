import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
      <div className='container mt-5'>
        <h5 className='ps-2' >My Profile</h5>
        <div className='row container '>
          <div className='col-lg-4 col-md-4 col-sm-12 mb-4  '>
            <div className='border '>
              <div className='d-flex m-3'>
                <div className='me-2'>
                  <i className=" fw-bold fa-solid fa-pen-to-square"></i>
                </div>
                <div>
                  <img src='https://www.istockphoto.com/resources/images/PhotoFTLP/P2-APR-iStock-1309110294.jpg' height={200} width={280} alt='img' />
                </div>
              </div>
             
                <h5 className='text-center'>Owner one</h5>
             
              
                <p className='mt-4 text-center'>Role:Owner</p>
             
              
                <p className='text-center'>Bangolore, Karnataka</p>
              
            </div>

          </div>
          <div className='col-lg-8 col-md-8 col-sm-12 '>
            <div className="border">
              <div className='d-flex justify-content-between'>
                <div className=''>
                  <h5 className='mt-3 ms-3'>Personal Details</h5>
                </div>
                <Link to='/profile/pd' className='me-3'>
                  <button type='button' className=' mt-2 btn btn-warning'><i className="fa-regular fa-pen-to-square"></i> Edit</button>
                </Link>

              </div>
              <hr className='mx-3' />
              <div className='d-flex'>
                <div className='ms-3 me-5' >
                  <h6 className=' text-muted'>FullName</h6>
                </div>
                <div className='ms-5'>
                  <h6 className='text-muted'>Owner name</h6>

                </div>
              </div>
              <hr className='mx-3' />
              <div className='d-flex'>
                <div className='ms-3 me-5' >
                  <h6 className='text-muted'>Email</h6>
                </div>
                <div className='ms-5'>
                  <h6 className='text-muted'>Owner@name.com</h6>

                </div>
              </div>
              <hr className='mx-3' />
              <div className='d-flex mb-3'>
                <div className='ms-3 me-5' >
                  <h6 className='text-muted'>Phone</h6>
                </div>
                <div className='ms-5'>
                  <h6 className='text-muted'>45612378</h6>

                </div>
              </div>
            </div>

            <div className=" my-4 border">
              <div className='d-flex justify-content-between'>
                <div className=''>
                  <h5 className='mt-3 ms-3'>Address Details</h5>
                </div>
                <Link to ='/profile/address' className='me-3'>
                  <button type='button' className=' mt-2 btn btn-warning'><i className="fa-regular fa-pen-to-square"></i> Edit</button>
                </Link>

              </div>
              <hr className='mx-3' />
              <div className='d-flex'>
                <div className='ms-3 me-5' >
                  <h6 className=' text-muted'>Address 1</h6>
                </div>
                <div className='ms-5'>
                  <h6 className='text-muted'>Owner name</h6>

                </div>
              </div>
              <hr className='mx-3' />
              <div className='d-flex'>
                <div className='ms-3 me-5' >
                  <h6 className='text-muted'>Address 2</h6>
                </div>
                <div className='ms-5'>
                  <h6 className='text-muted'>Owner@name.com</h6>

                </div>
              </div>
              <hr className='mx-3' />
              <div className='d-flex'>
                <div className='ms-3 me-5' >
                  <h6 className='text-muted'>City</h6>
                </div>
                <div className='ms-5'>
                  <h6 className='text-muted'>45612378</h6>

                </div>
              </div>
              <hr className='mx-3' />
              <div className='d-flex'>
                <div className='ms-3 me-5' >
                  <h6 className='text-muted'>State</h6>
                </div>
                <div className='ms-5'>
                  <h6 className='text-muted'>45612378</h6>

                </div>
              </div>
              <hr className='mx-3' />
              <div className='d-flex'>
                <div className='ms-3 me-5' >
                  <h6 className='text-muted'>Pincode</h6>
                </div>
                <div className='ms-5'>
                  <h6 className='text-muted'>45612378</h6>

                </div>
              </div>
              <hr className='mx-3' />
              <div className='mb-3 d-flex'>
                <div className='ms-3 me-5' >
                  <h6 className='text-muted'>Country</h6>
                </div>
                <div className='ms-5'>
                  <h6 className='text-muted'>45612378</h6>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile