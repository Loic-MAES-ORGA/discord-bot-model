const recoverFiles = require('@handlers/files.handler')
const Ascii = require('ascii-table')

module.exports = bot => {
    const files = recoverFiles('./components', true)
    const table = new Ascii('Components')

    if (files.length === 0) {
        table.addRow('No data')
        return console.log(table.toString())
    }

    files.forEach(file => {
        const component = require(`@components/${file}`)
        const type = bot.registerComponent(component)
        table.addRow(component.id, type, '🔹 Loaded')
    })

    table.setHeading('Custom Id', 'Type', 'Status')
    console.log(table.toString())
}
