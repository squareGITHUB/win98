const Discord = require("discord.js")
function createprompt(icon, title, content) {
    prompt = "http://atom.smasher.org/error/98.png.php?icon=" + icon + "&style=98&title=" + title + "&url=&text=" + content
    return prompt
}

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
        return message.channel.send({
            files: [{
                attachment: createprompt("mail", "Markov+Chain", result),
                name: "Markov.png"
            }]
        })
    }
}
