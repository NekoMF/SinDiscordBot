const profileModel = require("../../models/profileSchema");
const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "withdraw",
  aliases: ["wd"],
  permissions: [],
  category: 'economy',
  description: ":bank: Withdraw coins from your bank!",
  async execute(message, args, client, discord, profileData) {
    INF = new Intl.NumberFormat('en-US');

    let a=args;
        a[0]=a[0].toLowerCase();
    if (args[0]=="coins"||args[0]=="c"){

    
    const amount = args[1];
    if (amount % 1 != 0 || amount <= 0) {
      const exampleEmbed = new MessageEmbed()
          .setColor('#ff0000')
          .setTitle (` :x: OOPS :x: `)
          .addFields(
              {name:`${message.author.username}, the withdraw amount of coins :coin: must be a positive integer`, value:'\u200b'},
                
                )
          .setTimestamp()
          .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
        return message.channel.send ({embeds:[exampleEmbed]});
    }

    try {
      if (amount > profileData.bank.coins) {
        const exampleEmbed = new MessageEmbed()
          .setColor('#ff0000')
          .setTitle (` :x: OOPS :x: `)
          .addFields(
              {name:`${message.author.username}, you don't have enough coins :coin: in the bank for that`, value:'\u200b'},
                
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
            coins: amount,
            'bank.coins': -amount,
          },
        }
      );

      

      const exampleEmbed = new MessageEmbed()
			.setColor('#92ff92')
            .addFields(
                {name:` :outbox_tray:  Withdrawing... :outbox_tray:    `, value: `\u200b`},
                {name:`

                \n **- \`${INF.format(amount)}\` :bank: **
                \n **+ \`${INF.format(amount)}\` :coin:** 
                
                
                `, value: `\n **The coins were withdrawn successfully :white_check_mark:** `},


            
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
              {name:`${message.author.username}, the withdraw amount of diamonds :gem: must be a positive integer`, value:'\u200b'},
                
                )
          .setTimestamp()
          .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
        return message.channel.send ({embeds:[exampleEmbed]});
    }

    try {
      if (amount > profileData.bank.diamonds) {
        const exampleEmbed = new MessageEmbed()
          .setColor('#ff0000')
          .setTitle (` :x: OOPS :x: `)
          .addFields(
              {name:`${message.author.username}, you don't have enough diamonds :gem: in the bank for that`, value:'\u200b'},
                
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
            diamonds: amount,
            'bank.diamonds': -amount,
          },
        }
      );

      

      const exampleEmbed = new MessageEmbed()
			.setColor('#92ff92')
            .addFields(
                {name:` :outbox_tray:  Withdrawing... :outbox_tray:    `, value: `\u200b`},
                {name:`

                \n **- \`${INF.format(amount)}\` :bank: **
                \n **+ \`${INF.format(amount)}\` :gem:** 
                
                
                `, value: `\n **The diamonds were withdrawn successfully :white_check_mark:** `},


            
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