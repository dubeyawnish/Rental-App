import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div >
            <div className=' d-inline p-2 text-bg-primary bg-gradient  d-flex justify-content-between ' style={{ minHeight: '4rem' }}>
                <div className='d-flex align-items-center  '>
                    Get connected with us on social networks:
                </div>
                <div className='  d-flex align-items-center  '>

                    <i className=" mx-2 fa-brands fa-google"></i>
                    <i className="mx-2 fa-brands fa-facebook"></i>
                    <i className=" mx-2 fa-brands fa-instagram"></i>
                    <i className="mx-2 fa-brands fa-linkedin"></i>
                    <i className="mx-2 fa-brands fa-github"></i>
                    <i className="mx-2  fa-brands fa-twitter"></i>



                </div>

            </div>
            <div className='container-fluid text-white bg-greyish  ' style={{ minHeight: '12rem' }}>
                <div className='container'>
                <div className=' row   '>
                    <div className='col-lg-3 col-md-3 col-sm-12 '>
                        <div className='mt-5'>
                            <h6 className='footer-center text-uppercase'>Obify Consulting</h6>

                        </div>

                        <div className='mt-4 '>
                            <p className='text-cen'>lorem35 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam vitae elit non lobortis. Proin tempor, justo eu iaculis mattis, tellus ligula rhoncus </p>
                        </div>

                    </div>



                    <div className='col-lg-3 col-md-3 col-sm-12   '>
                        <div className='mt-5 '>
                            <h6 className='text-uppercase text-center '>Products</h6>

                        </div>
                        <div className=" mt-2 d-flex flex-column align-items-center   ">
                            <a className="text-white p-1" href="">MDBootstrap</a>
                            <a className="text-white p-1" href="">MDWordPress</a>
                            <a className="text-white p-1" href="">BrandFlow</a>
                            <a className="text-white p-1" href="">Bootstrap Angular</a>


                        </div>

                    </div>


                    <div className='col-lg-3 col-md-3 col-sm-12 '>
                        <div className='mt-5 '>
                            <h6 className=' footer-center text-uppercase  '>Useful links</h6>

                        </div>
                        <div className=" mt-2 d-flex flex-column footer-center  ">
                            <a className="text-white p-1" href="">YourAccount</a>
                            <a className="text-white p-1" href="">Become an Affiliate</a>
                            <a className="text-white p-1" href="">Shipping Rates</a>
                            <a className="text-white p-1" href="">Help</a>


                        </div>

                    </div>


                    <div className='col-lg-3 col-md-3 col-sm-12 '>
                        <div className='mt-5  '>
                            <h6 className='text-uppercase text-cen '>Contact</h6>

                        </div>
                        <div className='mt-3 footer-center'>
                            <p ><i class="me-1 fa-solid fa-house"></i>Prayagraj , Uttar Pradesh 211002</p>
                            <p><i class="me-1 fa-solid fa-envelope"></i>ObifyConsulting.com</p>
                            <p><i class="me-1 fa-solid fa-phone"></i>7894562845</p>
                            <p><i class="me-1 fa-solid fa-print"></i>4579554455</p>
                        </div>


                    </div>

                </div>
                </div>

            </div>

            <div className='container-fluid text-white bg-blackish  d-flex justify-content-center  ' style={{ minHeight: '4rem' }}>
                <p className='mt-3'>©2023 Copyright:</p>
                <a className='mt-3 text-white' href='#'>ObifyConsulting.com</a>

            </div>
        </div>
    )
}

export default Footer