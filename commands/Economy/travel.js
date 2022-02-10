const profileModel = require ("../../models/profileSchema");
const { MessageEmbed } = require('discord.js');


module.exports = {
  name: "travel",
  category: 'economy',
  aliases:["tr"],
  description: "Travel to the desire location",
  async execute(message, args, client, discord, profileData) {
    INF = new Intl.NumberFormat('en-US');
    

    const oopsEmbed = new MessageEmbed()
          .setColor('#ff0000')
          .setTitle (` :x: OOPS :x: `)
          .addFields(
              {name:`${message.author.username}, you can't travel there!`, value:'\u200b'},
                
                )
          .setTimestamp()
          .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
    
    const successTravelEmbed = new MessageEmbed()
          .setColor('#ffffff')
                .setTitle (` :man_mountain_biking:  RAT CART :man_mountain_biking:  `)
                .addFields(
                    {name:`${message.author.username}, you arrived at the destination `, value:'\u200b'},
                
                )
          .setTimestamp()
              .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);


    let a=args;
    a[0]=a[0].toLowerCase();
                



    if (args[0]=="ratville"){
         await profileModel.findOneAndUpdate(
            {
              userID: message.author.id,
            },
            {
              $set: {
                'profile.location.travel' : 1 , 
              },
            }
        );
        return message.channel.send({embeds:[successTravelEmbed]});
    } else

    if (profileData.profile.location.dreamerPeak.value!=0&& (args[0]=="dreamer"||args[0]=="dreamerpeak")){
         await profileModel.findOneAndUpdate(
            {
              userID: message.author.id,
            },
            {
              $set: {
                'profile.location.travel' : 2 ,
              },
            }
        );
        return message.channel.send({embeds:[successTravelEmbed]});
    } else

    if (profileData.profile.location.ratholeTown.value!=0&& (args[0]=="rathole"||args[0]=="ratholetown")){
       await profileModel.findOneAndUpdate(
          {
            userID: message.author.id,
          },
          {
            $set: {
              'profile.location.travel' : 3 ,
            },
          }
      );
      return message.channel.send({embeds:[successTravelEmbed]});
  } else

  if (profileData.profile.location.whitecliffFort.value!=0&& (args[0]=="whitecliff"||args[0]=="whiteclifffort")){
       await profileModel.findOneAndUpdate(
          {
            userID: message.author.id,
          },
          {
            $set: {
              'profile.location.travel' : 4 ,
            },
          }
      );
      return message.channel.send({embeds:[successTravelEmbed]});
  } else

  if (profileData.profile.location.waterHeaven.value!=0&& (args[0]=="waterheaven"||args[0]=="water")){
       await profileModel.findOneAndUpdate(
          {
            userID: message.author.id,
          },
          {
            $set: {
              'profile.location.travel' : 5 ,
            },
          }
      );
      return message.channel.send({embeds:[successTravelEmbed]});
  } else

  if (profileData.profile.location.ratLine.value!=0&& (args[0]=="rat"||args[0]=="ratline")){
       await profileModel.findOneAndUpdate(
          {
            userID: message.author.id,
          },
          {
            $set: {
              'profile.location.travel' : 6 ,
            },
          }
      );
      return message.channel.send({embeds:[successTravelEmbed]});
  } else

  if (profileData.profile.location.sandoraDesert.value!=0&& (args[0]=="sandora"||args[0]=="sandoradesert")){
       await profileModel.findOneAndUpdate(
          {
            userID: message.author.id,
          },
          {
            $set: {
              'profile.location.travel' : 7 ,
            },
          }
      );
      return message.channel.send({embeds:[successTravelEmbed]});
  } else

  if (profileData.profile.location.springRiverFalls.value!=0&& (args[0]=="springriverfalls"||args[0]=="spring"||args[0]=="springriver"||args[0]=="river")){
       await profileModel.findOneAndUpdate(
          {
            userID: message.author.id,
          },
          {
            $set: {
              'profile.location.travel' : 8 ,
            },
          }
      );
      return message.channel.send({embeds:[successTravelEmbed]});
  } else

  if (profileData.profile.location.icefallMountains.value!=0&& (args[0]=="icefallmountains"||args[0]=="icefall"||args[0]=="ice")){
       await profileModel.findOneAndUpdate(
          {
            userID: message.author.id,
          },
          {
            $set: {
              'profile.location.travel' : 9 ,
            },
          }
      );
      return message.channel.send({embeds:[successTravelEmbed]});
  } else

  if (profileData.profile.location.greenstoneValley.value!=0&& (args[0]=="greenstonevalley"||args[0]=="greenstone"||args[0]=="green")){
       await profileModel.findOneAndUpdate(
          {
            userID: message.author.id,
          },
          {
            $set: {
              'profile.location.travel' : 10 ,
            },
          }
      );
      return message.channel.send({embeds:[successTravelEmbed]});
  } else

  if (profileData.profile.location.sunValleyCity.value!=0&& (args[0]=="sunvalleycity"||args[0]=="sunvalley"||args[0]=="sun")){
       await profileModel.findOneAndUpdate(
          {
            userID: message.author.id,
          },
          {
            $set: {
              'profile.location.travel' : 11 ,
            },
          }
      );
      return message.channel.send({embeds:[successTravelEmbed]});
  } else

  if (profileData.profile.location.oldTavern.value!=0&& (args[0]=="old"||args[0]=="oldtavern")){
       await profileModel.findOneAndUpdate(
          {
            userID: message.author.id,
          },
          {
            $set: {
              'profile.location.travel' : 12 ,
            },
          }
      );
      return message.channel.send({embeds:[successTravelEmbed]});
  } else

  if (profileData.profile.location.holyCastle.value!=0&& (args[0]=="holycastle"||args[0]=="castle"||args[0]=="holy")){
       await profileModel.findOneAndUpdate(
          {
            userID: message.author.id,
          },
          {
            $set: {
              'profile.location.travel' : 13 ,
            },
          }
      );
      return message.channel.send({embeds:[successTravelEmbed]});
  } 
  else message.channel.send({embeds:[oopsEmbed]});     


      
    
  },
};