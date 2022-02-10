const profileModel = require ("../../models/profileSchema");
const { MessageEmbed } = require('discord.js');


module.exports = {
  name: "coinflip",
  category: 'casino',
  aliases:["cf"],
  description: "bet 50% ",
  
  async execute(message, args, client, discord, profileData) {
    INF = new Intl.NumberFormat('en-US');
        const amount = args[0];
        if (amount % 1 != 0 || amount <= 0) {
          const exampleEmbed = new MessageEmbed()
              .setColor('#ff0000')
              .setTitle (` :x: OOPS :x: `)
              .addFields(
                  {name:`${message.author.username}, the betting amount of coins :coin: must be a positive integer`, value:'Try $coinflip [amount]'},
                    
                    )
              .setTimestamp()
              .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
            return message.channel.send ({embeds:[exampleEmbed]});
        }
        try {
          if (amount > profileData.coins) {
            const exampleEmbed = new MessageEmbed()
              .setColor('#ff0000')
              .setTitle (` :x: OOPS :x: `)
              .addFields(
                  {name:`${message.author.username}, you don't have enough coins :coin: for that`, value:'\u200b'},
                    
                    )
              .setTimestamp()
              .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
            return message.channel.send ({embeds:[exampleEmbed]});
          }

          randomInt = Math.random();
          if (randomInt>0.5){
            
            let won = parseInt(profileData.coins) + parseInt(amount);
            await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  $inc: {
                    coins: amount,
                   
                  },
                  
                },
              );
        
        const wonEmbed = new MessageEmbed()
			.setColor('#ffffff')
             .setTitle (` :flower_playing_cards: SUCCESS :flower_playing_cards:  `)
            .addFields(
                        {name:`${message.author.username}, you won \n\n + \`${INF.format(amount)}\` :coin: `, value:`Now you have \`${won}\``},
            
            )
			.setTimestamp()
            .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
			return message.channel.send({ embeds: [wonEmbed] });

      }        
         
      if (randomInt<=0.5){
        
        let lose = parseInt(profileData.coins)- parseInt(amount);
        await profileModel.findOneAndUpdate(
            {
              userID: message.author.id,
            },
            {
              $inc: {
                coins: -amount,
               
              },
              
            },
          );
    
    const loseEmbed = new MessageEmbed()
  .setColor('#ff0000')
         .setTitle (` :flower_playing_cards: FAILURE :flower_playing_cards:  `)
        .addFields(
                    {name:`${message.author.username}, you lost \n\n - \`${INF.format(amount)}\` :coin: `, value:`Now you have \`${lose}\``},
        
        )
  .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
  return message.channel.send({ embeds: [loseEmbed] });

  }        
     

          
        } catch (err) {
          console.log(err);
        } 
  },
};