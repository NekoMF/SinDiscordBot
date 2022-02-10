const profileModel = require("../../models/profileSchema");
const {MessageEmbed} = require('discord.js');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

module.exports = {
    name: "research",
    category: 'economy',
    aliases: ["r"],
    usage: '$<buy> <id_name> <amount>',
    cooldown: 1,
    permissions: [],
    description: "Buy items from :shopping_bags: SHOP:shopping_bags: !",
    async execute(message, args, client, Discord, profileData) {


        INF = new Intl.NumberFormat('en-US');
        
        const exampleEmbed = new MessageEmbed()
            .setColor('#ffffff')
            .setTimestamp()
            .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
        
        if (args[0]==="circus") {

            const price = profileData.lab.jobs.circus.price;
                    
            if (price > profileData.ratInv.common) {
                exampleEmbed.fields.push ({
                name: ` You don't have enough rat :rat: for that  `,
                value: `\u200b`
            })
                return message.reply({embeds: [exampleEmbed]});
            }

            else {
                    
                
                let rewardX = profileData.level.value;
                let rewardY = Math.floor(1.28025*Math.pow(rewardX,2.38878)) ;
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
                    ) +1 ) * (0.0154814*Math.pow(rewardX,2)+20));
                    //);

                await profileModel.findOneAndUpdate({
                    userID: message.author.id,
                },
                {
                    $inc: {
                        'ratInv.common': -price,
                        coins: rewardY,
                         
                    },
                    $set: {
                        'lab.jobs.circus.price' : costY,
                        'lab.jobs.circus.reward' :  rewardY,
                    },        
                });

                exampleEmbed.fields.push ({
                    name: ` You received \`${INF.format(rewardY)}\` coins :coin: by training \`${profileData.lab.jobs.circus.price}\` :rat: in Circus :circus_tent:`,
                    value: `\u200b`
                })
                return message.channel.send({ embeds: [exampleEmbed]});
            }
        
        }
        
        if (args[0]==="explore") {

            const price = profileData.lab.jobs.explore.price;
                    
            if (price > profileData.ratInv.rare) {
                exampleEmbed.fields.push ({
                name: ` You don't have enough rat :mouse2: for that  `,
                value: `\u200b`
            })
                return message.reply({embeds: [exampleEmbed]});
            }

            else {
                let exploreReward = profileData.lab.jobs.explore.reward + 1;          
                let costY = Math.floor((
                    profileData.items.Cheese.amount*0.005*1/100 + 
                    profileData.items.MouseTrap.amount*0.005*5/100 +
                    profileData.items.Rice.amount*0.005*10/100 +
                    profileData.items.Bread.amount*0.005*50/100 +
                    profileData.items.Books.amount*0.005*250/100 +
                    profileData.items.Peanut.amount*0.005*1000/100 +
                    profileData.items.Corn.amount*0.005*5000/100 +
                    profileData.items.Cat.amount*0.005*15000/100 +
                    profileData.items.Tiger.amount*0.005*30000/100 +
                    profileData.items.Pizza.amount*0.005*69000/100 
                    
                    )  * (1.58542*Math.pow(exploreReward,1.3344)+1.33724));                     

                await profileModel.findOneAndUpdate({
                    userID: message.author.id,
                },
                {
                    $inc: {
                        'ratInv.rare': -price,
                        lotus: exploreReward, 
                        'lab.jobs.explore.reward' : 1,
                    }, 
                    
                    $set: {

                        'lab.jobs.explore.price' : costY
                    }
                });
                
                exampleEmbed.fields.push ({
                    name: ` You received \`${profileData.lab.jobs.explore.reward}\` lotus :white_flower: by sending \`${profileData.lab.jobs.explore.price}\` :mouse2: to explore the world :map:`,
                    value: `\u200b`
                })
                return message.channel.send({ embeds: [exampleEmbed]});
            }
        
        }

        // if (args[0]==="construction") {

        //     const price = profileData.lab.jobs.construction.price;
        
        //     const exampleEmbed = new MessageEmbed()
        //     .setColor('#ffffff')
        //     .setTimestamp()
        //     .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                    
        //     if (price > profileData.ratInv.epic) {
        //         exampleEmbed.fields.push ({
        //         name: ` You don't have enough rat :beaver: for that  `,
        //         value: `\u200b`
        //     })
        //         return message.reply({embeds: [exampleEmbed]});
        //     }

        //     else {
                    
                 
        //         let rewardX = profileData.level.value;
        //         let rewardY = Math.floor(1.28025*Math.pow(rewardX,2.38878)) ;
        //         let costY = Math.floor((
        //             profileData.items.Cheese.amount*0.5*0.0001*1/100 + 
        //             profileData.items.MouseTrap.amount*0.5*0.0001*5/100 +
        //             profileData.items.Rice.amount*0.5*0.0001*10/100 +
        //             profileData.items.Bread.amount*0.5*0.0001*50/100 +
        //             profileData.items.Books.amount*0.5*0.0001*250/100 +
        //             profileData.items.Peanut.amount*0.5*0.0001*1000/100 +
        //             profileData.items.Corn.amount*0.5*0.0001*5000/100 +
        //             profileData.items.Cat.amount*0.5*0.0001*15000/100 +
        //             profileData.items.Tiger.amount*0.5*0.0001*30000/100 +
        //             profileData.items.Pizza.amount*0.5*0.0001*69000/100 
                    
        //             )* (0.0154814*Math.pow(rewardX,2)+20));
        //             //);

        //         await profileModel.findOneAndUpdate({
        //             userID: message.author.id,
        //         },
        //         {
        //             $inc: {
        //                 'ratInv.epic': -price,
        //                 bricks: rewardY,
                        
                        
        //             },
        //             $set: {
        //                 'lab.jobs.construction.price' : costY,
        //                 'lab.jobs.construction.reward' :  rewardY,
        //             },        
        //         });

        //         exampleEmbed.fields.push ({
        //             name: ` You received \`${INF.format(rewardY)}\` bricks :bricks: by making \`${profileData.lab.jobs.construction.price}\` :beaver: build a rat house :hammer_pick:`,
        //             value: `\u200b`
        //         })
        //         return message.channel.send({ embeds: [exampleEmbed]});
        //     }
        
        // }
        
        // if (args[0]==="mutation") {

        //     const price = profileData.lab.jobs.mutation.price;
        
        //     const exampleEmbed = new MessageEmbed()
        //     .setColor('#ffffff')
        //     .setTimestamp()
        //     .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                    
        //     if (price > profileData.ratInv.exotic) {
        //         exampleEmbed.fields.push ({
        //         name: ` You don't have enough rat :rabbit2: for that  `,
        //         value: `\u200b`
        //     })
        //         return message.reply({embeds: [exampleEmbed]});
        //     }

        //     else {
                    
                
        //         let rewardX = profileData.level.value;
        //         let rewardY = Math.floor(1.28025*Math.pow(rewardX,2.38878)) ;
        //         let costY = Math.floor((
        //             profileData.items.Cheese.amount*0.5*0.000001*1/100 + 
        //             profileData.items.MouseTrap.amount*0.5*0.000001*5/100 +
        //             profileData.items.Rice.amount*0.5*0.000001*10/100 +
        //             profileData.items.Bread.amount*0.5*0.000001*50/100 +
        //             profileData.items.Books.amount*0.5*0.000001*250/100 +
        //             profileData.items.Peanut.amount*0.5*0.000001*1000/100 +
        //             profileData.items.Corn.amount*0.5*0.000001*5000/100 +
        //             profileData.items.Cat.amount*0.5*0.000001*15000/100 +
        //             profileData.items.Tiger.amount*0.5*0.000001*30000/100 +
        //             profileData.items.Pizza.amount*0.5*0.000001*69000/100 
                    
        //             )* (0.0154814*Math.pow(rewardX,2)+20));
        //             //);

        //         await profileModel.findOneAndUpdate({
        //             userID: message.author.id,
        //         },
        //         {
        //             $inc: {
        //                 'ratInv.exotic': -price,
        //                 diamonds: rewardY,
                        
                        
        //             },
        //             $set: {
        //                 'lab.jobs.mutation.price' : costY,
        //                 'lab.jobs.mutation.reward' :  rewardY,
        //             },        
        //         });

        //         exampleEmbed.fields.push ({
        //             name: ` You received \`${INF.format(rewardY)}\` diamonds :gem: by selling \`${profileData.lab.jobs.mutation.price}\` mutated :rabbit2: in farms :dna:`,
        //             value: `\u200b`
        //         })
        //         return message.channel.send({ embeds: [exampleEmbed]});
        //     }
        
        // }

        // if (args[0]==="kill") {

        //     const price = profileData.lab.jobs.kill.price;
        
        //     const exampleEmbed = new MessageEmbed()
        //     .setColor('#ffffff')
        //     .setTimestamp()
        //     .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                    
        //     if (price > profileData.ratInv.legendary) {
        //         exampleEmbed.fields.push ({
        //         name: ` You don't have enough rat :bat: for that  `,
        //         value: `\u200b`
        //     })
        //         return message.reply({embeds: [exampleEmbed]});
        //     }

        //     else {
                    
                
        //         let rewardX = profileData.level.value;
        //         let rewardY = Math.floor(1.28025*Math.pow(rewardX,2.38878)) ;
        //         let costY = Math.floor((
        //             profileData.items.Cheese.amount*0.5*0.00000001*1/100 + 
        //             profileData.items.MouseTrap.amount*0.5*0.00000001*5/100 +
        //             profileData.items.Rice.amount*0.5*0.00000001*10/100 +
        //             profileData.items.Bread.amount*0.5*0.00000001*50/100 +
        //             profileData.items.Books.amount*0.5*0.00000001*250/100 +
        //             profileData.items.Peanut.amount*0.5*0.00000001*1000/100 +
        //             profileData.items.Corn.amount*0.5*0.00000001*5000/100 +
        //             profileData.items.Cat.amount*0.5*0.00000001*15000/100 +
        //             profileData.items.Tiger.amount*0.5*0.00000001*30000/100 +
        //             profileData.items.Pizza.amount*0.5*0.00000001*69000/100 
                    
        //             )* (0.0154814*Math.pow(rewardX,2)+20));
        //             //);

        //         await profileModel.findOneAndUpdate({
        //             userID: message.author.id,
        //         },
        //         {
        //             $inc: {
        //                 'ratInv.legendary': -price,
        //                 sins: rewardY,
                        
                        
        //             },
        //             $set: {
        //                 'lab.jobs.kill.price' : costY,
        //                 'lab.jobs.kill.reward' :  rewardY,
        //             },        
        //         });

        //         exampleEmbed.fields.push ({
        //             name: ` You received \`${INF.format(rewardY)}\`sins :apple: by killing \`${profileData.lab.jobs.kill.price}\` :bat: with cruelty :drop_of_blood:`,
        //             value: `\u200b`
        //         })
        //         return message.channel.send({ embeds: [exampleEmbed]});
        //     }
        
        // }

            
    }
}