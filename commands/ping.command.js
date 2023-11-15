const Command = require('@structs/command')
const {EmbedBuilder, ActionRowBuilder} = require("discord.js");

module.exports = new Command('ping', 'Ping the bot', undefined, async (bot, interaction) => {
    await interaction.reply({
        content: undefined,
        embeds: [
            new EmbedBuilder()
                .setColor(bot.color)
                .setDescription(':ping_pong: Pong!')
        ],
        components: [
            new ActionRowBuilder({
                components: [
                    bot.buttons.get('ping')?.build()
                ]
            })
        ],
        ephemeral: true
    })
})
