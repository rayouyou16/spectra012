const Discord = require('discord.js')
const bot = new Discord.Client()

ot.on("message", (message) => {
    if(message.content === "!Husbando") {
      message.channel.send("Aiko est mon Husbando <3");
    }
  });

bot.on('ready', function() {
    bot.user.setGame("créé des commandes");
    Console.log('Connecté')
});

bot.login('NDAwMzc1MjQ0MDg4NTQxMTg0.DTauJg.oD8JrcUMs-yrhfJ0NNHv2DWTJDk')
