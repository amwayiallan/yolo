import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

let productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    photo:String

})

let Product = model('Product', productSchema)

export default Product;