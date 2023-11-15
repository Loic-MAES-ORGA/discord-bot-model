const Component = require('@structs/component')

class Button extends Component {
    style

    constructor (id, callback, style) {
        super(id, callback)
        this.style = style
    }

    build () {
        // TODO: build the component
        return undefined
    }
}

module.exports = {
    Button
}
