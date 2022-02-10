const fs = require('fs');
module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
		console.log(`Time to Sin! Logged in as ${client.user.tag}`);
    
	},
}