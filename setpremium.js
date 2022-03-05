const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "setpremium", // Coloque o nome do comando do arquivo
    aliases: ["sp", "addpremium"], // Coloque sinônimos aqui

    run: async(client, message, args) => {

        let seu_id = "493282797222494230"

        if (message.member.id !== seu_id) {
            message.reply(`Apenas meu dono pode utilizar este comando. <@493282797222494230>`)
        } else {

            let user = message.mentions.users.first() || client.users.cache.get(args[0]);

            if (!user) {

                let embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`\`G!setpremium [usuário]\``);

                message.reply({ embeds: [embed] })

            } else {

                message.reply(`O usuário ${user} (\`${user.tag}\`) foi adicionado à minha lista de premiums.`);
                db.set(`premium_${user.id}`, true)
            }
        }
        
    }
}