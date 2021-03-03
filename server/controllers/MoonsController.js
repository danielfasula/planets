import express from "express";
import BaseController from "../utils/BaseController";
import { moonsService } from '../services/MoonsService';
import { speciesService } from "../services/SpeciesService";

export class MoonsController extends BaseController {
    constructor() {
        super("api/moons");
        this.router
            .get("", this.getAll)
            .post("", this.create)
            .get("/:id/species", this.getAllSpeciesByMoonId)

    }
    async getAll(req, res, next) {
        try {
            return res.send(await moonsService.find(req.query));
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            res.send(201, await moonsService.create(req.body));
        } catch (error) {
            next(error);
        }
    }
    async getAllSpeciesByMoonId(req, res, next) {
        try {
            res.send(await speciesService.find({ moon: req.params.id }))
        } catch (error) {
            next(error)
        }
    }
}