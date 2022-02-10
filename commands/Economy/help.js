const { MessageActionRow, MessageButton,MessageEmbed  } = require('discord.js');

module.exports = {
    name: 'help',
    category: 'economy',
    description: "Shows your inventory :file_cabinet: !",
    async execute(message, args, client, Discord, profileData){

        INF = new Intl.NumberFormat('en-US');



            const rowHelp1 = new MessageActionRow()
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
                new MessageButton()
                .setCustomId('page4')
                .setLabel('4')
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('page5')
                .setLabel('5')
                .setStyle('SECONDARY'),
			);
            const rowHelp2 = new MessageActionRow()
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
                new MessageButton()
                .setCustomId('page4')
                .setLabel('4')
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('page5')
                .setLabel('5')
                .setStyle('SECONDARY'),
			);
            const rowHelp3 = new MessageActionRow()
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
                new MessageButton()
                .setCustomId('page4')
                .setLabel('4')
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('page5')
                .setLabel('5')
                .setStyle('SECONDARY'),
			);
            const rowHelp4 = new MessageActionRow()
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
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('page4')
                .setLabel('4')
                .setStyle('PRIMARY'),
                new MessageButton()
                .setCustomId('page5')
                .setLabel('5')
                .setStyle('SECONDARY'),
			);
            const rowHelp5 = new MessageActionRow()
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
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('page4')
                .setLabel('4')
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('page5')
                .setLabel('5')
                .setStyle('PRIMARY'),
			);                

       

        const helpEmbed1 = new MessageEmbed()
			.setColor('#ffffff')
            .setTitle (`:grey_question: HELP 1 :grey_question: `)
            .addFields(
                {name:`:card_index:\`$profile\``, value:'Checks your profile. Your profile displays information about your level, wallet, current location. Also it includes the Status ,Collections and Achievements menus. \n *Aliases: $p $prof*'},
                {name:`:briefcase:\`$balance\``, value:'Checks your balance, including : coins :coin: , lotus :white_flower: , bricks :bricks: , diamonds :gem: , sins :apple: . \n *Aliases: $b $bal $wallet $wall*'},
                {name:`:pick:\`$dig\``, value:'Digs in the ground to find different types of rats! \n *Aliases: $d*'},
                {name:`:shopping_bags:\`$shop\``, value:'Opens the Main Shop which contains : items , locations, buildings and other stuff. \n *Aliases: $s*'},
                {name:`:rat:\`$rat\``, value:'Checks your rat inventory.\n *Aliases: $ra*'},
                {name:`:file_cabinet:\`$inventory\``, value:'Checks your item inventory.\n *Aliases: $inv $i*'},
               

            )    
			.setTimestamp()
            .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
        
        const helpEmbed2 = new MessageEmbed()
			.setColor('#ffffff')
            .setTitle (`:grey_question: HELP 2 :grey_question: `)
            .addFields(
                {name:`:microscope: \`$laboratory\``, value:'Get your rats some jobs and earn resources.\n *Aliases: $lab $l*'},
                {name:`:earth_africa: \`$location\``, value:'Checks your current location.\n *Aliases: $loc*'},
                {name:`:map:\`$map |max\``, value:'Checks your current location on the map.\n *Aliases: $m*'},
                {name:`:bank:\`$bank\``, value:'Checks your bank where you can store coins :coin: and diamonds :gem:'},
                {name:`:inbox_tray:\`$deposit [coins|diamonds] [amount]\``, value:'Deposits coins or diamonds in your bank.\n *Aliases: $dep*'},
                {name:`:outbox_tray:\`$withdraw [coins|diamonds] [amount]\``, value:'Withdraws coins or diamonds from your bank.\n *Aliases: $wd*'},
                

            )    
			.setTimestamp()
            .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);

            const helpEmbed3 = new MessageEmbed()
			.setColor('#ffffff')
            .setTitle (`:grey_question: HELP 3 :grey_question: `)
            .addFields(
                {name:`:fleur_de_lis: \`$level\``, value:'Displays your current level.\n *Aliases: $rank*'},
                {name:`:man_mountain_biking:\`$travel [location_name]\``, value:'Travel from a location to another.\n *Aliases: $tr*'},
                {name:`:shopping_cart: \`$buy [item_name] [amount|max]\``, value:'Buy items from the Item Shop :mouse_trap:'},
                {name:`:bar_chart: \`$leaderboard\``, value:'Displays your position on the global leaderboard  \n *Aliases: $lb*'},
                {name:`:grey_question:\`$help\``, value:'Displays the full list of bot commands.'},
                {name:`:dna: \`$research [job_name]\``, value:'Engages your rats into different jobs for rewards.\n *Aliases: $r*'},

            )    
			.setTimestamp()
            .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
            
            const helpEmbed4 = new MessageEmbed()
			.setColor('#ffffff')
            .setTitle (`:grey_question: HELP 4 :grey_question: `)
            .addFields(
                {name:`:8ball: \`$8ball [question]\``, value:'Asks a question and the bot determines the answer.\n *Aliases: $8*'},
                

            )    
			.setTimestamp()
            .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);

            const helpEmbed5 = new MessageEmbed()
			.setColor('#ffffff')
            .setTitle (`:grey_question: HELP 5 :grey_question: `)
            .addFields(
                {name:`\u200b`, value:'\u200b'},

            )    
			.setTimestamp()
            .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);



                

			const msg = await message.channel.send({ embeds: [helpEmbed1], components: [rowHelp1] });


            const collector = msg.createMessageComponentCollector({componentType: 'BUTTON', time: 1500000 });
      
                
            collector.on('collect', async i => { 
                if(i.user.id!=message.author.id) return   
                
                
                if (i.customId === 'page1') {
                    await i.update({ embeds: [helpEmbed1], components: [rowHelp1] });
                }
                if (i.customId === 'page2') {
                    await i.update({ embeds: [helpEmbed2], components: [rowHelp2] });
                }
                if (i.customId === 'page3') {
                    await i.update({ embeds: [helpEmbed3], components: [rowHelp3] });
                }
                if (i.customId === 'page4') {
                    await i.update({ embeds: [helpEmbed4], components: [rowHelp4] });
                }
                if (i.customId === 'page5') {
                    await i.update({ embeds: [helpEmbed5], components: [rowHelp5] });
                }
             });

    
    }
}

