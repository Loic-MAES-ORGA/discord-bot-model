const { SelectMenuBuilder, SelectMenuOptionBuilder } = require('discord.js')
const Component = require('@structs/component')

class MenuField {
    value
    label
    description
    icon
    isDefault

    constructor(value, label, description, icon, isDefault) {
        this.value = value
        this.label = label
        this.description = description
        this.icon = icon
        this.isDefault = isDefault || false
    }

    build () {
        return new SelectMenuOptionBuilder()
            .setLabel(this.label)
            .setValue(this.value)
            .setEmoji(this.icon)
            .setDefault(this.isDefault)
            .setDescription(this.description)
    }
}

class MenuOptions {
    placeholder
    disabled
    minValues
    maxValues

    constructor (placeholder, disabled, minValues, maxValues) {
        this.placeholder = placeholder
        this.disabled = disabled || false
        this.minValues = (minValues ?
            (maxValues && minValues !== maxValues ?
                Math.min(minValues, maxValues) :
                minValues) :
            undefined)
        this.maxValues = (maxValues ?
            (minValues && maxValues !== minValues ?
                Math.max(minValues, maxValues) :
                maxValues) :
            undefined)
    }
}

class Menu extends Component {
    options

    constructor (id, callback, options) {
        super(id, callback)
        this.options = options || []
    }

    build () {
        const menu = new SelectMenuBuilder()
            .setCustomId(this.id)
            .setDisabled(this.options.disabled)
            .setOptions(this.options)
        if (this.options.minValues) menu.setMinValues(this.options.minValues)
        if (this.options.maxValues) menu.setMaxValues(this.options.maxValues)

        return menu
    }
}

module.exports = {
    Menu,
    MenuOptions,
    MenuField
}
