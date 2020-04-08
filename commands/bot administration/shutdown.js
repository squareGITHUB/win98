const { Discord } = require("discord.js");
function createprompt(icon, title, content) {
  prompt = "http://atom.smasher.org/error/98.png.php?icon=" + icon + "&style=98&title=" + title + "&url=&text=" + content
  return prompt
}

module.exports = {
  config: {
    name: "shutdown",
    aliases: ["sd", "shutdown"],
    usage: "win98 shutdown",
    description: "shuts prompt down",
    accessability: "bot administrators"
  },
  run: async (client, message, args) => {
    if (message.author.id != "372078453236957185") {
      if (message.author.id != "365274392680333329") {
        if (message.author.id != "697050554383335484") {
          return message.channel.send({
            files: [{
              attachment: createprompt("keys", "Error", "Insufficient+permissions."),
              name: "Permissions failure.png"
            }]
          })
        }
      }
    }
    try {
      await message.channel.send({
        files: [{
          attachment: createprompt("skull3", "Shutdown", "Windows+98+is+shutting+down..."),
          name: "Shutdown.png"
        }]
      })
      process.exit()
    } catch (e) {
      console.log(e.stack)
    }
  }
}
