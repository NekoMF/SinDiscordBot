const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'status',
    category: 'Moderation',
    description: "status command",
    execute(message, args, client, Discord, profileData, botData){
       message.channel.send('worked');
       
    }
}