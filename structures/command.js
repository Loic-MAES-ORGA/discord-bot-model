module.exports = class Command {
    name
    options
    callback
    
    constructor (name, options, callback) {
        this.name = name
        this.options = options
        this.callback = callback
    }
}
