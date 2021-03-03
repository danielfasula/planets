import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class GalaxiesService {
    async find(query = {}) {
        return await dbContext.Galaxies.find(query);
    }
    async create(body) {
        return await dbContext.Galaxies.create(body)
    }
}

export const galaxiesService = new GalaxiesService();