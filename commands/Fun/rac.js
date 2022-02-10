const { MessageActionRow, MessageButton,MessageEmbed, ButtonInteraction  } = require('discord.js');

module.exports = {
    name: 'rac',
    aliases: ["racnadeo"],
    category: 'fun',
    description: "this is a rac command!",
    async execute(message, args, client, Discord, profileData){
        
        message.channel.send ('https://tenor.com/view/stardew-valley-haley-gif-23050236');
    }
}