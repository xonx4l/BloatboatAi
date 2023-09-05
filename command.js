const { REST, Routes } = require("discord.js");

const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
  ];

  const rest = new REST({ version: '10' }).setToken("MTE0ODQ2MjI0ODg2NDUzMDU2Mg.GLDVyX.C4FlvFUDl9OoKOxnkyUguompSrK03Z2EdyLIb8");

 (async () => {
  try {
    console.log("Started refreshing application (/) commands.");
  
    await rest.put(Routes.applicationCommands("1148462248864530562"), { 
      body: commands,
     });
  
    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();