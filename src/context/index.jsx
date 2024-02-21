import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
