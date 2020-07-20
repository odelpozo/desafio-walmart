const mongoose = require('mongoose');

 
const ProductSshema = new mongoose.Schema({
    _id: {type: Object, required: false},
    id : { type: Number, required: true },
    brand : { type: String, required: true },
    description : { type: String, required: true },
    image : { type: String, required: true },
    price : { type: Number, required: true } 
});


ProductSshema.statics.findProducts = findProducts;

function findProducts() {
    return this.find({}).then((res) => res);
}

module.exports = mongoose.model('products', ProductSshema)