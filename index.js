const Discord = require("discord.js");

const client = new Discord.Client();

const { CanvasSenpai } = require("canvas-senpai")

const canva = new CanvasSenpai();

client.once("ready", () => {

 console.log("Ready!");

});



const config = require('./config.json');



client.login(process.env.TOKEN)





client.on('guildMemberAdd', async member => {



   const channel = member.guild.channels.cache.find(ch => ch.name === config.channel);

   if (!channel) return;

 let data = await canva.welcome(member, { gradiant: "darkness" })

//GRADIANTS NAME - coldsky, peakblue, pinkman, aqua, darkness, angel





   const attachment = new Discord.MessageAttachment(

     data,

     "welcome-image.png"

   );

   channel.send(

     `Welcome to the server, ${member.user.username}!`,

     attachment

   );  

  });
