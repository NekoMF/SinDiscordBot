const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'rat',
    aliases: ["ra"],
    category: 'economy',
    description: ":mouse: Checks your rat inventory! ",
    async execute(message, args, client, Discord, profileData){
        INF = new Intl.NumberFormat('en-US')        
       





        

        const exampleEmbed = new MessageEmbed()
			.setColor('#ffffff')
            .setTitle (`:mouse:  ${message.author.username}'s WALLET`)
            .addFields(
                {name:`__Common__ :rat: : \`${INF.format(profileData.ratInv.common)}\``, value:'\u200b'},
            
            )
			.setTimestamp()
            .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);


            if (profileData.ratInv.rare>=1) exampleEmbed.fields.push ({name:`__Rare__ :mouse2: : \`${INF.format(profileData.ratInv.rare)}\``, value:'\u200b'})
            if (profileData.ratInv.epic>=1) exampleEmbed.fields.push ({name:`__Epic__ :beaver: : \`${INF.format(profileData.ratInv.epic)}\``, value:'\u200b'})    
            if (profileData.ratInv.exotic>=1) exampleEmbed.fields.push ({name:`__Exotic__ :rabbit2: : \`${INF.format(profileData.ratInv.exotic)}\``, value:'\u200b'}) 
            if (profileData.ratInv.legendary>=1) exampleEmbed.fields.push ({name:`__Legendary__ :bat: : \`${INF.format(profileData.ratInv.legendary)}\``, value:'\u200b'})       
            

			message.channel.send({ embeds: [exampleEmbed] });

           
    }
}