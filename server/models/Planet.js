import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId

const Planet = new Schema(
    {
        name: { type: String, required: true },
        galaxy: { type: ObjectId, ref: "Galaxy", required: true },
        star: { type: ObjectId, ref: "Star", required: true },
        species: { type: ObjectId, ref: "Species" }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Planet;