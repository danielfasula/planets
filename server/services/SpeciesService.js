import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class SpeciesService {
    async find(query = {}) {
        return await dbContext.Species.find(query).populate('galaxy', 'name')
    }
    async create(body) {
        return await dbContext.Species.create(body)
    }
}

export const speciesService = new SpeciesService();