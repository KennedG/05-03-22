const Discord = require("discord.js");
const { MessageSelectMenu, MessageActionRow } = require("discord.js");

module.exports = {

    name: "ticket_menu",
    author: "ferinha",

    run: async(client, message, args) => {

        

        message.delete();

        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`**Crie um ticket selecionando uma categoria abaixo:**`)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }));


        let painel = new MessageActionRow().addComponents( new MessageSelectMenu()
        .setCustomId('menu')
        .setPlaceholder('Clique aqui.') // Mensagem estampada
        .addOptions([
               {
                    label: 'Suporte Geral',
                    description: '',
                    emoji: '🙋‍♂️',
                    value: 'geral',
               },
               {
                label: 'Premium',
                description: '',
                emoji: '<a:7884discordboostemoji:938556916420984963>',
                value: 'premium',
               },
               {
                label: 'Denúncias',
                description: '',
                emoji: '⛔',
                value: 'denuncias',
               },
               {
                label: 'Erro no bot',
                description: '',
                emoji: '🤖',
                value: 'bot',
               }
            ])

        );


        message.channel.send({ embeds: [embed], components: [painel] }).then(msg => {


            const filtro = (interaction) => 
            interaction.isSelectMenu()
      
          const coletor = msg.createMessageComponentCollector({
            filtro
          });
      

          coletor.on('collect', async (collected) => {

            let ticket = collected.values[0]
            collected.deferUpdate()




            if (ticket === "geral") {

                let embed_geral = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`**🙋‍♂️ Olá ${collected.user}, seu ticket foi criado na categoria \`Suporte Geral\`.**`);

                message.guild.channels.create(`${collected.user.id}`, {
                    type : 'GUILD_TEXT',
                    permissionOverwrites : [
                        {
                            id : message.guild.id,
                            deny : ['VIEW_CHANNEL']
                        },
                        {
                            id : collected.user.id,
                            allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
                        }
                    ]
                }).then(async (chat_ferinha) => {
        
                    chat_ferinha.send({ embeds: [embed_geral] }).then(msg => msg.pin() );
        
                });


            }



            if (ticket === "denuncias") {

                let embed_denuncias = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`**⛔ Olá ${collected.user}, seu ticket foi criado na categoria \`Denúncias\`.**`);

                message.guild.channels.create(`${collected.user.id}`, {
                    type : 'GUILD_TEXT',
                    permissionOverwrites : [
                        {
                            id : message.guild.id,
                            deny : ['VIEW_CHANNEL']
                        },
                        {
                            id : collected.user.id,
                            allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
                        }
                    ]
                }).then(async (chat_ferinha) => {
        
                    chat_ferinha.send({ embeds: [embed_denuncias] }).then(msg => msg.pin() );
        
                });
                
            }



            if (ticket === "premium") {

                let embed_denuncias = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`**<a:7884discordboostemoji:938556916420984963> Olá ${collected.user}, seu ticket foi criado na categoria \`Premium\`.**
                Até o momento temos apenas um plano premium no Gizmo!
                O valor de de 120 Mil Gizmo Coins <:coinGizmo:940747974206713886> seu premium e setado até 12 horas em dias utéis! sendo acionado pelo próprio dono <@493282797222494230>
                para fazer a transferência basta apenas usar o comando **G!pay 120k <@493282797222494230>** é esperar o suporte te responder!`);

                message.guild.channels.create(`${collected.user.id}`, {
                    type : 'GUILD_TEXT',
                    permissionOverwrites : [
                        {
                            id : message.guild.id,
                            deny : ['VIEW_CHANNEL']
                        },
                        {
                            id : collected.user.id,
                            allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
                        }
                    ]
                }).then(async (chat_ferinha) => {
        
                    chat_ferinha.send({ embeds: [embed_denuncias] }).then(msg => msg.pin() );
        
                });
                
            }



            if (ticket === "bot") {

                let embed_bot = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`**🤖 Olá ${collected.user}, seu ticket foi criado na categoria \`Erro no bot\`.**`);

                message.guild.channels.create(`${collected.user.id}`, {
                    type : 'GUILD_TEXT',
                    permissionOverwrites : [
                        {
                            id : message.guild.id,
                            deny : ['VIEW_CHANNEL']
                        },
                        {
                            id : collected.user.id,
                            allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
                        }
                    ]
                }).then(async (chat_ferinha) => {
        
                    chat_ferinha.send({ embeds: [embed_bot] }).then(msg => msg.pin() );
        
                });
                
            }


          })
                

        });

        

    }
}