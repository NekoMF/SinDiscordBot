const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'balance',
    aliases: ["bal","b","wallet","wal", "wall"],
    category: 'economy',
    description: ":briefcase: Checks your wallet! ",
    
    execute(message, args, client, Discord, profileData){
        INF = new Intl.NumberFormat('en-US')

        const exampleEmbed = new MessageEmbed()
			.setColor('#ffffff')
            .setTitle (`:briefcase:  ${message.author.username}'s WALLET`)
            .addFields(
                {name:`__Coins__ :coin: : \`${INF.format(profileData.coins)}\``, value:'\u200b'},
                {name:`__Lotus__ :white_flower: : \`${INF.format(profileData.lotus)}\``, value:'\u200b'},
                {name:`__Bricks__ :bricks: : \`${INF.format(profileData.bricks)}\``, value:'\u200b'},
                {name:`__Diamonds__ :gem: : \`${INF.format(profileData.diamonds)}\``, value:'\u200b'},
                {name:`__Sins__ :apple: : \`${INF.format(profileData.sins)}\``, value:'\u200b'},
            
            )
			.setTimestamp()
            .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
			message.channel.send({ embeds: [exampleEmbed] });
    }
}