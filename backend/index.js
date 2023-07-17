const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connection = require("./db")
const { userRouter } = require("./routes/user.route")
const { quizRouter } = require("./routes/quiz.route")
const { leaderboardRouter } = require("./routes/leaderboard.route")

const app = express()
app.use(express.json())
app.use(cors())

//Home Route
app.get("/", (req,res) => {
    res.status(200).send("Home Page")
})

//Routes
app.use("/user", userRouter)
app.use("/quiz", quizRouter)
app.use("/leaderboard", leaderboardRouter)

//Server running
const Port = process.env.Port || 8000
app.listen(Port, async () => {
    try {
        await connection;
        console.log(`Connected to MongoDB @ Port ${Port}`)
    } catch (error) {
        console.log("Not connected to MongoDB")
        console.log(error)
    }
})