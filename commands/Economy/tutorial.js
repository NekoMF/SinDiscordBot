const { MessageActionRow, MessageButton,MessageEmbed  } = require('discord.js');


module.exports = {
    name: 'tutorial',
    aliases: ["t"],
    category: 'economy',
    description: ":microscope: Enters the laboratory!",
    async execute(message, args, client, Discord, profileData){


        INF = new Intl.NumberFormat('en-US')


        const rowTutorial1 = new MessageActionRow()
			.addComponents(
            
                new MessageButton()
                .setCustomId('page1')
                .setLabel('1')
                .setStyle('PRIMARY'),
                new MessageButton()
                .setCustomId('page2')
                .setLabel('2')
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('page3')
                .setLabel('3')
                .setStyle('SECONDARY'),
                
			);
        const rowTutorial2 = new MessageActionRow()
			.addComponents(
            
                new MessageButton()
                .setCustomId('page1')
                .setLabel('1')
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('page2')
                .setLabel('2')
                .setStyle('PRIMARY'),
                new MessageButton()
                .setCustomId('page3')
                .setLabel('3')
                .setStyle('SECONDARY'),
                
			);    

        const rowTutorial3 = new MessageActionRow()
			.addComponents(
            
                new MessageButton()
                .setCustomId('page1')
                .setLabel('1')
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('page2')
                .setLabel('2')
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('page3')
                .setLabel('3')
                .setStyle('PRIMARY'),
                
			);

        


        const tutorialEmbed1 = new MessageEmbed()
        .setColor('#ffffff')
        .setAuthor('Ratvisor', 'https://cdn.discordapp.com/attachments/913357314533249094/913997167390232596/rat.png')
        .setTitle(':book: Tutorial :book:')
        .addFields(
            { name:':beginner: About Rattus Bot :', value: `Start a new adventure in the search of the **RAT** crown :crown: ! Be the one to discover the great secrets of RATLANDIA :map: ! \n\n\n||**May the rats be with you!** :rat: :rat: :rat:||` },
            
        )     
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
        


        const tutorialEmbed2 = new MessageEmbed()
        .setColor('#ffffff')
        .setAuthor('Ratvisor ', 'https://cdn.discordapp.com/attachments/913357314533249094/913997167390232596/rat.png')
        .setTitle(':book: Tutorial :book:')
        .addFields(
            { name:':beginner: The basics :', value: `Your best friends in this adventure are the ***RATS*** :rat: . Use \`$dig\` to gather more.\n\n Check your amount of rats with \`$rat\`:basket: .\n\n Your rats can work and bring you coins :coin: and other resources from \`$laboratory\`:microscope:  ` },
            
        )     
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
        
        
        const tutorialEmbed3 = new MessageEmbed()
        .setColor('#ffffff')
        .setAuthor('Ratvisor', 'https://cdn.discordapp.com/attachments/913357314533249094/913997167390232596/rat.png')
        .setTitle(':book: Tutorial :book:')
        .addFields(
            { name:':beginner: Advanced :', value: `After gathering some coins :coin: in \`$laboratory\` run \`$shop\` and select the Items :mouse_trap: shop. Use the \`$buy\` command (as shown) to get yourself some items.\n\nThese items will increase :mechanical_arm: the rat amount you find with \`$dig\`. \n\n\nAlso in Shop you can find the Location :map: , Buildings :bricks: and Other :gem: sections.\n\nFor a full list of commands use \`$help\` :grey_question: ` },
            
        )     
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
        

       


        


        

       
        
        
       
       
       
       
            let msg = await message.channel.send({ embeds: [tutorialEmbed1], components: [rowTutorial1] });

            const collector = msg.createMessageComponentCollector({componentType: 'BUTTON', time: 1500000 });

                
            collector.on('collect', async i => { 
                if(i.user.id!=message.author.id) return
                
                
                if (i.customId === 'page1') {
                    await i.update({ embeds: [tutorialEmbed1], components: [rowTutorial1] });
                }
                if (i.customId === 'page2') {
                    await i.update({ embeds: [tutorialEmbed2], components: [rowTutorial2] });
                }
                if (i.customId === 'page3') {
                    await i.update({ embeds: [tutorialEmbed3], components: [rowTutorial3] });
                }
                

                
                

                
                
            });
          
    }
}

