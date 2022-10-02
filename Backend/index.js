const express = require ('express');
const app = express();
require ("dotenv").config();
const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log("Server started at port " + PORT)
})
const userRouter = require('./routes/user.route')
app.use("/users", userRouter)
