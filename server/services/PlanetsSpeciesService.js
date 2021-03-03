import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PlanetsSpeciesService {
    async find(query = {}) {
        return await dbContext.PlanetSpecies.find(query).populate("planet species", "name")
    }
    async create(body) {
        return await dbContext.PlanetSpecies.create(body)
    }
    async delete(id) {
        return await dbContext.PlanetSpecies.findByIdAndDelete(id)
    }
    async findById(id) {
        const relationship = await dbContext.PlanetSpecies.findById(id)
        if (!relationship) {
            throw new BadRequest('Invalid ID')
        }
        return relationship
    }

}

export const planetsSpeciesService = new PlanetsSpeciesService();