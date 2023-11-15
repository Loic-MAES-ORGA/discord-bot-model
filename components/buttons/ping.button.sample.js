const { Button, ButtonOptions } = require('@structs/components/button')
const {EmbedBuilder} = require("discord.js");

module.exports = new Button('ping', new ButtonOptions('Ping me', '🏓'), async (bot, interaction) => {
    await interaction.reply({
        content: undefined,
        embeds: [
            new EmbedBuilder()
                .setColor(bot.color)
                .setDescription(':ping_pong: Pong (from BUTTON)')
        ],
        ephemeral: true
    })
})
