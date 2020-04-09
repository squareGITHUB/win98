const Discord = require("discord.js");
const ytdl = require('ytdl-core');
var servers = {}

function Play(connection, message) {
    var server = servers[message.guild.id];
    server.dispatcher = connection.play(ytdl(server.queue[0], { filter: "audioonly", highWaterMark: 1 << 25 }))

    server.queue.shift();
    server.dispatcher.on("end", function () {
        if (server.queue[0]) {
            Play(connection, args[1]);
        }
    })
}

function createprompt(icon, title, content) {
    prompt = "http://atom.smasher.org/error/98.png.php?icon=" + icon + "&style=98&title=" + title + "&url=&text=" + content
    return prompt
}

module.exports = {
    config: {
        name: "play",
        aliases: ["p"],
        usage: "win98 play [url]",
        description: "plays a song",
        noalias: "no aliases",
        accessability: "everyone"
    },
    run: async (client, message, args) => {

        if (!message.member.voice.channel) {
            return message.channel.send({
                files: [{
                    attachment: createprompt("Error", "Error", "You+are+not+in+a+voice+channel."),
                    name: "Join failure.png"
                }]
            })
        }

        if (!args[0])
            return message.channel.send({
                files: [{
                    attachment: createprompt("Error", "Error", "Please+enter+a+URL."),
                    name: "Missing URL.png"
                }]
            })

        if (!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        }

        var server = servers[message.guild.id];

        server.queue.push(args[0]);

        let validate = await ytdl.validateURL(args[0]);

        if (!validate)
            return message.channel.send({
                files: [{
                    attachment: createprompt("Error", "Error", "Invalid+URL,+try+again."),
                    name: "Invalid URL.png"
                }]
            })

        let info = await ytdl.getInfo(args[0]);


        message.member.voice.channel.join()
            .then(connection => {
                message.channel.send({
                    files: [{
                        attachment: createprompt("hub", "Success", "Now+playing+-+" + info.title + "%0D%0ARequested+by:+" + message.author.username),
                        name: "Play success.png"
                    }]
                })
                Play(connection, message);
            })
    }
}