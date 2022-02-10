const mongoose = require('mongoose')
const fs = require('fs');
const cooldowns = new Map();
require('dotenv').config();
const profileModel = require ('../models/profileSchema');
const botModel = require ('../models/botSchema');
const { MessageEmbed } = require('discord.js');
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


module.exports =  {
    name: "messageCreate",
    async execute (message, client){

        prefix= process.env.PREFIX;
        if(!message.content.startsWith(prefix) || message.author.bot) return ;

       // if (message.author.id!=650032386226126859 || message.author.id!=219544435397099521) return;


        if (message.content !== `${process.env.PREFIX}start`){
    
        let profileDataStart;
            profileDataStart = await profileModel.findOne({userID: message.author.id});
            if(!profileDataStart){
                const exampleEmbed = new MessageEmbed()
                .setColor('#ffffff')
                .addFields(
                    {name:`:white_heart:  Please use \`$start\` to create your account`, value:'\u200b '},               
                
                )
                .setFooter(`Patience is a virtue : Marazul#7235`)
                 message.reply({ embeds: [exampleEmbed] });
                 message.channel.send(`:rat::white_heart::rat::white_heart::rat:\n:white_heart::rat::white_heart::rat::white_heart:\n:rat::white_heart::rat::white_heart::rat:\n:rat::rat::white_heart::rat::rat:`)

                return;
            }
           
        }
        // let botProfile = await botModel.create({
        //     botID: '934112207040549004',
        //     Name: "Rattus",
        //     commandsRun: 0,
        //     digNumber: 0,
        // })
        // botProfile.save();
        let botData = await botModel.findOne({botID: client.user.id});
        let profileData;
        try {
            profileData = await profileModel.findOne({userID: message.author.id});
            if(!profileData){
                let profile = await profileModel.create({

                    userID: message.author.id,

                    serverID: message.guild.id,

                    coins: 10,
                    lotus: 0,
                    bricks: 0,
                    diamonds: 0,
                    sins: 1,

                    username: message.author.username,

                    level: {
                        value: 1,
                        nextReq: 10,
                        xp: 0,
                    },

                    security: {
                        jail: 0,
                        nrOfDigs :0,
                    },

                    ratInv: {
                        common: 0,
                        rare: 0,
                        epic: 0,
                        exotic: 0, 
                        legendary: 0,
                    },
        
                    bank: {
                        coins: 0,
                        diamonds: 0
                    },
        
                    lab: {
                        jobs : {
                            circus : {
                                price : 20,
                                reward: 2,
                              },
                            explore : {
                                price : 3,
                                reward: 1,
                              },
                            construction : {
                                price : 20,
                                reward: 2,
                              },
                            mutation : {
                                price : 20,
                                reward: 2,
                              },
                           kill : {
                                price : 20,
                                reward: 2,
                              },        
                        },
                        rat:{
                            common: 0,
                            rare: 0,
                            epic: 0,
                            exotic: 0, 
                            legendary: 0,
                            unique: 0,
                        }
                    },
        
                    cooldowns: {
                        daily: 0,
                        vote: 0,
                    },
                      
                    profile: {
                        location : {

                            travel : 1,
                            
                            ratville : {
                              price:0 ,
                               bonus: {common: 1, rare: 1, epic :1, exotic: 1, legendary : 1 },
                              value: 2
                            },
                            holyCastle : {
                              price:46300 ,
                               bonus:{common: 1, rare: 1, epic :1, exotic: 1, legendary : 1 },
                              value: 0
                            },
                           dreamerPeak : {
                             price:240 ,
                              bonus:{common: 1, rare: 1, epic :1, exotic: 1, legendary : 1 },
                            value:0 
                          },
                           springRiverFalls : {
                             price: 4200 ,
                              bonus:{common: 1, rare: 1, epic :1, exotic: 1, legendary : 1 },
                            value:0 
                          },
                            sandoraDesert : {
                              price: 2600 ,
                               bonus:{common: 1, rare: 1, epic :1, exotic: 1, legendary : 1 },
                              value:0 
                            },
                           waterHeaven: {
                             price: 990 ,
                              bonus:{common: 1, rare: 1, epic :1, exotic: 1, legendary : 1 },
                            value:0 
                          },
                           ratLine: {
                             price: 1600 ,
                              bonus:{common: 1, rare: 1, epic :1, exotic: 1, legendary : 1 },
                            value: 0
                          },
                          oldTavern: {
                            price: 28600 ,
                             bonus:{common: 1, rare: 1, epic :1, exotic: 1, legendary : 1 },
                           value: 0
                         },
                           sunValleyCity: {
                             price: 17700 ,
                              bonus:{common: 1, rare: 1, epic :1, exotic: 1, legendary : 1 },
                            value:0 
                          },
                           whitecliffFort: {
                             price: 610 ,
                              bonus:{common: 1, rare: 1, epic :1, exotic: 1, legendary : 1 },
                            value:0 
                          },
                           icefallMountains: {
                             price: 6800 ,
                              bonus:{common: 1, rare: 1, epic :1, exotic: 1, legendary : 1 },
                            value: 0
                          },
                            greenstoneValley: {
                              price: 10900 ,
                               bonus:{common: 1, rare: 1, epic :1, exotic: 1, legendary : 1 },
                              value: 0
                            },
                           ratholeTown: {
                             price: 380 ,
                              bonus:{common: 1, rare: 1, epic :1, exotic: 1, legendary : 1 },
                            value:0 
                          } 
        
                          },
                        stats: {
                          voteAmount: 0,
                          ratKilled: 0,
                          dateCreated: Date.now(), 
                          commonRatFound: 0,
                          rareRatFound: 0, 
                          epicRatFound: 0, 
                          exoticRatFound: 0, 
                          legendaryRatFound: 0,
                          digAmount: 0,
                          commandsRun: 0,
                          locDiscovered: 1, 
                        },
                        pet:{
                            name:"default",
                            gender: "male",
                        },

                    },

                    items: {
                        Cheese: {
                                    
                          name: "Cheese",
                          maxAmount: 10000 ,
                          sellPrice:  5,
                          buyPrice:  2,
                          amount: 0,
                          rarity:  ":star:",
                          emoji:  ":cheese:",  
                          category:  "Traps",
                          description: "ok let'see",
                          usage: " ", 
                        },
                        Rice: {
                                    
                          name: "Rice",
                          maxAmount: 10000 ,
                          sellPrice:  5,
                          buyPrice:  45,
                          amount: 0,
                          rarity:  ":star:",
                          emoji:  ":ear_of_rice:",  
                          category:  "Traps",
                          description: "ok let'see",
                          usage: " ", 
                        },
                        Peanut: {
                                    
                          name: "Peanut",
                          maxAmount: 10000 ,
                          sellPrice:  5,
                          buyPrice:  15200,
                          amount: 0,
                          rarity:  ":star:",
                          emoji:  ":peanut:",  
                          category:  "Traps",
                          description: "ok let'see",
                          usage: " ", 
                        },
                        Corn: {
                                    
                          name: "corn",
                          maxAmount: 10000 ,
                          sellPrice:  5,
                          buyPrice:  114000,
                          amount: 0,
                          rarity:  ":star:",
                          emoji:  ":corn:",  
                          category:  "Traps",
                          description: "ok let'see",
                          usage: " ", 
                        },
                        Books: {
                                    
                          name: "Books",
                          maxAmount: 10000 ,
                          sellPrice:  5,
                          buyPrice:  2500,
                          amount: 0,
                          rarity:  ":star:",
                          emoji:  ":books:",  
                          category:  "Traps",
                          description: "ok let'see",
                          usage: " ", 
                        },
                        Cat: {
                                    
                          name: "Cat",
                          maxAmount: 10000 ,
                          sellPrice:  5,
                          buyPrice:  513000,
                          amount: 0,
                          rarity:  ":star:",
                          emoji:  ":books:",  
                          category:  "Traps",
                          description: "ok let'see",
                          usage: " ", 
                        },
                        
                        Pizza: {
                                    
                          name: "Pizza",
                          maxAmount: 10000 ,
                          sellPrice:  5,
                          buyPrice:  5690420,
                          amount: 0,
                          rarity:  ":star:",
                          emoji:  ":pizza:",  
                          category:  "Traps",
                          description: "ok let'see",
                          usage: " ", 
                        },
                        Bread: {
                                    
                          name: "Bread",
                          maxAmount: 10000 ,
                          sellPrice:  5,
                          buyPrice:  340,
                          amount: 0,
                          rarity:  ":star:",
                          emoji:  ":bread:",  
                          category:  "Traps",
                          description: "ok let'see",
                          usage: " ", 
                        },
                        Tiger: {
                                    
                          name: "Tiger",
                          maxAmount: 10000 ,
                          sellPrice:  5,
                          buyPrice:  1539000,
                          amount: 0,
                          rarity:  ":star:",
                          emoji:  ":tiger2:",  
                          category:  "Traps",
                          description: "ok let'see",
                          usage: " ", 
                        },
                        MouseTrap: {
                                    
                          name: "Mouse Trap",
                          maxAmount: 10000 ,
                          sellPrice:  25,
                          buyPrice:  15,
                          amount: 0,
                          rarity:  ":star:",
                          emoji:  ":mouse_trap:",  
                          category:  "Traps",
                          description: "ok let'see",
                          usage: " ", 
                        },
                      },
            
                });
                profile.save();
            }
        }catch(err){
            console.log(err);
        }

        if (profileData.security.jail == 1) return;  
       if (profileData.security.nrOfDigs >6) {
        await profileModel.findOneAndUpdate(
          {
            userID: message.author.id,
          },
          {
          
            $set :{
              
              'security.jail' :1 ,
            },
          }
        );

        let saveMessage = message.content;
        message.content = 'jail';
        

        let val1 = getRandomInt(10);
        let val2 = getRandomInt(10);

        const questionEmbed = new MessageEmbed()
        .setColor('#ffffff')
        .addFields(
            {name:`:grey_question: Hold up! Let's see if you're actually playing.`, value:`What is ${val1} + ${val2} ?`}, 
                )
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
        
        const correctEmbed = new MessageEmbed()
        .setColor('#ffffff')
        .addFields(
            {name:`:white_check_mark: Correct! Have fun! `, value:'\u200b'}, 
                )
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);

        const wrongEmbed = new MessageEmbed()
        .setColor('#ffffff')
        .addFields(
            {name:`:x: Time's up! Try Again!  `, value:'\u200b'}, 
                )
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
         

        const msg = await message.channel.send({embeds: [questionEmbed]});
        const collector = msg.channel.createMessageCollector({ time: 15000 });
        let ucheck =0;

        collector.on('collect', async i => {
           
            if (i.author.id == profileData.userID && i.content == val1 + val2 )
            {
                await profileModel.findOneAndUpdate(
                    {
                      userID: message.author.id,
                    },
                    {
                    
                      $set :{
                        'security.nrOfDigs': 0,
                        'security.jail' : 0,
                      },
                    }
                  );

                ucheck =1;  
                return message.channel.send ({embeds: [correctEmbed]});
            }
             
             
            
        });

         collector.on('end',async collected => {
          await profileModel.findOneAndUpdate(
            {
              userID: message.author.id,
            },
            {
            
              $set :{
                
                'security.jail' :0 ,
              },
            }
          );
            if (ucheck == 0)
            message.reply ({embeds: [wrongEmbed]});
            
        });
          
       }



        let args = message.content.slice(prefix.length).split(/ +/);
        const commandName = args.shift().toLowerCase();
        // let newArgs=args;
        // newArgs[0]=newArgs[0].toLowerCase();
        // newArgs[1]=newArgs[1].toLowerCase();
        // newArgs[2]=newArgs[2].toLowerCase();
        // console.log (args);
       
    
        const command = client.commands.get(commandName) || client.commands.find(a => a.aliases && a.aliases.includes(commandName));
         if (!command) return;
        
    //Args usage
    
        if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${message.author}!`;
    
        if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }
    
        return message.channel.send(reply);
    }

    //Cooldowns
    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Discord.Collection());
    }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = (command.cooldown) * 1000;

    //If time_stamps has a key with the author's id then check the expiration time to send a message to a user.
    if(time_stamps.has(message.author.id)){
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

        if(current_time < expiration_time){
            const time_left = (expiration_time - current_time) / 1000;
            

            const exampleEmbed = new MessageEmbed()
			.setColor('#ffffff')
            .addFields(
                {name:`:alarm_clock: Please wait \`${time_left.toFixed(0)}\` more seconds before using \`$${command.name}\``, value:'\u200b '},               
            
            )
            .setFooter(`Patience is a virtue : Marazul#7235`)
			return message.channel.send({ embeds: [exampleEmbed] });
            
        }
    }

    //If the author's id is not in time_stamps then add them with the current time.
    time_stamps.set(message.author.id, current_time);
    //Delete the user's id once the cooldown is over.
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);

    await botModel.findOneAndUpdate(
      {
        botID: client.user.id,
      },
      {
        $inc: {
          commandsRun: 1,
          
        },
      }
    );

    await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          
          'profile.stats.commandsRun' : 1,
        },
      }
    );

    //Execute + Error
    
        try {
            command.execute(message, args, client, Discord, profileData, botData);
        } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }
    }
}