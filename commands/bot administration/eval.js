const { Discord } = require("discord.js");

function createprompt(icon, title, content) {
    prompt = "http://atom.smasher.org/error/98.png.php?icon=" + icon + "&style=98&title=" + title + "&url=&text=" + content
    return prompt
}

module.exports = {
    config: {
        name: "eval",
        aliases: ["e", "debug", "evaluate"],
        usage: "win98 eval [code]",
        description: "evaluates code",
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
        }

        if (!args[0]) {
            return message.channel.send({
                files: [{
                    attachment: createprompt("disk_red_lbl", "Error", "Insufficient+arguments+added+to+command."),
                    name: "Arguments failure.png"
                }]
            })
        }

        try {
            let code = args.join(" ");
            let evaled = eval(code);
            let clean = await (client, evaled);

            message.channel.send(`\`\`\`js\n${clean}\n\`\`\``);

        } catch (e) {
            message.channel.send(`\`\`\`xl\n${await (client, e)}\n\`\`\``);
        }
    }
}
