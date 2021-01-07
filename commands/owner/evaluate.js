const discord = require('discord.js');
const beautify = require("beautify")

module.exports = {
        name: "evaluate",
        aliases: ["execute", "eval"],
        category: "Owner",
        description: "Evaluates JavaScript",
        usage: "$evaluate <code>",
    run: async (bot, message, args) => {

        if(message.author.id !== '615719863335518237'){
            return message.channel.send('Only Pepsi can run this command.')
        }
    
        if(!args[0]){
            return message.channel.send('You need to provide something to evaluate.')
        }

        if (args.join(" ").toLowerCase().includes("token")) {
            return;
        }
    
        try {
            const toEval = args.join(" ")
            const evaluated = eval(toEval)
    
    
            let embed = new discord.MessageEmbed()
                .setColor("#000000")
                .setAuthor('Zoid | Evaluate', bot.user.avatarURL())
                .setTitle("Evaluation")
                .addField("Input:", `\`\`\`js\n${beautify(args.join(" "), { format: "js"})}\n\`\`\``)
                .addField("Output:", `\`\`\`js\n${evaluated}\n\`\`\``)
                .addField("Type:", typeof(evaluated));
    
            message.channel.send(embed);
        } catch (e) {
    
            let embed = new discord.MessageEmbed()
                .setAuthor('zOID | Evaluate', bot.user.avatarURL())
                .setColor("RED")
                .setTitle("Evaluation Error")
                .setDescription(e)
    
            message.channel.send(embed);
    }
    }

};

