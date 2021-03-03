import express from "express";
import BaseController from "../utils/BaseController";
import { galaxiesService } from '../services/GalaxiesService';
import { starsService } from "../services/StarsService";
import { planetsService } from "../services/PlanetsService";
import { moonsService } from "../services/MoonsService";
import { speciesService } from "../services/SpeciesService";
export class GalaxiesController extends BaseController {
    constructor() {
        super("api/galaxies");
        this.router
            .get("", this.getAll)
            .post("", this.create)
            .get("/:id/stars", this.getAllStarsByGalaxyId)
            .get("/:id/planets", this.getAllPlanetsByGalaxyId)
            .get("/:id/moons", this.getAllMoonsByGalaxyId)
            .get("/:id/species", this.getAllSpeciesByGalaxyId)
    }
    async getAll(req, res, next) {
        try {
            return res.send(await galaxiesService.find(req.query));
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            res.send(201, await galaxiesService.create(req.body));
        } catch (error) {
            next(error);
        }
    }
    async getAllStarsByGalaxyId(req, res, next) {
        try {
            res.send(await starsService.find({ galaxy: req.params.id }))
        } catch (error) {
            next(error)
        }
    }
    async getAllPlanetsByGalaxyId(req, res, next) {
        try {
            res.send(await planetsService.find({ galaxy: req.params.id }))
        } catch (error) {
            next(error)
        }
    }
    async getAllMoonsByGalaxyId(req, res, next) {
        try {
            res.send(await moonsService.find({ galaxy: req.params.id }))
        } catch (error) {
            next(error)
        }
    }
    async getAllSpeciesByGalaxyId(req, res, next) {
        try {
            res.send(await speciesService.find({ galaxy: req.params.id }))
        } catch (error) {
            next(error)
        }
    }
}
