require('dotenv').config();
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'helpold',
	description: 'List all of my commands or info about a specific command.',
	usage: '[command name]',
	category: 'utility',
	cooldown: 5,
	execute(message, args, client, Discord, profileData) {
		
		const { commands } = message.client;
		let data = [];

		data = Array.from(commands.values())
		
		if (!args.length) {

			let i=0; let economyString='';let funString='';let moderationString='';let utilityString='';  
			
			while (i<data.length){
				if (data[i].category==="economy") economyString +='`' + data[i].name + '`' + ",";
				else
				if (data[i].category==="fun") funString += '`' + data[i].name + '`' + ",";
				else
				if (data[i].category==="moderation") moderationString += '`' + data[i].name + '`' + ",";
				else
				if (data[i].category==="utility") utilityString += '`' + data[i].name + '`' + ",";   
				i++;
			};
			
			economyString=economyString.slice(0, economyString.length - 1);
			funString=funString.slice(0, funString.length - 1);
			moderationString=moderationString.slice(0, moderationString.length - 1);
			utilityString=utilityString.slice(0, utilityString.length - 1);


			const exampleEmbed = new MessageEmbed()
			.setColor('#ffffff')
			.setTitle(`**:question: HELP :question: **`)
			.setDescription('Here\'s a list of all my commands:')
			.setThumbnail(`https://cdn.discordapp.com/attachments/913357314533249094/914039769430904852/pngegg_2.png`)
			.addFields(
				{ name:'ECONOMY :coin: :apple: ', value: `${economyString}` },
				{ name:'FUN     :snake:     :chicken:     :horse:     :rat:  ', value: `${funString}` },
				{ name:'UTILITY :tools: ' , value: `${utilityString}` },
				{ name:'MODERATION :diamond_shape_with_a_dot_inside: ', value: `${moderationString}` },
	
				{ name: '\u200B', value: `You can send \`${process.env.PREFIX}help [command name]\` to get info on a specific command!` })

			.setTimestamp()
			.setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
			
			message.channel.send({ embeds: [exampleEmbed] });

		}	

		else{

			const name = args[0];
			const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
			
	
			if (!command) {
				return message.channel.send('that\'s not a valid command!');
			}
			
			const exampleEmbed2 = new MessageEmbed()
			.setColor('#ffffff')
			.setTitle(`**$${command.name}**`)
			.setThumbnail(`https://cdn.discordapp.com/attachments/913357314533249094/914039769430904852/pngegg_2.png`)
			.addFields(
				{ name:'DESCRIPTION: :page_facing_up:  ', value: `${command.description}` },
				
			)

			.setTimestamp()
			.setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
			
			message.channel.send({ embeds: [exampleEmbed2] });	
		}

       

		

	},
};
