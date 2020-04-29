const prefix = "win98 "
const fs = require('fs')
const logs = 'logs.txt'

module.exports = async (client, message) => {
    let args = message.content.slice(prefix.length).trim().split(/ +/g)
    let cmd = args.shift().toLowerCase()

    if (!message.content.startsWith(prefix)) return;
    let commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
    if (commandfile) commandfile.run(client, message, args)
    console.log(`${message.author.tag} (${message.author.id}) ran the command ${cmd}`)
    // text file logging
    if (!fs.existsSync(logs)) return
    fs.writeFileSync('logs.txt', '[' +
        message.createdAt + '] ' + message.author.tag + '(' + message.author.id + ')' + ' ran the command ' + cmd + '\n' + fs.readFileSync('logs.txt', 'utf-8'))
}