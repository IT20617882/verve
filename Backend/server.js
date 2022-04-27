const express=require("express");
const dotenv=require("dotenv");
const notes = require("./data/notes");
const connectDB = require("./config/db");
const userRoutes =require('./routes/userRoutes');
const orderRoutes = require("./routes/orderRoutes");
const user = require("./routes/user");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");


const app  =express();
dotenv.config();
connectDB();
app.use(express.json());



app.use('/api/users',userRoutes);
app.use('/api/orders',orderRoutes);
//app.use('/user', user);

//call the error middleware
app.use(notFound);
app.use(errorHandler);


const PORT=process.env.PORT  || 5000;
app.listen(5000,console.log(`server started on port ${PORT}`));