import { ReactNode } from "react";

export interface ICommentContext {
  commentRegister: (data: ICommentFormValues) => void;
}

export interface CommentProviderProps {
  children: ReactNode;
}

export interface ICommentFormValues {
  user_id: string;
  sale_id: string;
  text: string;
}
