const { SapphireClient } = require('@sapphire/framework');
const { GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new SapphireClient({ intents: [GatewayIntentBits.Guilds] });

client.login(process.env.DISCORD_BOT_TOKEN);