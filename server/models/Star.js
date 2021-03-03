import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId

const Star = new Schema(
    {
        name: { type: String, required: true },
        galaxy: { type: ObjectId, ref: "Galaxy", required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Star;