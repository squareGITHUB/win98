const Discord = require("discord.js")
function createprompt(icon, title, content) {
    prompt = "http://atom.smasher.org/error/98.png.php?icon=" + icon + "&style=98&title=" + title + "&url=&text=" + content
    return prompt
}

module.exports = {
    config: {
        name: "help",
        aliases: ["h", "help", "commands"],
        usage: "win98 help [optional: command name]",
        description: "provides information for commands listed",
        noalias: "no aliases",
        accessability: "everyone"
    },
    run: (client, message, args) => {

        if (args[0]) {
            let commandName = args[0].toLowerCase();
            let { commands } = message.client;
            if (client.commands.has(commandName)) {
                let command = commands.get(commandName);
                var embed1 = new Discord.MessageEmbed()
                    .setAuthor("Windows 98", message.guild.iconURL())
                    .setThumbnail(client.user.displayAvatarURL())
                    .setDescription(`Prefix = win98\n\n**command:** ${command.config.name}\n**usage:** ${command.config.usage || "no usage"}\n**description:** ${command.config.description || "no description"}\n**aliases:** ${command.config.noalias || command.config.aliases}\n **accessible by:** ${command.config.accessability}`)
                message.channel.send(embed1)
            }
        }

        if (!args[0]) {
            message.delete();
            let embed3 = new Discord.MessageEmbed()
                .setAuthor("Windows 98", message.guild.iconURL)
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                .setDescription("available commands (prefix = win98):\n`help`, `reload`, `shutdown`, `devs`, `join`, `leave`, `say`, `play`, `ship`, `ping`")
                .setFooter("win98", client.user.displayAvatarURL())
            message.channel.send({
                files: [{
                    attachment: createprompt("bubble_i", "Help", "Check+your+DMs+for+a+list+of+the+commands.%0D%0A%28prefix+%3D+win98%29"),
                    name: "Help.png"
                }]
            }).then(m => m.delete(10000))
            message.author.send(embed3)
        }
    }
}
