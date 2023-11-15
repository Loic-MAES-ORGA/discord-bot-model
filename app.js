require('module-alias/register')
require('dotenv').config()

const Bot = require('@structs/client')
const app = new Bot()

app.start(process.env.TOKEN)
