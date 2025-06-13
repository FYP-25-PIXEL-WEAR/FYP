import { useEffect, useState } from "react";
import { GoPerson } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
const Header = ({isToggled,setIsToggled}) => {
  
  return (
    <header>
    <div className="container-fluid tw:bg-[#FFDDA9] p-2 d-flex text-black tw:relative tw:xl:before:w-[50rem] tw:xl:before:h-[100rem] tw:xl:before:absolute tw:xl:before:rotate-[40deg] tw:xl:before:bg-[#FFDDA9] tw:xl:before:right-[-15%] tw:xl:before:z-[-1] tw:xl:before:top-[-50%] tw:xl:before:translate-y-[-55%] tw:xl:before:rounded-[40px]">
      <div className="img d-grid justify-content-center align-items-center">
        <div className="img-rounded tw:bg-[#D9D9D9] rounded-circle d-grid justify-content-center align-content-center tw:max-w-max m-auto">
          <img
            src="https://i.ibb.co/2t1f3bH/Logo.png"
            alt="Logo"
            className="rounded-circle img-fluid"
            style={{ width: "75px", height: "75px" }}
          />
        </div>
        <p className="tw:text-[10px] text-center">
          First ever AI Integrated Shopping Store
        </p>
      </div>
      <div className="icons d-flex justify-content-end tw:w-[85%] p-2 align-items-center gap-3">
        <Link to={"/userprofile"} style={{ textDecoration:"none" }}><GoPerson className="tw:bg-[#D9D9D9] rounded-circle tw:w-[2.5rem] tw:h-[2.5rem] p-2 tw:cursor-pointer"/></Link>
        <MdOutlineShoppingCart className="tw:bg-[#D9D9D9] rounded-circle tw:w-[2.5rem] tw:h-[2.5rem] p-2 tw:cursor-pointer"/>
        <CiSearch className="tw:bg-[#D9D9D9] rounded-circle tw:w-[2.5rem] tw:h-[2.5rem] p-2 tw:cursor-pointer"/>
      </div>
      <div className="switch d-grid justify-content-end align-items-center ms-auto">
        <div className="button">
          {isToggled ? (
            <>
              <button
                className={
                  "tw:w-30 tw:h-15 d-flex tw:bg-[#D9D9D9] tw:border-0 rounded-5 tw-p-0 tw-gap-2 p-3 align-items-center justify-content-end"
                }
                onClick={() => setIsToggled(!isToggled)}
              >
                <span className="tw:w-10 rounded-circle tw:h-10 tw:bg-[#000]"></span>
              </button>
            </>
          ) : (
            <>
              <button
                className={
                  "tw:w-30 tw:h-15 d-flex tw:bg-[#D9D9D9] tw:border-0 rounded-5 tw-p-0 tw-gap-2 p-3 align-items-center justify-content-start"
                }
                onClick={() => setIsToggled(!isToggled)}
              >
                <span className="tw:w-10 rounded-circle tw:h-10 tw:bg-[#000]"></span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
    </header>
  );
};

export default Header;
