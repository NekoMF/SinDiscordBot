const canvacord = require("canvacord")
module.exports = {
    name: 'level',
    aliases: ["rank"],
    category: 'fun',
    description: "this is a rac command!",
    execute(message, args, client, Discord, profileData){

        const img = "https://cdn.discordapp.com/embed/avatars/0.png";
        
        
        const gradient = canvacord.Canvas.gradient("red", "blue", 934, 282); // rank card size is 934 x 282 by default

        

        const rank = new canvacord.Rank()
            .setAvatar(message.author.displayAvatarURL({ format: 'png' }))
            .setCurrentXP(profileData.level.xp)
            .setRequiredXP(profileData.level.nextReq)
            .setLevel(profileData.level.value)
            .setRank(1, "RANK", false)
            .setStatus("dnd")
            .setProgressBar("#FFFFFF", "COLOR")
            .setUsername(message.author.username)
            .setDiscriminator(message.author.discriminator)
            .setBackground("IMAGE", "https://media.discordapp.net/attachments/888562436188286987/917453999966421042/pixel-cat-2020-02-25-gai1.jpg?width=1261&height=669");
        
        rank.build()
            .then(data => {
                const attachment = new Discord.MessageAttachment(data, "RankCard.png");
                message.reply({ files: [attachment] });
            });    
        
    }
}