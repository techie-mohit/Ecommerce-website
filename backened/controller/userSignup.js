const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');



async function userSignupController(req,res){
    try{
        const {email, password, name} =req.body;

        const user = await userModel.findOne({email})


        if(user){
            throw new Error ("Already user exixt");
        }

        if(!email){
            throw new Error("please provide email");
        }
        if(!password){
            throw new Error("please provide password");
        }
        if(!name){
            throw new Error("please provide name");
        }
        const hashPassword = await  bcrypt.hashSync(password);

        if(!hashPassword){
            throw new Error ("Something is wrong");
        }

        const payload= {
            ...req.body,
            password: hashPassword
        }

        const userData = new userModel(payload);
        const saveUser = await userData.save();

        res.status(201).json({
            data:saveUser,
            success: true,
            error: false,
            message: "user created successfully"
        })
    }
    catch(err){
        console.log(err.message);
        res.json({
            message:err.message || err,
            error: true,
            success: false,
        })
    }
}


module.exports = userSignupController;