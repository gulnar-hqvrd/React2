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
import UserDetail, { UserCard, UserForm } from "./components/userDetails";
import UserProvider from "../context/UserContext";

function App() {
  return (
    <div className="App">
      {/* <NumberCounter /> */}
      {/* <UserInfo /> */}
      {/* <RegisterForm /> */}
      {/* <CalculatePrice /> */}
      {/* <PrimitivesNonPrimitives /> */}
      {/* <InitialState /> */}
      {/* <StateClosure /> */}
      {/* <FetchingUseEffect /> */}
      <UserProvider>
        <UserDetail />
        <UserCard />
        <UserForm />
      </UserProvider>
    </div>
  );
}

export default App;