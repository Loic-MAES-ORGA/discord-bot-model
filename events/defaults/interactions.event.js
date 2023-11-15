const Event = require('@structs/event')
const {EmbedBuilder} = require("discord.js");

function parseInteraction (interaction) {
    const parts = interaction.customId.split('%')
    return {
        id: parts[0],
        placeholder: parts.length === 2 ? parts[1] : undefined
    }
}

module.exports = new Event('interactionCreate', async (bot, interaction) => {
    if (interaction.isCommand()) {
        const command = bot.commands.get(interaction.commandName)
        if (!command) return await interaction.reply({
            content: undefined,
            embeds: [
                new EmbedBuilder()
                    .setColor('#FF0000')
                    .setDescription(':x: Unable to run this command!')
            ],
            ephemeral: true
        })
        await command.callback(bot, interaction)
    }
    if (interaction.isModalSubmit()) {
        const { id, placeholder } = parseInteraction(interaction)
        const modal = bot.modals.get(id)
        if (!modal) return await interaction.reply({
            content: undefined,
            embeds: [
                new EmbedBuilder()
                    .setColor('#FF0000')
                    .setDescription(':x: Unable to perform this modal\'s action!')
            ],
            ephemeral: true
        })
        await modal.callback(bot, interaction, placeholder)
    }
    if (interaction.isButton()) {
        const { id, placeholder } = parseInteraction(interaction)
        const button = bot.buttons.get(id)
        if (!button) return await interaction.reply({
            content: undefined,
            embeds: [
                new EmbedBuilder()
                    .setColor('#FF0000')
                    .setDescription(':x: Unable to perform this button\'s action!')
            ],
            ephemeral: true
        })
        await button.callback(bot, interaction, placeholder)
    }
    if (interaction.isAnySelectMenu()) {
        const { id, placeholder } = parseInteraction(interaction)
        const menu = bot.menus.get(interaction.custom_id)
        if (!menu) return await interaction.reply({
            content: undefined,
            embeds: [
                new EmbedBuilder()
                    .setColor('#FF0000')
                    .setDescription(':x: Unable to perform this modal!')
            ],
            ephemeral: true
        })
        await menu.callback(bot, interaction, placeholder)
    }
})
