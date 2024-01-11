import { Products } from "../models/ProductSchema.js";

export const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Products.find({});
    res.send(allProducts);
  } catch (error) {
    console.log(error);
  }
};

export const getProductsById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findById(id);
    res.send(product);
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = new Products(req.body);
    await newProduct.save();
    res.send("Product Created!");
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findByIdAndDelete(id);
    res.send("Product Deleted!");
  } catch (error) {
    console.log(error);
  }
};
