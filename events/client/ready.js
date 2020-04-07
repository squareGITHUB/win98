const { discord } = require("discord.js")

module.exports = client => {
    console.log(`[READY] successfully started.`)
    client.user.setActivity("debugging", {type: "STREAMING", url:"https://www.youtube.com/watch?v=tajDxBaPBBM"})
}