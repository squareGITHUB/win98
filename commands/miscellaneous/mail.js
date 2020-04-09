const Discord = require("discord.js")
function createprompt(icon, title, content) {
    prompt = "http://atom.smasher.org/error/98.png.php?icon=" + icon + "&style=98&title=" + title + "&url=&text=" + content
    return prompt
}
module.exports = {
    config: {
        name: "say",
        aliases: ["mail", "email"],
        usage: "win98 mail [user mention] [message]",
        description: "sends a message to a user",
        noalias: "no aliases",
        accessability: "everyone"
    },
    run: (client, message, args) => {
        let bottomtext = args.splice(1).join(' ')
        let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
        if (!user)
        return message.channel.send({
            files: [{
                attachment: createprompt("Error", "Error", "No+user+has+been+mentioned."),
                name: "User mention failure.png"
            }]
        })
        try{
            user.send({
                files: [{
                    attachment: createprompt("mail", "Mail from " + message.author.username, bottomtext),
                    name: "Mail.png"
                }]
            })
        } catch (e) {
            console.log(e.stack);
            return message.channel.send({
                files: [{
                    attachment: createprompt("Error", "Error", "Could+not+send+the+mail."),
                    name: "Mail failure.png"
                }]
            })
        }
        message.delete()
    }
}