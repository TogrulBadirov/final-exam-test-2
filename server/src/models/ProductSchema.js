import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  image: String,
  title: String,
  detail: String,
  price: Number,
});

export const Products = mongoose.model('Exam2Products', ProductSchema);