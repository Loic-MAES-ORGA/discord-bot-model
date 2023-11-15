const Component = require('@structs/component')

class Menu extends Component {
    options

    constructor (id, callback, options) {
        super(id, callback)
        this.options = options
    }

    build () {
        // TODO: build the component
        return undefined
    }
}

module.exports = {
    Menu
}
