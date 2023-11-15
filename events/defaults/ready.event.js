const Event = require('@structs/event')

module.exports = new Event('ready', async bot => {
    await bot.presence.set({
        activities: [
            {
                name: 'Crashing anyway',
                type: 0
            }
        ]
    })

    const commands = bot.commands.map(cmd => cmd)
    if (process.env.NODE_ENV === 'development') {
        const devGuild = await bot.guilds.cache.get(process.env.DEV_GUILD_ID)
        await devGuild.commands.set(commands)
    } else for (const guild of bot.guilds.cache) await guild.commands.set(commands)
}, true)
