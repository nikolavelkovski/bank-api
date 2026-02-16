import { BranchesRepository } from "../repositories/branches.repository";

export class BranchesService {
  constructor(private repo = new BranchesRepository()) {}

  async getBranches(search?: string, city?: string, limit = 10, page = 1) {
    const offset = (page - 1) * limit;
    const items = await this.repo.findAll(search, city, limit, offset);
    const total = await this.repo.count(search, city);

    return {
      items,
      meta: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    };
  }

  async getBranchById(id: string) {
    const branch = await this.repo.findOne(id);
    if (!branch) throw new Error("Branch not found");
    return branch;
  }
}
