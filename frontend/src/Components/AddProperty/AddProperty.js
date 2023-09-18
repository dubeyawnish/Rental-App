import { API_BASE_URL } from '../../config';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';


const AddProperty = () => {
  const { propertyId } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()
  const [propertyImgName, setPropertyImgName] = useState('')
  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')

  const [address, setAddress] = useState()
  const [addressLineOne, setAddressLineOne] = useState("");
  const [addressLineTwo, setAddressLineTwo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");



  const getPropertyById = async (propertyId) => {
    const property = await axios.get(`${API_BASE_URL}/viewProperties/${propertyId}`)
    setTitle(property.data.property.title)
    setDescription(property.data.property.description)
    setPrice(property.data.property.price)
    setPropertyImgName(property.data.property.propertyImgName)
    let img = { preview: `${API_BASE_URL}/files/${property.data.property.propertyImgName}`, data: '' }
    setImage(img)
    setAddress(property.data.property.address)
    setAddressLineOne(property.data.property.address.addressLineOne)
    setAddressLineTwo(property.data.property.address.addressLineTwo)
    setCity(property.data.property.address.city)
    setState(property.data.property.address.state)
    setZipCode(property.data.property.address.zipCode)
    setCountry(property.data.property.address.country)
  }
  useEffect(() => {
    if (propertyId) {
      getPropertyById(propertyId)
    }

  }, []);




  const handleImgChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }

  const CONFIG_OBJ = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  };

  const addAddress = async () => {
    const request = { addressLineOne, addressLineTwo, city, state, zipCode, country }
    const newAddress = await axios.post(`${API_BASE_URL}/addAddress`, request, CONFIG_OBJ)
    return newAddress
  }
  const uploadImage = async () => {
    let formData = new FormData()
    formData.append('file', image.data)
    const response = await axios.post(`${API_BASE_URL}/uploadFile`, formData)
    return response
  }
  const addNewProperty = async (request) => {
    return await axios.post(`${API_BASE_URL}/addProperties`, request, CONFIG_OBJ)

  }


  const updateAddress = async (address, addressId) => {
    const editAddress = await axios.put(`${API_BASE_URL}/editAddress/${addressId}`, address, CONFIG_OBJ)
    return editAddress
  }

  const updateExistingProperty = async (request, propertyId) => {
    return await axios.put(`${API_BASE_URL}/editProperty/${propertyId}`, request, CONFIG_OBJ)
  }

  const addProperty = async (event) => {
    event.preventDefault();
    let newAddress = {}

    if (propertyId) {
      const addressRequest = { addressLineOne, addressLineTwo, city, state, zipCode, country }
      newAddress = await updateAddress(addressRequest, address._id)
      const request = { title, description, price, propertyImgName, userId: localStorage.getItem("id"), address: newAddress.data.savedAddress };
      const result = await updateExistingProperty(request, propertyId)
      if (result.status == 200) {
        Swal.fire({

          icon: 'success',
          title: 'Property modified successfully',
          text: 'We will email you once Refresh is completed!',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Property not modified'

        });
       
      }
      navigate("/myproperty")
    }

    else {
      newAddress = await addAddress()
      const imgResponse = await uploadImage()
      const request = { title, description, price, propertyImgName: imgResponse.data.fileName, userId: localStorage.getItem("id"), address: newAddress.data.savedAddress };
      const result = await addNewProperty(request)
      if (result.status == 201) {
        Swal.fire({

          icon: 'success',
          title: 'Property added successfully',
          text: 'We will email you once Refresh is completed!'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Property not added'

        });
        

      }
      navigate("/myproperty")


    }
  }

  return (
    <div>
      <div className='container mt-3  shadow p-3 mb-5 bg-body-tertiary rounded'>
        <h3 className='text-center text-uppercase'>{propertyId ? "Edit" : "Add"} Property</h3>
      </div>

      <div className='container mb-4'>
        <div className="contact-form-container mx-auto text-muted shadow p-3 lh-2" >

          <form onSubmit={(e) => addProperty(e)}>
            <div className="mb-3">
              <label for="title" className="form-label">Title</label>
              <input value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" className="form-control" id="title" />
            </div>
            <div className="mb-3">
              <label for="desc" className="form-label">Description</label>
              <input value={description} onChange={(e) => { setDescription(e.target.value) }} type="text" className="form-control" id="desc" />
            </div>

            <div className="mb-3">
              <label for="price" className="form-label">Price</label>
              <input value={price} onChange={(e) => { setPrice(e.target.value) }} type="text" className="form-control" id="price" />
            </div>


            <div className="mb-3 ">
              {image.preview && <img src={image.preview} width='100' height='100' />}
              <hr></hr>
              <input type='file' name='file' onChange={handleImgChange}></input>
              
            </div>
            <div className="mb-3">
              <label for="add1" className="form-label">Address Line 1</label>
              <input value={addressLineOne} onChange={(e) => { setAddressLineOne(e.target.value) }} type="text" className="form-control" id="add1" />
            </div>
            <div className="mb-3">
              <label for="add2" className="form-label">Address Line 2</label>
              <input value={addressLineTwo} onChange={(e) => { setAddressLineTwo(e.target.value) }} type="text" className="form-control" id="add2" />
            </div>
            <div className="mb-3">
              <label for="city" className="form-label">City</label>
              <input value={city} onChange={(e) => { setCity(e.target.value) }} type="text" className="form-control" id="city" />
            </div>
            <div className="mb-3">
              <label for="state" className="form-label">State</label>
              <input value={state} onChange={(e) => { setState(e.target.value) }} type="text" className="form-control" id="state" />
            </div>
            <div className="mb-3">
              <label for="pcode" className="form-label">Country</label>
              <input value={country} onChange={(e) => { setCountry(e.target.value) }} type="text" className="form-control" id="pcode" />
            </div>
            <div className="mb-3">
              <label for="pcode" className="form-label">Pincode</label>
              <input value={zipCode} onChange={(e) => { setZipCode(e.target.value) }} type="text" className="form-control" id="pcode" />
            </div>

            <div className=' mt-2 d-grid'><button type="submit" className="btn btn-success">{propertyId ? "Edit" : "Add"}</button></div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProperty;