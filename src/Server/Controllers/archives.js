const {User, Archive} = require('../models/index.js')

module.exports = {
    addArchive: async (req, res) => {
        console.log(`ADD ARCHIVE IN ARCHIVES.JS`)
    },
    deleteArchive: async (req, res) => {
        console.log(`DELETE ARCHIVE IN ARCHIVES.JS`)
    },
    editArchive: async (req, res) => {
        console.log(`EDIT ARCHIVE IN ARCHIVES.JS`)
    }, 
    getUserArchives: async (req, res) => {
        console.log(` GET USER ARCHIVES IN ARCHIVES.JS`)
    },
    getUserAccountInfo: async (req, res) => {
        console.log(`GET USER ACCOUNT INFO IN ARCHIVES.JS`)
    },
    getAllArchives: async (req, res) => {
        console.log(`GET ALL ARCHIVES IN ARCHIVES.JS`)
    }
}