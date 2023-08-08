import { Response, Request } from "express";

import { createSalesService } from "../services/sales/createSalesService.service";

const createSalesController = async (req: Request, res: Response) => {
  const newSale = await createSalesService(req.body);

  return res.status(201).json(newSale);
};

export { createSalesController };
