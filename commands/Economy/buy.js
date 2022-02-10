const profileModel = require("../../models/profileSchema");
const {
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: "buy",
    category: 'economy',
    usage: '$<buy> <id_name> <amount>',
    permissions: [],
    description: "Buy items from :shopping_bags: SHOP:shopping_bags: !",


    async execute(message, args, client, Discord, profileData) {
        INF = new Intl.NumberFormat('en-US');
        let a=args;
        a[0]=a[0].toLowerCase();

        let amount = args[1];
        let id = args[0];
        if (!amount) amount = 1;
        
        

        if (!id) {
            const exampleEmbed = new MessageEmbed()
                .setColor('#ffffff')
                .addFields({
                    name: ` Follow the correct syntax : $<buy> <id_name> <amount>  `,
                    value: `<amount> can be "max" too.`
                }, )
                .setTimestamp()
                .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
            return message.reply({
                embeds: [exampleEmbed]
            });
        }
        switch (id) {
        case "cat": {

            let fkHELL=0;
            
            if (args[1]==="max"){
                if(profileData.items.Cat.amount + Math.floor(profileData.coins / profileData.items.Cat.buyPrice) > profileData.items.Cat.maxAmount ){
                    amount = profileData.items.Cat.maxAmount - profileData.items.Cat.amount;
                    if (amount === 0){
                         fkHELL=1;
                    } 
                }
                else
                amount = Math.floor(profileData.coins / profileData.items.Cat.buyPrice) ;
            }
               
            if ( parseInt(profileData.items.Cat.amount) + parseInt(amount) > profileData.items.Cat.maxAmount || fkHELL){
                
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` Looks like your storage can hold only \`${INF.format(profileData.items.Cat.maxAmount)}\` Cats :cat2:  `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.reply({
                    embeds: [exampleEmbed]
                });
            }
                const price = amount * profileData.items.Cat.buyPrice;
                
                if (amount % 1 != 0 || args[1] <= 0 ) {
                    const exampleEmbed = new MessageEmbed()
                        .setColor('#ffffff')
                        .addFields({
                            name: ` Please use a positive integer. `,
                            value: `\u200b`
                        }, )
                        .setTimestamp()
                        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                    return message.reply({
                        embeds: [exampleEmbed]
                    });
                }
                if (price > profileData.coins || price == 0) {
                    const exampleEmbed = new MessageEmbed()
                        .setColor('#ffffff')
                        .addFields({
                            name: ` You don't have enough coins :coin: for that  `,
                            value: `\u200b`
                        }, )
                        .setTimestamp()
                        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                    return message.reply({
                        embeds: [exampleEmbed]
                    });
                } else {
                    await profileModel.findOneAndUpdate({
                        userID: message.author.id,
                    }, {
                        $inc: {
                            coins: -price,
                            "items.Cat.amount": amount



                        },
                    });
                    const exampleEmbed = new MessageEmbed()
                        .setColor('#ffffff')
                        .addFields({
                            name: ` you bought \`${amount}\` cats :cat2:  `,
                            value: `\u200b`
                        }, )
                        .setTimestamp()
                        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                    return message.channel.send({
                        embeds: [exampleEmbed]
                    });
                }

            }
            break;

        case "trap": {
            let fkHELL=0;
            
            if (args[1]==="max"){
                if(profileData.items.MouseTrap.amount + Math.floor(profileData.coins / profileData.items.MouseTrap.buyPrice) > profileData.items.MouseTrap.maxAmount ){
                    amount = profileData.items.MouseTrap.maxAmount - profileData.items.MouseTrap.amount;
                    if (amount === 0){
                         fkHELL=1;
                    } 
                }
                else
                amount = Math.floor(profileData.coins / profileData.items.MouseTrap.buyPrice) ;
            }
               
            if ( parseInt(profileData.items.MouseTrap.amount) + parseInt(amount) > profileData.items.MouseTrap.maxAmount || fkHELL){
                
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` Looks like your storage can hold only \`${INF.format(profileData.items.MouseTrap.maxAmount)}\` Traps :mouse_trap:  `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.reply({
                    embeds: [exampleEmbed]
                });
            }
           
            const price = amount * profileData.items.MouseTrap.buyPrice;
            // console.log(price);
            if (amount % 1 != 0 || args[1] <= 0 )  {
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` Please use a positive integer. `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.reply({
                    embeds: [exampleEmbed]
                });
            }
            if (price > profileData.coins || price == 0) {
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` You don't have enough coins :coin: for that  `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.reply({
                    embeds: [exampleEmbed]
                });
            } else {
                await profileModel.findOneAndUpdate({
                    userID: message.author.id,
                }, {
                    $inc: {
                        coins: -price,
                        "items.MouseTrap.amount": amount,
                    },
                });
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` you bought \`${amount}\` traps :mouse_trap:  `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.channel.send({
                    embeds: [exampleEmbed]
                });
            }

        }
        break;

        case "rice": {
            let fkHELL=0;
            
            if (args[1]==="max"){
                if(profileData.items.Rice.amount + Math.floor(profileData.coins / profileData.items.Rice.buyPrice) > profileData.items.Rice.maxAmount ){
                    amount = profileData.items.Rice.maxAmount - profileData.items.Rice.amount;
                    if (amount === 0){
                         fkHELL=1;
                    } 
                }
                else
                amount = Math.floor(profileData.coins / profileData.items.Rice.buyPrice) ;
            }
               
            if ( parseInt(profileData.items.Rice.amount) + parseInt(amount) > profileData.items.Rice.maxAmount || fkHELL){
                
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` Looks like your storage can hold only \`${INF.format(profileData.items.Rice.maxAmount)}\` Rice :ear_of_rice:  `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.reply({
                    embeds: [exampleEmbed]
                });
            }
            const price = amount * profileData.items.Rice.buyPrice;
            if (amount % 1 != 0 || args[1] <= 0 ) {
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` Please use a positive integer. `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.reply({
                    embeds: [exampleEmbed]
                });
            }
            if (price > profileData.coins || price == 0) {
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` You don't have enough coins :coin: for that  `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.reply({
                    embeds: [exampleEmbed]
                });
            } else {
                await profileModel.findOneAndUpdate({
                    userID: message.author.id,
                }, {
                    $inc: {
                        coins: -price,
                        "items.Rice.amount": amount



                    },
                });
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` you bought \`${amount}\` rice :ear_of_rice:  `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.channel.send({
                    embeds: [exampleEmbed]
                });
            }

        }
        break;

        case "tiger": {
            let fkHELL=0;
            
            if (args[1]==="max"){
                if(profileData.items.Tiger.amount + Math.floor(profileData.coins / profileData.items.Tiger.buyPrice) > profileData.items.Tiger.maxAmount ){
                    amount = profileData.items.Tiger.maxAmount - profileData.items.Tiger.amount;
                    if (amount === 0){
                         fkHELL=1;
                    } 
                }
                else
                amount = Math.floor(profileData.coins / profileData.items.Tiger.buyPrice) ;
            }
               
            if ( parseInt(profileData.items.Tiger.amount) + parseInt(amount) > profileData.items.Tiger.maxAmount || fkHELL){
                
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` Looks like your storage can hold only \`${INF.format(profileData.items.Tiger.maxAmount)}\` Tigers :tiger2:  `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.reply({
                    embeds: [exampleEmbed]
                });
            }
            const price = amount * profileData.items.Tiger.buyPrice;
            if (amount % 1 != 0 || args[1] <= 0 ) {
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` Please use a positive integer. `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.reply({
                    embeds: [exampleEmbed]
                });
            }
            if (price > profileData.coins || price == 0) {
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` You don't have enough coins :coin: for that  `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.reply({
                    embeds: [exampleEmbed]
                });
            } else {
                await profileModel.findOneAndUpdate({
                    userID: message.author.id,
                }, {
                    $inc: {
                        coins: -price,
                        "items.Tiger.amount": amount



                    },
                });
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` you bought \`${amount}\` tigers :tiger2:  `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.channel.send({
                    embeds: [exampleEmbed]
                });
            }

        }
        break;

        case "pizza": {
            let fkHELL=0;
            
            if (args[1]==="max"){
                if(profileData.items.Pizza.amount + Math.floor(profileData.coins / profileData.items.Pizza.buyPrice) > profileData.items.Pizza.maxAmount ){
                    amount = profileData.items.Pizza.maxAmount - profileData.items.Pizza.amount;
                    if (amount === 0){
                         fkHELL=1;
                    } 
                }
                else
                amount = Math.floor(profileData.coins / profileData.items.Pizza.buyPrice) ;
            }
               
            if ( parseInt(profileData.items.Pizza.amount) + parseInt(amount) > profileData.items.Pizza.maxAmount || fkHELL){
                
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` Looks like your storage can hold only \`${INF.format(profileData.items.Pizza.maxAmount)}\` Pizza :pizza:  `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.reply({
                    embeds: [exampleEmbed]
                });
            }
            const price = amount * profileData.items.Pizza.buyPrice;
            if (amount % 1 != 0 || args[1] <= 0 ) {
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` Please use a positive integer. `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.reply({
                    embeds: [exampleEmbed]
                });
            }
            if (price > profileData.coins || price == 0) {
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` You don't have enough coins :coin: for that  `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.reply({
                    embeds: [exampleEmbed]
                });
            } else {
                await profileModel.findOneAndUpdate({
                    userID: message.author.id,
                }, {
                    $inc: {
                        coins: -price,
                        "items.Pizza.amount": amount



                    },
                });
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` you bought \`${amount}\` pizza :pizza:  `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.channel.send({
                    embeds: [exampleEmbed]
                });
            }

        }
        break;

        case "corn": {
            let fkHELL=0;
            
            if (args[1]==="max"){
                if(profileData.items.Corn.amount + Math.floor(profileData.coins / profileData.items.Corn.buyPrice) > profileData.items.Corn.maxAmount ){
                    amount = profileData.items.Corn.maxAmount - profileData.items.Corn.amount;
                    if (amount === 0){
                         fkHELL=1;
                    } 
                }
                else
                amount = Math.floor(profileData.coins / profileData.items.Corn.buyPrice) ;
            }
               
            if ( parseInt(profileData.items.Corn.amount) + parseInt(amount) > profileData.items.Corn.maxAmount || fkHELL){
                
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` Looks like your storage can hold only \`${INF.format(profileData.items.Corn.maxAmount)}\` Corn :corn:  `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.reply({
                    embeds: [exampleEmbed]
                });
            }
            const price = amount * profileData.items.Corn.buyPrice;
            if (amount % 1 != 0 || args[1] <= 0 ) {
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` Please use a positive integer. `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.reply({
                    embeds: [exampleEmbed]
                });
            }
            if (price > profileData.coins || price == 0) {
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` You don't have enough coins :coin: for that  `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.reply({
                    embeds: [exampleEmbed]
                });
            } else {
                await profileModel.findOneAndUpdate({
                    userID: message.author.id,
                }, {
                    $inc: {
                        coins: -price,
                        "items.Corn.amount": amount



                    },
                });
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` you bought \`${amount}\` corn :corn:  `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.channel.send({
                    embeds: [exampleEmbed]
                });
            }

        }
        break;

        case "cheese": {
            let fkHELL=0;
            
            if (args[1]==="max"){
                if(profileData.items.Cheese.amount + Math.floor(profileData.coins / profileData.items.Cheese.buyPrice) > profileData.items.Cheese.maxAmount ){
                    amount = profileData.items.Cheese.maxAmount - profileData.items.Cheese.amount;
                    if (amount === 0){
                         fkHELL=1;
                    } 
                }
                else
                amount = Math.floor(profileData.coins / profileData.items.Cheese.buyPrice) ;
            }
               
            if ( parseInt(profileData.items.Cheese.amount) + parseInt(amount) > profileData.items.Cheese.maxAmount || fkHELL){
                
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` Looks like your storage can hold only \`${INF.format(profileData.items.Cheese.maxAmount)}\` Cheese :cheese:  `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.reply({
                    embeds: [exampleEmbed]
                });
            }

            const price = amount * profileData.items.Cheese.buyPrice;
            
            if (amount % 1 != 0 || args[1] <= 0) {
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` Please use a positive integer. `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.reply({
                    embeds: [exampleEmbed]
                });
            }
            
            if (price > profileData.coins || price == 0) {
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` You don't have enough coins :coin: for that  `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.reply({
                    embeds: [exampleEmbed]
                });
            } else {
                await profileModel.findOneAndUpdate({
                    userID: message.author.id,
                }, {
                    $inc: {
                        coins: -price,
                        "items.Cheese.amount": amount
                    },
                });
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` you bought \`${amount}\` cheese :cheese:  `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.channel.send({embeds: [exampleEmbed]});
            }

        }
        break;

        case "books": {
            let fkHELL=0;
            
            if (args[1]==="max"){
                if(profileData.items.Books.amount + Math.floor(profileData.coins / profileData.items.Books.buyPrice) > profileData.items.Books.maxAmount ){
                    amount = profileData.items.Books.maxAmount - profileData.items.Books.amount;
                    if (amount === 0){
                         fkHELL=1;
                    } 
                }
                else
                amount = Math.floor(profileData.coins / profileData.items.Books.buyPrice) ;
            }
               
            if ( parseInt(profileData.items.Books.amount) + parseInt(amount) > profileData.items.Books.maxAmount || fkHELL){
                
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` Looks like your storage can hold only \`${INF.format(profileData.items.Books.maxAmount)}\` Books :books:  `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.reply({
                    embeds: [exampleEmbed]
                });
            }
            const price = amount * profileData.items.Books.buyPrice;
            if (amount % 1 != 0 || args[1] <= 0 ) {
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` Please use a positive integer. `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.reply({
                    embeds: [exampleEmbed]
                });
            }
            if (price > profileData.coins || price == 0) {
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` You don't have enough coins :coin: for that  `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.reply({
                    embeds: [exampleEmbed]
                });
            } else {
                await profileModel.findOneAndUpdate({
                    userID: message.author.id,
                }, {
                    $inc: {
                        coins: -price,
                        "items.Books.amount": amount



                    },
                });
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` you bought \`${amount}\` books :books:  `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.channel.send({
                    embeds: [exampleEmbed]
                });
            }

        }
        break;

        case "bread": {
            let fkHELL=0;
            
            if (args[1]==="max"){
                if(profileData.items.Bread.amount + Math.floor(profileData.coins / profileData.items.Bread.buyPrice) > profileData.items.Bread.maxAmount ){
                    amount = profileData.items.Bread.maxAmount - profileData.items.Bread.amount;
                    if (amount === 0){
                         fkHELL=1;
                    } 
                }
                else
                amount = Math.floor(profileData.coins / profileData.items.Bread.buyPrice) ;
            }
               
            if ( parseInt(profileData.items.Bread.amount) + parseInt(amount) > profileData.items.Bread.maxAmount || fkHELL){
                
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` Looks like your storage can hold only \`${INF.format(profileData.items.Bread.maxAmount)}\` Bread :bread:  `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.reply({
                    embeds: [exampleEmbed]
                });
            }
            const price = amount * profileData.items.Bread.buyPrice;
            if (amount % 1 != 0 || args[1] <= 0 ) {
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` Please use a positive integer. `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.reply({
                    embeds: [exampleEmbed]
                });
            }
            if (price > profileData.coins || price == 0) {
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` You don't have enough coins :coin: for that  `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.reply({
                    embeds: [exampleEmbed]
                });
            } else {
                await profileModel.findOneAndUpdate({
                    userID: message.author.id,
                }, {
                    $inc: {
                        coins: -price,
                        "items.Bread.amount": amount



                    },
                });
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` you bought \`${amount}\` bread :bread:  `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.channel.send({
                    embeds: [exampleEmbed]
                });
            }

        }
        break;

        case "peanut": {
            let fkHELL=0;
            
            if (args[1]==="max"){
                if(profileData.items.Peanut.amount + Math.floor(profileData.coins / profileData.items.Peanut.buyPrice) > profileData.items.Peanut.maxAmount ){
                    amount = profileData.items.Peanut.maxAmount - profileData.items.Peanut.amount;
                    if (amount === 0){
                         fkHELL=1;
                    } 
                }
                else
                amount = Math.floor(profileData.coins / profileData.items.Peanut.buyPrice) ;
            }
               
            if ( parseInt(profileData.items.Peanut.amount) + parseInt(amount) > profileData.items.Peanut.maxAmount || fkHELL){
                
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` Looks like your storage can hold only \`${INF.format(profileData.items.Peanut.maxAmount)}\` Peanuts :peanuts:  `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.reply({
                    embeds: [exampleEmbed]
                });
            }
            const price = amount * profileData.items.Peanut.buyPrice;
            if (amount % 1 != 0 || args[1] <= 0 ) {
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` Please use a positive integer. `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.reply({
                    embeds: [exampleEmbed]
                });
            }
            if (price > profileData.coins || price == 0) {
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` You don't have enough coins :coin: for that  `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.reply({
                    embeds: [exampleEmbed]
                });
            } else {
                await profileModel.findOneAndUpdate({
                    userID: message.author.id,
                }, {
                    $inc: {
                        coins: -price,
                        "items.Peanut.amount": amount



                    },
                });
                const exampleEmbed = new MessageEmbed()
                    .setColor('#ffffff')
                    .addFields({
                        name: ` you bought \`${amount}\` peanuts :peanuts:  `,
                        value: `\u200b`
                    }, )
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
                return message.channel.send({
                    embeds: [exampleEmbed]
                });
            }

        }
        break;




        }

    }
}