import React, { ReactNode, createContext, useState } from "react";

export type User = {
  name: string;
  email: string;
  theme?: string;
  themeColor?: string;
};

const defaultState = {
  user: {
    name: "",
    email: "",
    theme: "",
    themeColor: "",
  } as User,
  setUser: (u6yhser: User) => {},
};

export const UserContext = createContext(defaultState);

type UserProviderProps = {
  children: ReactNode;
};
 
export default function UserProvider({ children }: UserProviderProps) {

  const [user, setUser] = useState<User>({
    name: "default name",
    email: "default email",
    theme: "default theme",
    themeColor: "default theme color",
  });

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
}