const express = require("express")
const userRouter = express.Router()
const { userModel } = require("../models/user.model")


// Register 
userRouter.post("/", async (req,res) => {

    const { username, email } = req.body

    try {

        const user = await userModel.findOne({ username })

        if(user){
            res.status(200).send({"msg":"User Already Exist!"})
        }else{
            const data = new userModel({username, email})
            await data.save()
            res.status(200).send({"msg":"User Registered!"})
        }
        
    } catch (error) {
        res.status(400).send({ "msg": error.message })
    }

})

module.exports = { userRouter }