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
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'your bot token here';

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
