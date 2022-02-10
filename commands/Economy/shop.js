const profileModel = require("../../models/profileSchema");
const { MessageActionRow, MessageButton,MessageEmbed  } = require('discord.js');


module.exports = {
    name: 'shop',
    aliases: ["s"],
    category: 'economy',
    description: ":shopping_bags: Enters the shop!",
    async execute(message, args, client, Discord, profileData){

        INF = new Intl.NumberFormat('en-US')
        const rowLocationShopMain = new MessageActionRow()
			.addComponents(
                new MessageButton()
                .setCustomId('back')
                .setLabel('BACK')
                .setStyle('SECONDARY'),
				new MessageButton()
                .setCustomId('showLocation')
                .setLabel('SHOW')
                .setStyle('SUCCESS'),          
			);





        let rowBackRatville = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('backRatville')
                .setLabel('BACK')
                .setStyle('SECONDARY'),
        )
         
        let rowRatville = new MessageActionRow()
			.addComponents(
                new MessageButton()
                .setCustomId('backLocation')
                .setLabel('BACK')
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('previousLocation1')
                .setLabel('PREV')
                .setStyle('PRIMARY'),
				new MessageButton()
                .setCustomId('nextLocation1')
                .setLabel('NEXT')
                .setStyle('PRIMARY'),
                       
			);

            
            

            let rowBackDreamerPeak = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('backDreamerPeak')
                        .setLabel('BACK')
                        .setStyle('SECONDARY'),
                )  
            let rowDreamerPeak = new MessageActionRow()
			.addComponents(
                new MessageButton()
                .setCustomId('backLocation')
                .setLabel('BACK')
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('previousLocation2')
                .setLabel('PREV')
                .setStyle('PRIMARY'),
				new MessageButton()
                .setCustomId('nextLocation2')
                .setLabel('NEXT')
                .setStyle('PRIMARY'),
                             
			);
            if (profileData.profile.location.dreamerPeak.value==0){
                rowDreamerPeak.addComponents(
                    new MessageButton()
                .setCustomId('buyDreamerPeak')
                .setLabel('BUY')
                .setStyle('SUCCESS'),
                )
            }
                        




            let rowBackRatholeTown = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('backRatholeTown')
                        .setLabel('BACK')
                        .setStyle('SECONDARY'),
                )  
            let rowRatholeTown = new MessageActionRow()
			.addComponents(
                new MessageButton()
                .setCustomId('backLocation')
                .setLabel('BACK')
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('previousLocation3')
                .setLabel('PREV')
                .setStyle('PRIMARY'),
				new MessageButton()
                .setCustomId('nextLocation3')
                .setLabel('NEXT')
                .setStyle('PRIMARY'),
                             
			);
            if (profileData.profile.location.ratholeTown.value==0){
                rowRatholeTown.addComponents(
                    new MessageButton()
                .setCustomId('buyRatholeTown')
                .setLabel('BUY')
                .setStyle('SUCCESS'),
                )
            }




            
            let rowBackWhitecliffFort = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('backWhitecliffFort')
                        .setLabel('BACK')
                        .setStyle('SECONDARY'),
                )  
            let rowWhitecliffFort = new MessageActionRow()
			.addComponents(
                new MessageButton()
                .setCustomId('backLocation')
                .setLabel('BACK')
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('previousLocation4')
                .setLabel('PREV')
                .setStyle('PRIMARY'),
				new MessageButton()
                .setCustomId('nextLocation4')
                .setLabel('NEXT')
                .setStyle('PRIMARY'),
                            
			);
            if (profileData.profile.location.whitecliffFort.value==0){
                rowWhitecliffFort.addComponents(
                    new MessageButton()
                .setCustomId('buyWhitecliffFort')
                .setLabel('BUY')
                .setStyle('SUCCESS'), 
                )
            }
            




            let rowBackWaterHeaven = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('backWaterHeaven')
                        .setLabel('BACK')
                        .setStyle('SECONDARY'),
                )  
            let rowWaterHeaven = new MessageActionRow()
			.addComponents(
                new MessageButton()
                .setCustomId('backLocation')
                .setLabel('BACK')
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('previousLocation5')
                .setLabel('PREV')
                .setStyle('PRIMARY'),
				new MessageButton()
                .setCustomId('nextLocation5')
                .setLabel('NEXT')
                .setStyle('PRIMARY'),
                            
			);
            if (profileData.profile.location.waterHeaven.value==0){
                rowWaterHeaven.addComponents(
                    new MessageButton()
                .setCustomId('buyWaterHeaven')
                .setLabel('BUY')
                .setStyle('SUCCESS'), 
                )
            }




            let rowBackRatLine = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('backRatLine')
                        .setLabel('BACK')
                        .setStyle('SECONDARY'),
                )  
            let rowRatLine = new MessageActionRow()
			.addComponents(
                new MessageButton()
                .setCustomId('backLocation')
                .setLabel('BACK')
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('previousLocation6')
                .setLabel('PREV')
                .setStyle('PRIMARY'),
				new MessageButton()
                .setCustomId('nextLocation6')
                .setLabel('NEXT')
                .setStyle('PRIMARY'),
                            
			);
            if (profileData.profile.location.ratLine.value==0){
                rowRatLine.addComponents(
                    new MessageButton()
                .setCustomId('buyRatLine')
                .setLabel('BUY')
                .setStyle('SUCCESS'), 
                )
            }




            let rowBackSandoraDesert = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('backSandoraDesert')
                        .setLabel('BACK')
                        .setStyle('SECONDARY'),
                )  
            let rowSandoraDesert = new MessageActionRow()
			.addComponents(
                new MessageButton()
                .setCustomId('backLocation')
                .setLabel('BACK')
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('previousLocation7')
                .setLabel('PREV')
                .setStyle('PRIMARY'),
				new MessageButton()
                .setCustomId('nextLocation7')
                .setLabel('NEXT')
                .setStyle('PRIMARY'),
                            
			);
            if (profileData.profile.location.sandoraDesert.value==0){
                rowSandoraDesert.addComponents(
                    new MessageButton()
                .setCustomId('buySandoraDesert')
                .setLabel('BUY')
                .setStyle('SUCCESS'), 
                )
            }




            let rowBackSpringRiverFalls = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('backSpringRiverFalls')
                        .setLabel('BACK')
                        .setStyle('SECONDARY'),
                )  
            let rowSpringRiverFalls = new MessageActionRow()
			.addComponents(
                new MessageButton()
                .setCustomId('backLocation')
                .setLabel('BACK')
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('previousLocation8')
                .setLabel('PREV')
                .setStyle('PRIMARY'),
				new MessageButton()
                .setCustomId('nextLocation8')
                .setLabel('NEXT')
                .setStyle('PRIMARY'),
                             
			);
            if (profileData.profile.location.springRiverFalls.value==0){
                rowSpringRiverFalls.addComponents(
                    new MessageButton()
                .setCustomId('buySpringRiverFalls')
                .setLabel('BUY')
                .setStyle('SUCCESS'),
                )
            }
            



            let rowBackIcefallMountains = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('backIcefallMountains')
                        .setLabel('BACK')
                        .setStyle('SECONDARY'),
                )  
            let rowIcefallMountains = new MessageActionRow()
			.addComponents(
                new MessageButton()
                .setCustomId('backLocation')
                .setLabel('BACK')
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('previousLocation9')
                .setLabel('PREV')
                .setStyle('PRIMARY'),
				new MessageButton()
                .setCustomId('nextLocation9')
                .setLabel('NEXT')
                .setStyle('PRIMARY'),
                            
			);
            if (profileData.profile.location.icefallMountains.value==0){
                rowIcefallMountains.addComponents(
                    new MessageButton()
                .setCustomId('buyIcefallMountains')
                .setLabel('BUY')
                .setStyle('SUCCESS'), 
                )
            }
            




            let rowBackGreenstoneValley = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('backGreenstoneValley')
                        .setLabel('BACK')
                        .setStyle('SECONDARY'),
                )  
            let rowGreenstoneValley = new MessageActionRow()
			.addComponents(
                new MessageButton()
                .setCustomId('backLocation')
                .setLabel('BACK')
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('previousLocation10')
                .setLabel('PREV')
                .setStyle('PRIMARY'),
				new MessageButton()
                .setCustomId('nextLocation10')
                .setLabel('NEXT')
                .setStyle('PRIMARY'),
                             
			);
            if (profileData.profile.location.greenstoneValley.value==0){
                rowGreenstoneValley.addComponents(
                    new MessageButton()
                .setCustomId('buyGreenstoneValley')
                .setLabel('BUY')
                .setStyle('SUCCESS'),
                )
            }
            





            let rowBackSunValleyCity = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('backSunValleyCity')
                        .setLabel('BACK')
                        .setStyle('SECONDARY'),
                )  
            let rowSunValleyCity = new MessageActionRow()
			.addComponents(
                new MessageButton()
                .setCustomId('backLocation')
                .setLabel('BACK')
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('previousLocation11')
                .setLabel('PREV')
                .setStyle('PRIMARY'),
				new MessageButton()
                .setCustomId('nextLocation11')
                .setLabel('NEXT')
                .setStyle('PRIMARY'),
                             
			);
            if (profileData.profile.location.sunValleyCity.value==0){
                rowSunValleyCity.addComponents(
                    new MessageButton()
                .setCustomId('buySunValleyCity')
                .setLabel('BUY')
                .setStyle('SUCCESS'),
                )
            }





            
            let rowBackOldTavern = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('backOldTavern')
                        .setLabel('BACK')
                        .setStyle('SECONDARY'),
                )  
            let rowOldTavern = new MessageActionRow()
			.addComponents(
                new MessageButton()
                .setCustomId('backLocation')
                .setLabel('BACK')
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('previousLocation12')
                .setLabel('PREV')
                .setStyle('PRIMARY'),
				new MessageButton()
                .setCustomId('nextLocation12')
                .setLabel('NEXT')
                .setStyle('PRIMARY'),
                             
			);
            if (profileData.profile.location.oldTavern.value==0){
                rowOldTavern.addComponents(
                    new MessageButton()
                .setCustomId('buyOldTavern')
                .setLabel('BUY')
                .setStyle('SUCCESS'),
                )
            }
            

            




            let rowBackHolyCastle = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('backHolyCastle')
                        .setLabel('BACK')
                        .setStyle('SECONDARY'),
                )  
            let rowHolyCastle = new MessageActionRow()
			.addComponents(
                new MessageButton()
                .setCustomId('backLocation')
                .setLabel('BACK')
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('previousLocation13')
                .setLabel('PREV')
                .setStyle('PRIMARY'),
                new MessageButton()
                .setCustomId('nextLocation13')
                .setLabel('NEXT')
                .setStyle('PRIMARY'),    	          
			);
            if (profileData.profile.location.holyCastle.value==0){
                rowHolyCastle.addComponents(
                    new MessageButton()
                .setCustomId('buyHolyCastle')
                .setLabel('BUY')
                .setStyle('SUCCESS'),
                )
            }
            
        
               





                   
        const rowShopMain = new MessageActionRow()
			.addComponents(
				new MessageButton()
                .setCustomId('items')
                .setLabel('ITEMS')
                .setStyle('SUCCESS'),
                new MessageButton()
                .setCustomId('locations')
                .setLabel('LOCATIONS')
                .setStyle('SUCCESS'),
                new MessageButton()
                .setCustomId('buildings')
                .setLabel('BUILDINGS')
                .setStyle('SUCCESS'),
                new MessageButton()
                .setCustomId('other')
                .setLabel('OTHER')
                .setStyle('SUCCESS'),
			);





            const rowShopItems1 = new MessageActionRow()
			.addComponents(
                new MessageButton()
                .setCustomId('back')
                .setLabel('BACK')
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('itemsPage1')
                .setLabel('PAGE 1')
                .setStyle('SUCCESS'), 
                new MessageButton()
                .setCustomId('itemsPage2')
                .setLabel('PAGE 2')
                .setStyle('SECONDARY'),         
			);

            const rowShopItems2 = new MessageActionRow()
			.addComponents(
                new MessageButton()
                .setCustomId('back')
                .setLabel('BACK')
                .setStyle('SECONDARY'),
                new MessageButton()
                .setCustomId('itemsPage1')
                .setLabel('PAGE 1')
                .setStyle('SECONDARY'), 
                new MessageButton()
                .setCustomId('itemsPage2')
                .setLabel('PAGE 2')
                .setStyle('SUCCESS'), 
			);





            const rowBack = new MessageActionRow()
			.addComponents(
                new MessageButton()
                .setCustomId('back')
                .setLabel('BACK')
                .setStyle('PRIMARY'),         
			);






        const fLocationMoney = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle (` :x: OOPS :x: `)
        .addFields(
            {name:`${message.author.username}, you don't have enough :white_flower: for that`, value:'\u200b'},
                
                )
        .setImage('https://media.discordapp.net/attachments/769968561153114133/924798201133953034/fail-mission-failed.gif')        
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
        
        const successLocationPayment = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle (` ✅ SUCCESS ✅ `)
        .addFields(
            {name:`**You discovered a new location!** :map: `, value:`Now you can use \`$travel <location_name>\` to commute to that location! `},
                
                )
        .setImage('https://cdn.discordapp.com/attachments/769968561153114133/924797726691041291/cat-driving-serious.gif')        
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);    
        





        const mainShopEmbed = new MessageEmbed()
        .setColor('#ffffff')
        .setURL('https://cdn.discordapp.com/attachments/913357314533249094/914001562332971078/EVfbj3gXkAAGRGn.png')
        .setAuthor('RAT MARKET', 'https://cdn.discordapp.com/attachments/913357314533249094/913997167390232596/rat.png', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley')
        .setTitle(`**:shopping_bags: SHOP :shopping_bags:**`)
        .addFields (
            { name: ':coin: ITEMS :coin: ', value: `The items in here will increase your chances of finding better rats with \`$dig\` \n _ _` },
            { name: ':white_flower: LOCATIONS :white_flower:', value: `Explore and find new places for digging.
             Check \`$map\` and \`$location\` to know your current location.\n _ _` },
            { name: ':bricks: BUILDINGS :bricks: ', value: `Build buildings to get new sources of income\n _ _` },
            { name: ':gem: OTHER :gem: ', value: `Buy Snake's mom` },
        )
        .setThumbnail(`https://cdn.discordapp.com/attachments/913357314533249094/913996618951454750/shop.png`)
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);

        const itemsShopMain1 = new MessageEmbed()
        .setColor('#ffffff')
        .setURL('https://cdn.discordapp.com/attachments/913357314533249094/914001562332971078/EVfbj3gXkAAGRGn.png')
        .setAuthor('ITEMS 1', 'https://cdn.discordapp.com/attachments/913357314533249094/913997167390232596/rat.png', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley')
        .setTitle(`**:shopping_bags: SHOP :shopping_bags:**`)
      //  .setThumbnail(`https://cdn.discordapp.com/attachments/913357314533249094/913996618951454750/shop.png`)
        .addFields(
            { name:'Cheese  : :cheese: `$buy cheese <amount>` ', value: `- Price : \`${INF.format(profileData.items.Cheese.buyPrice)}\` \n- 1% bonus with *$dig*\n `  },
            { name:'Mouse Trap  : :mouse_trap: `$buy trap <amount>` ', value: `- Price : \`${INF.format(profileData.items.MouseTrap.buyPrice)}\` \n- 5% bonus with *$dig*\n ` },
            { name:'Rice  : :ear_of_rice: `$buy rice <amount>` ', value: `- Price : \`${INF.format(profileData.items.Rice.buyPrice)}\` \n- 10% bonus with *$dig*\n ` },
            { name:'Bread  : :bread: `$buy bread <amount>` ', value: `- Price : \`${INF.format(profileData.items.Bread.buyPrice)}\` \n- 50% bonus with *$dig*\n ` },
            { name:'Books  : :books: `$buy books <amount>` ', value: `- Price : \`${INF.format(profileData.items.Books.buyPrice)}\` \n- 250% bonus with *$dig*\n ` },
              
            { name: '\u200B', value: `You have : ${INF.format(profileData.coins)} :coin:` },    
         )    
     
        .setThumbnail(`https://cdn.discordapp.com/attachments/913357314533249094/913996618951454750/shop.png`)
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
        
        const itemsShopMain2 = new MessageEmbed()
        .setColor('#ffffff')
        .setURL('https://cdn.discordapp.com/attachments/913357314533249094/914001562332971078/EVfbj3gXkAAGRGn.png')
        .setAuthor('ITEMS 2', 'https://cdn.discordapp.com/attachments/913357314533249094/913997167390232596/rat.png', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley')
        .setTitle(`**:shopping_bags: SHOP :shopping_bags:**`)
      //  .setThumbnail(`https://cdn.discordapp.com/attachments/913357314533249094/913996618951454750/shop.png`)
        .addFields(
            
            { name:'Peanut  : :peanuts: `$buy peanut <amount>` ', value: `- Price : \`${INF.format(profileData.items.Peanut.buyPrice)}\` \n- 1000% bonus with *$dig*\n ` },
            { name:'Corn  : :corn: `$buy corn <amount>` ', value: `- Price : \`${INF.format(profileData.items.Corn.buyPrice)}\` \n- 5000% bonus with *$dig*\n ` },
            { name:'Cat : :cat2: `$buy cat <amount>` ', value: `- Price : \`${INF.format(profileData.items.Cat.buyPrice)}\` \n- 15000% bonus with *$dig* `}, 
            { name:'Tiger  : :tiger2: `$buy tiger <amount>` ', value: `- Price : \`${INF.format(profileData.items.Tiger.buyPrice)}\` \n- 30000% bonus with *$dig*\n ` },
            { name:'Pizza  : :pizza: `$buy pizza <amount>` ', value: `- Price : \`${INF.format(profileData.items.Pizza.buyPrice)}\` \n- 69000% bonus with *$dig*\n `},
            { name: '\u200B', value: `You have : ${INF.format(profileData.coins)} :coin:` },   
         )    
 
        .setThumbnail(`https://cdn.discordapp.com/attachments/913357314533249094/913996618951454750/shop.png`)
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
    

        const locationsShopMain = new MessageEmbed()
        .setColor('#ffffff')
        .setURL('https://cdn.discordapp.com/attachments/769968561153114133/923389181563113472/out-travel.gif')
        .setAuthor('LOCATIONS', 'https://cdn.discordapp.com/attachments/913357314533249094/913997167390232596/rat.png', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley')
        .setTitle(`**:shopping_bags: SHOP :shopping_bags:**`)
        .addFields (
            { name: 'RATLANDIA is full of surprises and lots of new places to discover!  ', value: `Use \`$travel <location_name>\` to commute. Check \`$map\` and \`$location\` to know your current location.` },
            
            { name: 'Press on SHOW to see the available locations ', value: `\u200B` },
        )
        .setImage (`https://cdn.discordapp.com/attachments/769968561153114133/919659714193813574/Ratlandia.png`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/913357314533249094/913996618951454750/shop.png`)
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);

        const locationsShopRatville  = new MessageEmbed()
        .setColor('#ffffff')
        .setDescription('Ratville is your home. A quiet place - nothing much happening around.')
        .setURL('https://cdn.discordapp.com/attachments/769968561153114133/923389181563113472/out-travel.gif')
        .setAuthor('LOCATIONS', 'https://cdn.discordapp.com/attachments/913357314533249094/913997167390232596/rat.png')
        .setTitle(`**🏡 RATVILLE 🏡**`)
        .addFields (
            { name: '\u200b', value:`✅**DISCOVERED**✅ ` },
        )
        .setImage (`https://cdn.discordapp.com/attachments/769968561153114133/919643336086810694/Village.jpg`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/769968561153114133/919638684637212752/Screenshot_22.png`)
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);
        

        const locationsShopDreamerPeak  = new MessageEmbed()
        .setColor('#ffffff')
        .setDescription ('Dreamer Peak is said to be the place where legends are born.It offers a great sight of the Holy Castle')
        .setURL('https://cdn.discordapp.com/attachments/769968561153114133/923389181563113472/out-travel.gif')
        .setAuthor('LOCATIONS', 'https://cdn.discordapp.com/attachments/913357314533249094/913997167390232596/rat.png')
        .setTitle(`**:camping: DREAMER PEAK :camping:**`)
        .addFields (
            { name: '\u200b', value: `**Price: \`240\`** :white_flower: \n*You have* \`${INF.format(profileData.lotus)}\` \n\n **Bonus** :\n \`x1.1\` :rat: *(common)*      ` },
               
        )
        .setImage (`https://media.discordapp.net/attachments/769968561153114133/919643408946069555/pixel-cat-12-17-3-4.jpg`)
        .setThumbnail(`https://media.discordapp.net/attachments/769968561153114133/919638685081800704/Screenshot_23.png`)
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);  

        if (profileData.profile.location.dreamerPeak.value >=1)
        locationsShopDreamerPeak.fields= { name: '\u200b', value:`✅**DISCOVERED**✅ \n\n **Bonus** :\n \`x1.1\` :rat: *(common)* ` }    



        const locationsShopRatholeTown  = new MessageEmbed()
        .setColor('#ffffff')
        .setDescription ('Rathole Town is described as "Every rat\'s dream town".Founded by the legendary knight A**rat**gorn.The rate of basic rats is abnormally high here. ')
        .setURL('https://cdn.discordapp.com/attachments/769968561153114133/923389181563113472/out-travel.gif')
        .setAuthor('LOCATIONS', 'https://cdn.discordapp.com/attachments/913357314533249094/913997167390232596/rat.png')
        .setTitle(`**:mountain: RATHOLE TOWN :mountain:**`)
        .addFields (
            { name: '\u200b', value: `**Price: \`380\`** :white_flower:\n*You have* \`${INF.format(profileData.lotus)}\`\n\n **Bonus** :\n \`x1.3\` :rat: *(common)*` },
               
        )
        .setImage (`https://media.discordapp.net/attachments/769968561153114133/919643408711168030/pixel-cat-12-1-5.jpg`)
        .setThumbnail(`https://media.discordapp.net/attachments/769968561153114133/919638688655364096/Screenshot_30.png`)
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);  

        if (profileData.profile.location.ratholeTown.value >=1)
        locationsShopRatholeTown.fields= { name: '\u200b', value:`✅**DISCOVERED**✅ \n\n **Bonus** :\n \`x1.3\` :rat: *(common)*` } 



        const locationsShopWhitecliffFort  = new MessageEmbed()
        .setColor('#ffffff')
        .setDescription ('Whitecliff Fort was founded decades ago by the greatest king Shiro the IV-th. After his death all the people in the castle disappeared. A truly ghost-fort.')
        .setURL('https://cdn.discordapp.com/attachments/769968561153114133/923389181563113472/out-travel.gif')
        .setAuthor('LOCATIONS', 'https://cdn.discordapp.com/attachments/913357314533249094/913997167390232596/rat.png')
        .setTitle(`**🌁 WHITECLIFF FORT 🌁`)
        .addFields (
            { name: '\u200b', value: `**Price: \`610\`** :white_flower:\n*You have* \`${INF.format(profileData.lotus)}\`\n\n **Bonus** :\n \`x1.05\` :mouse2: *(rare)*     ` },
               
        )
        .setImage (`https://cdn.discordapp.com/attachments/769968561153114133/919643410451804220/pixel-cat-2020-02-25-gai1.jpg`)
        .setThumbnail(`https://media.discordapp.net/attachments/769968561153114133/919638687715819621/Screenshot_28.png`)
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);         

        if (profileData.profile.location.whitecliffFort.value >=1)
        locationsShopWhitecliffFort.fields= { name: '\u200b', value:`✅**DISCOVERED**✅ \n\n **Bonus** :\n \`x1.05\` :mouse2: *(rare)*` } 

        const locationsShopWaterHeaven  = new MessageEmbed()
        .setColor('#ffffff')
        .setDescription ('It is said that here in Water Heaven the ultimate source of life can be found. Every 2 weeks a natural phenomena "Aqua Laguna" occurs and floods the place for 10 days straight!  ')
        .setURL('https://cdn.discordapp.com/attachments/769968561153114133/923389181563113472/out-travel.gif')
        .setAuthor('LOCATIONS', 'https://cdn.discordapp.com/attachments/913357314533249094/913997167390232596/rat.png')
        .setTitle(`**:island: WATER HEAVEN :island:**`)
        .addFields (
            { name: '\u200b', value: `**Price: \`990\`** :white_flower:\n*You have* \`${INF.format(profileData.lotus)}\`\n\n **Bonus** :\n \`x1.6\` :rat: *(common)*     ` },
               
        )
        .setImage (`https://media.discordapp.net/attachments/769968561153114133/919643407733891102/pixel-cat-2020-3-22-12-28-3-5-2.jpg`)
        .setThumbnail(`https://media.discordapp.net/attachments/769968561153114133/919638687288016976/Screenshot_27.png`)
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);           
        if (profileData.profile.location.waterHeaven.value >=1)
        locationsShopWaterHeaven.fields= { name: '\u200b', value:`✅**DISCOVERED**✅ \n\n **Bonus** :\n \`x1.6\` :rat: *(common)*` }

        const locationsShopRatLine  = new MessageEmbed()
        .setColor('#ffffff')
        .setDescription ('Rat Line was once the center of the world! A few centuries ago a great explorer Rat D. Luffy died in this place leaving behind a colossal treasure.')
        .setURL('https://cdn.discordapp.com/attachments/769968561153114133/923389181563113472/out-travel.gif')
        .setAuthor('LOCATIONS', 'https://cdn.discordapp.com/attachments/913357314533249094/913997167390232596/rat.png')
        .setTitle(`**:amphora: RAT LINE :amphora: **`)
        .addFields (
            { name: '\u200b', value: `**Price: \`1,600\`** :white_flower:\n*You have* \`${INF.format(profileData.lotus)}\`\n\n **Bonus** :\n \`x1.2\` :beaver: *(epic)*     ` },
               
        )
        .setImage (`https://media.discordapp.net/attachments/769968561153114133/919643409491320852/pixel-cat-12-21-2-2.jpg`)
        .setThumbnail(`https://media.discordapp.net/attachments/769968561153114133/919638686654668840/Screenshot_26.png`)
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`); 
        if (profileData.profile.location.ratLine.value >=1)
        locationsShopRatLine.fields= { name: '\u200b', value:`✅**DISCOVERED**✅ \n\n **Bonus** :\n \`x1.2\` :beaver: *(epic)*` }

        const locationsShopSandoraDesert  = new MessageEmbed()
        .setColor('#ffffff')
        .setDescription ('The Sandora Desert is very ancient, featuring sand dunes that can pile up to 300 meters. The paysage is usually barren, with a few crags that can provide shelter from the sun. ')
        .setURL('https://cdn.discordapp.com/attachments/769968561153114133/923389181563113472/out-travel.gif')
        .setAuthor('LOCATIONS', 'https://cdn.discordapp.com/attachments/913357314533249094/913997167390232596/rat.png')
        .setTitle(`**:desert: SANDORA DESERT :desert: **`)
        .addFields (
            { name: '\u200b', value: `**Price: \`2,600\`** :white_flower:\n*You have* \`${INF.format(profileData.lotus)}\`\n\n **Bonus** :\n \`x1.5\` :rat: *(common)* \n \`x1.1\` :mouse2: *(rare)*     ` },
               
        )
        .setImage (`https://media.discordapp.net/attachments/769968561153114133/919643409206087731/pixel-cat-12-20-2-3.jpg`)
        .setThumbnail(`https://media.discordapp.net/attachments/769968561153114133/919638686176530432/Screenshot_25.png`)
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);  
        if (profileData.profile.location.sandoraDesert.value >=1)
        locationsShopSandoraDesert.fields= { name: '\u200b', value:`✅**DISCOVERED**✅ \n\n **Bonus** :\n \`x1.5\` :rat: *(common)* \n \`x1.1\` :mouse2: *(rare)*` }

        const locationsShopSpringRiverFalls  = new MessageEmbed()
        .setColor('#ffffff')
        .setDescription ('These large falls are the symbol of rebirth, since they totally freeze during the winter and start pouring again in the spring. A natural wonder of Ratlandia.')
        .setURL('https://cdn.discordapp.com/attachments/769968561153114133/923389181563113472/out-travel.gif')
        .setAuthor('LOCATIONS', 'https://cdn.discordapp.com/attachments/913357314533249094/913997167390232596/rat.png')
        .setTitle(`**:park: SPRING RIVER FALLS :park: **`)
        .addFields (
            { name: '\u200b', value: `**Price: \`4,200\`** :white_flower:\n*You have* \`${INF.format(profileData.lotus)}\`\n\n **Bonus** :\n \`x2\` :rat: *(common)*     ` },
               
        )
        .setImage (`https://media.discordapp.net/attachments/769968561153114133/919643410212733008/pixel-cat-2020-02-20-3-2.jpg`)
        .setThumbnail(`https://media.discordapp.net/attachments/769968561153114133/919638174479835207/Screenshot_34.png`)
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);         
        if (profileData.profile.location.springRiverFalls.value >=1)
        locationsShopSpringRiverFalls.fields= { name: '\u200b', value:`✅**DISCOVERED**✅ \n\n **Bonus** :\n \`x2\` :rat: *(common)*` }

        const locationsShopIcefallMountains  = new MessageEmbed()
        .setColor('#ffffff')
        .setDescription ('Described as a sacred place of the gods. Somewhere to calm your mind and be in sync with the nature.')
        .setURL('https://cdn.discordapp.com/attachments/769968561153114133/923389181563113472/out-travel.gif')
        .setAuthor('LOCATIONS', 'https://cdn.discordapp.com/attachments/913357314533249094/913997167390232596/rat.png')
        .setTitle(`**:mountain_snow: ICEFALL MOUNTAINS :mountain_snow:  **`)
        .addFields (
            { name: '\u200b', value: `**Price: \`6,800\`** :white_flower:\n*You have* \`${INF.format(profileData.lotus)}\`\n\n **Bonus** :\n \`x1.2\` :mouse2: *(rare)*  \n \`x1.5\` :beaver: *(epic)*     ` },
               
        )
        .setImage (`https://media.discordapp.net/attachments/769968561153114133/919643408245616750/pixel-cat-2-11.jpg`)
        .setThumbnail(`https://media.discordapp.net/attachments/769968561153114133/919638173947138048/Screenshot_33.png`)
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);          
        if (profileData.profile.location.icefallMountains.value >=1)
        locationsShopIcefallMountains.fields= { name: '\u200b', value:`✅**DISCOVERED**✅ \n\n **Bonus** :\n \`x1.2\` :mouse2: *(rare)*  \n \`x1.5\` :beaver: *(epic)*` }

        const locationsShopGreenstoneValley  = new MessageEmbed()
        .setColor('#ffffff')
        .setDescription ('Ruins of the first civilization to live in Ratlandia. Nothing is known about them since they disappeared without a trail.')
        .setURL('https://cdn.discordapp.com/attachments/769968561153114133/923389181563113472/out-travel.gif')
        .setAuthor('LOCATIONS', 'https://cdn.discordapp.com/attachments/913357314533249094/913997167390232596/rat.png')
        .setTitle(`**:mountain: GREENSTONE VALLEY :mountain: **`)
        .addFields (
            { name: '\u200b', value: `**Price: \`10,900\`** :white_flower:\n*You have* \`${INF.format(profileData.lotus)}\`\n\n **Bonus** :\n \`x2.0\` :beaver: *(epic)*     ` },
               
        )
        .setImage (`https://media.discordapp.net/attachments/769968561153114133/919643408514039818/pixel-cat-5-4-7.jpg`)
        .setThumbnail(`https://media.discordapp.net/attachments/769968561153114133/919638173565460541/Screenshot_32.png?`)
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);    
        if (profileData.profile.location.greenstoneValley.value >=1)
        locationsShopGreenstoneValley.fields= { name: '\u200b', value:`✅**DISCOVERED**✅ \n\n **Bonus** :\n \`x2.0\` :beaver: *(epic)*` }

        
        const locationsShopSunValleyCity  = new MessageEmbed()
        .setColor('#ffffff')
        .setDescription ('The most crowded city and marketplace in the country. Sun Valley City is well known for it\'s unique infrastructure and social classes. ')
        .setURL('https://cdn.discordapp.com/attachments/769968561153114133/923389181563113472/out-travel.gif')
        .setAuthor('LOCATIONS', 'https://cdn.discordapp.com/attachments/913357314533249094/913997167390232596/rat.png')
        .setTitle(`**:japanese_castle::shinto_shrine: SUN VALLEY CITY :shinto_shrine::japanese_castle: **`)
        .addFields (
            { name: '\u200b', value: `**Price: \`17,700\`** :white_flower:\n*You have* \`${INF.format(profileData.lotus)}\`\n\n **Bonus** :\n \`x1.77\` :rabbit2: *(exotic)*     ` },
               
        )
        .setImage (`https://media.discordapp.net/attachments/769968561153114133/919643407985573918/Edo_Tokyo.jpg`)
        .setThumbnail(`https://media.discordapp.net/attachments/769968561153114133/919638689011871804/Screenshot_31.png`)
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);         
        if (profileData.profile.location.sunValleyCity.value >=1)
        locationsShopSunValleyCity.fields= { name: '\u200b', value:`✅**DISCOVERED**✅ \n\n **Bonus** :\n \`x1.77\` :rabbit2: *(exotic)*` }

        const locationsShopOldTavern  = new MessageEmbed()
        .setColor('#ffffff')
        .setDescription ('A truly mysterious place! No one knows it\'s location and those who found it never wanter to go back ever.')
        .setURL('https://cdn.discordapp.com/attachments/769968561153114133/923389181563113472/out-travel.gif')
        .setAuthor('LOCATIONS', 'https://cdn.discordapp.com/attachments/913357314533249094/913997167390232596/rat.png')
        .setTitle(`**:house_abandoned: OLD TAVERN :house_abandoned:   **`)
        .addFields (
            { name: '\u200b', value: `**Price: \`28,600\`** :white_flower:\n*You have* \`${INF.format(profileData.lotus)}\`\n\n **Bonus** :\n \`x4.0\` :beaver: *(epic)* \n \`x3.3\` :rabbit2: *(exotic)*     ` },
               
        )
        .setImage (`https://media.discordapp.net/attachments/769968561153114133/919643335847723068/Tavern.jpg`)
        .setThumbnail(`https://media.discordapp.net/attachments/769968561153114133/919638688378552420/Screenshot_29.png`)
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);     
        if (profileData.profile.location.oldTavern.value >=1)
        locationsShopOldTavern.fields= { name: '\u200b', value:`✅**DISCOVERED**✅ \n\n **Bonus** :\n \`x4.0\` :beaver: *(epic)* \n \`x3.3\` :rabbit2: *(exotic)*` }

        const locationsShopHolyCastle  = new MessageEmbed()
        .setColor('#ffffff')
        .setDescription ('The Capital and the heart of Ratlandia. Only those of royal blood are allowed to enter the Castle. The single place where the RAT :crown: might be hidden.')
        .setURL('https://cdn.discordapp.com/attachments/769968561153114133/923389181563113472/out-travel.gif')
        .setAuthor('LOCATIONS', 'https://cdn.discordapp.com/attachments/913357314533249094/913997167390232596/rat.png')
        .setTitle(`**:european_castle: HOLY CASTLE :european_castle:  **`)
        .addFields (
            { name: '\u200b', value: `**Price: \`46,300\`** :white_flower:\n*You have* \`${INF.format(profileData.lotus)}\`\n\n **Bonus** :\n \`x4.2\` :rabbit2: *(exotic)* \n \`x9.9\` :bat: *(legendary)*     ` },
               
        )
        .setImage (`https://media.discordapp.net/attachments/769968561153114133/919643335596052500/Royal_Castle.jpg`)
        .setThumbnail(`https://media.discordapp.net/attachments/769968561153114133/919638685723553822/Screenshot_24.png`)
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);         
        if (profileData.profile.location.holyCastle.value >=1)
        locationsShopHolyCastle.fields= { name: '\u200b', value:`✅**DISCOVERED**✅ \n\n **Bonus** :\n \`x4.2\` :rabbit2: *(exotic)* \n \`x9.9\` :bat: *(legendary)*` }

        const buildingsShopMain  = new MessageEmbed()
        .setColor('#ffffff')
        .setURL('https://cdn.discordapp.com/attachments/913357314533249094/914001562332971078/EVfbj3gXkAAGRGn.png')
        .setAuthor('BUILDINGS', 'https://cdn.discordapp.com/attachments/913357314533249094/913997167390232596/rat.png', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley')
        .setTitle(`**:shopping_bags: SHOP :shopping_bags:**`)
        .addFields (
            { name: 'Hotel ', value: `\u200B` },
            { name: 'Tavern', value: `\u200B` },
            { name: 'Skyscraper ', value: `\u200B` },
        )
        .setThumbnail(`https://cdn.discordapp.com/attachments/913357314533249094/913996618951454750/shop.png`)
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);


        const otherShopMain  = new MessageEmbed()
        .setColor('#ffffff')
        .setURL('https://cdn.discordapp.com/attachments/913357314533249094/914001562332971078/EVfbj3gXkAAGRGn.png')
        .setAuthor('OTHER', 'https://cdn.discordapp.com/attachments/913357314533249094/913997167390232596/rat.png', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley')
        .setTitle(`**:shopping_bags: SHOP :shopping_bags:**`)
        .addFields (
            { name: 'Snake\'s MOM - 69420 :gem: ', value: `\u200B` },
            
        )
        .setThumbnail(`https://cdn.discordapp.com/attachments/913357314533249094/913996618951454750/shop.png`)
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);



        const msg = await message.channel.send({ embeds: [mainShopEmbed], components: [rowShopMain] });

         
           
        

        const collector = msg.createMessageComponentCollector({componentType: 'BUTTON', time: 150000 });
      
        
        collector.on('collect', async i => {
            if(i.user.id!=message.author.id) return
            if (i.customId === 'items'||i.customId === 'itemsPage1') {
                await i.update({ embeds: [itemsShopMain1], components: [rowShopItems1] });
            }

            if (i.customId === 'itemsPage2') {
                await i.update({ embeds: [itemsShopMain2], components: [rowShopItems2] });
            }

            

            if (i.customId === 'locations'||i.customId === 'backLocation') {
                await i.update({ embeds: [locationsShopMain], components: [rowLocationShopMain] });
            }


            if (i.customId === 'showLocation'&&profileData.userID == message.author.id) {
                await i.update({ embeds: [locationsShopRatville], components: [rowRatville] });
            }
            
            
            
            if (i.customId === 'nextLocation1') {
                await i.update({ embeds: [locationsShopDreamerPeak], components: [rowDreamerPeak] });
            }
            if (i.customId === 'previousLocation1'||i.customId === 'backHolyCastle') {
                await i.update({ embeds: [locationsShopHolyCastle], components: [rowHolyCastle] });
            }


            if (i.customId === 'previousLocation2') {
                await i.update({ embeds: [locationsShopRatville], components: [rowRatville] });
            }
            if (i.customId === 'nextLocation2') {
                await i.update({ embeds: [locationsShopRatholeTown], components: [rowRatholeTown] });
            }
            if (i.customId === 'buyDreamerPeak'){

                const price = profileData.profile.location.dreamerPeak.price;
                if (profileData.lotus < price){
                    await i.update({ embeds: [fLocationMoney], components: [rowBackDreamerPeak] });
                }
                else
                {
                    await profileModel.findOneAndUpdate({
                        userID: message.author.id,
                    }, {
                        $set: {
                            'profile.location.dreamerPeak.value' : 1
                        },
                        $inc:{
                            lotus : -price,
                            'profile.stats.locDiscovered': 1,
                        }
                    });
                    locationsShopDreamerPeak.fields= { name: '\u200b', value:`✅**DISCOVERED**✅ \n\n **Bonus** :\n \`x1.1\` :rat: *(common)*` }
                   
                    rowDreamerPeak.components[3].setDisabled(true);
                        
                    await i.update({ embeds: [successLocationPayment], components: [rowBackDreamerPeak] }); 
                }   
            }
            


            if (i.customId === 'previousLocation3'||i.customId === 'backDreamerPeak') {
                await i.update({ embeds: [locationsShopDreamerPeak], components: [rowDreamerPeak] });
            }
            if (i.customId === 'nextLocation3') {
                await i.update({ embeds: [locationsShopWhitecliffFort], components: [rowWhitecliffFort] });
            }
            if (i.customId === 'buyRatholeTown'){

                const price = profileData.profile.location.ratholeTown.price;
                if (profileData.lotus < price){
                    await i.update({ embeds: [fLocationMoney], components: [rowBackRatholeTown] });
                }
                else
                {
                    await profileModel.findOneAndUpdate({
                        userID: message.author.id,
                    }, {
                        $set: {
                            'profile.location.ratholeTown.value' : 1
                        },
                        $inc:{
                            lotus : -price,
                            'profile.stats.locDiscovered': 1,
                        }
                    });
                    locationsShopRatholeTown.fields= { name: '\u200b', value:`✅**DISCOVERED**✅ \n\n **Bonus** :\n \`x1.3\` :rat: *(common)*` }
                    
                    rowRatholeTown.components[3].setDisabled(true);

                    await i.update({ embeds: [successLocationPayment], components: [rowBackRatholeTown] }); 
                }   
            }
            


            if (i.customId === 'previousLocation4'||i.customId === 'backRatholeTown') {
                await i.update({ embeds: [locationsShopRatholeTown], components: [rowRatholeTown] });
            }
            if (i.customId === 'nextLocation4') {
                await i.update({ embeds: [locationsShopWaterHeaven], components: [rowWaterHeaven] });
            }

            if (i.customId === 'buyWhitecliffFort'){

                const price = profileData.profile.location.whitecliffFort.price;
                if (profileData.lotus < price){
                    await i.update({ embeds: [fLocationMoney], components: [rowBackWhitecliffFort] });
                }
                else
                {
                    await profileModel.findOneAndUpdate({
                        userID: message.author.id,
                    }, {
                        $set: {
                            'profile.location.whitecliffFort.value' : 1
                        },
                        $inc:{
                            lotus : -price,
                            'profile.stats.locDiscovered': 1,
                        }
                    });
                    locationsShopWhitecliffFort.fields= { name: '\u200b', value:`✅**DISCOVERED**✅ \n\n **Bonus** :\n \`x1.05\` :mouse2: *(rare)*` }
                    
                    rowWhitecliffFort.components[3].setDisabled(true);

                    await i.update({ embeds: [successLocationPayment], components: [rowBackWhitecliffFort] }); 
                }   
            }




            if (i.customId === 'previousLocation5'||i.customId === 'backWhitecliffFort') {
                await i.update({ embeds: [locationsShopWhitecliffFort], components: [rowWhitecliffFort] });
            }
            if (i.customId === 'nextLocation5') {
                await i.update({ embeds: [locationsShopRatLine], components: [rowRatLine] });
            }

            if (i.customId === 'buyWaterHeaven'){

                const price = profileData.profile.location.waterHeaven.price;
                if (profileData.lotus < price){
                    await i.update({ embeds: [fLocationMoney], components: [rowBackWaterHeaven] });
                }
                else
                {
                    await profileModel.findOneAndUpdate({
                        userID: message.author.id,
                    }, {
                        $set: {
                            'profile.location.waterHeaven.value' : 1
                        },
                        $inc:{
                            lotus : -price,
                            'profile.stats.locDiscovered': 1,
                        }
                    });
                    locationsShopWaterHeaven.fields= { name: '\u200b', value:`✅**DISCOVERED**✅ \n\n **Bonus** :\n \`x1.6\` :rat: *(common)*` }
                    
                    rowWaterHeaven.components[3].setDisabled(true);

                    await i.update({ embeds: [successLocationPayment], components: [rowBackWaterHeaven] }); 
                }   
            }




            if (i.customId === 'previousLocation6'||i.customId === 'backWaterHeaven') {
                await i.update({ embeds: [locationsShopWaterHeaven], components: [rowWaterHeaven] });
            }
            if (i.customId === 'nextLocation6') {
                await i.update({ embeds: [locationsShopSandoraDesert], components: [rowSandoraDesert] });
            }

            if (i.customId === 'buyRatLine'){

                const price = profileData.profile.location.ratLine.price;
                if (profileData.lotus < price){
                    await i.update({ embeds: [fLocationMoney], components: [rowBackRatLine] });
                }
                else
                {
                    await profileModel.findOneAndUpdate({
                        userID: message.author.id,
                    }, {
                        $set: {
                            'profile.location.ratLine.value' : 1
                        },
                        $inc:{
                            lotus : -price,
                            'profile.stats.locDiscovered': 1,
                        }
                    });
                    locationsShopRatLine.fields= { name: '\u200b', value:`✅**DISCOVERED**✅ \n\n **Bonus** :\n \`x1.2\` :beaver: *(epic)*` }
                    
                    rowRatLine.components[3].setDisabled(true);

                    await i.update({ embeds: [successLocationPayment], components: [rowBackRatLine] }); 
                }   
            }




            if (i.customId === 'previousLocation7'||i.customId === 'backRatLine') {
                await i.update({ embeds: [locationsShopRatLine], components: [rowRatLine] });
            }
            if (i.customId === 'nextLocation7') {
                await i.update({ embeds: [locationsShopSpringRiverFalls], components: [rowSpringRiverFalls] });
            }

            if (i.customId === 'buySandoraDesert'){

                const price = profileData.profile.location.sandoraDesert.price;
                if (profileData.lotus < price){
                    await i.update({ embeds: [fLocationMoney], components: [rowBackSandoraDesert] });
                }
                else
                {
                    await profileModel.findOneAndUpdate({
                        userID: message.author.id,
                    }, {
                        $set: {
                            'profile.location.sandoraDesert.value' : 1
                        },
                        $inc:{
                            lotus : -price,
                            'profile.stats.locDiscovered': 1,
                        }
                    });
                    locationsShopSandoraDesert.fields= { name: '\u200b', value:`✅**DISCOVERED**✅ \n\n **Bonus** :\n \`x1.5\` :rat: *(common)* \n \`x1.1\` :mouse2: *(rare)*` }
                    
                    rowSandoraDesert.components[3].setDisabled(true);

                    await i.update({ embeds: [successLocationPayment], components: [rowBackSandoraDesert] }); 
                }   
            }



            if (i.customId === 'previousLocation8'||i.customId === 'backSandoraDesert') {
                await i.update({ embeds: [locationsShopSandoraDesert], components: [rowSandoraDesert] });
            }
            if (i.customId === 'nextLocation8') {
                await i.update({ embeds: [locationsShopIcefallMountains], components: [rowIcefallMountains] });
            }

            if (i.customId === 'buySpringRiverFalls'){

                const price = profileData.profile.location.springRiverFalls.price;
                if (profileData.lotus < price){
                    await i.update({ embeds: [fLocationMoney], components: [rowBackSpringRiverFalls] });
                }
                else
                {
                    let profile = await profileModel.findOneAndUpdate({
                        userID: message.author.id,
                    }, {
                        $set: {
                            'profile.location.springRiverFalls.value' : 1
                        },
                        $inc:{
                            lotus : -price,
                            'profile.stats.locDiscovered': 1,
                        }
                    });
                    
                    locationsShopSpringRiverFalls.fields= { name: '\u200b', value:`✅**DISCOVERED**✅ \n\n **Bonus** :\n \`x2\` :rat: *(common)*` }
                    
                    rowSpringRiverFalls.components[3].setDisabled(true);

                    await i.update({ embeds: [successLocationPayment], components: [rowBackSpringRiverFalls] }); 
                }   
            }



            if (i.customId === 'previousLocation9'||i.customId === 'backSpringRiverFalls') {
                await i.update({ embeds: [locationsShopSpringRiverFalls], components: [rowSpringRiverFalls] });
            }
            if (i.customId === 'nextLocation9') {
                await i.update({ embeds: [locationsShopGreenstoneValley], components: [rowGreenstoneValley] });
            }

            if (i.customId === 'buyIcefallMountains'){

                const price = profileData.profile.location.icefallMountains.price;
                if (profileData.lotus < price){
                    await i.update({ embeds: [fLocationMoney], components: [rowBackIcefallMountains] });
                }
                else
                {
                    await profileModel.findOneAndUpdate({
                        userID: message.author.id,
                    }, {
                        $set: {
                            'profile.location.icefallMountains.value' : 1
                        },
                        $inc:{
                            lotus : -price,
                            'profile.stats.locDiscovered': 1,
                        }
                    });
                    locationsShopIcefallMountains.fields= { name: '\u200b', value:`✅**DISCOVERED**✅ \n\n **Bonus** :\n \`x1.2\` :mouse2: *(rare)*  \n \`x1.5\` :beaver: *(epic)*` }
                    
                    rowIcefallMountains.components[3].setDisabled(true);

                    await i.update({ embeds: [successLocationPayment], components: [rowBackIcefallMountains] }); 
                }   
            }




            if (i.customId === 'previousLocation10'||i.customId === 'backIcefallMountains') {
                await i.update({ embeds: [locationsShopIcefallMountains], components: [rowIcefallMountains] });
            }
            if (i.customId === 'nextLocation10') {
                await i.update({ embeds: [locationsShopSunValleyCity], components: [rowSunValleyCity] });
            }

            if (i.customId === 'buyGreenstoneValley'){

                const price = profileData.profile.location.greenstoneValley.price;
                if (profileData.lotus < price){
                    await i.update({ embeds: [fLocationMoney], components: [rowBackGreenstoneValley] });
                }
                else
                {
                    await profileModel.findOneAndUpdate({
                        userID: message.author.id,
                    }, {
                        $set: {
                            'profile.location.greenstoneValley.value' : 1
                        },
                        $inc:{
                            lotus : -price,
                            'profile.stats.locDiscovered': 1,
                        }
                    });
                    locationsShopGreenstoneValley.fields= { name: '\u200b', value:`✅**DISCOVERED**✅ \n\n **Bonus** :\n \`x2.0\` :beaver: *(epic)*` }
                    
                    rowGreenstoneValley.components[3].setDisabled(true);

                    await i.update({ embeds: [successLocationPayment], components: [rowBackGreenstoneValley] }); 
                }   
            }




            if (i.customId === 'previousLocation11'||i.customId === 'backGreenstoneValley') {
                await i.update({ embeds: [locationsShopGreenstoneValley], components: [rowGreenstoneValley] });
            }
            if (i.customId === 'nextLocation11') {
                await i.update({ embeds: [locationsShopOldTavern], components: [rowOldTavern] });
            }

            if (i.customId === 'buySunValleyCity'){

                const price = profileData.profile.location.sunValleyCity.price;
                if (profileData.lotus < price){
                    await i.update({ embeds: [fLocationMoney], components: [rowBackSunValleyCity] });
                }
                else
                {
                    await profileModel.findOneAndUpdate({
                        userID: message.author.id,
                    }, {
                        $set: {
                            'profile.location.sunValleyCity.value' : 1
                        },
                        $inc:{
                            lotus : -price,
                            'profile.stats.locDiscovered': 1,
                        }
                    });
                    locationsShopSunValleyCity.fields= { name: '\u200b', value:`✅**DISCOVERED**✅ \n\n **Bonus** :\n \`x1.77\` :rabbit2: *(exotic)*` }
                    
                    rowSunValleyCity.components[3].setDisabled(true);

                    await i.update({ embeds: [successLocationPayment], components: [rowBackSunValleyCity] }); 
                }   
            }




            if (i.customId === 'previousLocation12'||i.customId === 'backSunValleyCity') {
                await i.update({ embeds: [locationsShopSunValleyCity], components: [rowSunValleyCity] });
            }
            if (i.customId === 'nextLocation12') {
                await i.update({ embeds: [locationsShopHolyCastle], components: [rowHolyCastle] });
            }

            if (i.customId === 'buyOldTavern'){

                const price = profileData.profile.location.oldTavern.price;
                if (profileData.lotus < price){
                    await i.update({ embeds: [fLocationMoney], components: [rowBackOldTavern] });
                }
                else
                {
                    await profileModel.findOneAndUpdate({
                        userID: message.author.id,
                    }, {
                        $set: {
                            'profile.location.oldTavern.value' : 1
                        },
                        $inc:{
                            lotus : -price,
                            'profile.stats.locDiscovered': 1,
                        }
                    });
                    locationsShopOldTavern.fields= { name: '\u200b', value:`✅**DISCOVERED**✅ \n\n **Bonus** :\n \`x4.0\` :beaver: *(epic)* \n \`x3.3\` :rabbit2: *(exotic)*` }
                    
                    rowOldTavern.components[3].setDisabled(true);

                    await i.update({ embeds: [successLocationPayment], components: [rowBackOldTavern] }); 
                }   
            }



            if (i.customId === 'previousLocation13'||i.customId === 'backOldTavern') {
                await i.update({ embeds: [locationsShopOldTavern], components: [rowOldTavern] });
            }
            if (i.customId === 'nextLocation13') {
                await i.update({ embeds: [locationsShopRatville], components: [rowRatville] });
            }

            if (i.customId === 'buyHolyCastle'){

                const price = profileData.profile.location.holyCastle.price;
                if (profileData.lotus < price){
                    await i.update({ embeds: [fLocationMoney], components: [rowBackHolyCastle] });
                }
                else
                {
                    await profileModel.findOneAndUpdate({
                        userID: message.author.id,
                    }, {
                        $set: {
                            'profile.location.holyCastle.value' : 1
                        },
                        $inc:{
                            lotus : -price,
                            'profile.stats.locDiscovered': 1,
                        }
                    });
                    locationsShopHolyCastle.fields= { name: '\u200b', value:`✅**DISCOVERED**✅ \n\n **Bonus** :\n \`x4.2\` :rabbit2: *(exotic)* \n \`x9.9\` :bat: *(legendary)*` }
                    
                    rowHolyCastle.components[3].setDisabled(true);

                    await i.update({ embeds: [successLocationPayment], components: [rowBackHolyCastle] }); 
                }   
            }



            


            



            if (i.customId === 'buildings') {
                await i.update({ embeds: [buildingsShopMain], components: [rowBack] });
            }
            if (i.customId === 'other') {
                await i.update({ embeds: [otherShopMain], components: [rowBack] });
            }
            if (i.customId === 'back') {
                await i.update({ embeds: [mainShopEmbed], components: [rowShopMain] });
            }
            
        });
    
       //collector.on('end', collected => console.log(`Collected ${collected.size} items`));     

    }
}

