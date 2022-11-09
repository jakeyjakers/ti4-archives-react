require("dotenv").config();
const { SECRET } = process.env;
const { User } = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createToken = (username, id) => {
  return jwt.sign(
    {
      username,
      id,
    },
    SECRET,
    {
      expiresIn: "2 days",
    }
  );
};

module.exports = {
  register: async (req, res) => {
    console.log(`REGISTER IN AUTH.JS`);

    const { username, password, email } = req.body;
    try {
      let foundUserName = await User.findOne({
        where: { username: username },
      });
      console.log(foundUserName)
      if (foundUserName) {
        res
          .status(400)
          .send(
            `Username Already Exists, Please Choose Another Username. Thank You. `
          );
      }
      let foundUserEmail = await User.findOne({
        where: { email: email },
      });
      if (foundUserEmail) {
        res
          .status(400)
          .send(
            `An Account Using That Email Already Exists. Please Use A differnet Email Address. Thank You.`
          );
      } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        await User.create({
          username: username,
          passwordhash: hash,
          email: email,
        });
        res.sendStatus(201);
        console.log(`USER CREATED`)
      }
    } catch (error) {
      console.log(`ERROR IN REGISTER AUTH.JS`);
      console.log(error);
      res.sendStatus(400);
    }
  },
  login: async (req, res) => {
    console.log(`LOGIN IN AUTH.JS`);

    const { username, password } = req.body;

    try {
      let foundUser = await User.findOne({
        where: { username: username },
      });
      if (foundUser) {
        const isAuthenticated = bcrypt.compareSync(
          password,
          foundUser.passwordhash
        );
        if (isAuthenticated) {
          const token = createToken(
            foundUser.dataValues.username,
            foundUser.dataValues.id
          );
          const exp = Date.now() + 1000 * 60 * 60 * 48;
          res.status(200).send({
            username: foundUser.dataValues.username,
            userId: foundUser.dataValues.id,
            token,
            exp,
          });
        } else {
          res
            .status(401)
            .send(`Double check your username and password please.`);
        }
      } else {
        res
          .status(401)
          .send(`Username not found, double check your username please.`);
      }
    } catch (error) {
      console.log(`ERROR IN LOGIN AUTH.JS`);
      console.log(error);
      res.sendStatus(400);
    }
  },
};
