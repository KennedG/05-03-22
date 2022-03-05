const Discord = require("discord.js")
const db = require("quick.db");
const ms = require('parse-ms');

module.exports = {
    name: "comando_teste", // Coloque o nome do comando do arquivo
    aliases: ["ct"], // Coloque sinônimos aqui

    run: async(client, message, args) => {

        let d = db.get(`premium_${message.author.id}`);

        if (d !== true) {

            message.reply(`Este comando é apenas para usuários premium.<a:vegasvip:949092680661606430>`)

        } else {

        function ms(ms) {
        const seconds = ~~(ms/1000)
        const minutes = ~~(seconds/60)
        const hours = ~~(minutes/60) 
        const days = ~~(hours/24)
        return { days, hours: hours%24, minutes: minutes%60, seconds: seconds%60 }}
        
        
        let save_timer_daily = db.fetch(`cristaisextra.${message.author.id}`)
        
        let tempoMs = 3600000;
        let saveDbMS = await save_timer_daily
        let tempo = ms(tempoMs - (Date.now() - saveDbMS))
        
        if(tempo.minutes > 0 || tempo.seconds > 0){
            
            
          message.reply(`Ops ${message.author}!\nEspere mais um tempo para entrar na caverna avançada`)

        } else{
            
            let rand = Math.floor(Math.random() * 30) + 10
            
            let embed1 = new Discord.MessageEmbed()
            .setColor(`#0060EE`)
            .setTitle(`<:az_cristal_old:940749107377627186> | Cristais!`)
            .setDescription(`**${message.author}!** Você entrou na caverna e ganhou **${rand} cristais!**`)
            .setFooter(`Pedido por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }));
            
            
            message.reply({embeds: [embed1]})
            
            
            db.set(`cristaisextra.${message.author.id}`, Date.now())
            
            db.add(`cristais_${message.author.id}`, parseInt(rand))
        }
    
            
            message.reply(`Parabéns ${message.author}! Você está utilizando meu comando premium.<a:vegasvip:949092680661606430>`);
            message.react("<a:verificado:908562051927007242>");

        }

       
        
    }
}