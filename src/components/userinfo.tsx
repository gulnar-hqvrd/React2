import { log } from "console";
import { useState } from "react";
import React from "react";

export default function UserInfo() {
  const [user, setUser] = useState({
    name: "",
    age: 22,
    email: "gulnarhagverdiyeva18@gmail.com",
  });

  console.log(user);
  const handleOnChange = (e: any) => {
    // console.log(e.target.value);
    setUser({
      ...user,
      name: e.target.value,
    });
  };

  return (
    <>
      <div className="container">
        <form>
          <input
            type="text"
            placeholder="Write your information"
            onChange={handleOnChange}
          />
        </form>
      </div>
    </>
  );
}
