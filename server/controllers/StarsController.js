import express from "express";
import BaseController from "../utils/BaseController";
import { starsService } from '../services/StarsService';
import { planetsService } from "../services/PlanetsService";
import { moonsService } from "../services/MoonsService";
import { speciesService } from "../services/SpeciesService";
export class StarsController extends BaseController {
    constructor() {
        super("api/stars");
        this.router
            .get("", this.getAll)
            .post("", this.create)
            .get("/:id/planets", this.getAllPlanetsByStarId)
            .get("/:id/moons", this.getAllMoonsByStarId)
            .get("/:id/species", this.getAllSpeciesByStarId)
    }
    async getAll(req, res, next) {
        try {
            return res.send(await starsService.find(req.query));
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            res.send(201, await starsService.create(req.body));
        } catch (error) {
            next(error);
        }
    }

    async getAllPlanetsByStarId(req, res, next) {
        try {
            res.send(await planetsService.find({ star: req.params.id }))
        } catch (error) {
            next(error)
        }
    }
    async getAllMoonsByStarId(req, res, next) {
        try {
            res.send(await moonsService.find({ star: req.params.id }))
        } catch (error) {
            next(error)
        }
    }
    async getAllSpeciesByStarId(req, res, next) {
        try {
            res.send(await speciesService.find({ star: req.params.id }))
        } catch (error) {
            next(error)
        }
    }
}