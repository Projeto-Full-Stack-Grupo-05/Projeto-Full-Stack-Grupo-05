import { Request, Response } from "express";
import {
  TSale,
  TSaleResponse,
  TSalesRequestUpdate,
  TSalesResponse,
} from "../interfaces/sales.interface";
import deleteSaleService from "../services/sales/deleteSaleService.service";
import readSalesService from "../services/sales/readSalesService.service";
import retrieveSaleService from "../services/sales/retrieveSaleService.service";
import updateSaleService from "../services/sales/updateSaleService.service";
import createSalesService from "../services/sales/createSalesService.service";

export const createSalesController = async (req: Request, res: Response) => {
  const userId = req.body.user_id;

  const newSale = await createSalesService(req.body, userId);

  return res.status(201).json(newSale);
};

export const retrieveSaleController = async (req: Request, res: Response) => {
  const requiredSale = await retrieveSaleService(req.params.id);

  return res.status(200).json(requiredSale);
};

export const readSalesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { page, pageSize } = req.query;
  const parsedPage = parseInt(page as string, 10) || 1;
  const parsedPageSize = parseInt(pageSize as string, 10) || 10;

  const sales = await readSalesService(parsedPage, parsedPageSize);
  return res.json(sales);
};

export const updateSaleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const saleData: TSalesRequestUpdate = req.body;
  const saleId: string = req.params.id;

  const newSaleData: TSale = await updateSaleService(saleData, saleId);
  return res.status(200).json(newSaleData);
};

export const deleteSaleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const saleId: string = req.params.id;

  await deleteSaleService(saleId);

  return res.status(204).send();
};
