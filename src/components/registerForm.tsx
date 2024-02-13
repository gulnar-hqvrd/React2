import { log } from "console";
import React, { useState } from "react";

export default function RegisterForm() {
  //   const [firstName, SetFirstName] = useState("");

  //   const handleOnChange = (e: any) => {
  //     SetFirstName(e.target.value);
  //     console.log(firstName);
  //   };

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cellPhone: "",
    address: "",
    zipCode: "",
  });
  console.log(user);

  const handleOnChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container">
        <form>
          <input
            type="text"
            name="firstName"
            placeholder="Firstname"
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="LastName"
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="cellPhone"
            placeholder="CellPhone"
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="zipCode"
            placeholder="ZipCode"
            onChange={handleOnChange}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
}
