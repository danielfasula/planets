import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PlanetsService {
    async find(query = {}) {
        return await dbContext.Planets.find(query).populate("galaxy", "name").populate("star", "name")
    }
    async create(body) {
        return await dbContext.Planets.create(body)
    }
}

export const planetsService = new PlanetsService();