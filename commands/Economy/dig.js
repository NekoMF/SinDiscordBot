const profileModel = require ("../../models/profileSchema");
const botModel = require ('../../models/botSchema');
const { MessageEmbed } = require('discord.js');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = {
  name: "dig",
  aliases:["d"],
  description: ":pick: dig for rats",
  category: 'economy',
  cooldown: 30,
  async execute(message, args, client, discord, profileData, botData) {

    INF = new Intl.NumberFormat('en-US')
    let uniqueRat = Math.random();
    let commonRat  = 
      profileData.items.Cheese.amount* Math.random() *1/100 + 
      profileData.items.MouseTrap.amount* Math.random() *5/100 +
      profileData.items.Rice.amount* Math.random() *10/100 +
      profileData.items.Bread.amount* Math.random() *50/100 +
      profileData.items.Books.amount* Math.random() *250/100 +
      profileData.items.Peanut.amount* Math.random() *1000/100 +
      profileData.items.Corn.amount* Math.random() *5000/100 +
      profileData.items.Cat.amount* Math.random() *15000/100 +
      profileData.items.Tiger.amount* Math.random() *30000/100 +
      profileData.items.Pizza.amount* Math.random() *69000/100 +
      getRandomInt(2) +1 ;

    let rareRat  = 
      profileData.items.Cheese.amount* Math.random() *0.01*1/100 + 
      profileData.items.MouseTrap.amount* Math.random() *0.01*5/100 +
      profileData.items.Rice.amount* Math.random() *0.01*10/100 +
      profileData.items.Bread.amount* Math.random() *0.01*50/100 +
      profileData.items.Books.amount* Math.random() *0.01*250/100 +
      profileData.items.Peanut.amount* Math.random() *0.01*1000/100 +
      profileData.items.Corn.amount* Math.random() *0.01*5000/100 +
      profileData.items.Cat.amount* Math.random() *0.01*15000/100 +
      profileData.items.Tiger.amount* Math.random() *0.01*30000/100 +
      profileData.items.Pizza.amount* Math.random() *0.01*69000/100 ; 
      
      
      
    let epicRat  = 
      profileData.items.Cheese.amount* Math.random() *0.0001*1/100 + 
      profileData.items.MouseTrap.amount* Math.random() *0.0001*5/100 +
      profileData.items.Rice.amount* Math.random() *0.0001*10/100 +
      profileData.items.Bread.amount* Math.random() *0.0001*50/100 +
      profileData.items.Books.amount* Math.random() *0.0001*250/100 +
      profileData.items.Peanut.amount* Math.random() *0.0001*1000/100 +
      profileData.items.Corn.amount* Math.random() *0.0001*5000/100 +
      profileData.items.Cat.amount* Math.random() *0.0001*15000/100 +
      profileData.items.Tiger.amount* Math.random() *0.0001*30000/100 +
      profileData.items.Pizza.amount* Math.random() *0.0001*69000/100 ;
      
        
        
    let exoticRat  = 
      profileData.items.Cheese.amount* Math.random() * 0.000001 * 1/100 + 
      profileData.items.MouseTrap.amount* Math.random() * 0.000001 * 5/100 +
      profileData.items.Rice.amount* Math.random() * 0.000001 * 10/100 +
      profileData.items.Bread.amount* Math.random() * 0.000001 * 50/100 +
      profileData.items.Books.amount* Math.random() * 0.000001 * 250/100 +
      profileData.items.Peanut.amount* Math.random() * 0.000001 * 1000/100 +
      profileData.items.Corn.amount* Math.random() * 0.000001 * 5000/100 +
      profileData.items.Cat.amount* Math.random() * 0.000001 * 15000/100 +
      profileData.items.Tiger.amount* Math.random() * 0.000001 * 30000/100 +
      profileData.items.Pizza.amount* Math.random() * 0.000001 * 69000/100 ; 
         

             

    let legendaryRat  =        
       profileData.items.Cheese.amount* Math.random() * 0.00000001 * 1/100 + 
       profileData.items.MouseTrap.amount* Math.random() * 0.00000001 * 5/100 +
       profileData.items.Rice.amount* Math.random() * 0.00000001 * 10/100 +
       profileData.items.Bread.amount* Math.random() * 0.00000001 * 50/100 +
       profileData.items.Books.amount* Math.random() * 0.00000001 * 250/100 +
       profileData.items.Peanut.amount* Math.random() * 0.00000001 * 1000/100 +
       profileData.items.Corn.amount* Math.random() * 0.00000001 * 5000/100 +
       profileData.items.Cat.amount* Math.random() * 0.00000001 * 15000/100 +
       profileData.items.Tiger.amount* Math.random() * 0.00000001 * 30000/100 +
       profileData.items.Pizza.amount* Math.random() * 0.00000001 * 69000/100 
          
           ; 
    let commonBonus=1, rareBonus=1, epicBonus=1, exoticBonus=1, legendaryBonus=1;  
    if (profileData.profile.location.travel==2){
        commonBonus = 1 ; rareBonus = 1 ; commonBonus = 1.1; rareBonus = 1; epicBonus = 1; exoticBonus = 1 ; legendaryBonus = 1; 
    }
    if (profileData.profile.location.travel==3){
        commonBonus = 1 ; rareBonus = 1 ; commonBonus = 1.3; rareBonus = 1; epicBonus = 1; exoticBonus = 1 ; legendaryBonus = 1; 
    }  
    if (profileData.profile.location.travel==4){
        commonBonus = 1 ; rareBonus = 1 ; commonBonus = 1; rareBonus = 1.05; epicBonus = 1; exoticBonus = 1 ; legendaryBonus = 1; 
    }  
    if (profileData.profile.location.travel==5){
        commonBonus = 1 ; rareBonus = 1 ; commonBonus = 1.6; rareBonus = 1; epicBonus = 1; exoticBonus = 1 ; legendaryBonus = 1; 
    }  
    if (profileData.profile.location.travel==6){
        commonBonus = 1 ; rareBonus = 1 ; commonBonus = 1.5; rareBonus = 1; epicBonus = 1.2; exoticBonus = 1 ; legendaryBonus = 1; 
    }  
    if (profileData.profile.location.travel==7){
        commonBonus = 1 ; rareBonus = 1 ; commonBonus = 1.5; rareBonus = 1.1; epicBonus = 1; exoticBonus = 1 ; legendaryBonus = 1; 
    }  
    if (profileData.profile.location.travel==8){
        commonBonus = 1 ; rareBonus = 1 ; commonBonus = 2; rareBonus = 1; epicBonus = 1; exoticBonus = 1 ; legendaryBonus = 1; 
    }  
    if (profileData.profile.location.travel==9){
        commonBonus = 1 ; rareBonus = 1 ; commonBonus = 1; rareBonus = 1.2; epicBonus = 1.5; exoticBonus = 1 ; legendaryBonus = 1; 
    }  
    if (profileData.profile.location.travel==10){
        commonBonus = 1 ; rareBonus = 1 ; commonBonus = 1; rareBonus = 1; epicBonus = 2; exoticBonus = 1 ; legendaryBonus = 1; 
    }  
    if (profileData.profile.location.travel==11){
        commonBonus = 1 ; rareBonus = 1 ; commonBonus = 1; rareBonus = 1; epicBonus = 1; exoticBonus = 1.77 ; legendaryBonus = 1; 
    }        
    if (profileData.profile.location.travel==12){
        commonBonus = 1 ; rareBonus = 1 ; commonBonus = 1; rareBonus = 1; epicBonus = 4; exoticBonus = 3 ; legendaryBonus = 1; 
    }  
    if (profileData.profile.location.travel==13){
        commonBonus = 1 ; rareBonus = 1 ; commonBonus = 1; rareBonus = 1; epicBonus = 1; exoticBonus = 4.2 ; legendaryBonus = 9.9; 
    }   
    commonRat = 3*Math.floor(commonRat * commonBonus);
    rareRat = 3*Math.floor(rareRat * rareBonus);
    epicRat = 3*Math.floor(epicRat * epicBonus);
    exoticRat = 3*Math.floor(exoticRat * exoticBonus); 
    legendaryRat = 3*Math.floor(legendaryRat * legendaryBonus);
    
    
    let expAmount = 5*commonRat + 500*rareRat + 50000*epicRat + 5000000*exoticRat + 500000000*legendaryRat; //for now
    let exp = profileData.level.xp + expAmount;

      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            'ratInv.common': commonRat,
            'ratInv.rare': rareRat,
            'ratInv.epic': epicRat,
            'ratInv.exotic': exoticRat,
            'ratInv.legendary': legendaryRat,
            'level.xp' : expAmount,

            'profile.stats.commonRatFound' : commonRat,
            'profile.stats.rareRatFound' : rareRat,
            'profile.stats.epicRatFound' : epicRat,
            'profile.stats.exoticRatFound' : exoticRat,
            'profile.stats.legendaryRatFound' : legendaryRat,
            'profile.stats.digAmount' : 1,
            'security.nrOfDigs' : 1,
          },
        }
      );
        
      await botModel.findOneAndUpdate(
        {
          botID: client.user.id,
        },
        {
          $inc: {
            digNumber: 1,
            
          },
        }
      );
    
        const exampleEmbed = new MessageEmbed()
			.setColor('#ffffff')
            .addFields(
                {name:` :pick:  Digging... :pick:  `, value: `\u200b`},
                {name:`

                \n **+ \`${INF.format(commonRat)}\` :rat:** (common)
               
                
                `, value: `\u200b`},
            
            )
			.setTimestamp()
            .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
           
            if (rareRat>=1)  exampleEmbed.fields = [
              {name:` :pick:  Digging... :pick:  `, value: `\u200b`},
              {name:`
            \n **+ \`${INF.format(commonRat)}\` :rat:** (common)
            \n **+ \`${INF.format(rareRat)}\` :mouse2:** (rare)
            `, value: `\u200b`}];

            if (epicRat>=1)  exampleEmbed.fields = [
              {name:` :pick:  Digging... :pick:  `, value: `\u200b`},
              {name:`
            \n **+ \`${INF.format(commonRat)}\` :rat:** (common)
            \n **+ \`${INF.format(rareRat)}\` :mouse2:** (rare)
            \n **+ \`${INF.format(epicRat)}\` :beaver:** (epic)
            `, value: `\u200b`}];

            if (exoticRat>=1)  exampleEmbed.fields = [
              {name:` :pick:  Digging... :pick:  `, value: `\u200b`},
              {name:`
            \n **+ \`${INF.format(commonRat)}\` :rat:** (common)
            \n **+ \`${INF.format(rareRat)}\` :mouse2:** (rare)
            \n **+ \`${INF.format(epicRat)}\` :beaver:** (epic)
            \n **+ \`${INF.format(exoticRat)}\` :rabbit2:** (exotic)
            `, value: `\u200b`}];

            if (legendaryRat>=1)  exampleEmbed.fields = [
              {name:` :pick:  Digging... :pick:  `, value: `\u200b`},
              {name:`
            \n **+ \`${INF.format(commonRat)}\` :rat:** (common)
            \n **+ \`${INF.format(rareRat)}\` :mouse2:** (rare)
            \n **+ \`${INF.format(epicRat)}\` :beaver:** (epic)
            \n **+ \`${INF.format(exoticRat)}\` :rabbit2:** (exotic)
            \n **+ \`${INF.format(legendaryRat)}\` :bat:** (legendary)
            `, value: `\u200b`}];

            
            if (uniqueRat<=0.0015){
              if (profileData.ratInv.unique==0)exampleEmbed.fields.push({name:`${message.author.username}, you found an extremely rare UNIQUE rat! :chipmunk: `, value: 'The **NutRat** is a super rare specie of rats. They live in the trees and gather nuts ||Except for November||'}); 
              if (profileData.ratInv.unique==1)exampleEmbed.fields.push({name:`${message.author.username}, you found an extremely rare UNIQUE rat! :sloth:  `, value: 'The **SloRat** is well known for it\`s ability to climb trees slower than ||your mom|| other rats. SloRats are basically lazy-asses but overall cute companions.    '});
              if (profileData.ratInv.unique==2)exampleEmbed.fields.push({name:`${message.author.username}, you found an extremely rare UNIQUE rat! :mammoth:`, value: 'The **Ramammoth** were known as extinct rats , but I guess that\'s a lie since you have one now. Ramammoth eats leaves and grass. Be aware not to angry them!  '});
              if (profileData.ratInv.unique==3)exampleEmbed.fields.push({name:`${message.author.username}, you found an extremely rare UNIQUE rat! :skunk:  `, value: 'The Skrunk is the stinkiest rat ever! Even tho it smells like shit it\'s the best protection measure against other wild animals.   '});
              if (profileData.ratInv.unique==4)exampleEmbed.fields.push({name:`${message.author.username}, you found an extremely rare UNIQUE rat! :hedgehog:  `, value: 'The ones that encountered a **Rathog** died without a trail! It\'s an extreme type of rat that shoots poisoned needles in your eyes. Be careful !    '});
              if (profileData.ratInv.unique==5)exampleEmbed.fields.push({name:`${message.author.username}, you found an extremely rare UNIQUE rat! :rooster:  `, value: ' The stupidest rat that ever existed - the **RatCock**. Even tho it\'s IQ goes into negatives you can make great soup out of it!'});
              if (profileData.ratInv.unique==6)exampleEmbed.fields.push({name:`${message.author.username}, you found an extremely rare UNIQUE rat! :pig2:  `, value: 'The **PepaRat** is a fatass rat with pink-ish skin color! The best ingredient for rat steak!  '});
              if (profileData.ratInv.unique==7)exampleEmbed.fields.push({name:`${message.author.username}, you found an extremely rare UNIQUE rat! :poodle:  `, value: 'The **PoodleRat** is a combination of fashion and the desire of peeing every fence. Elegant as a Poodle but fast and sneaky as a rat. '});
              if (profileData.ratInv.unique==8)exampleEmbed.fields.push({name:`${message.author.username}, you found an extremely rare UNIQUE rat! :llama: `, value: '**Rrama** is the descendant of the Aztec civilization. Being the main sacrifice vessel it\'s very rare to see one these days '});
              if (profileData.ratInv.unique==9)exampleEmbed.fields.push({name:`${message.author.username}, you found an extremely rare UNIQUE rat! :sheep:  `, value: 'The **Shreep** is the only resource of rat-wool in the entire world. These abnormal animals tend to be stupidly controllable so taming them is easy enough. '});
              if (profileData.ratInv.unique==10)exampleEmbed.fields.push({name:`${message.author.username}, you found an extremely rare UNIQUE rat! :camel:  `, value: 'The **Carel** is the single rat that lives under the pyramids. It has a strong relationships with the gods so you better don\'t f*uck with Carels!  '});
              if (profileData.ratInv.unique==11)exampleEmbed.fields.push({name:`${message.author.username}, you found an extremely rare UNIQUE rat! :rhino:  `, value: 'The Rhinro is the most dangerous rat in the savana. Blink one time and he\'s inside you. Hard to find and sharp horn!  '});
              if (profileData.ratInv.unique==12)exampleEmbed.fields.push({name:`${message.author.username}, you found an extremely rare UNIQUE rat! :bison:  `, value: 'The **Ratson** is the king of grasslands. It has up to 1000 kg and can jump 5 m into the air to crush your ass. '});
              if (profileData.ratInv.unique==13)exampleEmbed.fields.push({name:`${message.author.username}, you found an extremely rare UNIQUE rat! :giraffe:  `, value: 'The **Giratffe** it\'s a hell of a creation. Long neck and legs. The Giratffe is also the best human catapult ever. '});
              if (profileData.ratInv.unique==14)exampleEmbed.fields.push({name:`${message.author.username}, you found an extremely rare UNIQUE rat! :seal:  `, value: 'The **Sreal** is the simp king. It\'s attracted to every female possible and possesses an IQ of 69 which is surprisingly enough for pro simping. '});
              if (profileData.ratInv.unique==15)exampleEmbed.fields.push({name:`${message.author.username}, you found an extremely rare UNIQUE rat! :zebra: `, value: 'The **Zebrat** is the supreme animal. It has a lot of stripes but no one knows what colors are they. It hunts lions for dinner ||daily|| .  '});
              if (profileData.ratInv.unique==16)exampleEmbed.fields.push({name:`${message.author.username}, you found an extremely rare UNIQUE rat! :snake: `, value: 'The **Srat** it\'s a quiet and sneaky animal , sometimes he\'s an asshole but overall decent I\'d say. It eats federal chickens .  '});
              await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  $inc: {
                    'ratInv.unique': 1,
                  },
                }
              );
    
              
    
            }
             
			message.channel.send({ embeds: [exampleEmbed] });

     
    
    
      if (exp>=profileData.level.nextReq){

        let valX = profileData.level.value+1;
        let circusReward = Math.floor(1.28025*Math.pow(valX,2.38878));
       
        let remainingExp = exp - profileData.level.nextReq;

        let costY = Math.floor(((
          profileData.items.Cheese.amount*0.5*1/100 + 
          profileData.items.MouseTrap.amount*0.5*5/100 +
          profileData.items.Rice.amount*0.5*10/100 +
          profileData.items.Bread.amount*0.5*50/100 +
          profileData.items.Books.amount*0.5*250/100 +
          profileData.items.Peanut.amount*0.5*1000/100 +
          profileData.items.Corn.amount*0.5*5000/100 +
          profileData.items.Cat.amount*0.5*15000/100 +
          profileData.items.Tiger.amount*0.5*30000/100 +
          profileData.items.Pizza.amount*0.5*69000/100 +
          getRandomInt(1)
          ) +1 ) * (0.0154814*Math.pow(valX,2)+20))
          //(0.0154814*Math.pow(valX,2)+2.21552*valX + 14.7867));



        let req;
        if (profileData.level.value >=1 && profileData.level.value <15 )
        req = Math.floor(((profileData.level.value+1)/0.21)*((profileData.level.value+1)/0.21));
        else
        if (profileData.level.value >=15 && profileData.level.value <30 )
        req = Math.floor(((profileData.level.value+1)/0.15)*((profileData.level.value+1)/0.15));
        else
        if (profileData.level.value >=30 && profileData.level.value <60 )
        req = Math.floor(((profileData.level.value+1)/0.03)*((profileData.level.value+1)/0.03));
        else
        if (profileData.level.value >=60)
        req = Math.floor(((profileData.level.value+1)/0.0005)*((profileData.level.value+1)/0.0005));
      
      await profileModel.findOneAndUpdate(
          {
            userID: message.author.id,
          },
          {
            $set: {
              'level.xp' : remainingExp ,
              'level.nextReq' : req,

              'lab.jobs.circus.reward' : circusReward, 
              'lab.jobs.circus.price' : costY,

            
            },
            $inc: {
              
              'level.value' : 1,
              
            },
            
          }
        );

       
        
        const exampleEmbed1 = new MessageEmbed()
        .setColor('#ffffff')
              .setTitle (` :fleur_de_lis:  LEVEL UP :fleur_de_lis:  `)
              .addFields(
                  {name:`:reminder_ribbon: ${message.author.username}, now you're level \`${profileData.level.value + 1}\` :reminder_ribbon:  `, value:'\u200b'},
              
              )
        .setTimestamp()
              .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
        message.reply({ embeds: [exampleEmbed1] });
        
      }
  },
};