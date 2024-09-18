const express = require('express');
const cors = require("cors");
require('dotenv').config();
const connectdb= require("./config/db");
const router= require("./routes")

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", router);

const port= 8080;

connectdb().then(()=>{
    app.listen(port, ()=>{
        console.log("connected to db");
        console.log(`sever is running at port ${port}`);
        
    })
    
    
})


