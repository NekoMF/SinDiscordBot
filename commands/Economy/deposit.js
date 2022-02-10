const { MessageEmbed } = require('discord.js');
const profileModel = require("../../models/profileSchema");
module.exports = {
  name: "deposit",
  aliases: ["dep"],
  category: 'economy',
  permissions: [],
  description: ":bank: Deposit coins or diamonds into your bank!",
  async execute(message, args, client, Discord, profileData) {
    INF = new Intl.NumberFormat('en-US');
    
        
    

    if (args[0]=="coins"||args[0]=="c"){
    
    const amount = args[1];
    if (amount % 1 != 0 || amount <= 0) {
      const exampleEmbed = new MessageEmbed()
          .setColor('#ff0000')
          .setTitle (` :x: OOPS :x: `)
          .addFields(
              {name:`${message.author.username}, the deposit amount of coins :coin: must be a positive integer`, value:'\u200b'},
                
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
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: -amount,
            'bank.coins': amount,
          },
        }
      );

     
      const exampleEmbed = new MessageEmbed()
			.setColor('#92ff92')
            .addFields(
                {name:` :inbox_tray: Depositing... :inbox_tray:   `, value: `\u200b`},
                {name:`

                \n **- \`${INF.format(amount)}\` :coin:** 
                \n **+ \`${INF.format(amount)}\` :bank: **
                
                `, value: `\n **The coins were stored successfully :white_check_mark:** `},
            
            )
			.setTimestamp()
            .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
			message.channel.send({ embeds: [exampleEmbed] });
    } catch (err) {
      console.log(err);
    }
    }

    if (args[0]=="diamonds"||args[0]=="d"){
      
      const amount = args[1];
      if (amount % 1 != 0 || amount <= 0) {
        const exampleEmbed = new MessageEmbed()
          .setColor('#ff0000')
          .setTitle (` :x: OOPS :x: `)
          .addFields(
              {name:`${message.author.username}, the deposit amount of diamonds :gem: must be a positive integer`, value:'\u200b'},
                
                )
          .setTimestamp()
          .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
        return message.channel.send ({embeds:[exampleEmbed]});
      }
      try {
        if (amount > profileData.diamonds) {
          const exampleEmbed = new MessageEmbed()
          .setColor('#ff0000')
          .setTitle (` :x: OOPS :x: `)
          .addFields(
              {name:`${message.author.username}, you don't have enough diamonds :gem: for that`, value:'\u200b'},
                
                )
          .setTimestamp()
          .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
        return message.channel.send ({embeds:[exampleEmbed]});
        }
        await profileModel.findOneAndUpdate(
          {
            userID: message.author.id,
          },
          {
            $inc: {
              diamonds: -amount,
              'bank.diamonds': amount,
            },
          }
        );

      
        const exampleEmbed = new MessageEmbed()
        .setColor('#92ff92')
              .addFields(
                  {name:` :inbox_tray: Depositing... :inbox_tray:   `, value: `\u200b`},
                  {name:`

                  \n **- \`${INF.format(amount)}\` :gem:** 
                  \n **+ \`${INF.format(amount)}\` :bank: **
                  
                  `, value: `\n **The diamonds were stored successfully :white_check_mark:** `},
              
              )
        .setTimestamp()
              .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
        message.channel.send({ embeds: [exampleEmbed] });
      } catch (err) {
        console.log(err);
      }
    }



  },
};