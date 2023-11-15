module.exports = class Event {
    once
    name
    callback

    constructor (name, callback, once) {
        this.once = once || false
        this.name = name
        this.callback = callback
    }
}
