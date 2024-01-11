import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProductsById } from "../controllers/ProductController.js";

export const productRouter = express.Router();



productRouter.get("/",getAllProducts );

productRouter.get("/:id", getProductsById);

productRouter.post("/", createProduct);

productRouter.delete("/:id",deleteProduct );
