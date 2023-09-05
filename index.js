const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({ intents: [
                                      GatewayIntentBits.Guilds, 
                                      GatewayIntentBits.GuildMessages,
                                      GatewayIntentBits.MessageContent,
                                    ], 
                                });

client.on("messageCreate", (message) => {
    if (message.author.bot) return ;
    message.reply({
        content:"Hi from Bot",
    });
});

client.on('interactionCreate', interaction=>{
    console.log(interaction);
    interaction.reply("pong!!");
})

client.login(
 "MTE0ODQ2MjI0ODg2NDUzMDU2Mg.GLDVyX.C4FlvFUDl9OoKOxnkyUguompSrK03Z2EdyLIb8"
);