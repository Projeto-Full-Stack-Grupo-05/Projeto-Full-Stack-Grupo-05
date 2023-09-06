import { z } from "zod";
import {
  salesSchema,
  salesSchemaRequest,
  salesSchemaResponse,
} from "../schemas/salesSchema.schema";
import { DeepPartial } from "typeorm";

type TSalesRequest = z.infer<typeof salesSchemaRequest>;
type TSale = z.infer<typeof salesSchema>;
type TSaleResponse = z.infer<typeof salesSchema>;
type TSalesResponse = z.infer<typeof salesSchemaResponse>;
type TSalesCreateResponse = z.infer<typeof salesSchemaRequest>;
type TSalesRequestUpdate = DeepPartial<TSalesRequest>;

export {
  TSale,
  TSaleResponse,
  TSalesRequest,
  TSalesResponse,
  TSalesRequestUpdate,
  TSalesCreateResponse,
};
