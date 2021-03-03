import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class MoonsService {
    async find(query = {}) {
        return await dbContext.Moons.find(query).populate('galaxy', 'name').populate('star', 'name').populate('planet', 'name')
    }
    async create(body) {
        return await dbContext.Moons.create(body)
    }
}

export const moonsService = new MoonsService();