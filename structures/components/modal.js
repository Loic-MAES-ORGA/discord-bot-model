const Component = require('@structs/component')

class Modal extends Component {
    fields

    constructor (id, callback, fields) {
        super (id, callback)
        this.fields = fields || []
    }

    build () {
        // TODO: build the component
        return undefined
    }
}

module.exports = {
    Modal
}
