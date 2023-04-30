import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { API_BASE_URL } from '../../config';
import { useEffect } from 'react';

const DetailProperty = () => {
    const navigate = useNavigate();
    const { propertyId } = useParams();
    const [property, setProperty] = useState({});
    const [address, setAddress] = useState({});
    //console.log(propertyId);
    const getDetailProperty = async () => {
        const result = await axios.get(`${API_BASE_URL}/viewProperties/${propertyId}`);
        console.log(result.data);
        setProperty(result.data.property);
        setAddress(result.data.property.address)


    }
    useEffect(() => {
        getDetailProperty();
    }, [])
    const func = () => {
        navigate(-1);// -1 is used for go to previous page 
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

                    </div>

                </div>
            </div>
        </div>
    )
}

export default DetailProperty