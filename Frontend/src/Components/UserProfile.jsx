import { useState } from "react";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAddressEditing, setIsAddressEditing] = useState(false);
  return (
    <div className="container p-3">
      <div className="col-md-12">
        <h1 className="h1">USER PROFILE</h1>
        <div className="row text-black">
          <div className="col-md-4 bg-secondary-subtle p-3 m-auto">
            <p className="h3">
              PERSONAL DETAILS |{" "}
              <span
                className="tw:cursor-pointer text-primary"
                onClick={() => {
                  setIsEditing(!isEditing);
                }}
              >
                {" "}
                EDIT{" "}
              </span>
            </p>
            <form action="">
              <div className="mb-3 d-flex align-items-center justify-content-center w-100">
                <label htmlFor="name" className="form-label">
                  Name:{" "}
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={"Joe"}
                  />
                ) : (
                  <span className="form-control bg-secondary-subtle">Joe</span>
                )}
              </div>
              <div className="mb-3 d-flex align-items-center justify-content-center w-100">
                <label htmlFor="email" className="form-label">
                  Email:{" "}
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    className="form-control ms-2"
                    id="surname" 
                    value={"Person@gmail.com"}
                  />
                ) : (
                  <span className="form-control ms-2 bg-secondary-subtle">
                    Person@gmail.com
                  </span>
                )}
              </div>
              <div className="mb-3 d-flex align-items-center justify-content-center w-100">
                <label htmlFor="Password">Password: </label>
                {isEditing ? (
                  <input
                    type="password"
                    className="form-control ms-2"
                    id="Password"
                    value={"********"}
                  />
                ) : (
                  <span className="form-control ms-2 bg-secondary-subtle">
                    ********
                  </span>
                )}
              </div>
              <div className="mb-3">
                {isEditing ? (
                  <button type="submit" className="btn btn-primary ms-2">
                    Save
                  </button>
                ) : null}
              </div>
            </form>
          </div>
          <div className="col-md-6 bg-secondary-subtle p-3 m-auto">
            <div className="row">
              <p className="h3">
                ADDRESS BOOK |{" "}
                <span
                  className="tw:cursor-pointer text-primary"
                  onClick={() => {
                    setIsAddressEditing(!isAddressEditing);
                  }}
                >
                  {" "}
                  EDIT{" "}
                </span>
              </p>
              <div className="address-default col-md-6 border-end-2">
                <p>DEFAULT SHIPPING ADDRESS</p>
                <p>NAME</p>
                {!isAddressEditing ? (
                  <><div className="mb-3">
                    <p>House no 27 , street 34 , sector A</p>
                  </div>
                  <div className="mb-3">
                    <p>Islamabad</p>
                  </div>
                  <div className="mb-3">
                    <p> +92 94823845</p>
                  </div>
                  </>
                ) : (
                  <form>
                   <div className="mb-3">
                    <input type="text" className="form-control" value={"House no 27 , street 34 , sector A"} />
                   </div>
                   <div className="mb-3"><input type="text" className="form-control" value={"Islamabad"}/></div>
                   <div className="mb-3"><input type="text" className="form-control" value={"+92 94823845"}/></div>
                   <div className="mb-3">
                    <button type="submit" className="btn btn-primary"> Save </button>
                   </div>
                  </form>
                )}
              </div>
              <div className="billing-address col-md-6">
                <p>DEFAULT BILLING ADDRESS</p>

                <p>NAME</p>
                <p>House no 27 , street 34 , sector A</p>
                <p>Islamabad</p>
                <p> +92 94823845</p>
              </div>
            </div>
          </div>
        </div>
        <div className="recent-order bg-secondary-subtle p-3 m-auto mt-5 text-black">
            <h1 className="h1">Recent Orders</h1>
            <table className="table tw:overflow-x-auto">  
                <thead className="tw:text-3xl">
                    <tr>
                        <th>Order No.</th>
                        <th>Placed ON</th>
                        <th>PRODUCT</th>
                        <th>QUANTITY</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                <tbody className="tw:text-2xl">
                    <tr>
                        <td>12345</td>
                        <td>2023-10-01</td>
                        <td>Product A</td>
                        <td>2</td>
                        <td>$50.00</td>
                    </tr>
                    <tr>
                        <td>12346</td>
                        <td>2023-10-02</td>
                        <td>Product B</td>
                        <td>1</td>
                        <td>$30.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
