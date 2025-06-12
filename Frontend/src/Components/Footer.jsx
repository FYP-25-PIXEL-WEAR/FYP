import React from 'react'
import { TfiLocationPin } from "react-icons/tfi";
import { BsEnvelopeAt } from "react-icons/bs";
const Footer = () => {
  return (
    <>
    <footer className='tw:bg-[url("footer.png")] tw:bg-cover tw:bg-center tw:bg-no-repeat text-white tw:min-h-[600px] w-100 tw:bottom-0'>
      <div className="container-fluid">
          <div className="col-md-4 ms-auto">
            <p className='text-end tw:text-4xl'>Worlds First ever AI Powered Store</p>
          </div>
        <div className="row">
          <div className="col-md-4 img d-grid justify-content-start align-items-center">
            <div className="d-flex justify-content-start align-items-center">
        <div className="img-rounded tw:bg-[#D9D9D9] rounded-circle d-flex justify-content-center align-content-center tw:max-w-max">
          <img
            src="https://i.ibb.co/2t1f3bH/Logo.png"
            alt="Logo"
            className="rounded-circle img-fluid"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <p className="tw:text-[40px] text-center p-3">
          PIXEL WEAR
        </p>
        </div>
        <div className="text1 d-grid justify-content-center align-items-center w-100">
          <p className='tw:text-4xl w-100'>Good Style never take break. Neither do we</p>
        </div>
        </div>
        <div className="col-md-2 m-auto">
          <h1 className='h1'>Links</h1>
          <p className='tw:text-2xl'>Home</p>
          <p className='tw:text-2xl'>About</p>
          <p className='tw:text-2xl'>Contact</p>
        </div>
        <div className="col-md-4">
          <div className="location d-flex justify-content-end align-items-center">
            <p className='tw:text-4xl m-auto me-0 p-2'>Islamabad</p>
            <TfiLocationPin className='tw:text-4xl rounded-circle p-2 border tw:bg-[#F0D19B] text-black' />
          </div>
          <div className="email d-flex justify-content-end align-items-center">
            <p className='tw:text-4xl m-auto me-0 p-2'>pixelwear@gmail.com</p>
            <BsEnvelopeAt className='tw:text-4xl rounded-circle p-2 border tw:bg-[#F0D19B] text-black' />
          </div>
        </div>
          </div>
          </div>
    </footer>
    </>
  )
}

export default Footer