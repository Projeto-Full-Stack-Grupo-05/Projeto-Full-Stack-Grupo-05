import { createContext, useState } from "react";
import {
  CommentProviderProps,
  IComment,
  ICommentContext,
  ICommentFormValues,
} from "./@types";
import { api } from "../../services/api";

export const CommentContext = createContext({} as ICommentContext);

export const CommentProvider = ({ children }: CommentProviderProps) => {
  const [comments, setComments] = useState<IComment[]>([]);

  const getAllComments = async (id: string) => {
    try {
      const res = await api.get(`/sales/${id}/comments`);
      setComments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const commentRegister = async (commentData: ICommentFormValues) => {
    try {
      const res = await api.post(`/comments`, commentData);

      setComments((prevComments) => [...prevComments, res.data]);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <CommentContext.Provider
      value={{ commentRegister, comments, getAllComments }}
    >
      {children}
    </CommentContext.Provider>
  );
};
