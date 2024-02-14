import React, { useContext, useEffect } from "react";

import { UserContext } from "../../content/UserContent";

export default function UserDetail() {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    setTimeout(() => {
      setUser({
        name: "user detail name",
        email: "user detail email",
        theme: "user detail theme",
        themeColor: "user detail theme color",
      });
    }, 6000);
  }, []);
  return (
    <>
      <p>UserDetail - User Name :{user.name}</p>
      <p>UserDetail - User Email :{user.email}</p>
      <p>UserDetail - User Theme :{user.theme}</p>
      <p>UserDetail - User Theme Color:{user.themeColor}</p>
      <hr />
    </>
  );
}

export function UserCard() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    setTimeout(() => {
      setUser({
        name: "user card name",
        email: "user card email",
        theme: "user card theme",
        themeColor: "user card theme color",
      });
    }, 4000);
  }, []);
  return (
    <>
      <p>UserCard - User Name :{user.name}</p>
      <p>UserCard - User Email :{user.email}</p>
      <p>UserCard - User Theme :{user.theme}</p>
      <p>UserCard - User Theme Color:{user.themeColor}</p>
      <hr />
    </>
  );
}

export function UserForm() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    setTimeout(() => {
      setUser({
        name: "user form name",
        email: "user form email",
        theme: "user form theme",
        themeColor: "user form theme color",
      });
    }, 2000);
  }, []);

  return (
    <>
      <p>UserForm - User Name :{user.name}</p>
      <p>UserForm - User Email :{user.email}</p>
      <p>UserForm - User Theme :{user.theme}</p>
      <p>UserForm - User Theme Color:{user.themeColor}</p>
    </>
  );
}