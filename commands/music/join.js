const Discord = require("discord.js")
const YTDL = require('ytdl-core')
function Play(connection, message) {
    var server = message.guild.id
    server.dispatcher = connection.playStream(YTDL("https://www.youtube.com/watch?v=XvoVObL4bYY", { filter: "audioonly" }))
}

module.exports = {
    config: {
        name: "join",
        aliases: ["connect"],
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
                files: ["./prompts/join failure.png"]
            })
        }

        if (message.guild.me.voice.channel) {
            return message.channel.send({
                files: ["./prompts/join failure 2.png"]
            })
        }

        message.member.voice.channel.join()
            .then(connection => {
                message.channel.send({
                    files: ["./prompts/join success.png"]
                })
                Play(connection, message)
            })
    }
}