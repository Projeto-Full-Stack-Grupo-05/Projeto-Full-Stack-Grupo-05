import { z } from "zod";
import { salesSchema, salesSchemaRequest, salesSchemaResponse, salesSchemaUpdateRequest } from "../schemas/salesSchema.schema";

type TSalesRequest = z.infer<typeof salesSchemaRequest>;
type TSale = z.infer<typeof salesSchema>;
type TSaleResponse = z.infer<typeof salesSchema>;
type TSalesResponse = z.infer<typeof salesSchemaResponse>;
type TSalesUpdateRequest = z.infer<typeof salesSchemaUpdateRequest>

export {
    TSale, TSaleResponse, TSalesRequest, TSalesResponse,
    TSalesUpdateRequest
};

