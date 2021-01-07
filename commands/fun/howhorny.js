const discord = require('discord.js');

module.exports = {
        name: "howgay",
        aliases: ["hornymeter"],
        category: "Fun",
        description: "Shows how horny someone is.",
        usage: "$howhorny <mention>",
    run: async (bot, message, args) => {

        let target = message.guild.member(message.mentions.users.first());
        function between(min, max) {  
            return Math.floor(
              Math.random() * (max - min) + min
            )
          }
    
        if(!target) message.channel.send(`You are ` + between(1, 100) + '% horny :flushed: ')
        else { message.channel.send(`<@${target.id}>` + ' is ' + between(0, 100) + '% horny :flushed: '); }
    }

};
