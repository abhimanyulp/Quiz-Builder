const express = require("express")
const leaderboardRouter = express.Router()
const { leaderboardModel } = require("../models/leaderboard.model")


//Get Leaderboard
leaderboardRouter.get("/", async (req, res) => {

    try {
        const data = await leaderboardModel.find()
        res.status(200).send({ "msg": "Data Retrieved!", data })

    } catch (error) {
        res.status(400).send({ "msg": error.message })
    }

})


// Post Score 
leaderboardRouter.post("/", async (req, res) => {

    const { email, score } = req.body

    try {

        const data = new leaderboardModel({  email, score })
        await data.save()
        res.status(200).send({ "msg": "Data Saved!" })


    } catch (error) {
        res.status(400).send({ "msg": error.message })
    }

})

module.exports = { leaderboardRouter }