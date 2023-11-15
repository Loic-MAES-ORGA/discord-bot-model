module.exports = class Command {
    name
    description
    options
    callback

    constructor (name, description, options, callback) {
        this.name = name
        this.description = description
        this.options = options || []
        this.callback = callback
    }
}
