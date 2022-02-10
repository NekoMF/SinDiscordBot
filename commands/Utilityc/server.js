const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'server',
	category: 'utility',
	description: 'Displays info about this server.',
	execute(message) {
		const exampleEmbed = new MessageEmbed()
              .setColor('#ffffff')
                    .addFields(
                        {name:` Server name:  `, value: `${message.guild.name}\n`},
						{name:` Total members:  `, value: `${message.guild.memberCount} `},         
                    )
              .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
               message.channel.send({ embeds: [exampleEmbed] });
	},
};
