const Discord = require("discord.js")
function createprompt(icon, title, content) {
    prompt = "http://atom.smasher.org/error/98.png.php?icon=" + icon + "&style=98&title=" + title + "&url=&text=" + content
    return prompt
}

module.exports = {
    config: {
        name: "ship",
        aliases: [],
        usage: "win98 ship [person1] [person2]",
        description: "ships two users",
        noalias: "no aliases",
        accessability: "everyone"
    },
    run: (client, message, args) => {

        const shipResponses = [
            "Not happening",
            "No",
            "There's always the possibility",
            "Maybe",
            "Yes",
            "Nah",
            "Definitely, 100%",
            "Perhaps"
        ]

        let person1 = args[0];
        let person2 = args[1];
        if (person1 === undefined || person2 === undefined) {
            return message.channel.send({
                files: [{
                    attachment: createprompt("disk_red_lbl", "Error", "Insufficient+arguments+added+to+command."),
                    name: "Arguments failure.png"
                }]
            })
        }

        message.channel.send({
            files: [{
                attachment: createprompt("heart", "Ship", person1 + "+x+" + person2 + "%0D%0AResponse:+" + shipResponses[Math.floor(Math.random() * shipResponses.length)]),
                name: "Ship.png"
            }]
        })
    }
}
