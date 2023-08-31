import { z } from "zod";
import { SaleStatus } from "../entities/sales.entity";

const gallerySchemaRequest = z.object({
  img_url: z.string(),
});

const salesSchemaRequest = z.object({
  user_id: z.string().max(45),
  title: z.string().max(70),
  img_url: z.string().max(250),
  color: z.string().max(20),
  price: z.number(),
  description: z.string().max(250),
  year: z.number().int(),
  fuel: z.string(),
  kilometers: z.number().int(),
  gallery: z.array(gallerySchemaRequest),
  buyer_id: z.string().max(45).optional(),
  status: z
    .enum([SaleStatus.Active, SaleStatus.Sold])
    .default(SaleStatus.Active),
});

const salesSchema = salesSchemaRequest.extend({
  id: z.string(),
  createdAt: z.string(),
});

const salesSchemaResponse = z.array(salesSchema);

const salesSchemaUpdateRequest = salesSchema.partial().omit({
  id: true,
});

export {
  salesSchema,
  salesSchemaRequest,
  salesSchemaResponse,
  salesSchemaUpdateRequest,
};
