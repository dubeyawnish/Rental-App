import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../../config';
import axios from 'axios';

const Profile = () => {
  const userId = localStorage.getItem('id');

  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [role, setRole] = useState()
  const [addressLineOne, setAddressLineOne] = useState("");
  const [addressLineTwo, setAddressLineTwo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [profileImg, setProfileImg] = useState()
  //const [userId, setUserId] = useState()
  const [loading, setLoading] = useState(false);

  const CONFIG_OBJ = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  };

  const getProfile = async (userId) => {
    const profileData = await axios.get(`${API_BASE_URL}/user/profile/${userId}`, CONFIG_OBJ);
    console.log(profileData);
    setRole(profileData.data.user.role)
    setFirstName(profileData.data.user.firstName)
    setLastName(profileData.data.user.lastName)
    setEmail(profileData.data.user.email)
    setPhone(profileData.data.user.phone)
    setAddressLineOne(profileData.data.user.address.addressLineOne)
    setAddressLineTwo(profileData.data.user.address.addressLineTwo)
    setCity(profileData.data.user.address.city)
    setState(profileData.data.user.address.state)
    setZipCode(profileData.data.user.address.zipCode)
    setCountry(profileData.data.user.address.country)
    setProfileImg(profileData.data.user.profileImgName)
    setLoading(false);
  }

  useEffect(() => {
    //setUserId(localStorage.getItem("id"))
    getProfile(localStorage.getItem("id"))
    setLoading(true);
  }, [])


  return (
    <div>
      <div className='container mt-5'>
        <h5 className='ps-2' >My Profile</h5>
        <div className='row container '>
          <div className='col-lg-4 col-md-4 col-sm-12 mb-4  '>
            <div className='border '>
              <div className='d-flex m-3'>
                <Link to={`/user/profile/pp/${userId}`} className='me-2'>
                  <i className=" fw-bold fa-solid fa-pen-to-square"></i>
                </Link>
                <div>
                  <img src={`${API_BASE_URL}/files/${profileImg}`} className='img-fluid'  alt='img' />
                </div>
              </div>

              <h5 className='text-center'>{firstName} {lastName}</h5>


              <p className='mt-4 text-center'>Role:{role}</p>


              <p className='text-center'>{addressLineOne} , {addressLineTwo}</p>

            </div>

          </div>
          <div className='col-lg-8 col-md-8 col-sm-12 '>
            <div className="border">
              <div className='d-flex justify-content-between'>
                <div className=''>
                  <h5 className='mt-3 ms-3'>Personal Details</h5>
                </div>
                <Link to={`/user/profile/pd/${userId}`} className='me-3'>
                  <button type='button' className=' mt-2 btn btn-warning'><i className="fa-regular fa-pen-to-square"></i> Edit</button>
                </Link>

              </div>
              <hr className='mx-3' />
              <div className='d-flex'>
                <div className='ms-3 me-5' >
                  <h6 className=' text-muted'>FullName</h6>
                </div>
                <div className='ms-5'>
                  <h6 className='text-muted'>{firstName} {lastName}</h6>

                </div>
              </div>
              <hr className='mx-3' />
              <div className='d-flex'>
                <div className='ms-3 me-5' >
                  <h6 className='text-muted'>Email</h6>
                </div>
                <div className='ms-5'>
                  <h6 className='text-muted'>{email}</h6>

                </div>
              </div>
              <hr className='mx-3' />
              <div className='d-flex mb-3'>
                <div className='ms-3 me-5' >
                  <h6 className='text-muted'>Phone</h6>
                </div>
                <div className='ms-5'>
                  <h6 className='text-muted'>{phone}</h6>

                </div>
              </div>
            </div>

            <div className=" my-4 border">
              <div className='d-flex justify-content-between'>
                <div className=''>
                  <h5 className='mt-3 ms-3'>Address Details</h5>
                </div>
                <Link to={`/user/profile/ad/${userId}`} className='me-3'>
                  <button type='button' className=' mt-2 btn btn-warning'><i className="fa-regular fa-pen-to-square"></i> Edit</button>
                </Link>

              </div>
              <hr className='mx-3' />
              <div className='d-flex'>
                <div className='ms-3 me-5' >
                  <h6 className=' text-muted'>Address 1</h6>
                </div>
                <div className='ms-5'>
                  <h6 className='text-muted'>{addressLineOne}</h6>

                </div>
              </div>
              <hr className='mx-3' />
              <div className='d-flex'>
                <div className='ms-3 me-5' >
                  <h6 className='text-muted'>Address 2</h6>
                </div>
                <div className='ms-5'>
                  <h6 className='text-muted'>{addressLineTwo}</h6>

                </div>
              </div>
              <hr className='mx-3' />
              <div className='d-flex'>
                <div className='ms-3 me-5' >
                  <h6 className='text-muted'>City</h6>
                </div>
                <div className='ms-5'>
                  <h6 className='text-muted'>{city}</h6>

                </div>
              </div>
              <hr className='mx-3' />
              <div className='d-flex'>
                <div className='ms-3 me-5' >
                  <h6 className='text-muted'>State</h6>
                </div>
                <div className='ms-5'>
                  <h6 className='text-muted'>{state}</h6>

                </div>
              </div>
              <hr className='mx-3' />
              <div className='d-flex'>
                <div className='ms-3 me-5' >
                  <h6 className='text-muted'>Pincode</h6>
                </div>
                <div className='ms-5'>
                  <h6 className='text-muted'>{zipCode}</h6>

                </div>
              </div>
              <hr className='mx-3' />
              <div className='mb-3 d-flex'>
                <div className='ms-3 me-5' >
                  <h6 className='text-muted'>Country</h6>
                </div>
                <div className='ms-5'>
                  <h6 className='text-muted'>{country}</h6>

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