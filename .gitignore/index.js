const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on("message", (message) => {
    if(message.content === ".waifu Nara") {
      message.channel.send("Nya");
    }
  });

  bot.on("message", (message) => {
    if(message.content === "") {
      message.channel.send("");
    }
  });

  bot.on("message", (message) => {
    if(message.content === "") {
      message.channel.send("");
    }
  });

bot.on('ready', function() {
    bot.user.setGame("créé des commandes");
    Console.log('Connecté')
});

bot.login('NDAwMDI1MDgzMjgxNjcwMTQ1.DTaKmg.Aa4SRcwF2dHT13rBCC8DCtceQv8')
