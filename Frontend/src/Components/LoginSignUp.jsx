import { useEffect, useState } from "react";
import { MdOutlineMan } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const LoginSignUp = ({ setShowNavbar,setShowHeader,setShowFooter }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1280);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setShowNavbar(false);
    setShowHeader(false);
    setShowFooter(false);
  }, [setShowNavbar,setShowFooter,setShowHeader]);

  const [className, setClassName] = useState(
    "tw:xl:left-[27%] tw:xl:rotate-[65deg] tw:xl:translate-x-[-11%] tw:xl:translate-y-[-100%]"
  );

  const handleToggle = () => {
    setIsLogin(!isLogin);
    if (!isTablet) {
      if (isLogin) {
        setClassName(
          "tw:xl:right-[47%] tw:xl:rotate-[-65deg] tw:xl:translate-x-[-90%] tw:xl:translate-y-[-100%]"
        );
      } else {
        setClassName(
          "tw:xl:left-[27%] tw:xl:rotate-[65deg] tw:xl:translate-x-[-11%] tw:xl:translate-y-[-100%]"
        );
      }
    }
  };

  return (
    <div className="container">
      <div className="col-md-9 m-auto shadow-lg p-5 mt-5 rounded-3 tw:h-[500px] overflow-hidden tw:relative">
        <div className="position-relative d-flex flex-md-row justify-content-between align-items-center">
          {isTablet ? (
            <div className="tw:w-full tw:overflow-hidden">
              <div
                className="tw:flex tw:w-[200%] tw:transition-transform tw:duration-500 tw:ease-in-out"
                style={{ transform: isLogin ? "translateX(0)" : "translateX(-50%)" }}
              >
                <div className="tw:w-1/2">
                  <form className="text-center position-relative">
                    <h2 className="border-bottom w-25 m-auto p-2 text-center">Login</h2>
                    <div className="box tw:w-max m-auto">
                      <div className="form-group mb-5 mt-5 position-relative">
                        <input
                          type="text"
                          className="border-0 border-bottom tw:outline-0 position-relative"
                          id="email"
                          placeholder="Username"
                          required
                        />
                        <MdOutlineMan className="position-absolute tw:end-0 top-0" />
                      </div>
                      <div className="form-group mb-5 mt-5 position-relative">
                        <input
                          type="password"
                          className="border-0 border-bottom tw:outline-0 position-relative"
                          id="password"
                          placeholder="Password"
                          required
                        />
                        <FaLock className="position-absolute tw:end-0 top-0" />
                      </div>
                      <div className="mb-5 text-start">
                        <button
                          type="submit"
                          className="btn btn-dark tw:w-50 rounded-5 m-0 rounded-end-0"
                        >
                          Login
                        </button>
                        <button className="btn btn-dark rounded-5 rounded-start-0 ms-2" type="button">
                          <FcGoogle className="tw:text-2xl" />
                        </button>
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <p className="text-center">
                        Don't have an account?{" "}
                        <span
                          className="tw:cursor-pointer tw:text-blue-600 text-decoration-underline"
                          onClick={handleToggle}
                        >
                          Sign Up
                        </span>
                        <Link
                          to="/home"
                          className="tw:cursor-pointer tw:text-blue-600 text-decoration-underline"
                        >
                          <p className="tw:cursor-pointer tw:text-blue-600 text-decoration-underline">
                            Or Continue as Guest
                          </p>
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
                <div className="tw:w-1/2">
                  <form className="w-100 text-center">
                    <h2 className="border-bottom w-max p-2 text-center w-25 m-auto">SignUp</h2>
                    <div className="box tw:w-max m-auto">
                      <div className="form-group mb-5 mt-5 position-relative">
                        <input
                          type="text"
                          className="border-0 border-bottom tw:outline-0 position-relative"
                          id="newUsername"
                          placeholder="New Username"
                          required
                        />
                        <MdOutlineMan className="position-absolute tw:end-0 top-0" />
                      </div>
                      <div className="form-group mb-5 mt-5 position-relative">
                        <input
                          type="email"
                          className="border-0 border-bottom tw:outline-0 position-relative"
                          id="newEmail"
                          placeholder="Email"
                          required
                        />
                        <FaEnvelope className="position-absolute tw:end-0 top-0" />
                      </div>
                      <div className="form-group mb-5 mt-5 position-relative">
                        <input
                          type="password"
                          className="border-top-0 border-0 border-bottom tw:outline-0 position-relative"
                          id="newPassword"
                          placeholder="New Password"
                          required
                        />
                        <FaLock className="position-absolute tw:end-0 top-0" />
                      </div>
                      <div className="mb-5 text-start">
                        <button
                          type="submit"
                          className="btn btn-dark tw:w-50 rounded-5 m-0 rounded-end-0"
                        >
                          Sign Up
                        </button>
                        <button className="btn btn-dark rounded-5 rounded-start-0 ms-2" type="button">
                          <FcGoogle className="tw:text-2xl" />
                        </button>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <p className="text-center">
                        Already Have an Account?{" "}
                        <span
                          className="tw:cursor-pointer tw:text-blue-600 text-decoration-underline"
                          onClick={handleToggle}
                        >
                          Login
                        </span>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="col-md-6 m-auto">
                <form className="text-center position-relative">
                  <h2 className="border-bottom w-25 m-auto p-2 text-center">Login</h2>
                  <div className="box tw:w-max m-auto">
                    <div className="form-group mb-5 mt-5 position-relative">
                      <input
                        type="text"
                        className="border-0 border-bottom tw:outline-0 position-relative"
                        id="email"
                        placeholder="Username"
                        required
                      />
                      <MdOutlineMan className="position-absolute tw:end-0 top-0" />
                    </div>
                    <div className="form-group mb-5 mt-5 position-relative">
                      <input
                        type="password"
                        className="border-0 border-bottom tw:outline-0 position-relative"
                        id="password"
                        placeholder="Password"
                        required
                      />
                      <FaLock className="position-absolute tw:end-0 top-0" />
                    </div>
                    <div className="mb-5 text-start">
                      <button
                        type="submit"
                        className="btn btn-dark tw:w-50 rounded-5 m-0 rounded-end-0"
                      >
                        Login
                      </button>
                      <button className="btn btn-dark rounded-5 rounded-start-0 ms-2" type="button">
                        <FcGoogle className="tw:text-2xl" />
                      </button>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <p className="text-center">
                      Don't have an account?{" "}
                      <span
                        className="tw:cursor-pointer tw:text-blue-600 text-decoration-underline"
                        onClick={handleToggle}
                      >
                        Sign Up
                      </span>
                      <Link
                        to="/home"
                        className="tw:cursor-pointer tw:text-blue-600 text-decoration-underline"
                      >
                        <p className="tw:cursor-pointer tw:text-blue-600 text-decoration-underline">
                          Or Continue as Guest
                        </p>
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
              <div className="col-md-6 m-auto">
                <form className="w-100 text-center">
                  <h2 className="border-bottom w-max p-2 text-center w-25 m-auto">SignUp</h2>
                  <div className="box tw:w-max m-auto">
                    <div className="form-group mb-5 mt-5 position-relative">
                      <input
                        type="text"
                        className="border-0 border-bottom tw:outline-0 position-relative"
                        id="newUsername"
                        placeholder="New Username"
                        required
                      />
                      <MdOutlineMan className="position-absolute tw:end-0 top-0" />
                    </div>
                    <div className="form-group mb-5 mt-5 position-relative">
                      <input
                        type="email"
                        className="border-0 border-bottom tw:outline-0 position-relative"
                        id="newEmail"
                        placeholder="Email"
                        required
                      />
                      <FaEnvelope className="position-absolute tw:end-0 top-0" />
                    </div>
                    <div className="form-group mb-5 mt-5 position-relative">
                      <input
                        type="password"
                        className="border-top-0 border-0 border-bottom tw:outline-0 position-relative"
                        id="newPassword"
                        placeholder="New Password"
                        required
                      />
                      <FaLock className="position-absolute tw:end-0 top-0" />
                    </div>
                    <div className="mb-5 text-start">
                      <button
                        type="submit"
                        className="btn btn-dark tw:w-50 rounded-5 m-0 rounded-end-0"
                      >
                        Sign Up
                      </button>
                      <button className="btn btn-dark rounded-5 rounded-start-0 ms-2" type="button">
                        <FcGoogle className="tw:text-2xl" />
                      </button>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <p className="text-center">
                      Already Have an Account?{" "}
                      <span
                        className="tw:cursor-pointer tw:text-blue-600 text-decoration-underline"
                        onClick={handleToggle}
                      >
                        Login
                      </span>
                    </p>
                  </div>
                </form>
                <div
                  className={
                    "square tw:xl:w-[800px] tw:xl:bg-[#263238] tw:xl:h-[650px] tw:xl:absolute tw:xl:top-[50%]" +
                    className
                  }
                  id="square"
                >
                  <div
                    className={
                      "text-white position-absolute mt-5 tw:xl:top-[60%] tw:xl:start-[50%] tw:xl:translate-x-[-50%] tw:xl:translate-y-[-50%] tw:text-end tw:xl:w-75 " +
                      (isLogin ? "tw:xl:rotate-[-65deg]" : "tw:xl:rotate-[65deg]")
                    }
                  >
                    <h1>
                      Welcome <span className="d-block">Back!</span>
                    </h1>
                    <p>Good Style never takes a break, Neither do we</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;