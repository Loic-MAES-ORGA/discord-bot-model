const recoverFiles = require('@handlers/files.handler')
const Ascii = require('ascii-table')

module.exports = bot => {
    const files = recoverFiles('./commands', true)
    const table = new Ascii('Commands')

    if (files.length === 0) {
        table.addRow('No data')
        return console.log(table.toString())
    }

    files.forEach(file => {
        const command = require(`@commands/${file}`)
        bot.registerCommand(command)
        table.addRow(command.name, command.options?.length > 0 ? '✅' : '❌', '🔹 Loaded')
    })

    table.setHeading('Name', 'Has options', 'Status')
    console.log(table.toString())
}
