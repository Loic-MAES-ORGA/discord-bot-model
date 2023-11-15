const { TextInputStyle, TextInputBuilder } = require('discord.js')

class TextFieldOptions {
    style
    minLength
    maxLength
    required

    constructor (style, minLength, maxLength, required) {
        this.style = style
        this.minLength = minLength ?
            (maxLength && minLength !== maxLength ?
                Math.min(minLength, maxLength) :
                minLength)
            : undefined
        this.maxLength = maxLength ?
            (minLength && maxLength !== minLength ?
                Math.max(minLength, maxLength) :
                maxLength)
            : undefined
        this.required = required || false
    }
}

class TextField {
    id
    label
    options

    constructor (id, label, options) {
        this.id = id
        this.label = label
        this.options = options || new TextFieldOptions(TextInputStyle.Short, undefined, undefined, false)
    }

    build () {
        const input = new TextInputBuilder()
            .setCustomId(this.id)
            .setLabel(this.label)
            .setStyle(this.options.style || TextInputStyle.Short)
            .setRequired(this.options.required)
        if (this.options.minLength) input.setMinLength(this.options.minLength)
        if (this.options.maxLength) input.setMaxLength(this.options.maxLength)

        return input
    }
}

module.exports = {
    TextField,
    TextFieldOptions
}
