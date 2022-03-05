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

            let user = message.author;
    
            let author = await db.fetch(`implorar.${user.id}`)
        
            let timeout = 6000000;
            
            if (author !== null && timeout - (Date.now() - author) > 0) {
                
                let time = ms(timeout - (Date.now() - author));
            
                message.reply(`❌ | ${message.author} **Você sabia que os seres humanos ficam cansados? você não tem mais força para continuar!**`);
                
                message.channel.send({content: `${user}`, embeds: [timeEmbed] });
            } else {
                let replies = ['Programador (a)','Construtor (a)','Agricultor (a)','Garoto(a) de Programa','Garçom','Mecanico (a)','Cozinheiro (a)',
                              'Vendedor (a)','Barqueiro (a)','Youtuber','Padeiro (a)']
          
                let result = Math.floor((Math.random() * replies.length));
        
                let amount = Math.floor(Math.random() * 5000) + 1;
        
                let embed1 = new Discord.MessageEmbed()
                .setTitle("<:coinGizmo:940747974206713886> | efetuado com sucesso!")
                .setColor("#0060EE")
                .setDescription(`${message.author} Você implorou e ganhou: <:coinGizmo:940747974206713886> **${amount}** Gizmo coins!`)
                .setFooter("Você virou mendigo?")
                .setTimestamp();
        
                message.channel.send({content: `${user}`, embeds: [embed1] });
                
                db.add(`gizmo.${user.id}`, amount);
                db.set(`implorar.${message.author.id}`, Date.now())
            };

            message.reply(`Parabéns ${message.author}! Você está utilizando meu comando premium.<a:vegasvip:949092680661606430>`);
            message.react("<a:verificado:908562051927007242>");

        }

       
        
    }
}