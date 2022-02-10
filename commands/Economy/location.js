const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'location',
    aliases: ["loc"],
    category: 'economy',
    description: ":mouse: Checks your current location! ",
    async execute(message, args, client, Discord, profileData){
        INF = new Intl.NumberFormat('en-US')        
       
        const exampleEmbed = new MessageEmbed()
			.setColor('#ffffff')
            .setTitle (`:map:  ${message.author.username}'s LOCATION`)
            .addFields(
                

            )
            .setImage ('')
			.setTimestamp()
            .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic:true, size: 512})}`);


            if (profileData.profile.location.travel==1){
                exampleEmbed.fields.push ({name:`Name : RATVILLE 🏡 `, value:`\u200b`});
                exampleEmbed.image.url = 'https://cdn.discordapp.com/attachments/769968561153114133/919643336086810694/Village.jpg';
            }   else
            if (profileData.profile.location.travel==2){
                exampleEmbed.fields.push ({name:`Name : DREAMER PEAK `, value:`**Bonus** :\n \`x1.1\` :rat: *(common)*`});
                exampleEmbed.image.url = 'https://media.discordapp.net/attachments/769968561153114133/919643408946069555/pixel-cat-12-17-3-4.jpg';
            }   else
            if (profileData.profile.location.travel==3){
                exampleEmbed.fields.push ({name:`Name : RATHOLE TOWN `, value:`**Bonus** :\n \`x1.3\` :rat: *(common)*`});
                exampleEmbed.image.url = 'https://cdn.discordapp.com/attachments/769968561153114133/919643408711168030/pixel-cat-12-1-5.jpg';
            }   else
            if (profileData.profile.location.travel==4){
                exampleEmbed.fields.push ({name:`Name : WHITECLIFF FORT `, value:`**Bonus** :\n \`x1.05\` :mouse2: *(rare)*`});
                exampleEmbed.image.url = 'https://cdn.discordapp.com/attachments/769968561153114133/919643410451804220/pixel-cat-2020-02-25-gai1.jpg';
            }   else
            if (profileData.profile.location.travel==5){
                exampleEmbed.fields.push ({name:`Name : WATER HEAVEN `, value:`**Bonus** :\n \`x1.6\` :rat: *(common)*`});
                exampleEmbed.image.url = 'https://cdn.discordapp.com/attachments/769968561153114133/919643407733891102/pixel-cat-2020-3-22-12-28-3-5-2.jpg';
            }   else
            if (profileData.profile.location.travel==6){
                exampleEmbed.fields.push ({name:`Name : RAT LINE `, value:`**Bonus** :\n \`x1.2\` :beaver: *(epic)*`});
                exampleEmbed.image.url = 'https://cdn.discordapp.com/attachments/769968561153114133/919643409491320852/pixel-cat-12-21-2-2.jpg';
            }   else
            if (profileData.profile.location.travel==7){
                exampleEmbed.fields.push ({name:`Name : SANDORA DESERT `, value:`**Bonus** :\n \`x1.5\` :rat: *(common)* \n \`x1.1\` :mouse2: *(rare)*`});
                exampleEmbed.image.url = 'https://cdn.discordapp.com/attachments/769968561153114133/919643409206087731/pixel-cat-12-20-2-3.jpg';
            }   else
            if (profileData.profile.location.travel==8){
                exampleEmbed.fields.push ({name:`Name : SPRING RIVER FALLS `, value:`**Bonus** :\n \`x2\` :rat: *(common)*`});
                exampleEmbed.image.url = 'https://cdn.discordapp.com/attachments/769968561153114133/919643410212733008/pixel-cat-2020-02-20-3-2.jpg';
            }   else
            if (profileData.profile.location.travel==9){
                exampleEmbed.fields.push ({name:`Name : ICEFALL MOUNTAINS `, value:`**Bonus** :\n \`x1.2\` :mouse2: *(rare)*  \n \`x1.5\` :beaver: *(epic)*`});
                exampleEmbed.image.url = 'https://cdn.discordapp.com/attachments/769968561153114133/919643408245616750/pixel-cat-2-11.jpg';
            }   else
            if (profileData.profile.location.travel==10){
                exampleEmbed.fields.push ({name:`Name : GREENSTONE VALLEY `, value:`**Bonus** :\n \`x2.0\` :beaver: *(epic)*`});
                exampleEmbed.image.url = 'https://cdn.discordapp.com/attachments/769968561153114133/919643408514039818/pixel-cat-5-4-7.jpg';
            }   else
            if (profileData.profile.location.travel==11){
                exampleEmbed.fields.push ({name:`Name : SUN VALLEY CITY `, value:`**Bonus** :\n \`x1.77\` :rabbit2: *(exotic)*`});
                exampleEmbed.image.url = 'https://cdn.discordapp.com/attachments/769968561153114133/919643407985573918/Edo_Tokyo.jpg';
            }   else
            if (profileData.profile.location.travel==12){
                exampleEmbed.fields.push ({name:`Name :OLD TAVERN `, value:`**Bonus** :\n \`x4.0\` :beaver: *(epic)* \n \`x3.3\` :rabbit2: *(exotic)*`});
                exampleEmbed.image.url = 'https://cdn.discordapp.com/attachments/769968561153114133/919643335847723068/Tavern.jpg';
            }   else
            if (profileData.profile.location.travel==13){
                exampleEmbed.fields.push ({name:`Name : HOLY CASTLE `, value:`**Bonus** :\n \`x4.2\` :rabbit2: *(exotic)* \n \`x9.9\` :bat: *(legendary)* `});
                exampleEmbed.image.url = 'https://cdn.discordapp.com/attachments/769968561153114133/919643335596052500/Royal_Castle.jpg';
            }      
            

            

			message.channel.send({ embeds: [exampleEmbed] });

           
    }
}