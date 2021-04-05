const mongoose =  require("mongoose")


const schema = new mongoose.Schema(
    {
     name: String, 
     description: String, 
     createdAt:String
    
    }
    );
const Product = mongoose.model('Product', schema);

module.exports = Product



