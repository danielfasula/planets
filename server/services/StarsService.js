import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StarsService {
    async find(query = {}) {
        return await dbContext.Stars.find(query).populate('galaxy', 'name')
    }
    async create(body) {
        return await dbContext.Stars.create(body)
    }
}

export const starsService = new StarsService();