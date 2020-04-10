const Discord = require("discord.js")
function createprompt(icon, title, content) {
    prompt = "http://atom.smasher.org/error/98.png.php?icon=" + icon + "&style=98&title=" + title + "&url=&text=" + content
    return prompt
}
module.exports = {
    config: {
        name: "ping",
        aliases: ["latency"],
        usage: "win98 ping",
        description: "shows api latency",
        noalias: "no aliases",
        accessability: "everyone"
    },
    run: (client, message, args) => {
        message.channel.send({
            files: [{
                attachment: createprompt("mycomputer2", "Ping", Math.round(client.ws.ping) + "ms"),
                name: "Ping.png"
            }]
        })
    }
}