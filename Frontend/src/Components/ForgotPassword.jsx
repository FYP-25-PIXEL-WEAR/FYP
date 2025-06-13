import React, { useEffect } from "react";

const ForgotPassword = ({ setShowNavbar,setShowHeader,setShowFooter }) => {
    useEffect(() => {
    setShowNavbar(false);
    setShowHeader(false);
    setShowFooter(false);
  }, [setShowNavbar,setShowFooter,setShowHeader]);
  return (
    <div className="container">
      <div className="col-md-12 tw:h-screen">
        <div className="col-md-6 m-auto tw:translate-y-[50%]">
          <form action="" className="w-100 shadow-lg rounded p-5">
            <h2 className="border-bottom w-50 p-2 text-center m-auto">Forgot Passsword</h2>
            <div className="box tw:w-max m-auto">
            <div className="mb-3 form-group mt-3">
                <input type="text" className="border-top-0 border-0 border-bottom tw:outline-0 position-relative data" placeholder="Enter Registered Email" required/>
            </div>
            <div className="mb-3 form-group mt-3">
                <input type="text" className="border-top-0 border-0 border-bottom tw:outline-0 position-relative data" placeholder="Enter New Password" required />
            </div>
            <div className="mb-3 form-group mt-3">
                <input type="text" className="border-top-0 border-0 border-bottom tw:outline-0 position-relative data" placeholder="Confirm Password" required/>
            </div>
            <div className="mb-3">
                <button className="btn btn-dark tw:w-50 rounded-5 m-0"> Update Password </button>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
