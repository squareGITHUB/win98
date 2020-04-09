const Discord = require("discord.js")
function createprompt(icon, title, content) {
    prompt = "http://atom.smasher.org/error/98.png.php?icon=" + icon + "&style=98&title=" + title + "&url=&text=" + content
    return prompt
}
module.exports = {
    config: {
        name: "say",
        aliases: ["echo", "talk"],
        usage: "win98 say [argument]",
        description: "sends a message in the channel",
        noalias: "no aliases",
        accessability: "everyone"
    },
    run: (client, message, args) => {
        let bottomtext = args.join(' ')
        message.delete()
        message.channel.send({
            files: [{
                attachment: createprompt("mail", message.author.username, bottomtext),
                name: "Say.png"
            }]
        })
    }
}