import { ReactNode } from "react";
import { z } from "zod";
import { CommentsSchema } from "../../schema/CommentSchema";

export interface ICommentContext {
  commentRegister: (data: ICommentFormValues) => void;
  comments: IComment[];
  getAllComments: (id: string) => Promise<void>;
}

export interface CommentProviderProps {
  children: ReactNode;
}

export interface ICommentFormValues {
  user_id: string;
  sale_id: string;
  text: string;
}
export type IComment = z.infer<typeof CommentsSchema>;
