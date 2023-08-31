import { createContext } from "react";
import {
  CommentProviderProps,
  ICommentContext,
  ICommentFormValues,
} from "./@types";

export const CommentContext = createContext({} as ICommentContext);

export const CommentProvider = ({ children }: CommentProviderProps) => {
  const commentRegister = (formData: ICommentFormValues) => {
    console.log(formData);
  };
  return (
    <CommentContext.Provider value={{ commentRegister }}>
      {children}
    </CommentContext.Provider>
  );
};
