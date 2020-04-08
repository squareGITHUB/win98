const Discord = require("discord.js")
const YTDL = require('ytdl-core')
function Play(connection,message)
{
    var server = message.guild.id
    server.dispatcher = connection.playStream(YTDL("https://www.youtube.com/watch?v=XvoVObL4bYY", {filter: "audioonly"}))
}

module.exports = {
config: {
    name: "leave",
    aliases: ["disconnect"],
    usage: "win98 leave",
    description: "leaves a voice channel",
    noalias: "no aliases",
    accessability: "everyone"
},
run: async (client, message, args) => {


    if (!message.guild)
	return;

    if (!message.guild.me.voiceChannel) {
	return message.channel.send({
        files: ["./prompts/leave failure.png"]
    })}
    async function sound() {
    try{ 
        message.member.voiceChannel.join()
          .then(connection => {
             message.channel.send({
                 files: ["./prompts/leave success.png"]
             })
            Play(connection, message)
         })
     } catch (e) {
           console.log(e)
        }
    }
    await sound()
    setTimeout(() => { 
    message.guild.voiceConnection.disconnect()
    }, 5500)
}
}