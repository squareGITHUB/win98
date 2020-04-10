const Discord = require("discord.js")
function createprompt(icon, title, content) {
  prompt = "http://atom.smasher.org/error/98.png.php?icon=" + icon + "&style=98&title=" + title + "&url=&text=" + content
  return prompt
}

module.exports = {
  config: {
    name: "uptime",
    aliases: [],
    usage: "win98 uptime",
    description: "shows bot uptime",
    noalias: "no aliases",
    accessability: "everyone"
  },
  run: (client, message, args) => {

    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;

    message.channel.send({
      files: [{
        attachment: createprompt("mycomputer2", "Uptime", `${days}d ${hours}h ${minutes}m ${seconds}s`),
        name: "Uptime.png"
      }]
    })
  }
}