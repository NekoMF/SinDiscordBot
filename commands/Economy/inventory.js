const { MessageActionRow, MessageButton,MessageEmbed  } = require('discord.js');

module.exports = {
    name: 'inventory',
    aliases: ['inv','i'],
    category: 'economy',
    description: "Shows your inventory :file_cabinet: !",
    async execute(message, args, client, Discord, profileData){

        INF = new Intl.NumberFormat('en-US');



        const rowInv1 = new MessageActionRow()
			.addComponents(
                new MessageButton()
                .setCustomId('page1')
                .setLabel('PAGE 1')
                .setStyle('PRIMARY'),
                new MessageButton()
                .setCustomId('page2')
                .setLabel('PAGE 2')
                .setStyle('SECONDARY'),
			);

        const rowInv2 = new MessageActionRow()
			.addComponents(
                new MessageButton()
                .setCustomId('page1')
                .setLabel('PAGE 1')
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('page2')
                .setLabel('PAGE 2')
                .setStyle('PRIMARY'),
				        
			);

        const mainInvEmbed1 = new MessageEmbed()
			.setColor('#ffffff')
            .setTitle (`:file_cabinet:  ${message.author.username}'s INVENTORY *page 1*`)
            .addFields(
                {name:`__Cheese__  :cheese: : \`${INF.format(profileData.items.Cheese.amount)}\``, value:'\u200b'},
                {name:`__Trap__  :mouse_trap: : \`${INF.format(profileData.items.MouseTrap.amount)}\``, value:'\u200b'},
                {name:`__Rice__  :ear_of_rice: : \`${INF.format(profileData.items.Rice.amount)}\``, value:'\u200b'},
                
                {name:`__Bread__  :bread: : \`${INF.format(profileData.items.Bread.amount)}\``, value:'\u200b'},
                {name:`__Books__  :books: : \`${INF.format(profileData.items.Books.amount)}\``, value:'\u200b'},   
            )    
			.setTimestamp()
            .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);

        const mainInvEmbed2 = new MessageEmbed()
			.setColor('#ffffff')
            .setTitle (`:file_cabinet:  ${message.author.username}'s INVENTORY *page 2*`)
            .addFields(

                {name:`__Peanut__  :peanuts: : \`${INF.format(profileData.items.Peanut.amount)}\``, value:'\u200b'},
                {name:`__Corn__  :corn: : \`${INF.format(profileData.items.Corn.amount)}\``, value:'\u200b'},
                {name:`__Cat__  :cat2: : \`${INF.format(profileData.items.Cat.amount)}\``, value:'\u200b'},
                {name:`__Tiger__  :tiger2: : \`${INF.format(profileData.items.Tiger.amount)}\``, value:'\u200b'},
                {name:`__Pizza__  :pizza: : \`${INF.format(profileData.items.Pizza.amount)}\``, value:'\u200b'},  
            )    
			.setTimestamp()
            .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);    



                

			const msg = await message.channel.send({ embeds: [mainInvEmbed1], components: [rowInv1] });


            const collector = msg.createMessageComponentCollector({componentType: 'BUTTON', time: 1500000 });
      
                
            collector.on('collect', async i => { 
                if(i.user.id!=message.author.id) return   
                if (i.customId === 'page2') {
                    await i.update({ embeds: [mainInvEmbed2], components: [rowInv2] });
                }
                
                if (i.customId === 'page1') {
                    await i.update({ embeds: [mainInvEmbed1], components: [rowInv1] });
                }
             });

    
    }
}

