module.exports = {
	name: 'user-info',
	category: 'utility',
	description: 'Displays info about yourself.',
	execute(message) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};
