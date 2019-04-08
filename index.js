const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "?";

client.login('NTYzODIwODQ2MTg0MTM2NzI0.XKss_g.g0HNLdpSoS4E9Rf78WGAqPCBJNY');

client.on('message', message =>{
    if(message.content === "tu fais quoi?"){
        message.channel.sendMessage('Je me fais coder par nostrip ');
        console.log('répond à tfq');
    }
});