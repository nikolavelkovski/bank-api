import { z } from "zod";

export const branchesQueryInputValidator = z.object({
  search: z.string().optional(),
  city: z.string().optional(),
  limit: z.preprocess((val) => Number(val ?? 10), z.number().min(1)),
  page: z.preprocess((val) => Number(val ?? 1), z.number().min(1)),
});

export const branchIdInputValidator = z.object({
  id: z.uuid(),
});
