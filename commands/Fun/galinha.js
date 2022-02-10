const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'galinha',
    category: 'fun',
    aliases: ["federal"],
    description: "this is a galinha command!",
    execute(message){
        message.channel.send('is a mf indeed');
    }
}