const Discord = require("discord.js");
function createprompt(icon, title, content) {
    prompt = "http://atom.smasher.org/error/98.png.php?icon=" + icon + "&style=98&title=" + title + "&url=&text=" + content
    return prompt
}

module.exports = {
    config: {
        name: "ban",
        aliases: [],
        usage: "win98 ban [member] (reason)",
        description: "bans a user from the server",
        noalias: "no aliases",
        accessability: "server moderators (ban permissions)"
    },
    run: async (client, message, args) => {

        if (!message.member.hasPermission("BAN_MEMBERS"))
            return message.channel.send({
                files: [{
                    attachment: createprompt("keys", "Error", "Insufficient+permissions."),
                    name: "Permissions failure.png"
                }]
            })

        if (!message.guild.me.hasPermission("BAN_MEMBERS"))
            return message.channel.send({
                files: [{
                    attachment: createprompt("keys", "Error", "Windows+98+does+not+have+that+permission."),
                    name: "Permissions failure 2.png"
                }]
            })

        let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        let reason = args.splice(1).join(' ')

        if (!user)
            return message.channel.send({
                files: [{
                    attachment: createprompt("Error", "Error", "No+user+has+been+mentioned."),
                    name: "User mention failure.png"
                }]
            })


        if (user.hasPermission("BAN_MEMBERS"))
            return message.channel.send({
                files: [{
                    attachment: createprompt("Error", "Error", "This+user+has+the+'ban+permissions'+permission+and+thus+cannot+be+banned."),
                    name: "User mention failure.png"
                }]
            })

        try {
            await user.send({
                files: [{
                    attachment: createprompt("mail_deleted", "Banned", "You+have+been+banned+from+" + message.guild.name + "%0D%0AReason%3A+" + reason + "%0D%0ABanned+by%3A+" + message.author.username),
                    name: "Banned.png"
                }]
            })

        } catch (e) {
            console.log(e.stack);
            return message.channel.send({
                files: [{
                    attachment: createprompt("Error", "Error", "Could+not+send+the+DM."),
                    name: "DM failure.png"
                }]
            })
        }

        message.guild.member(user).ban(reason);

        message.channel.send({
            files: [{
                attachment: createprompt("hammer", "Success", user.displayName + "+has+been+banned+by+" + message.author.username),
                name: "Ban success.png"
            }]

        })
    }
}