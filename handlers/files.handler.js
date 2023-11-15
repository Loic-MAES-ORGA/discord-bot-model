const fs = require('fs')

function isDirectory (path) {
    return fs.lstatSync(path).isDirectory()
}

function recover (path, recursive) {
    const files = []
    fs.readdirSync(path).filter(file => !file.startsWith('_')).forEach(file => {
        const child = `${path}/${file}`
        if (recursive && isDirectory(child)) recover(`${child}/`, recursive).forEach(f => files.push(`${file}/${f}`))
        else if (file.endsWith('.js')) files.push(file)
    })
    return files
}

module.exports = recover
