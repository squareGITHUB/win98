const { Discord } = require("discord.js")
function createprompt(icon, title, content) {
  prompt = "http://atom.smasher.org/error/98.png.php?icon=" + icon + "&style=98&title=" + title + "&url=&text=" + content
  return prompt
}

module.exports = {
  config: {
    name: "reload",
    aliases: ["r", "reload"],
    usage: "win98 reload [command name]",
    description: "reloads command provided",
    noalias: "no aliases",
    accessability: "bot administrators"
  },
  run: (client, message, args) => {

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
    if (!args || args.length < 1) return message.channel.send({
      files: [{
        attachment: createprompt("disk_red_lbl", "Error", "Insufficient+arguments+added+to+command."),
        name: "Arguments failure.png"
      }]
    })

    let commandName = args[0].toLowerCase()

    try {
      delete require.cache[require.resolve(`./${commandName}.js`)]

      client.commands.delete(commandName)
      const pull = require(`./${commandName}.js`)
      client.commands.set(commandName, pull)

    } catch (e) {
      console.log(e.stack)
      return message.channel.send({
        files: [{
          attachment: createprompt("Error", "Error", "Failed+to+reload+" + args[0]),
          name: "Reload failure.png"
        }]
      })
    }

    message.channel.send({
      files: [{
        attachment: createprompt("bubble_i", "Success", "Successfully+reloaded+" + args[0]),
        name: "Reload success.png"
      }]
    })
  }
}