import express from "express";
import BaseController from "../utils/BaseController";
import { planetsService } from '../services/PlanetsService';
import { moonsService } from "../services/MoonsService";
import { speciesService } from "../services/SpeciesService";
export class PlanetsController extends BaseController {
    constructor() {
        super("api/planets");
        this.router
            .get("", this.getAll)
            .post("", this.create)
            .get("/:id/moons", this.getAllMoonsByPlanetId)
            .get("/:id/species", this.getAllSpeciesByPlanetId)
    }
    async getAll(req, res, next) {
        try {
            return res.send(await planetsService.find(req.query));
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            res.send(201, await planetsService.create(req.body));
        } catch (error) {
            next(error);
        }
    }

    async getAllMoonsByPlanetId(req, res, next) {
        try {
            res.send(await moonsService.find({ planet: req.params.id }))
        } catch (error) {
            next(error)
        }
    }
    async getAllSpeciesByPlanetId(req, res, next) {
        try {
            res.send(await speciesService.find({ planet: req.params.id }))
        } catch (error) {
            next(error)
        }
    }
}