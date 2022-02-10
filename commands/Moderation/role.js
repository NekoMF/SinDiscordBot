module.exports = {
	name: 'roleold',
	args: true,
        category: 'moderation',
	usage: '<user> <role>',    
	execute(message, args) {
        const taggedUser = message.mentions.users.first();

        let role = message.guild.roles.cache.find(r => r.name === args[1].toString()+" ");

        let member = message.mentions.members.first();

        member.roles.add(role);

        message.channel.send(`The role "${role.name}" was added to ${taggedUser}`);
           
}	
};