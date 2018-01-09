const Discord = require('discord.js')
const bot = new Discord.Client()

client.on("message", (message) => {
  if(message.content === ".waifu Nara") {
    message.channel.send("Nya");
  }

bot.on('ready', function() {
    bot.user.setGame("créé des commandes");
    Console.log('Connecté')
});

bot.login('NDAwMDI1MDgzMjgxNjcwMTQ1.DTas7w.MkGgwth2VSRKjuT-zpqoV_lLwC0')
