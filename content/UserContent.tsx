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
  setUser: (user: User) => {},
};

export const UserContext = createContext(defaultState);

type UserProviderProps = {
  children: ReactNode;
};
 
export default function UserProvider({ children }: UserProviderProps) {

  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    theme: "",
    themeColor: "",
  });

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
}