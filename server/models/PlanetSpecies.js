import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId

const PlanetSpecies = new Schema(
    {
        planet: { type: ObjectId, ref: "Planet", required: true },
        species: { type: ObjectId, ref: "Species", required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default PlanetSpecies;