const Product = require('../models/Product')


const resolvers = {
    Query: {
      getProducts: async() => {
        const products = await Product.find().sort({ createdAt: -1 });
        return products
      },

    },
    Mutation:{
        async addItem(_, {name, description }, context){
            const newProduct = await new Product({
                name:name,
                description:description,
                createdAt: new Date().toISOString()
            })

            const product = await newProduct.save()

            return product;
        } ,

    
        
        
        
    }

  };

module.exports = resolvers