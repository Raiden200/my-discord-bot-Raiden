const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('here and ready!');
});

client.on('message', message => {
    if (message.content === 'ready?') {
    	message.reply('ready for control');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
