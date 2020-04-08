function createprompt(icon, title, content) {
    prompt = "http://atom.smasher.org/error/98.png.php?icon=" + icon + "&style=98&title=" + title + "&url=&text=" + content
    return prompt
}

module.exports = (client) => {
    let prom = process.openStdin()
    prom.addListener("data", res => {
        let x = res.toString().trim().split(/ +/g)
        let args = x[0]
        let z = res.toString().trim().split(/ +/g).slice(1)
        client.channels.cache.get(args).send({
            files: [{
                attachment: createprompt("ups", "Remote Access", z.replace(",", " ")),
                name: "Remote access.png"
            }]
        })
        console.log(`Successfully sent '${z.replace(",", " ")}' to ${args}`);
    })
}
