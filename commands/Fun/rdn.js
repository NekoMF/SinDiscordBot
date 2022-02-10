const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'rdn',
    category: 'fun',
    
    description: "this is a mara command!",
    execute(message){
        message.channel.send('https://media.discordapp.net/attachments/293786419120308225/938855769275793488/Rdn.PNG?width=399&height=473');
    }
}