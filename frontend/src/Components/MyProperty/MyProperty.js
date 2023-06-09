import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { API_BASE_URL } from '../../config';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';



const MyProperty = () => {

  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState([]);

  const CONFIG_OBJ = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  };

  const getAllPropertiesForUser = async (userId) => {
    const propertiesData = await axios.get(`${API_BASE_URL}/viewAllProperties/${userId}`, CONFIG_OBJ)
    setProperties(propertiesData.data.allProperties)
    //console.log({ properties });
    setLoading(false);
  }

  useEffect(() => {
    const userId = localStorage.getItem("id")
    getAllPropertiesForUser(userId)
    setLoading(true);
  }, []);

  const deleteProperty = (propertyId, addressId) => {
    //cd console.log(addressId);

    Swal.fire({
      title: 'Do you want to delete the property?',
      showDenyButton: true,

      confirmButtonText: 'Delete',
      denyButtonText: `Don't Delete`,
    }).then(async (result) => {
      setLoading(true);
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const res = await axios.delete(`${API_BASE_URL}/deleteAddress/${addressId}`, CONFIG_OBJ);
        //console.log(res);
        axios.delete(`${API_BASE_URL}/deletepost/${propertyId}`, CONFIG_OBJ)
          .then((data) => {
            setLoading(false);
            getAllPropertiesForUser(localStorage.getItem("id"));//to get the remaining properties
            Swal.fire(data.data, '', 'success');
          })
          .catch((err) => {
            setLoading(false);
            Swal.fire(err, '', 'success');
          })

      } else if (result.isDenied) {
        setLoading(false);
        Swal.fire('Property not deleted', '', 'info');
      }
    })

  }

  const searchHandle = async (e) => {
    setLoading(false);
    let key = e.target.value;
    let result = await axios.get(`${API_BASE_URL}/searchproperty?key=` + key)
    if (result) {
      setProperties(result.data)
    }
  }

  return (

    <div className='container'>
      <div className='container mt-3  shadow p-3 mb-5 bg-body-tertiary rounded'>
        <h3 className='text-center text-muted text-uppercase'>My Properties</h3>
      </div>
      {loading ? <div className='text-center mt-5'>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div> : ''}
      <h5 className='text-muted'>My Properties:{properties.length}</h5>
      <div className='my-3'>
        <input className=" text-muted  me-2" onChange={searchHandle} type="search" placeholder="Search Title..." />
      </div>
      <div className='row mb-3'>
        {properties.length > 0 ? properties.map((property) => {
          return (
            <div className='col-lg-4 col-md-4 col-sm-12 mb-3'>
              <div className="card" >
                <img src={`${API_BASE_URL}/files/${property.propertyImgName}`} height={300} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className='d-flex justify-content-between'>
                    <h6 className="card-title text-muted">{property.title}</h6>
                    {property.isRented === true ? <h6 className='bg-success border border-primary p-1 text-white'>Rented</h6> : ""}
                  </div>
                  <p className="card-text text-muted">{property.description}</p>
                  <p className="card-text text-muted">Rs.{property.price}.00</p>
                  <div className='d-flex justify-content-around'>
                    <Link to={`/detailproperty/${property._id}`} className="btn btn-primary">Details</Link>
                    <Link to={`/editProperty/${property._id}`} className="btn btn-warning">Edit</Link>
                    <button onClick={() => { deleteProperty(property._id, property.address) }} className="btn btn-danger">Delete</button>
                  </div>
                </div>
              </div>
            </div>)
        })
          : ""}
        {properties.length < 1 ? <h4 className='text-danger'>No properties found!!!</h4> : ""}

      </div>
    </div>
  )
}

export default MyProperty;