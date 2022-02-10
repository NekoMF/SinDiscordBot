const profileModel = require ("../../models/profileSchema");
const { MessageEmbed } = require('discord.js');


module.exports = {
  name: "daily",
  category: 'economy',
  aliases:["dold"],
  description: "Get your :high_brightness: daily :high_brightness: dose of coins",
  
  async execute(message, args, client, discord, profileData) {
    INF = new Intl.NumberFormat('en-US');
   
    let hoursLeft = Math.floor((profileData.cooldowns.daily+86400000-Date.now()) / 3600000);
    let minutesLeft = Math.floor(((profileData.cooldowns.daily+86400000-Date.now()) - hoursLeft*3600000)/60000);
    
    if (Date.now() - profileData.cooldowns.daily < 86400000 ){
      
      const cooldownEmbed = new MessageEmbed()
			.setColor('#ffffff')
            .addFields(
                {name:`:alarm_clock: Please wait \`${hoursLeft}h ${minutesLeft}m\` before using \`$daily\` again`, value:'\u200b '},               
            
            )
            .setFooter(`Patience is a virtue : Marazul#7235`)
			return message.reply({ embeds: [cooldownEmbed] });
    } 

    let dailyReward = profileData.lab.jobs.circus.reward*10
    
     await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          coins: dailyReward,
         
        },
        $set :{
          'cooldowns.daily': Date.now(),
        },
      }
    );
      

   

        const exampleEmbed = new MessageEmbed()
			.setColor('#ffffff')
      .setTitle (` :high_brightness: DAILY :high_brightness: `)
      .addFields(
          {name:`${message.author.username}, you found a bag full of coins \n\n + \`${INF.format(dailyReward)}\` :coin: `, value:'\u200b'},
            
            )
			.setTimestamp()
      .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
			message.channel.send({ embeds: [exampleEmbed] });

    
  },
};