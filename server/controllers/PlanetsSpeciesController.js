import express from "express";
import BaseController from "../utils/BaseController";
import { planetsSpeciesService } from '../services/PlanetsSpeciesService';
export class PlanetsSpeciesController extends BaseController {
    constructor() {
        super("api/planetsspecies");
        this.router
            .get('', this.getAll)
            .get(':/id', this.getOne)
            .post("", this.create)
            .delete('/:id', this.delete)
            
    }
    async getAll(req, res, next) {
        try {
            return res.send(await planetsSpeciesService.find(req.query))
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        try {
            res.send(201, await planetsSpeciesService.create(req.body));
        } catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            res.send(await planetsSpeciesService.delete(req.params.id))
        } catch (error) {
            next(error)
        }
    }
    async getOne(req, res, next) {
        try {
            return res.send(await planetsSpeciesService.findById(req.params.id))
        } catch (error) {
            next(error)
        }
    }
}