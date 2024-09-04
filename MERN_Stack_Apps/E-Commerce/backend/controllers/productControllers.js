const Product = require('../models/productModel');
const mongoose = require('mongoose');

let products =  [
    {
        prod_name: 'iPhone XS',
        prod_rtng: '3.9/5',
        prod_price: '11999',
        prod_image1: 'https://i0.wp.com/cliktodeal.com/wp-content/uploads/2021/03/iphone-xs-silver-e1646717584517.jpg?fit=1000%2C1000&ssl=1',
        prod_image2: 'https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg',
        prod_image3: 'https://cellbuddy.in/buddy/wp-content/uploads/2022/09/XS-Max-Silver-2.png'
    },
    {
        prod_name: 'iPhone XS Max',
        prod_rtng: '3.8/5',
        prod_price: '12999',
        prod_image1: 'https://images-cdn.ubuy.co.in/641330cd656a9a11dd49bb60-apple-iphone-xs-max-256gb-gold.jpg',
        prod_image2: 'https://5.imimg.com/data5/SELLER/Default/2021/3/ER/JQ/FK/51998494/apple-iphone-xs-max-256gb-gold.jpg',
        prod_image3: 'https://images-cdn.ubuy.co.in/64f429f6bd3daf5a6b0bd889-pre-owned-iphone-xs-max-256gb-gold.jpg'
    },
    {
        prod_name: 'iPhone 11',
        prod_rtng: '4.2/5',
        prod_price: '13999',
        prod_image1: 'https://s3no.cashify.in/pd-admin/0b5eab069de84b6f8c9690f8203da29b.jpg?p=es4sq&s=es',
        prod_image2: 'https://i5.walmartimages.com/seo/Restored-Apple-iPhone-11-64GB-Black-AT-T-Refurbished_b75e56ff-67fe-4162-b47d-2f89c5295e2e_1.6f0da59e3c1b49bc082882e0737e6e19.jpeg',
        prod_image3: 'https://images.unsplash.com/photo-1569429594806-192f16855a0e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        prod_name: 'iPhone 11 Pro',
        prod_rtng: '4/5',
        prod_price: '16999',
        prod_image1: 'https://i.gzn.jp/img/2019/09/20/iphone-11-pro-photo-review/P5077545.jpg',
        prod_image2: 'https://peopleproduct.in/wp-content/uploads/2020/09/61m6DjujESL._SL1024_.jpg',
        prod_image3: 'https://rukminim2.flixcart.com/image/850/1000/k2jbyq80pkrrdj/mobile-refurbished/c/u/e/iphone-11-pro-512-u-mwcd2hn-a-apple-0-original-imafkg2fu4mgqrwh.jpeg?q=20&crop=false'
    },
    {
        prod_name: 'iPhone 11 Pro Max',
        prod_rtng: '4.5/5',
        prod_price: '17999',
        prod_image1: 'https://images-cdn.ubuy.co.in/652591ea6bcf2a52aa5a5be4-restored-apple-iphone-11-pro-max-256gb.jpg',
        prod_image2: 'https://www.phoneplacekenya.com/wp-content/uploads/2019/09/APPLE-IPHONE-11-PRO-MAX-d-400x400.png',
        prod_image3: 'https://d2xamzlzrdbdbn.cloudfront.net/products/47d312e4-7767-402e-8cde-0d4f98b3fb9e_416x416.jpg'
    },
    {
        prod_name: 'iPhone 12',
        prod_rtng: '4.7/5',
        prod_price: '20999',
        prod_image1: 'https://media.gq.com/photos/5f85fa9f41ee64286573789b/master/w_1600%2Cc_limit/apple_iphone-12_color-green_10132020.jpg',
        prod_image2: 'https://apollo.olx.in/v1/files/yiox1588e7z5-IN/image',
        prod_image3: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/d05e32aa-9e1a-4c8f-8a6b-87fe287c277d.598acd76c35bb8ef71d84df287e9e9c7.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
    },
    {
        prod_name: 'iPhone 12 Pro',
        prod_rtng: '3.5/5',
        prod_price: '32099',
        prod_image1: 'https://rukminim2.flixcart.com/image/750/900/kg8avm80/mobile/m/g/w/apple-iphone-12-pro-dummyapplefsn-original-imafwgbr5ndzwdfw.jpeg?q=20&crop=false',
        prod_image2: 'https://cdn.mos.cms.futurecdn.net/GhuGxgyQ43F4bcXja9yiia.jpg',
        prod_image3: 'https://d2xamzlzrdbdbn.cloudfront.net/products/6d6a1799-f99c-4f5e-b5bc-b8b8cda76785_416x416.jpg'
    },
    {
        prod_name: 'iPhone 12 Pro Max',
        prod_rtng: '4.4/5',
        prod_price: '35999',
        prod_image1: 'https://www.neolight.in/wp-content/uploads/2022/01/iphone-12-pro-max-silver.jpg',
        prod_image2: 'https://media.karousell.com/media/photos/products/2021/12/11/apple_iphone_12_pro_max_silver_1639192121_5660cb06_progressive.jpg',
        prod_image3: 'https://ailifeholdings.com/cdn/shop/products/12prosil_620x.jpg?v=1626754512'
    },
    {
        prod_name: 'iPhone 13',
        prod_rtng: '4.9/5',
        prod_price: '38999',
        prod_image1: 'https://strgimgr.umico.az/sized/840/261049-b3ebba9407dad8551ce4f6cca43b3598.jpg',
        prod_image2: 'https://rukminim2.flixcart.com/image/850/1000/l0igvww0/mobile/g/q/1/-original-imagca5aeyxv4nbv.jpeg?q=90&crop=false',
        prod_image3: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-green-witb-202203_FMT_WHH?wid=560&hei=744&fmt=jpeg&qlt=90&.v=1644964732535'
    },
    {
        prod_name: 'iPhone 13 Pro',
        prod_rtng: '4/5',
        prod_price: '41999',
        prod_image1: 'https://elcytec.com/wp-content/uploads/2022/05/elcytec_iphone_13_pro-1.jpg',
        prod_image2: 'https://www.cepkolik.com/wp-content/uploads/2021/09/Apple-iphone-13-Pro-Max-2.jpg',
        prod_image3: 'https://coolmix.eu/store/images/iphones/models/13p/blue/back.webp'
    },
    {
        prod_name: 'iPhone 13 Pro Max',
        prod_rtng: '4.7/5',
        prod_price: '43999',
        prod_image1: 'https://d57avc95tvxyg.cloudfront.net/images/thumbnails/1000/1000/detailed/5572/full_body_housing_for_apple_iphone_13_pro_max_black_maxbhi_com_15044.jpg?t=1719163144',
        prod_image2: 'https://m.media-amazon.com/images/I/41lsGpf1zCL._AC_SL800_.jpg',
        prod_image3: 'https://static.3d-baza.com/models/259147/0ef5c3d90fa3409a8c581fad.jpg',
    },
    {
        prod_name: 'iPhone 14',
        prod_rtng: '4/5',
        prod_price: '40999',
        prod_image1: 'https://iplanet.one/cdn/shop/files/iPhone_14_Plus_Blue_PDP_Image_Position-1A__WWEN.jpg?v=1691140349&width=1445',
        prod_image2: 'https://bestpricegh.com/cdn/shop/products/51Sn5X2gfaL._SL1500_2048x.jpg?v=1663635639',
        prod_image3: 'https://images.hindustantimes.com/tech/htmobile4/apple-iphone-14/colors/blue/apple-iphone-14-blue-3.jpg?width=263&height=263',
    },
    {
        prod_name: 'iPhone 14 Pro',
        prod_rtng: '4/5',
        prod_price: '62999',
        prod_image1: 'https://www.imagineonline.store/cdn/shop/files/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a__WWEN.jpg?v=1692348972',
        prod_image2: 'https://www.jiomart.com/images/product/original/493177810/apple-iphone-14-pro-max-1-tb-deep-purple-digital-o493177810-p593695452-4-202306302253.jpeg?im=Resize=(420,420)',
        prod_image3: 'https://www.imagineonline.store/cdn/shop/files/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-2__WWEN.jpg?v=1692348976&width=1445',
    },
    {
        prod_name: 'iPhone 14 Pro Max',
        prod_rtng: '4/8/5',
        prod_price: '64999',
        prod_image1: 'https://iplanet.one/cdn/shop/files/r1598_Gold_PDP_Image_Position-1a_Avail__en-IN.jpg?v=1691141656',
        prod_image2: 'https://images-cdn.ubuy.co.in/64f94494e88aa61af417720c-apple-iphone-14-pro-max-128gb-gold.jpg',
        prod_image3: 'https://www.nehruplacedealers.com/wp-content/uploads/2022/10/iPhone-14-Pro-Max-Gold-MQ9R3HN-Price-in-Nehru-Place-Delhi-Apple-Reseller.jpg',
    },
    {
        prod_name: 'iPhone 15',
        prod_rtng: '5/5',
        prod_price: '55999',
        prod_image1: 'https://iplanet.one/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1_alt__en-IN.jpg?v=1695427948&width=1445',
        prod_image2: 'https://darlingretail.com/cdn/shop/files/iPhone_15_Plus_iPhone_15_Pink_Combo_Screen__WWEN_9f07d3cb-58be-4dd1-bfb0-72401103a66c_800x.jpg?v=1695104012',
        prod_image3: 'https://apple-region.com/upload/iblock/3e7/1u3tgt1osyqgmyie4teo5wbrmhi4mpt7.jpg',
    },
    {
        prod_name: 'iPhone 15 Pro',
        prod_rtng: '4/5',
        prod_price: '70999',
        prod_image1: 'https://www.maplestore.in/cdn/shop/files/iPhone_15_Pro_Natural_Titanium_PDP_Image_Position-1__en-IN_7cb2a9f7-714e-46ad-a82e-2fce9111d3a8.jpg?v=1701826343&width=1445',
        prod_image2: 'https://www.jiomart.com/images/product/original/493839341/apple-iphone-15-pro-128-gb-natural-titanium-digital-o493839341-p604576359-1-202309141707.jpeg?im=Resize=(420,420)',
        prod_image3: 'https://tienda.bemovil.es/32931-medium_default/smartphone-apple-iphone-15-pro-256gb-titanio-natur.jpg',
    },
    {
        prod_name: 'iPhone 15 Pro Max',
        prod_rtng: '3.9/5',
        prod_price: '72999',
        prod_image1: 'https://inspireonline.in/cdn/shop/files/iPhone_15_Pro_Max_Black_Titanium_PDP_Image_Position-1__en-IN.jpg?v=1694758879&width=1920',
        prod_image2: 'https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Black_Titanium_PDP_Image_Position-2__en-IN_90bd341c-183f-44f6-aaf4-20c28a4da333.jpg?v=1694759409&width=823',
        prod_image3: 'https://d2xamzlzrdbdbn.cloudfront.net/products/454185bb-3fcb-4106-a532-338aea608e6124070806.jpg',
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