const Discord = require("discord.js")
const YTDL = require('ytdl-core')

function Play(connection, message) {
    var server = message.guild.id
    server.dispatcher = connection.play(YTDL("https://www.youtube.com/watch?v=XvoVObL4bYY", { filter: "audioonly" }))
}

function createprompt(icon, title, content) {
    prompt = "http://atom.smasher.org/error/98.png.php?icon=" + icon + "&style=98&title=" + title + "&url=&text=" + content
    return prompt
}

module.exports = {
    config: {
        name: "join",
        aliases: ["connect", "summon"],
        usage: "win98 join",
        description: "joins a voice channel",
        noalias: "no aliases",
        accessability: "everyone"
    },
    run: (client, message, args) => {

        if (!message.guild)
            return;

        if (!message.member.voice.channel) {
            return message.channel.send({
                files: [{
                    attachment: createprompt("Error", "Error", "You+are+not+in+a+voice+channel."),
                    name: "Join failure.png"
                }]
            })
        }

        if (message.guild.me.voice.channel) {
            return message.channel.send({
                files: [{
                    attachment: createprompt("Error", "Error", "Windows+98+is+already+in+a+voice+chat."),
                    name: "Join failure 2.png"
                }]
            })
        }

        message.member.voice.channel.join()
            .then(connection => {
                message.channel.send({
                    files: [{
                        attachment: createprompt("hub", "Success", "Joined+the+voice+channel."),
                        name: "Join success.png"
                    }]
                })
                Play(connection, message)
            })
    }
}
