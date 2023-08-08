import { z } from "zod";
import { salesSchema, salesSchemaRequest, salesSchemaResponse } from "../schemas/salesSchema.schema";

type TSalesRequest = z.infer<typeof salesSchemaRequest>;
type TSales = z.infer<typeof salesSchema>;
type TSaleResponse = z.infer<typeof salesSchema>;
type TSalesResponse = z.infer<typeof salesSchemaResponse>;

export {
    TSales,
    TSalesRequest,
    TSaleResponse,
    TSalesResponse,
};
