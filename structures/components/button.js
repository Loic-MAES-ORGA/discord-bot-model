const { ButtonStyle, ButtonBuilder } = require('discord.js')
const Component = require('@structs/component')

class ButtonOptions {
    url
    label
    icon
    style
    disabled

    constructor (label, icon, style, disabled, url) {
        this.label = label
        this.icon = icon
        this.style = style || ButtonStyle.Primary
        this.disabled = disabled || false
        this.url = url || undefined
    }
}

class Button extends Component {
    options

    constructor (id, options, callback) {
        super(id, callback)
        this.options = options
    }

    build (placeholder) {
        if (!this.options) return undefined

        const button = new ButtonBuilder()
            .setLabel(this.options.label)
            .setStyle(this.options.style)
            .setDisabled(this.options.disabled)

        if (this.options.url) button.setURL(this.options.url)
        else button.setCustomId(`${this.id}${placeholder ? `%${placeholder}` : ''}`)

        if (this.options.icon) button.setEmoji(this.options.icon)
        return button
    }
}

module.exports = {
    Button,
    ButtonOptions
}
