const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'map',
    aliases: ["m"],
    category: 'economy',
    description: " :map: Checks your current location on the map! ",
    async execute(message, args, client, Discord, profileData){
        INF = new Intl.NumberFormat('en-US')        
       
        

            if (args[0]=="max"){
                message.reply ('https://media.discordapp.net/attachments/769968561153114133/919659714193813574/Ratlandia.png');
            }   else    
            if (profileData.profile.location.travel==1){
                message.reply ('https://media.discordapp.net/attachments/769968561153114133/919638684637212752/Screenshot_22.png');
            }   else
            if (profileData.profile.location.travel==2){
                message.reply ('https://media.discordapp.net/attachments/769968561153114133/919638685081800704/Screenshot_23.png');
            }   else
            if (profileData.profile.location.travel==13){
                message.reply ('https://media.discordapp.net/attachments/769968561153114133/919638685723553822/Screenshot_24.png');
            }   else
            if (profileData.profile.location.travel==8){
                message.reply ('https://media.discordapp.net/attachments/769968561153114133/919638174479835207/Screenshot_34.png');
            }   else
            if (profileData.profile.location.travel==7){
                message.reply ('https://media.discordapp.net/attachments/769968561153114133/919638686176530432/Screenshot_25.png');
            }   else
            if (profileData.profile.location.travel==5){
                message.reply ('https://media.discordapp.net/attachments/769968561153114133/919638687288016976/Screenshot_27.png');
            }   else
            if (profileData.profile.location.travel==6){
                message.reply ('https://media.discordapp.net/attachments/769968561153114133/919638686654668840/Screenshot_26.png');
            }   else
            if (profileData.profile.location.travel==11){
                message.reply ('https://media.discordapp.net/attachments/769968561153114133/919638689011871804/Screenshot_31.png');
            }   else
            if (profileData.profile.location.travel==4){
                message.reply ('https://media.discordapp.net/attachments/769968561153114133/919638687715819621/Screenshot_28.png');
            }   else
            if (profileData.profile.location.travel==9){
                message.reply ('https://media.discordapp.net/attachments/769968561153114133/919638173947138048/Screenshot_33.png');
            }   else
            if (profileData.profile.location.travel==10){
                message.reply ('https://media.discordapp.net/attachments/769968561153114133/919638173565460541/Screenshot_32.png');
            }   else
            if (profileData.profile.location.travel==3){
                message.reply ('https://media.discordapp.net/attachments/769968561153114133/919638688655364096/Screenshot_30.png');
            }   else
            if (profileData.profile.location.travel==12){
                message.reply ('https://media.discordapp.net/attachments/769968561153114133/919638688378552420/Screenshot_29.png');
            }    
            

            

			

           
    }
}