require("dotenv").config();
const express = require("express");
const cors = require("cors");
const {sequelize} = require("./Util/database");
const { PORT } = process.env;
const { User } = require("./models/User");
const {Archive} = require('./models/Archives')

const { isAuthenticated } = require("./MIddleware/isAuthenticated");
const { register, login } = require("./Controllers/auth");
const {
  addArchive,
  deleteArchive,
  editArchive,
  getUserArchives,
  getUserAccountInfo,
  getAllArchives
} = require("./Controllers/archives");

const app = express()
app.use(cors())
app.use(express.json())

//setting up sequel relations
User.hasMany(Archive)
Archive.belongsTo(User)

// auth
app.post('/register', register)
app.post('/login', login)

// CRUD archives auth is required
app.post('/add-archive', isAuthenticated, addArchive)
app.delete('/delete-archive', isAuthenticated, deleteArchive)
app.put('/edit-archive', isAuthenticated, editArchive)
app.get('/get-user-archives/:userId', isAuthenticated, getUserArchives)
app.get('/get-account-info', isAuthenticated, getUserAccountInfo)
app.get('/get-all-archives', isAuthenticated, getAllArchives)

sequelize
    .sync()
    .then(() => {
        app.listen(PORT, () => console.log(`SERVER UP AND LISTENING ON ${PORT}`))
    })
    .catch((error) => {
        console.log(`ERROR IN SYNC OR APP.LISTEN`)
        console.log(error)
    })
