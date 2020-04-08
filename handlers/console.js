module.exports = (client) => {
    let prom = process.openStdin()
    prom.addListener("data", res => {
        let x = res.toString().trim().split(/ +/g)
        let args = x[0]
        let z = res.toString().trim().split(/ +/g).slice(1)
        client.channels.cache.get(args).send(z.join(" "), {
            files: ["./prompts/remote access.png"]

        })
        console.log(`Successfully sent '${z}' to ${args}`);
    })
}