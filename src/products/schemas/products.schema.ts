// 1- schema banco de dados

import * as mongoose from "mongoose";
export const ProductsSchema = new mongoose.Schema({
    name: String,
    stock: Number,
    price_c: String,
    price: String,
}, { collection: 'products' })