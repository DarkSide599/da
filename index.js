const botconfig = require("./botconfig.json")
const Discord = require("discord.js")
const prefix = "!"
var nazwabota = "PomocnikV1"

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async() => {
    console.log(`${nazwabota}jest online`)
});

bot.login(botconfig.token)