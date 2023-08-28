import { Response, Request } from "express";
import listCommentsService from "../services/comments/listComentsSalesService.service";
import listCommentBySaleService from "../services/comments/listAllComentsService.service";
import Comment from "../entities/comments.entity";
import deleteCommentService from "../services/comments/deleteCommentService.service";

export const listCommentsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const comments = await listCommentsService();
  return res.json(comments);
};

export const listAllCommentsBySalesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const saleId: string = req.params.id;

  const commentSale: Comment[] | null = await listCommentBySaleService(saleId);

  return res.json(commentSale);
};

export const deleteCommentController = async (req: Request, res: Response) => {
  const commentId = req.params.id;
  await deleteCommentService(commentId);
  res.status(204).send();
};
