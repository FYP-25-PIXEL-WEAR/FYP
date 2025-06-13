import React, { useEffect } from "react";
import { FaLock, FaEnvelope } from "react-icons/fa";
const ForgotPassword = ({ setShowNavbar,setShowHeader,setShowFooter }) => {
    useEffect(() => {
    setShowNavbar(false);
    setShowHeader(false);
    setShowFooter(false);
  }, [setShowNavbar,setShowFooter,setShowHeader]);
  return (
    <div className="container-fluid tw:bg-purple-200">
      <div className="col-md-12 tw:h-screen">
        <div className="col-md-4 m-auto tw:translate-y-[10%]">
          <form action="" className="w-100 shadow-lg rounded p-5 position-relative bg-white">
          <div className="img">
            <img src="forget.png" className="img-fluid w-50 m-auto" alt="" />
          </div>
            <h2 className="border-bottom w-50 p-2 text-center m-auto">Forgot Passsword</h2>
            <div className="box w-50 m-auto">
            <div className="mb-3 form-group mt-3 position-relative">
                <input type="text" className="border-top-0 border-0 border-bottom tw:outline-0 position-relative data w-100" placeholder="Enter Registered Email" required/>
                <FaEnvelope className="position-absolute tw:end-0 top-0" />
            </div>
            <div className="mb-3 form-group mt-3 position-relative">
                <input type="text" className="border-top-0 border-0 border-bottom tw:outline-0 position-relative data w-100" placeholder="Enter New Password" required />
                <FaLock className="position-absolute tw:end-0 top-0" />
            </div>
            <div className="mb-3 form-group mt-3 position-relative">
                <input type="text" className="border-top-0 border-0 border-bottom tw:outline-0 position-relative data w-100" placeholder="Confirm Password" required/>
                <FaLock className="position-absolute tw:end-0 top-0" />
            </div>
            <div className="mb-3 m-auto">
                <button className="btn btn-dark w-100 rounded-5 m-0"> Update Password </button>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
