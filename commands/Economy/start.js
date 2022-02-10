const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'start',
    category: 'fun',
    description: "This command creates you an account! ",
    execute(message){
        const exampleEmbed = new MessageEmbed()
              .setColor('#ffffff')
                    .addFields(
                        {name:`Best of Luck! \`$tutorial\` is a good point to start! `, value: `\u200b`},
						         
                    )
              .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
               message.channel.send({ embeds: [exampleEmbed] });
        
    }
}