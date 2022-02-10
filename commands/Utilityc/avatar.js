module.exports = {
	name: 'avatar',
	description: 'Get your own avatar.',
	aliases: ['icon', 'pfp'],
	category: 'utility',
	execute(message) {
		message.channel.send(message.author.displayAvatarURL({dynamic:true, size: 2048}))
	},
};
