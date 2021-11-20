import React from "react";
import { usePostData } from "../../hooks/usePostData";

export interface IPostContextData {
  name?: string;
  iconImg?: string;
}

export const postContext = React.createContext<IPostContextData>({});

export function PostContextProvider({children}: {children: React.ReactNode}) {
  console.log('PostContextProvider');

  const [data] = usePostData();

  return (
    <postContext.Provider value={data}>
      {children}
    </postContext.Provider>
  )

}
