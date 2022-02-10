
const { MessageActionRow, MessageButton,MessageEmbed  } = require('discord.js');


module.exports = {
    name: 'profile',
    aliases: ["p","prof"],
    category: 'economy',
    description: ":card_index: Displays your profile! ",
    async execute(message, args, client, Discord, profileData){

        INF = new Intl.NumberFormat('en-US')

        const rowProfileMain = new MessageActionRow()
			.addComponents(
                new MessageButton()
                .setCustomId('main')
                .setLabel('MAIN')
                .setStyle('PRIMARY'),
                new MessageButton()
                .setCustomId('stats')
                .setLabel('STATS')
                .setStyle('SECONDARY'), 
                new MessageButton()
                .setCustomId('collections')
                .setLabel('COLLECTIONS')
                .setStyle('SECONDARY'), 
				new MessageButton()
                .setCustomId('achievements')
                .setLabel('ACHIEVEMENTS')
                .setStyle('SECONDARY'),          
			);
        const rowProfileStats = new MessageActionRow()
			.addComponents(
                new MessageButton()
                .setCustomId('main')
                .setLabel('MAIN')
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('stats')
                .setLabel('STATS')
                .setStyle('PRIMARY'), 
                new MessageButton()
                .setCustomId('collections')
                .setLabel('COLLECTIONS')
                .setStyle('SECONDARY'), 
				new MessageButton()
                .setCustomId('achievements')
                .setLabel('ACHIEVEMENTS')
                .setStyle('SECONDARY'),          
			); 
        const rowProfileCollections = new MessageActionRow()
			.addComponents(
                new MessageButton()
                .setCustomId('main')
                .setLabel('MAIN')
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('stats')
                .setLabel('STATS')
                .setStyle('SECONDARY'), 
                new MessageButton()
                .setCustomId('collections')
                .setLabel('COLLECTIONS')
                .setStyle('PRIMARY'), 
				new MessageButton()
                .setCustomId('achievements')
                .setLabel('ACHIEVEMENTS')
                .setStyle('SECONDARY'),          
			);

        const rowProfileAchievements = new MessageActionRow()
			.addComponents(
                new MessageButton()
                .setCustomId('main')
                .setLabel('MAIN')
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('stats')
                .setLabel('STATS')
                .setStyle('SECONDARY'), 
                new MessageButton()
                .setCustomId('collections')
                .setLabel('COLLECTIONS')
                .setStyle('SECONDARY'), 
				new MessageButton()
                .setCustomId('achievements')
                .setLabel('ACHIEVEMENTS')
                .setStyle('PRIMARY'),          
			);          
        
        

        const profileMainEmbed = new MessageEmbed()
			.setColor('#ffffff')
            .setTitle (`:card_index: PROFILE :card_index:`)
            //.setDescription('Some description here for rats\n :rat:              :rat:')
            
            .setThumbnail(`${message.author.displayAvatarURL({dynamic:true, size: 512})}`)
            .addFields(
                {name:`:fleur_de_lis: LEVEL : \`${profileData.level.value}\` `, value:`\`${INF.format(profileData.level.xp)}/${INF.format(profileData.level.nextReq)}\` XP`},
                {name:` WALLET : `, value:`
                :coin: \`${INF.format(profileData.coins)}\`\n:white_flower: \`${INF.format(profileData.lotus)}\`\n:bricks: \`${INF.format(profileData.bricks)}\`\n:gem: \`${INF.format(profileData.diamonds)}\`\n:apple: \`${INF.format(profileData.sins)}\` 
                `},
                {name:` CURRENT LOCATION  : `, value:'\u200B'},
            )
                
			.setTimestamp()
            .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
            
            if (profileData.profile.location.travel==1)  profileMainEmbed.fields[2].value = `🏡 Ratville 🏡`;
            if (profileData.profile.location.travel==2 )  profileMainEmbed.fields[2].value = `:camping: Dreamer Peak :camping:`;
            if (profileData.profile.location.travel==3 )  profileMainEmbed.fields[2].value = `:mountain: Rathole Town :mountain:`;
            if (profileData.profile.location.travel==4 )  profileMainEmbed.fields[2].value = `:foggy: Whitecliff Fort :foggy:`;
            if (profileData.profile.location.travel==5 )  profileMainEmbed.fields[2].value = `:island: Water Heaven :island:`;
            if (profileData.profile.location.travel==6 )  profileMainEmbed.fields[2].value = `:amphora: Ratline :amphora:`;
            if (profileData.profile.location.travel==7 )  profileMainEmbed.fields[2].value = `:desert: Sandora Desert :desert:`;
            if (profileData.profile.location.travel==8 )  profileMainEmbed.fields[2].value = `:park: Spring River Falls :park: `;
            if (profileData.profile.location.travel==9 )  profileMainEmbed.fields[2].value = `:mountain_snow: Icefall Mountains :mountain_snow: `;
            if (profileData.profile.location.travel==10 )  profileMainEmbed.fields[2].value = `:mountain: Greenstone Valley :mountain:`;
            if (profileData.profile.location.travel==11 )  profileMainEmbed.fields[2].value = `:shinto_shrine: Sun Valley City :shinto_shrine:`;
            if (profileData.profile.location.travel==12 )  profileMainEmbed.fields[2].value = `:house_abandoned: Old Tavern :house_abandoned:`;
            if (profileData.profile.location.travel==13 )  profileMainEmbed.fields[2].value = `:european_castle: Holy Castle :european_castle: `;
			
        
        const profileStatsEmbed = new MessageEmbed()
			.setColor('#ffffff')
            .setTitle (`:bar_chart:  PROFILE Stats :bar_chart: `)
            //.setDescription('Some description here for rats\n :rat:              :rat:')
            
            .setThumbnail(`${message.author.displayAvatarURL({dynamic:true, size: 512})}`)
            .addFields(
                {name:` Date Created : ${profileData.profile.stats.dateCreated} `, value:`\u200B`},
                {name:` Commands Run : \`${profileData.profile.stats.commandsRun}\` `, value:'\u200B'},
                {name:` Rats Gathered  : `, value:`
                Common :rat: : \`${INF.format(profileData.profile.stats.commonRatFound)}\`
                Rare :mouse2: : \`${INF.format(profileData.profile.stats.rareRatFound)}\`
                Epic :beaver: : \`${INF.format(profileData.profile.stats.epicRatFound)}\`
                Exotic :rabbit2: : \`${INF.format(profileData.profile.stats.exoticRatFound)}\`
                Legendary :bat: : \`${INF.format(profileData.profile.stats.legendaryRatFound)}\`
                **Unique** :rainbow:  : \`${INF.format(profileData.ratInv.unique)}\`
                `},
                {name:`Locations Found : \`${profileData.profile.stats.locDiscovered}\``, value:'\u200b'},
                {name:`Vote Amount: \`${profileData.profile.stats.voteAmount}\``, value:'\u200b'},
                

            )
                
			.setTimestamp()
            .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
            const profileCollectionEmbed = new MessageEmbed()
			.setColor('#ffffff')
            .setTitle (`:flags:  PROFILE Collections :flags: `)
            //.setDescription('Some description here for rats\n :rat:              :rat:')
            
            .setThumbnail(`${message.author.displayAvatarURL({dynamic:true, size: 512})}`)
            .addFields(
                {name:`Unique RATS :rainbow: : `, value:`\u200b`},
                
            )
                
			.setTimestamp()
            .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);

            if (profileData.ratInv.unique==0) profileCollectionEmbed.fields[0].value = 'Sadly you don\'t own any unique rats.\n You can find some by digging  ';   
            if (profileData.ratInv.unique==1) profileCollectionEmbed.fields[0].value = 'Nut Rat :chipmunk: ';
            if (profileData.ratInv.unique==2) profileCollectionEmbed.fields[0].value = `
                Nut Rat :chipmunk:
                Slorat :sloth: `;
            if (profileData.ratInv.unique==3) profileCollectionEmbed.fields[0].value = `Nut Rat :chipmunk: 
                Slorat :sloth: 
                Ramammoth :mammoth:`;
            if (profileData.ratInv.unique==4) profileCollectionEmbed.fields[0].value = `Nut Rat :chipmunk: 
                Slorat :sloth: 
                Ramammoth :mammoth:
                Skrunk :skunk:
              `;
            if (profileData.ratInv.unique==5) profileCollectionEmbed.fields[0].value = `Nut Rat :chipmunk: 
                Slorat :sloth: 
                Ramammoth :mammoth:
                Skrunk :skunk:
                Rathog :hedgehog:
              `;  
            if (profileData.ratInv.unique==6) profileCollectionEmbed.fields[0].value = `Nut Rat :chipmunk: 
                Slorat :sloth: 
                Ramammoth :mammoth:
                Skrunk :skunk:
                Rathog :hedgehog:
                RatCock :rooster:

              `; 
            if (profileData.ratInv.unique==7) profileCollectionEmbed.fields[0].value = `Nut Rat :chipmunk: 
                Slorat :sloth: 
                Ramammoth :mammoth:
                Skrunk :skunk:
                Rathog :hedgehog:
                RatCock :rooster:
                PepaRat :pig2:
              `;  
            
            if (profileData.ratInv.unique==8) profileCollectionEmbed.fields[0].value = `Nut Rat :chipmunk: 
                Slorat :sloth: 
                Ramammoth :mammoth:
                Skrunk :skunk:
                Rathog :hedgehog:
                RatCock :rooster:
                PepaRat :pig2:
                PoodleRat :poodle:
              `; 
            if (profileData.ratInv.unique==9) profileCollectionEmbed.fields[0].value = `Nut Rat :chipmunk: 
                Slorat :sloth: 
                Ramammoth :mammoth:
                Skrunk :skunk:
                Rathog :hedgehog:
                RatCock :rooster:
                PepaRat :pig2:
                PoodleRat :poodle:
                Rrama :llama:
              `; 
            if (profileData.ratInv.unique==10) profileCollectionEmbed.fields[0].value = `Nut Rat :chipmunk: 
                Slorat :sloth: 
                Ramammoth :mammoth:
                Skrunk :skunk:
                Rathog :hedgehog:
                RatCock :rooster:
                PepaRat :pig2:
                PoodleRat :poodle:
                Rrama :llama:
                Sreep :sheep:
              `; 
            if (profileData.ratInv.unique==11) profileCollectionEmbed.fields[0].value = `Nut Rat :chipmunk: 
                Slorat :sloth: 
                Ramammoth :mammoth:
                Skrunk :skunk:
                Rathog :hedgehog:
                RatCock :rooster:
                PepaRat :pig2:
                PoodleRat :poodle:
                Rrama :llama:
                Sreep :sheep:
                Carel :camel:
              `;   
            if (profileData.ratInv.unique==12) profileCollectionEmbed.fields[0].value = `Nut Rat :chipmunk: 
                Slorat :sloth: 
                Ramammoth :mammoth:
                Skrunk :skunk:
                Rathog :hedgehog:
                RatCock :rooster:
                PepaRat :pig2:
                PoodleRat :poodle:
                Rrama :llama:
                Sreep :sheep:
                Carel :camel:
                Rhinro :rhino:
              `;  
            if (profileData.ratInv.unique==13) profileCollectionEmbed.fields[0].value = `Nut Rat :chipmunk: 
                Slorat :sloth: 
                Ramammoth :mammoth:
                Skrunk :skunk:
                Rathog :hedgehog:
                RatCock :rooster:
                PepaRat :pig2:
                PoodleRat :poodle:
                Rrama :llama:
                Sreep :sheep:
                Carel :camel:
                Rhinro :rhino:
                Ratson :bison:
              `;
            if (profileData.ratInv.unique==14) profileCollectionEmbed.fields[0].value = `Nut Rat :chipmunk: 
                Slorat :sloth: 
                Ramammoth :mammoth:
                Skrunk :skunk:
                Rathog :hedgehog:
                RatCock :rooster:
                PepaRat :pig2:
                PoodleRat :poodle:
                Rrama :llama:
                Sreep :sheep:
                Carel :camel:
                Rhinro :rhino:
                Ratson :bison:
                Giratffe :giraffe:
              `;
            if (profileData.ratInv.unique==15) profileCollectionEmbed.fields[0].value = `Nut Rat :chipmunk: 
                Slorat :sloth: 
                Ramammoth :mammoth:
                Skrunk :skunk:
                Rathog :hedgehog:
                RatCock :rooster:
                PepaRat :pig2:
                PoodleRat :poodle:
                Rrama :llama:
                Sreep :sheep:
                Carel :camel:
                Rhinro :rhino:
                Ratson :bison:
                Giratffe :giraffe:
                Sreal :seal:
              `; 
            if (profileData.ratInv.unique==16) profileCollectionEmbed.fields[0].value = `Nut Rat :chipmunk: 
                Slorat :sloth: 
                Ramammoth :mammoth:
                Skrunk :skunk:
                Rathog :hedgehog:
                RatCock :rooster:
                PepaRat :pig2:
                PoodleRat :poodle:
                Rrama :llama:
                Sreep :sheep:
                Carel :camel:
                Rhinro :rhino:
                Ratson :bison:
                Giratffe :giraffe:
                Sreal :seal:
                Zebrat :zebra:
              `;
            if (profileData.ratInv.unique==17) profileCollectionEmbed.fields[0].value = `Nut Rat :chipmunk: 
                Slorat :sloth: 
                Ramammoth :mammoth:
                Skrunk :skunk:
                Rathog :hedgehog:
                RatCock :rooster:
                PepaRat :pig2:
                PoodleRat :poodle:
                Rrama :llama:
                Sreep :sheep:
                Carel :camel:
                Rhinro :rhino:
                Ratson :bison:
                Giratffe :giraffe:
                Sreal :seal:
                Zebrat :zebra:
                Srat :snake:
              `;
              
              const profileAchievementsEmbed = new MessageEmbed()
              .setColor('#ffffff')
              .setTitle (`:trophy:  PROFILE Achievements :trophy: `)
              //.setDescription('Some description here for rats\n :rat:              :rat:')
              
              .setThumbnail(`${message.author.displayAvatarURL({dynamic:true, size: 512})}`)
              .addFields(
                  
                  {name:` Make the bot public  : `, value:'soon'},
              )
                  
              .setTimestamp()
              .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                    
              
              
              
              const msg = await message.channel.send({ embeds: [profileMainEmbed], components: [rowProfileMain] });

         
           
        

              const collector = msg.createMessageComponentCollector({componentType: 'BUTTON', time: 150000 });
            
              
              collector.on('collect', async i => {
                  if(i.user.id!=message.author.id) return
                  if (i.customId === 'main') {
                      await i.update({ embeds: [profileMainEmbed], components: [rowProfileMain] });
                  }
                  if (i.customId === 'stats') {
                    await i.update({ embeds: [profileStatsEmbed], components: [rowProfileStats] });
                  }
                  if (i.customId === 'collections') {
                    await i.update({ embeds: [profileCollectionEmbed], components: [rowProfileCollections] });
                  }
                  if (i.customId === 'achievements') {
                    await i.update({ embeds: [profileAchievementsEmbed], components: [rowProfileAchievements] });
                  }



              });  
   
   
   
   
   
   
        }            
}

/*
level
balance 
location 


[collections]
[stats]
[achievements]
*/

