const { Discord } = require("discord.js");
const fs = require('fs')
let logs = 'logs.txt'

function createprompt(icon, title, content) {
    prompt = "http://atom.smasher.org/error/98.png.php?icon=" + icon + "&style=98&title=" + title + "&url=&text=" + content
    return prompt
}

module.exports = {
    config: {
        name: "logfile",
        aliases: ["logs"],
        usage: "win98 logfile",
        description: "fetches the log file",
        accessability: "bot administrators"
    },
    run: async (client, message, args) => {
        if (message.author.id != "372078453236957185") {
            if (message.author.id != "365274392680333329") {
                if (message.author.id != "147765181903011840") {
                    return message.channel.send({
                        files: [{
                            attachment: createprompt("keys", "Error", "Insufficient+permissions."),
                            name: "Permissions failure.png"
                        }]
                    })
                }
            }
            if (!fs.existsSync(logs)) return message.channel.send("Couldn't send logs. Does 'logs.txt' exist?")
            message.channel.send("Fetching logs...").then((message) => {
                message.edit("Done, check your DMS.")
            })
            message.author.send({
                files: [{
                    attachment: logs
                }]
            })
        }
    }
}