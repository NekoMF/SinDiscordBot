const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'mara',
    category: 'fun',
    aliases: ["marazul"],
    description: "this is a mara command!",
    execute(message){
        message.channel.send('https://media.discordapp.net/attachments/824608753407361075/923671666209460284/SPOILER_4b9ab1ffea80207a6c3afbc380c0f7d5.png?width=631&height=473');
    }
}