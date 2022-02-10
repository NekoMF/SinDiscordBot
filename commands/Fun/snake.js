const Canvas = require('canvas');
module.exports = {
    name: 'snake',
    category: 'fun',
    description: "this is a snake command!",
    async execute (message, args, client, Discord, profileData){

    const canvas = Canvas.createCanvas(1980, 1080);    
    const context = canvas.getContext('2d');
	const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/841025285356257290/842314737286512660/Meme2.png');

	
	context.drawImage(background, 0, 0, canvas.width, canvas.height);
    context.strokeStyle = '#ffffff';
	// consolecontext.strokeRect(0, 0, canvas.width, canvas.height);  
    context.beginPath();

	// Start the arc to form a circle
	context.arc(300, 300, 500, 0, Math.PI * 2, true);

	// Put the pen down
	context.closePath();

	// Clip off the region you drew on
	context.clip();  

    const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'jpg' }));


	context.drawImage(avatar, 0, 0, 0, 600);

	
	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'hmm.png');

	message.reply({ files: [attachment] });
        //message.channel.send('is the best mf');
    }
}