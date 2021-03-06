//Vous aurez besoin du module discord.js qui lui appelle l'API de Discord
const Discord = require("discord.js");
//Vous appellez une fonction de l'objet créé au-dessus qui permet de récupérer un objet utilisateur client qui représente le bot
const bot = new Discord.Client();

bot.on("ready", function () {
 //ici vous afficherez dans le terminal que le bot est bien connecté
 console.log("Carapuce est dans les places !");
});


//ici vous regardez quand le bot est en ligne et qu'il voit passer un message (peu importe le serveur)
bot.on("message", message => {
 //vous regardez alors si le contenu du message est strictement égale à "!ping"
  if (message.content === "!ping") {
 //si oui vous arrivez ici et vous envoyez, dans le channel d'où provient le message, "Carapong !"
    message.channel.send("Carapong !");
    }
  if (message.content === "!carabonjour") {
    message.reply("Carabonjour à toi !");
    message.react("😃");
    message.react(bot.emojis.cache.get("817796750227013652"))
  }
  if (message.content.startsWith("!pin")) {
    message.pin();
  }
});
//la ligne suivante permet d'indiquer à l'objet Discord qui est votre bot afin qu'il puisse se connecter

bot.login("ODE3NzY3NTE5MzIxNzE4ODM3.YEOTWQ.OFjXxikxGhC1tOufnAYYNGDyrak");
