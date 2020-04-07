const prefix = "win98 "

module.exports = async (client, message) => {
    let args = message.content.slice(prefix.length).trim().split(/ +/g)
    let cmd = args.shift().toLowerCase() 

    if(!message.content.startsWith(prefix)) return;
    let commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
    if(commandfile) commandfile.run(client,message,args)
    console.log(`${message.author.tag} (${message.author.id}) ran the command ${cmd}`)
}