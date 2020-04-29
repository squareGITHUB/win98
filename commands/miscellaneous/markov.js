const Discord = require("discord.js")

module.exports = {
    config: {
        name: "markov",
        aliases: [],
        usage: "win98 markov [text]",
        description: "generates a markov chain",
        noalias: "no aliases",
        accessability: "everyone"
    },
    run: (client, message, args) => {

        let text = args.splice(' ')
        let markovChain = {};
        for (let i = 0; i < text.length; i++) {
            let word = text[i].replace(/[\W_]/, "")
            if (!markovChain[word]) {
                markovChain[word] = []
            }
            if (text[i + 1]) {
                markovChain[word].push(text[i + 1].replace(/[\W_]/, ""));
            }
        }

        const words = Object.keys(markovChain)
        let word = words[Math.floor(Math.random() * words.length)]
        let result = ''
        for (let i = 0; i < words.length; i++) {
            result += word + ' ';
            newWord = markovChain[word][Math.floor(Math.random() * markovChain[word].length)]
            word = newWord;
            if (!word || !markovChain.hasOwnProperty(word)) word = words[Math.floor(Math.random() * words.length)]
        }
        message.delete();
        let embed = new Discord.MessageEmbed()
        .setTitle("Markov Chain")
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setDescription(result)
        message.channel.send(embed)
    }
}
