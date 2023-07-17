const mongoose = require("mongoose")

const leaderboardSchema = mongoose.Schema({
    email: String,
    score: Number,
},{
    versionKey : false
})

const leaderboardModel = mongoose.model("leaderboard", leaderboardSchema)

module.exports = { leaderboardModel }