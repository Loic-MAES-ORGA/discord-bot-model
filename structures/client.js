// Libs
const { Client, Collection } = require('discord.js')
// Types
const { Menu } = require('@structs/components/menu')
const { Modal } = require('@structs/components/modal')
const { Button } = require('@structs/components/button')
// Methods
const registerEvents = require('@handlers/events.handler')
const registerCommands = require('@handlers/commands.handler')
const registerComponents = require('@handlers/components.handler')

class Bot extends Client {
    color
    commands
    menus
    modals
    buttons

    constructor (color) {
        super({
            intents: 32767
        })

        this.color    = color || '#000000'
        this.commands = new Collection()
        this.menus    = new Collection()
        this.modals   = new Collection()
        this.buttons  = new Collection()
    }

    registerComponent (component) {
        if (component instanceof Menu) {
            this.registerMenu(component)
            return 'Menu'
        }
        if (component instanceof Modal) {
            this.registerModal(component)
            return 'Modal'
        }
        if (component instanceof Button) {
            this.registerButton(component)
            return 'Button'
        }
    }

    registerMenu (component) {
        this.menus.set(component.id, component)
    }
    registerModal (component) {
        this.modals.set(component.id, component)
    }
    registerButton (component) {
        this.buttons.set(component.id, component)
    }

    registerCommand (command) {
        this.commands.set(command.name, command)
    }

    registerEvent (event) {
        if (event.once) this.once(event.name, event.callback.bind(null, this))
        else this.on(event.name, event.callback.bind(null, this))
    }

    start (token) {
        registerCommands(this)
        registerEvents(this)
        registerComponents(this)

        this.login(token).then(_ => console.log('Logged in!'))
    }
}

module.exports = Bot
