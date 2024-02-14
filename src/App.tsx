import React from "react";
import "./App.css";
import NumberCounter from "./components/numberCounter";
import UserInfo from "./components/userinfo";
import RegisterForm from "./components/registerForm";
import CalculatePrice from "./components/calculatePrice";
import PrimitiriveNumbers from "./components/primitiriveNumbers";
import InitialState from "./components/initialState";
import StateClosure from "./components/stateClosure";
import FetchingUseEffect from "./components/fetchingUseEffect";
import UserDetails from "./components/userDetails";
import UserDetail, { UserCard, UserForm } from "./components/userDetails";
import UserProvider from "../content/UserContent";

function App() {
  return (
    <>
      {/* <div>
      <NumberCounter/>
    </div> */}

      {/* <div>
      <UserInfo/>
    </div> */}

      {/* <div>
        <RegisterForm />
      </div> */}

      {/* <div>
        <CalculatePrice/>
      </div> */}

      {/* <div>
        <PrimitiriveNumbers/>
      </div> */}

      {/* <div>
        <InitialState/>
      </div> */}

      {/* <div>
        <StateClosure />
      </div> */}

      <div>
        <FetchingUseEffect/>
      </div>

      <div>
      <UserProvider>
        <UserDetail />
        <UserCard />
        <UserForm />
      </UserProvider>
      </div>
    </>
  );
}

export default App;
