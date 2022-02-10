const profileModel = require("../../models/profileSchema");
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'leaderboard',
    category: 'economy',
    aliases: ["lb"],
    description: "Displays the top 10 users of the bot (coin lb temporarily) ",
    async execute(message, args, client, Discord, profileData){
        INF = new Intl.NumberFormat('en-US')
        const sortedCollection = await profileModel.find().sort({ 'profile.stats.commonRatFound': -1 }).catch(e => console.log(e));
        //console.log(sortedCollection);
        let data = []; let i; let u=0
		data = Array.from(sortedCollection.values());


        for (let i=0; i<10; i++){
            if (data[i].userID===message.author.id)
            {
                u = 1;
                break;
            } 
        }

        if (u){
            const exampleEmbed1 = new MessageEmbed()
			.setColor('#ffffff')
			.setTitle(`**Common Rat Leaderboard**`)
			.setThumbnail(`https://cdn.discordapp.com/attachments/851901671796637716/912337251793514496/SIN_FARM.jpg`)
			.addFields(
				{ name:'\u200B', value:`
                 \`#1\` **${data[0].username}** - ${INF.format(data[0].profile.stats.commonRatFound)} :rat: \n\`#2\` **${data[1].username}** - ${INF.format(data[1].profile.stats.commonRatFound)} :rat: \n\`#3\` **${data[2].username}** - ${INF.format(data[2].profile.stats.commonRatFound)} :rat: \n\`#4\` **${data[3].username}** - ${INF.format(data[3].profile.stats.commonRatFound)} :rat: \n\`#5\` **${data[4].username}** - ${INF.format(data[4].profile.stats.commonRatFound)} :rat: \n\`#6\` **${data[5].username}** - ${INF.format(data[5].profile.stats.commonRatFound)} :rat: \n\`#7\` **${data[6].username}** - ${INF.format(data[6].profile.stats.commonRatFound)} :rat: \n\`#8\` **${data[7].username}** - ${INF.format(data[7].profile.stats.commonRatFound)} :rat: \n\`#9\` **${data[8].username}** - ${INF.format(data[8].profile.stats.commonRatFound)} :rat: \n\`#10\` **${data[9].username}** - ${INF.format(data[9].profile.stats.commonRatFound)} :rat: \n
                
                `, inline:true })

			.setTimestamp()
			.setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
			
			message.channel.send({ embeds: [exampleEmbed1] });
        }
        else{
            let saveIndex;
            for (let i=0; i<data.length; i++){
                if (data[i].userID===message.author.id){
                    saveIndex=i;
                } 
            }
            const exampleEmbed2 = new MessageEmbed()
			.setColor('#ffffff')
			.setTitle(`**Common Rat Leaderboard**`)
			.setThumbnail(`https://cdn.discordapp.com/attachments/851901671796637716/912337251793514496/SIN_FARM.jpg`)
			.addFields(
				{ name:'\u200B', value:`
                \`#1\` **${data[0].username}** - ${INF.format(data[0].profile.stats.commonRatFound)} :rat: \n\`#2\` **${data[1].username}** - ${INF.format(data[1].profile.stats.commonRatFound)} :rat: \n\`#3\` **${data[2].username}** - ${INF.format(data[2].profile.stats.commonRatFound)} :rat: \n\`#4\` **${data[3].username}** - ${INF.format(data[3].profile.stats.commonRatFound)} :rat: \n\`#5\` **${data[4].username}** - ${INF.format(data[4].profile.stats.commonRatFound)} :rat: \n\`#6\` **${data[5].username}** - ${INF.format(data[5].profile.stats.commonRatFound)} :rat: \n\`#7\` **${data[6].username}** - ${INF.format(data[6].profile.stats.commonRatFound)} :rat: \n\`#8\` **${data[7].username}** - ${INF.format(data[7].profile.stats.commonRatFound)} :rat: \n\`#9\` **${data[8].username}** - ${INF.format(data[8].profile.stats.commonRatFound)} :rat: \n\`#10\` **${data[9].username}** - ${INF.format(data[9].profile.stats.commonRatFound)} :rat: \n:ladder::ladder::ladder::ladder::ladder::ladder::ladder::ladder:\n\`#${saveIndex+1}\` **${data[saveIndex].username}** - ${INF.format(data[saveIndex].profile.stats.commonRatFound)} :rat: \n
                `, inline:true })

			.setTimestamp()
			.setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
			
			message.channel.send({ embeds: [exampleEmbed2] });
        }
        

        	

    }
}




