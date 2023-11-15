const recoverFiles = require('@handlers/files.handler')
const Ascii = require('ascii-table')

module.exports = bot => {
    const files = recoverFiles('./events', true)
    const table = new Ascii('Events')

    if (files.length === 0) {
        table.addRow('No data')
        return console.log(table.toString())
    }

    files.forEach(file => {
        const event = require(`@events/${file}`)
        bot.registerEvent(event)
        table.addRow(event.name, event.once ? '✅' : '❌', '🔹 Loaded')
    })

    table.setHeading('Name', 'Once', 'Status')
    console.log(table.toString())
}
