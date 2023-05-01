import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_BASE_URL } from '../../config';
import {Link} from 'react-router-dom'

const AllProperty = () => {

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllProperty = async () => {
    const result = await axios.get(`${API_BASE_URL}/viewAllProperties`);
    console.log(result);
    setProperties(result.data.allProperties);
    setLoading(false);
  }

  useEffect(() => {
    getAllProperty();
    setLoading(true);

  }, [])




  return (
    <div className='container'>
      <div className='container mt-3  shadow p-3 mb-1 bg-body-tertiary rounded'>
        <h3 className='text-center text-muted text-uppercase'>All Property</h3>
      </div>
      <h5 className='text-muted mt-2'>All Property:{properties.length}</h5>

      <div className='my-3'>
        <input className=" text-muted mt-3 mb-4  me-2 form-control" type="search" placeholder="Search Title..." />
      <div className='row mb-4'>
        {
          properties.map((property) => {
            return (
              <div className='col-lg-4 col-md-4 col-sm-12 mb-3'>
                <div className="card" >
                  <img src={`${API_BASE_URL}/files/${property.propertyImgName}`} height={300} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6 className="card-title text-muted">{ }</h6>
                    <p className="card-text text-muted">{property.description}</p>
                    <p className="card-text text-muted">{property.price}</p>
                    <div className='d-flex justify-content-around'>
                      <Link to={`/detailproperty/${property._id} `} type="button" className="btn btn-outline-primary"><i className="fa-solid fa-circle-info"></i> View Details</Link>

                    </div>
                  </div>
                </div>
              </div>

            )
          }

          )

        }
        </div>
      </div>

    </div>
  )
}

export default AllProperty;