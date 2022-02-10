const profileModel = require ("../../models/profileSchema");
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'sneaky',
    category: 'fun',
    description: "this is a sneaky command!",
    async execute(message, args, client, Discord, profileData){


        

        message.reply({content: 'https://tenor.com/view/shrek-shrek-my-beloved-gif-20740483', ephemeral:true});
        
    }
}