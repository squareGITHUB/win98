const Discord = require("discord.js")
function createprompt(icon, title, content) {
    prompt = "http://atom.smasher.org/error/98.png.php?icon="+ icon +"&style=98&title=" + title + "&url=&text=" + content  + "&.png"
    return prompt
}
module.exports = {
config: {
    name: "devs",
    aliases: ["developers"],
    usage: "win98 devs",
    description: "provides information about the developers",
    noalias: "no aliases",
    accessability: "everyone"
},
run: (client, message, args) => {
    message.channel.send({
        files: [createprompt("hwinfo", "Developers", "The+developers+of+Win98+are%3A%0D%0Asquare%231255%2C+speed%231255+and+fionn%234512.%0D%0AThe+Windows+98+prompts+are+created+via+atomsmasher.")]
    })
    }
}
