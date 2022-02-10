const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'bank',
    description: ":bank: Checks your bank !",
    category: 'economy',
    execute(message, args, client, Discord, profileData){
        INF = new Intl.NumberFormat('en-US')

        const exampleEmbed = new MessageEmbed()
			.setColor('#ffffff')
            .setTitle (`:bank: ${message.author.username}'s BANK`)
            .addFields(
                {name:`__Coins__ :coin: : \`${INF.format(profileData.bank.coins)}\``, value:'\u200b'},
                {name:`__Diamonds__ :gem: : \`${INF.format(profileData.bank.diamonds)}\``, value:'\u200b'},
            
            )
			.setTimestamp()
            .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
			message.channel.send({ embeds: [exampleEmbed] });
    }
}