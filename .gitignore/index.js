const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on("message", (message) => {
    if(message.content === ".waifuNara") {
      message.channel.send("Nya :3");
    }
  });

bot.on('ready', function() {
    bot.user.setGame("créé des commandes");
    Console.log('Connecté')
});

bot.login('NDAwMDI1MDgzMjgxNjcwMTQ1.DTaKmg.Aa4SRcwF2dHT13rBCC8DCtceQv8')
