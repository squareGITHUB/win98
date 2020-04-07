const { Client, Collection} = require("discord.js");
const client = new Client();
const config = require("./config.json");

["commands", "aliases"].forEach(x => client[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(client))

client.login(config.token);