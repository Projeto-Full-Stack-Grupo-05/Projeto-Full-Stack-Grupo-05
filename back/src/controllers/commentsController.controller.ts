import { Response, Request } from "express";
import listCommentsService from "../services/comments/listComentsSalesService.service";
import listCommentBySaleService from "../services/comments/listCommentBySaleService";
import Comment from "../entities/comments.entity";
import deleteCommentService from "../services/comments/deleteCommentService.service";
import { createCommentService } from "../services/comments/createCommentService.service";

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

  const commentSale = await listCommentBySaleService(saleId);

  return res.json(commentSale);
};

export const deleteCommentController = async (req: Request, res: Response) => {
  const commentId = req.params.id;
  await deleteCommentService(commentId);
  res.status(204).send();
};

export const createCommentsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.body;

  const newComment = await createCommentService(data);

  return res.status(201).json(newComment);
};
