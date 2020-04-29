const { discord } = require("discord.js")
const fs = require('fs')
const logs = 'logs.txt'

module.exports = client => {
    console.log(`[READY] successfully started.`)
    client.user.setActivity("debugging", { type: "STREAMING", url: "https://www.youtube.com/watch?v=tajDxBaPBBM" })
    if (!fs.existsSync(logs)) return console.warn(`[WARNING] logs.txt doesn't exist!`)
    fs.writeFileSync('logs.txt', '[win98] ' + 'Start new session @ ' + new Date() + '\n' + fs.readFileSync('logs.txt', 'utf-8'))
}