module.exports = {
    name: 'stupid',
    category: 'utility',
    description: "this is a stupid command!",
    execute(message, args){

        if (message.member.roles.cache.has('843854504519794760'))   
        {
            message.channel.send('Yes you are');
        }
        else
        {
            message.channel.send('You are not stupid!!!!!, let me solve that real quick. Check now... ');
           message.member.roles.add('843854504519794760').catch(console.error);
            //message.member.roles.remove('843854504519794760');
        }

        
    }
}