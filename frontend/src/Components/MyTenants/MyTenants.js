import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../config';


function MyTenants() {

  const navigate = useNavigate()
  const [tenants, setTenants] = useState([])

  const navToRentDetails = (tenantId) => {
    navigate(`/rentalDetails/${tenantId}`);
  }
  const CONFIG_OBJ = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  };

  const getAllTenants = async () => {
    const tenantsData = await axios.get(`${API_BASE_URL}/myTenants`, CONFIG_OBJ);
    //console.log(tenantsData);
    setTenants(tenantsData.data.allTenants)
  }

  useEffect(() => {
    getAllTenants()
  }, [])

  return (
    <div className='container my-3'>
      <h3 className='text-center my-3 shadow p-2' style={{ color: "F62459" }}>My Tenants</h3>
      <div>
        {!tenants.length > 0 ? <h3>No Tenants Found</h3> : tenants.map((tenant) => {
          return (<div className="card mb-2" key={tenant._id}>
            <h5 className="card-header">{tenant.user.firstName} {tenant.user.lastName}</h5>
            <div className="card-body">
              <div >
                <p><b>Email:</b> {tenant.user.email}</p>
                <p><b>Phone:</b> {tenant.user.phone}</p>
              </div>
              <hr />
              <div >
                
                <button onClick={() => navToRentDetails(tenant._id)}  className="btn btn-primary">Edit rental details</button>
              </div>
            </div>
          </div>)
        })
        }
      </div>
    </div>
  )
}

export default MyTenants