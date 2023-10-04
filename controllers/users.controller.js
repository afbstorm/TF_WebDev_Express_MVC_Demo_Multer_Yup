const { diskStorage } = require("multer");
const multer = require('multer');
const path = require('path');
const usersModel = require("../models/users.model");
const userSchema = require('../schemas/userSchema');

const storage = diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})

const usersController = {

    getAll : async (req, res) => {

        // let allUsers = await usersModel.getAll()
        // res.render("index.ejs", { page : "pages/users/getAll.ejs", allUsers : allUsers})
        res.render('index.ejs', { page: "pages/users/register.ejs"});

    },

    getOne : (req, res) => {

    },

    addUser : async (req, res) => {
        try {
            const validatedData = await userSchema.validate(req.body);
            validatedData.imagePath = req.file.path;
            await usersModel.addUser(validatedData);
            res.json('User is correctly registered');
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    },

    updateUser : (req, res) => {

    },


    deleteUser : (req, res) => {

    }
}

const uploadMiddleware = upload.single('image');

module.exports = {usersController, uploadMiddleware}