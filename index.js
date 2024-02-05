const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const commands = require('./commands');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on('messageCreate', async message => {
    var inputLine = message.content.split(' ');
    if (inputLine[0] == "rh!") {
        if (inputLine[1] == 'add') {
            aR = await commands.add();
            message.reply("Current number of rehosts: " + aR);
        } else if (inputLine[1] == 'rm') {
            rmR = await commands.rm();
            message.reply("Current number of rehosts: " + rmR);
        } else if (inputLine[1] == 'clear') {
            cR = await commands.clear();
            message.reply("Number of rehosts has been reset to " + cR);
        }
    }
});

client.login(token);