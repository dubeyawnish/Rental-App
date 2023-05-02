import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { API_BASE_URL } from '../../config';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const DetailProperty = () => {

    const user = useSelector(state => state.user);

    const navigate = useNavigate();
    const { propertyId } = useParams();
    const [tenants, setTenants] = useState([]);
    const [property, setProperty] = useState({});
    const [address, setAddress] = useState({});
    //console.log(propertyId);

    const CONFIG_OBJ = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    };


    const getDetailProperty = async () => {
        const result = await axios.get(`${API_BASE_URL}/viewProperties/${propertyId}`);
        console.log(result.data);
        setProperty(result.data.property);
        setAddress(result.data.property.address)


    }
    const getTenantsList = async (propertyId) => {
        const result = await axios.get(`${API_BASE_URL}/intrestedUsers/${propertyId}`, CONFIG_OBJ)
        setTenants(result.data.allInterestedTenants)
    }
    useEffect(() => {
        getDetailProperty();
        getTenantsList(propertyId);
    }, [])
    const func = () => {
        navigate(-1);// -1 is used for go to previous page 
    }
    const delTenant = async (tenantId) => {
        const deleteTenant = await axios.delete(`${API_BASE_URL}/deleteIntrestedTenantById/${tenantId}`, CONFIG_OBJ)
        if (deleteTenant.status === 200) {
          getTenantsList(propertyId);
        }
      }

    return (
        <div className='container'>
            <div className='container mt-3  shadow p-3 mb-1 bg-body-tertiary rounded'>
                <h3 className='text-center text-muted text-uppercase'>Detail Property</h3>
            </div>
            <div className='mb-3' >
                <button onClick={func} type='button' className="btn btn-outline-primary"> Go Back <i className="fa-solid fa-circle-arrow-left"></i></button>
            </div>
            <div className='row' >
                <div className=' col-lg-7 col-md-7 col-sm-12 mb-3 '>
                    <img className='card-img-top' height={580} src={`${API_BASE_URL}/files/${property.propertyImgName}`} alt='image' />
                </div>
                <div className=' col-lg-5 col-md-5 col-sm-12  '>
                    <div className='shadow p-3 mb-5 bg-body-tertiary rounded"'>
                        <div className='d-flex mt-3 '>
                            <div className='me-5'>
                                <h6 className='text-muted '>Title</h6>

                            </div>
                            <div className='ms-5'>
                                <h6 className='text-muted '>{property.title}</h6>

                            </div>

                        </div>
                        <hr className='text-muted' />

                        <div className='d-flex mt-4 '>
                            <div className='me-5'>
                                <h6 className='text-muted '>Description</h6>

                            </div>
                            <div className='ms-5'>
                                <h6 className='text-muted '>{property.description}</h6>

                            </div>

                        </div>
                        <hr className='text-muted' />

                        <div className='d-flex mt-4 '>
                            <div className='me-5'>
                                <h6 className='text-muted '>Price</h6>

                            </div>
                            <div className='ms-5'>
                                <h6 className='text-muted '>{property.price}</h6>

                            </div>

                        </div>
                        <hr className='text-muted' />

                        <div className='d-flex mt-4 '>
                            <div className='me-5'>
                                <h6 className='text-muted '>Address Line 1</h6>

                            </div>
                            <div className='ms-5'>
                                <h6 className='text-muted '>{address.addressLineOne}</h6>

                            </div>

                        </div>
                        <hr className='text-muted' />

                        <div className='d-flex mt-4 '>
                            <div className='me-5'>
                                <h6 className='text-muted '>Address Line 2</h6>

                            </div>
                            <div className='ms-5'>
                                <h6 className='text-muted '>{address.addressLineTwo}</h6>

                            </div>

                        </div>
                        <hr className='text-muted' />

                        <div className='d-flex mt-4 '>
                            <div className='me-5'>
                                <h6 className='text-muted '>City</h6>

                            </div>
                            <div className='ms-5'>
                                <h6 className='text-muted '>{address.city}</h6>

                            </div>

                        </div>
                        <hr className='text-muted' />

                        <div className='d-flex mt-4 '>
                            <div className='me-5'>
                                <h6 className='text-muted '>State</h6>

                            </div>
                            <div className='ms-5'>
                                <h6 className='text-muted '>{address.state}</h6>

                            </div>

                        </div>
                        <hr className='text-muted' />
                        <div className='d-flex mt-4 '>
                            <div className='me-5'>
                                <h6 className='text-muted '>Zipcode</h6>

                            </div>
                            <div className='ms-5'>
                                <h6 className='text-muted '>{address.zipCode}</h6>

                            </div>

                        </div>
                        <hr className='text-muted' />
                        {user.user.role !== 'owner' ? <button className='btn btn-primary'>Contact Owner</button> : ""}
                        {user.user.role === 'owner' ? <Link to={`/editProperty/${property._id}`} className="btn btn-info px-4">Edit</Link> : ""}

                    </div>

                </div>
            </div>

            {tenants.length > 0 ? <div>
                {user.user.role === 'owner' ? <h4>Intrested Tenants</h4> : ""}
                {user.user.role === 'owner' ? <div className='table-responsive'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Action</th>
                                <th scope="col">Decline</th>
                            </tr>
                        </thead>
                        <tbody >
                            {tenants.map((tenant, index) => {
                                return (<tr key={tenant.user._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{tenant.user.firstName} {tenant.user.lastName}</td>
                                    <td>{tenant.user.email}</td>
                                    <td>{tenant.user.phone}</td>
                                    <td><button className='btn btn-sm btn-primary' >Add</button></td>
                                    <td><button className='btn btn-sm btn-danger' onClick={()=>{delTenant(tenant._id)}} ><i class="fa-solid fa-circle-xmark"></i></button></td>
                                </tr>)
                            })
                            }
                        </tbody>
                    </table>
                </div> : ""}
            </div> : ""}
        </div>
    )
}

export default DetailProperty