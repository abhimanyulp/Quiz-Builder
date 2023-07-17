const express = require("express")
const quizRouter = express.Router()
const { quizModel } = require("../models/quiz.model")


//Get Quiz
quizRouter.get("/", async (req, res) => {

    try {
        const data = await quizModel.find()
        res.status(200).send({ "msg": "Data Retrieved!", data })

    } catch (error) {
        res.status(400).send({ "msg": error.message })
    }

})

//Get Perticular Quiz
quizRouter.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const data = await quizModel.findById({_id:id})
        res.status(200).send({ "msg": "Data Retrieved!", data })

    } catch (error) {
        res.status(400).send({ "msg": error.message })
    }

})

// Create Quiz 
quizRouter.post("/", async (req, res) => {

    const { creator, title, description, questions } = req.body

    try {

        const data = new quizModel({ creator, title, description, questions })
        await data.save()
        res.status(200).send({ "msg": "Quiz Saved!" })


    } catch (error) {
        res.status(400).send({ "msg": error.message })
    }

})

module.exports = { quizRouter }