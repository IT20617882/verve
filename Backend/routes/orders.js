const router = require("express").Router();
let Order = require("../models/order");


router.post('/add', (req,res)=>{

    const newOrder = new Order({

        address: req.body.address,
        contactNO: req.body.contactNO,
        quantity: req.body.quantity,
        
    })

    newOrder.save().then(()=>{
        console.log("Order added");
        res.redirect('http://localhost:3000/');

    }).catch((err)=>{
        console.log(err);
    })

})



router.route("/").get((req,res)=>{
    Order.find().then((orders)=>{
        res.json(orders)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:ID").put(async(req,res)=>{
    let orderId = req.body.ID;
    const {address} = req.body;
    const {contactNO} = req.body;
    const {quantity} = req.body;

    const Update = {
        address,
        contactNO,
        quantity,
    }

    const update = await Order.findByIdAndUpdate(orderId, Update).then(()=>{
        res.status(200).send({status: "Order updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating order", error: err.message});
    })
})



router.route("/delete/:id").delete(async(req,res)=>{
    var orderId = req.params.id;

    await Order.findByIdAndRemove(orderId).exec().then(()=>{
        res.status(200).send({status: "Order deleted"})
        
    }).catch((err)=>{
        res.status(500).send({status: "Error with deleting order", error: err.message});
    })
})






module.exports = router;