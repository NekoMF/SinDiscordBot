const { MessageActionRow, MessageButton,MessageEmbed  } = require('discord.js');


module.exports = {
    name: 'laboratory',
    aliases: ["lab","l"],
    category: 'economy',
    description: ":microscope: Enters the laboratory!",
    async execute(message, args, client, Discord, profileData){


        INF = new Intl.NumberFormat('en-US')


        const rowLab1 = new MessageActionRow()
			.addComponents(
            
                new MessageButton()
                .setCustomId('previous1')
                .setLabel('PREV')
                .setStyle('PRIMARY'),
                new MessageButton()
                .setCustomId('next1')
                .setLabel('NEXT')
                .setStyle('PRIMARY'),
			);

        const rowLab2 = new MessageActionRow()
			.addComponents(
                new MessageButton()
                .setCustomId('previous2')
                .setLabel('PREV')
                .setStyle('PRIMARY'),
                new MessageButton()
                .setCustomId('next2')
                .setLabel('NEXT')
                .setStyle('PRIMARY'),
			);
        const rowLab3 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('previous3')
                .setLabel('PREV')
                .setStyle('PRIMARY'),
                new MessageButton()
                .setCustomId('next3')
                .setLabel('NEXT')
                .setStyle('PRIMARY'),
                );
        const rowLab4 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('previous4')
                .setLabel('PREV')
                .setStyle('PRIMARY'),
                new MessageButton()
                .setCustomId('next4')
                .setLabel('NEXT')
                .setStyle('PRIMARY'),
                );

        const rowLab5 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('previous5')
                .setLabel('PREV')
                .setStyle('PRIMARY'),
                new MessageButton()
                .setCustomId('next5')
                .setLabel('NEXT')
                .setStyle('PRIMARY'),
                    
            );


        const circusEmbed = new MessageEmbed()
        .setColor('#ffffff')
        .setDescription ('Send your rats to perform in the Circus and get payed.')
        .setURL('https://cdn.discordapp.com/attachments/913357314533249094/914001562332971078/EVfbj3gXkAAGRGn.png')
        .setAuthor('LABORATORY 1', 'https://cdn.discordapp.com/attachments/913357314533249094/913997167390232596/rat.png')
        .setThumbnail(`https://cdn.discordapp.com/attachments/913357314533249094/914385552403484692/pngegg_4.png`)
        
        .addFields(
            { name:'Circus  : :circus_tent: `$r circus` ', value: `- Price : \`${INF.format(profileData.lab.jobs.circus.price)}\` :rat: \n- Reward: **${profileData.lab.jobs.circus.reward}** :coin:\n ` },
            
            { name: '\u200B', value: `You have : ${INF.format(profileData.ratInv.common)} :rat: (common)` }, 
        )     
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
        


        const expeditionEmbed = new MessageEmbed()
        .setColor('#ffffff')
        .setDescription ('Send your rats to explore the world and find new places.')
        .setURL('https://cdn.discordapp.com/attachments/913357314533249094/914001562332971078/EVfbj3gXkAAGRGn.png')
        .setAuthor('LABORATORY 2', 'https://cdn.discordapp.com/attachments/913357314533249094/913997167390232596/rat.png')
        .setThumbnail(`https://cdn.discordapp.com/attachments/913357314533249094/914385552403484692/pngegg_4.png`)
        
        .addFields(
            { name:'Expedition  : :map: `$r explore ` ', value: `- Price : \`${INF.format(profileData.lab.jobs.explore.price)}\` :mouse2: \n- Reward: **${profileData.lab.jobs.explore.reward}** :white_flower:\n `},
        
            { name: '\u200B', value: `You have : ${INF.format(profileData.ratInv.rare)} :mouse2: (rare)` }, 
        )     
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);

        
        const constructionEmbed = new MessageEmbed()
        .setColor('#ffffff')
        .setDescription ('Send your rats to build roads and houses .')
        .setURL('https://cdn.discordapp.com/attachments/913357314533249094/914001562332971078/EVfbj3gXkAAGRGn.png')
        .setAuthor('LABORATORY 3', 'https://cdn.discordapp.com/attachments/913357314533249094/913997167390232596/rat.png')
        .setThumbnail(`https://cdn.discordapp.com/attachments/913357314533249094/914385552403484692/pngegg_4.png`)
        
        .addFields(
             { name:'Infrastructure  : :hammer_pick:  `$r construction` ', value: `- Price : \`${INF.format(profileData.lab.jobs.construction.price)}\` :beaver: \n- Reward: **${profileData.lab.jobs.construction.reward}** :bricks:  \n `},
            
            { name: '\u200B', value: `You have : ${INF.format(profileData.ratInv.epic)} :beaver: (epic)` }, 
        )     
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);


        const mutationEmbed = new MessageEmbed()
        .setColor('#ffffff')
        .setDescription ('Perform cruel experiments on your rats to get new generations of better rats.')
        .setURL('https://cdn.discordapp.com/attachments/913357314533249094/914001562332971078/EVfbj3gXkAAGRGn.png')
        .setAuthor('LABORATORY 4', 'https://cdn.discordapp.com/attachments/913357314533249094/913997167390232596/rat.png')
        .setThumbnail(`https://cdn.discordapp.com/attachments/913357314533249094/914385552403484692/pngegg_4.png`)
        
        .addFields(
            { name:'Experiment  : :dna: `$r mutation` ', value: `- Price : \`${INF.format(profileData.lab.jobs.mutation.price)}\` :rabbit2: \n- Reward: **${profileData.lab.jobs.mutation.reward}** :gem:\n `},
            
            { name: '\u200B', value: `You have : ${INF.format(profileData.ratInv.exotic)} :rabbit2: (exotic)` }, 
        )     
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);



        const genocideEmbed = new MessageEmbed()
        .setColor('#ffffff')
        .setDescription ('Commit the ULTIMATE SIN - killing a rat.')
        .setURL('https://cdn.discordapp.com/attachments/913357314533249094/914001562332971078/EVfbj3gXkAAGRGn.png')
        .setAuthor('LABORATORY 5', 'https://cdn.discordapp.com/attachments/913357314533249094/913997167390232596/rat.png')
        .setThumbnail(`https://cdn.discordapp.com/attachments/913357314533249094/914385552403484692/pngegg_4.png`)
        
        .addFields(

            { name:'Genocide  : :drop_of_blood:  `$r kill` ', value: `- Price : \`${INF.format(profileData.lab.jobs.kill.price)}\` :bat: \n- Reward: **${profileData.lab.jobs.kill.reward}** :apple:\n `},    
            
            { name: '\u200B', value: `You have : ${INF.format(profileData.ratInv.legendary)} :bat: (legendary)` }, 
        )     
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);



        

       
        
        
       
       
       
       
            let msg;
            

                if (args[0]== "2")  msg = await message.channel.send({ embeds: [expeditionEmbed], components: [rowLab2] });
                else
                if (args[0]== "3")  msg = await message.channel.send({ embeds: [constructionEmbed], components: [rowLab3] });
                else
                if (args[0]== "4")  msg = await message.channel.send({ embeds: [mutationEmbed], components: [rowLab4] });
                else
                if (args[0]== "5")  msg = await message.channel.send({ embeds: [genocideEmbed], components: [rowLab5] });
                else
                msg = await message.channel.send({ embeds: [circusEmbed], components: [rowLab1] });

            const collector = msg.createMessageComponentCollector({componentType: 'BUTTON', time: 1500000 });

                
            collector.on('collect', async i => { 
                if(i.user.id!=message.author.id) return
                
                if (i.customId === 'previous1') {
                    await i.update({ embeds: [genocideEmbed], components: [rowLab5] });
                }
                if (i.customId === 'next1') {
                    await i.update({ embeds: [expeditionEmbed], components: [rowLab2] });
                }
                

                if (i.customId === 'previous2') {
                    await i.update({ embeds: [circusEmbed], components: [rowLab1] });
                }
                if (i.customId === 'next2') {
                    await i.update({ embeds: [constructionEmbed], components: [rowLab3] });
                }
                
                if (i.customId === 'previous3') {
                    await i.update({ embeds: [expeditionEmbed], components: [rowLab2] });
                }
                if (i.customId === 'next3') {
                    await i.update({ embeds: [mutationEmbed], components: [rowLab4] });
                }
                
                if (i.customId === 'previous4') {
                    await i.update({ embeds: [constructionEmbed], components: [rowLab3] });
                }
                if (i.customId === 'next4') {
                    await i.update({ embeds: [genocideEmbed], components: [rowLab5] });
                }
                

                if (i.customId === 'previous5') {
                    await i.update({ embeds: [mutationEmbed], components: [rowLab4] });
                }
                if (i.customId === 'next5') {
                    await i.update({ embeds: [circusEmbed], components: [rowLab1] });
                }
                
            });
          
    }
}

