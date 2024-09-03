const Product = require('../models/productModel');
const mongoose = require('mongoose');

let products =  [
    {
        prod_name: 'iPhone XS',
        prod_rtng: '3.9/5',
        prod_price: '11999',
        prod_image1: 'https://i0.wp.com/cliktodeal.com/wp-content/uploads/2021/03/iphone-xs-silver-e1646717584517.jpg?fit=1000%2C1000&ssl=1',
        prod_image2: 'https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg',
        prod_image3: 'https://cellbuddy.in/buddy/wp-content/uploads/2022/09/XS-Max-Silver-2.png',
    },
    {
        prod_name: 'iPhone XS Max',
        prod_rtng: '3.8/5',
        prod_price: '12999',
        prod_image1: 'https://images-cdn.ubuy.co.in/641330cd656a9a11dd49bb60-apple-iphone-xs-max-256gb-gold.jpg',
        prod_image2: 'https://5.imimg.com/data5/SELLER/Default/2021/3/ER/JQ/FK/51998494/apple-iphone-xs-max-256gb-gold.jpg',
        prod_image3: 'https://images-cdn.ubuy.co.in/64f429f6bd3daf5a6b0bd889-pre-owned-iphone-xs-max-256gb-gold.jpg',
    },
    {
        prod_name: 'iPhone 11',
        prod_rtng: '4.2/5',
        prod_price: '13999',
        prod_image1: 'https://s3no.cashify.in/pd-admin/0b5eab069de84b6f8c9690f8203da29b.jpg?p=es4sq&s=es',
        prod_image2: 'https://i5.walmartimages.com/seo/Restored-Apple-iPhone-11-64GB-Black-AT-T-Refurbished_b75e56ff-67fe-4162-b47d-2f89c5295e2e_1.6f0da59e3c1b49bc082882e0737e6e19.jpeg',
        prod_image3: 'https://images.unsplash.com/photo-1569429594806-192f16855a0e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        prod_name: 'iPhone 11 Pro',
        prod_rtng: '4/5',
        prod_price: '16999',
        prod_image1: 'https://i0.wp.com/cliktodeal.com/wp-content/uploads/2021/03/iphone-xs-silver-e1646717584517.jpg?fit=1000%2C1000&ssl=1',
        prod_image2: 'https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg',
        prod_image3: 'https://cellbuddy.in/buddy/wp-content/uploads/2022/09/XS-Max-Silver-2.png',
    },
    {
        prod_name: 'iPhone 11 Pro Max',
        prod_rtng: '4.5/5',
        prod_price: '17999',
        prod_image1: 'https://i0.wp.com/cliktodeal.com/wp-content/uploads/2021/03/iphone-xs-silver-e1646717584517.jpg?fit=1000%2C1000&ssl=1',
        prod_image2: 'https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg',
        prod_image3: 'https://cellbuddy.in/buddy/wp-content/uploads/2022/09/XS-Max-Silver-2.png',
    },
    {
        prod_name: 'iPhone 12',
        prod_rtng: '4.7/5',
        prod_price: '20999',
        prod_image1: 'https://i0.wp.com/cliktodeal.com/wp-content/uploads/2021/03/iphone-xs-silver-e1646717584517.jpg?fit=1000%2C1000&ssl=1',
        prod_image2: 'https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg',
        prod_image3: 'https://cellbuddy.in/buddy/wp-content/uploads/2022/09/XS-Max-Silver-2.png',
    },
    {
        prod_name: 'iPhone 12 Pro',
        prod_rtng: '3.5/5',
        prod_price: '32099',
        prod_image1: 'https://i0.wp.com/cliktodeal.com/wp-content/uploads/2021/03/iphone-xs-silver-e1646717584517.jpg?fit=1000%2C1000&ssl=1',
        prod_image2: 'https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg',
        prod_image3: 'https://cellbuddy.in/buddy/wp-content/uploads/2022/09/XS-Max-Silver-2.png',
    },
    {
        prod_name: 'iPhone 12 Pro Max',
        prod_rtng: '4.4/5',
        prod_price: '35999',
        prod_image1: 'https://i0.wp.com/cliktodeal.com/wp-content/uploads/2021/03/iphone-xs-silver-e1646717584517.jpg?fit=1000%2C1000&ssl=1',
        prod_image2: 'https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg',
        prod_image3: 'https://cellbuddy.in/buddy/wp-content/uploads/2022/09/XS-Max-Silver-2.png',
    },
    {
        prod_name: 'iPhone 13',
        prod_rtng: '4.9/5',
        prod_price: '38999',
        prod_image1: 'https://i0.wp.com/cliktodeal.com/wp-content/uploads/2021/03/iphone-xs-silver-e1646717584517.jpg?fit=1000%2C1000&ssl=1',
        prod_image2: 'https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg',
        prod_image3: 'https://cellbuddy.in/buddy/wp-content/uploads/2022/09/XS-Max-Silver-2.png',
    },
    {
        prod_name: 'iPhone 13 Pro',
        prod_rtng: '4/5',
        prod_price: '41999',
        prod_image1: 'https://i0.wp.com/cliktodeal.com/wp-content/uploads/2021/03/iphone-xs-silver-e1646717584517.jpg?fit=1000%2C1000&ssl=1',
        prod_image2: 'https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg',
        prod_image3: 'https://cellbuddy.in/buddy/wp-content/uploads/2022/09/XS-Max-Silver-2.png',
    },
    {
        prod_name: 'iPhone 13 Pro Max',
        prod_rtng: '4.7/5',
        prod_price: '43999',
        prod_image1: 'https://i0.wp.com/cliktodeal.com/wp-content/uploads/2021/03/iphone-xs-silver-e1646717584517.jpg?fit=1000%2C1000&ssl=1',
        prod_image2: 'https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg',
        prod_image3: 'https://cellbuddy.in/buddy/wp-content/uploads/2022/09/XS-Max-Silver-2.png',
    },
    {
        prod_name: 'iPhone 14',
        prod_rtng: '4/5',
        prod_price: '40999',
        prod_image1: 'https://i0.wp.com/cliktodeal.com/wp-content/uploads/2021/03/iphone-xs-silver-e1646717584517.jpg?fit=1000%2C1000&ssl=1',
        prod_image2: 'https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg',
        prod_image3: 'https://cellbuddy.in/buddy/wp-content/uploads/2022/09/XS-Max-Silver-2.png',
    },
    {
        prod_name: 'iPhone 14 Pro',
        prod_rtng: '4/5',
        prod_price: '62999',
        prod_image1: 'https://i0.wp.com/cliktodeal.com/wp-content/uploads/2021/03/iphone-xs-silver-e1646717584517.jpg?fit=1000%2C1000&ssl=1',
        prod_image2: 'https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg',
        prod_image3: 'https://cellbuddy.in/buddy/wp-content/uploads/2022/09/XS-Max-Silver-2.png',
    },
    {
        prod_name: 'iPhone 14 Pro Max',
        prod_rtng: '4/8/5',
        prod_price: '64999',
        prod_image1: 'https://i0.wp.com/cliktodeal.com/wp-content/uploads/2021/03/iphone-xs-silver-e1646717584517.jpg?fit=1000%2C1000&ssl=1',
        prod_image2: 'https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg',
        prod_image3: 'https://cellbuddy.in/buddy/wp-content/uploads/2022/09/XS-Max-Silver-2.png',
    },
    {
        prod_name: 'iPhone 15',
        prod_rtng: '5/5',
        prod_price: '55999',
        prod_image1: 'https://i0.wp.com/cliktodeal.com/wp-content/uploads/2021/03/iphone-xs-silver-e1646717584517.jpg?fit=1000%2C1000&ssl=1',
        prod_image2: 'https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg',
        prod_image3: 'https://cellbuddy.in/buddy/wp-content/uploads/2022/09/XS-Max-Silver-2.png',
    },
    {
        prod_name: 'iPhone 15 Pro',
        prod_rtng: '4/5',
        prod_price: '70999',
        prod_image1: 'https://i0.wp.com/cliktodeal.com/wp-content/uploads/2021/03/iphone-xs-silver-e1646717584517.jpg?fit=1000%2C1000&ssl=1',
        prod_image2: 'https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg',
        prod_image3: 'https://cellbuddy.in/buddy/wp-content/uploads/2022/09/XS-Max-Silver-2.png',
    },
    {
        prod_name: 'iPhone 15 Pro Max',
        prod_rtng: '3.9/5',
        prod_price: '72999',
        prod_image1: 'https://i0.wp.com/cliktodeal.com/wp-content/uploads/2021/03/iphone-xs-silver-e1646717584517.jpg?fit=1000%2C1000&ssl=1',
        prod_image2: 'https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg',
        prod_image3: 'https://cellbuddy.in/buddy/wp-content/uploads/2022/09/XS-Max-Silver-2.png',
    }
]

const getProducts = async (req,res) => {
    const all_products = await Product.find({}).sort({createAt:-1});
    res.status(200).json(all_products);
}

const getProduct = async (req,res) => {
    const {id}    = req.params;
    const product = await Product.findById(id);
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"ID is Invalid!"});
    }
    if (!product){
        return res.status(404).json({error:"No product found with the given id"});
    }
    res.status(200).json(product);
}

const createProduct = async (req,res) => {
    const {prod_name,prod_desc,prod_price,prod_image} = req.body;
    try{
        const new_product = await Product.create({prod_name,prod_desc,prod_price,prod_image});
        res.status(200).json(new_product);
    }
    catch(error){
        return res.status(400).json({error:error.message});
    }
}

module.exports = {getProducts,getProduct,createProduct};