import { Request, Response } from "express";
import { branchResponse } from "../dto/branches.dto";
import {
  branchesQueryInputValidator,
  branchIdInputValidator,
} from "../input/branches.input";
import { BranchesService } from "../services/branches.service";
import { asyncHandler } from "../../../utils/async-handler";

export class BranchesController {
  constructor(private service = new BranchesService()) {}

  getAllBranches = asyncHandler(async (req: Request, res: Response) => {
    const parsed = branchesQueryInputValidator.parse(req.query);
    const result = await this.service.getBranches(
      parsed.search,
      parsed.city,
      parsed.limit,
      parsed.page,
    );
    res.json({
      items: result.items.map(branchResponse),
      meta: result.meta,
    });
  });

  getBranchById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = branchIdInputValidator.parse(req.params);
    const branch = await this.service.getBranchById(id);
    res.json(branchResponse(branch));
  });
}
