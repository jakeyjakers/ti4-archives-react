const { User } = require("../models/User");
const { Archive } = require("../models/Archives");

module.exports = {
  addArchive: async (req, res) => {
    console.log(`ADD ARCHIVE IN ARCHIVES.JS`);

    const { title, length, amount, races, victor, story } = req.body.bodyObj;
    const  userId  = req.body.userId;
    let racesArr = races.split(' ')
    console.log(userId)
    console.log(racesArr)

    try {

        let racesArr = races.split(' ')
    
      let newArchive = await Archive.create({
        //imgage: image
        userId: +userId,
        title: title,
        length: length,
        // players: players,
        races: racesArr,
        amount: amount,
        victor: victor,
        story: story,
      });
      console.log(`ARCHIVE CREATED, ARCHIVES.JS`);
      res.status(201).send( newArchive);
    } catch (err) {
      console.log(`ERROR IN ADDING ARCHIVE, ARCHIVE.JS`);
      console.log(err);
      res.sendStatus(400);
    }
  },
  deleteArchive: async (req, res) => {
    console.log(`DELETE ARCHIVE IN ARCHIVES.JS`);
  },
  editArchive: async (req, res) => {
    console.log(`EDIT ARCHIVE IN ARCHIVES.JS`);
  },
  getUserArchives: async (req, res) => {
    console.log(` GET USER ARCHIVES IN ARCHIVES.JS`);

    const {userId} = req.params

    try {

        let userArchives = await Archive.findAll({
            where: {userId: userId}
        })
        res.status(200).send(userArchives)
    } catch(err) {
        console.log(`ERROR IN GET ALL USER ARCHIVES, ARCHIVE.JS`);
        console.log(err);
        res.sendStatus(400);
    }
  },
  getUserAccountInfo: async (req, res) => {
    console.log(`GET USER ACCOUNT INFO IN ARCHIVES.JS`);
  },
  getAllArchives: async (req, res) => {
    console.log(`GET ALL ARCHIVES IN ARCHIVES.JS`);

    try {

        let archives = await Archive.findAll()
        res.status(200).send(archives)
    } catch (err) {
        console.log(`ERROR IN GET ALL ARCHIVES, ARCHIVE.JS`);
        console.log(err);
        res.sendStatus(400);
    }
  },
};
