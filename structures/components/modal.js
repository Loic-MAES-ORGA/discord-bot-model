const { ModalBuilder, ActionRowBuilder } = require('discord.js')
const Component = require('@structs/component')
const { TextField } = require('@structs/components/textField')

class ModalOptions {
    title
    fields = []

    constructor (title, fields) {
        this.title = title
        this.fields = fields?.filter(field => field instanceof TextField).map(field => new ActionRowBuilder({
            components: [
                field.build()
            ]
        }))
    }
}

class Modal extends Component {
    options

    constructor (id, options, callback) {
        super (id, callback)
        this.options = options
    }

    build (placeholder) {
        return new ModalBuilder()
            .setCustomId(`${this.id}${placeholder ? `%${placeholder}` : ''}`)
            .setTitle(this.options.title)
            .setComponents(this.options.fields)
    }
}

module.exports = {
    Modal,
    ModalOptions
}
