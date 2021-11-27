import React, { Children } from "react";
import { usePostData } from "../../hooks/usePostData";

export interface IPostContextData {
  postData?: [];
}

export const postContext = React.createContext<IPostContextData>({});

export function PostContextProvider({children}: {children: React.ReactNode}) {
  const [postData] = usePostData();

  return (
    <postContext.Provider value={postData}>
      {children}
    </postContext.Provider>
  )

}
