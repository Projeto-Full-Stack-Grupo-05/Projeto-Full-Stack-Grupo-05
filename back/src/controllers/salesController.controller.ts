import { Response, Request } from "express";
import deleteSaleService from "../services/sales/deleteSaleService.service";
import updateSaleService from "../services/sales/updateSaleService.service";

import { createSalesService } from "../services/sales/createSalesService.service";
import { TSales, TSalesRequestUpdate } from "../interfaces/sales.interface";



const createSalesController = async (req: Request, res: Response) => {
  const newSale = await createSalesService(req.body);

  return res.status(201).json(newSale);
};


export const updateSaleController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const saleData: TSalesRequestUpdate = req.body
    const saleId: string = req.params.id
 
    const newSaleData:TSales = await updateSaleService(
        saleData,
        saleId
    )
    return res.status(200).json(newSaleData)
}

export const deleteSaleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const saleId: string = req.params.id

  await deleteSaleService(saleId)

  return res.status(204).send()
}

export {createSalesController}