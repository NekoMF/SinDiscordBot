const fs = require('fs');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [
	Intents.FLAGS.GUILDS,
	Intents.FLAGS.GUILD_MESSAGES,
	Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
//


const dotenv = require('dotenv').config();
const mongoose = require('mongoose')

global.Discord = require('discord.js');


client.commands = new Discord.Collection();
client.events = new Discord.Collection();




//Accessing commands from from the folder
const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		//commands.push(JSON.stringify(command))
		client.commands.set(command.name, command);
		
	}
}

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args,client));
	} else {
		client.on(event.name, (...args) => event.execute(...args,client));
	}
}




mongoose.connect(process.env.MONGODB_SRV, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	
})
.then(()=>{
	console.log('Connected to the Database ');
})
.catch((err)=>{
	console.log(err);
})



client.login(process.env.DISCORD_TOKEN);



