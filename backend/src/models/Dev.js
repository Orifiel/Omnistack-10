const mongoose = require("mongoose")
const PointSchema = require('./utils/PointSchema')

const DevSchema = new mongoose.Schema ({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: { 
        type: PointSchema,
        index: '2dsphere'
    }
})

module.exports = mongoose.model('dev',DevSchema)

/*para exportar o schema é necessário informarmos que o nome que ele tera no DB (dev) 
*e o nome do schema (devschema)
*/