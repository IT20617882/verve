const router = require("express").Router();
const multer = require('multer');
const path = require('path');
const alert = require('alert');
const Mongoose = require('mongoose');
let Product = require("../models/product");

//image upload
const storage = multer.diskStorage ({
    destination : (req, file, cb) => {
        cb(null, 'uploads');
    },

    filename : (req,file,cb) => {
        cb(null, Date.now() + file.originalname)
    }
    
});

const upload = multer({
    storage:storage,
    
}).single('image')


router.post('/add', upload, (req,res)=>{

    const newProduct = new Product({

        productID: req.body.productID,
        productName: req.body.productName,
        category: req.body.category,
        date: req.body.date,
        price: req.body.price,
        quantity: req.body.quantity,
        image: req.file.filename,
        unit: req.body.unit,
        
    })

    newProduct.save().then(()=>{
        alert('Product added successfully');
        res.redirect('http://localhost:3000/add');

    }).catch((err)=>{
        alert('Product already exists');
        res.redirect('http://localhost:3000/add');
        console.log(err);
    })

})



router.route("/view").get((req,res)=>{
    Product.find().then((products)=>{
        res.json(products)
    }).catch((err)=>{
        console.log(err)
    })
})



router.route("/update/:ID").put(async(req,res)=>{
    let productId = req.body.ID;
    const {productName} = req.body;
    const {category} = req.body;
    const {price} = req.body;
    const {quantity} = req.body;

    const Update = {
        productName,
        category,
        price,
        quantity,
    }

    const update = await Product.findByIdAndUpdate(productId, Update).then(()=>{
        res.status(200).send({status: "Price updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating price", error: err.message});
    })
})



router.route("/delete/:id").delete(async(req,res)=>{
    const id = req.params.id;

    await Product.findByIdAndRemove(id).exec().then(()=>{
        res.status(200).send({status: "Product deleted"})
        
    }).catch((err)=>{
        res.status(500).send({status: "Error with deleting product", error: err.message});
    })
})


module.exports = router;
    


