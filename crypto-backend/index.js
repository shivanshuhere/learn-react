import express, { urlencoded } from "express";
import mongoose, { Schema, model } from "mongoose";
import cors from "cors";
// import nodemailer from "nodemailer";
import bycrpt from "bcrypt";

const app = express();
const port = 8000;

const DB_URI = "mongodb+srv://shivu:admin@cluster01.yfbx10n.mongodb.net";
const DB_NAME = "cluster01";

// schema and model
const UserSchema = Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
});

const UserModel = model("User", UserSchema);

//middleware
app.use(
    cors({
        origin: "*",
    })
);
app.use(urlencoded({ extended: true }));
app.use(express.json());

(async () => {
    try {
        mongoose.connect(`${DB_URI}/${DB_NAME}`);
    } catch (error) {
        console.log(
            "Server :: app.js :: Database connection failed :: ",
            error
        );
    }
})();

app.listen(port, () => console.log("server is running at port : ", port));

// -------------------- api ----------------------------------
app.get("/", (req, res) => {
    console.log("server is at home page");
    res.send("Server's home page");
});

// sign up
app.post("/api/user", async (req, res) => {
    const data = req.body;

    const salt = await bycrpt.genSalt();
    const hashedPass = await bycrpt.hash(data.password, salt);

    const newUser = new UserModel({
        name: `${data.userName} ${data.surname}`,
        email: data.email,
        password: hashedPass,
    });

    try {
        const response = await newUser.save();
        if (!response) {
            res.send({
                statusText: "Sign up fail :: Mongo Db data save failed :: ",
            });
            console.log("Failed to Save data to Mongo Db");
        } else {
            res.send({
                statusText: "Sign up success :: data saved to mongo Db",
            });
            console.log("Data Saved to Mongo Db");
        }
    } catch (err) {
        console.log("MongoDb data save failed :: ", err);
        res.send({ statusText: "sign up failed :: with error", err });
    }
});

// login
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });

        if (!user) {
            console.log("user doesn't exist");
            res.send({ statusText: "user doesn't exist" });
        } else {
            await bycrpt.compare(password, user?.password);
            res.send({ status: "user exist :: ", user });
            console.log("User exist");
        }
    } catch (err) {
        console.log("error while fetching from DB :: ", err);
    }
});

// // -------------- email verification ---------------->

// //transport object
// const transport = nodemailer.createTransport({
//     service: "gmail",
//     // service: "gmail",

//     auth: {
//         user: "ks7876555@gmail.com",
//         pass: "uxmm mkjk fwin tbox",
//     },
// });

// // email options (step - 2)
// const emailOptions = {
//     from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
//     to: "taxad95384@mcuma.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
// };
// function sendEmail() {
//     transport
//         .sendMail(emailOptions)
//         .then((data) => console.log("Email is send successfully :: ", data))
//         .catch((err) => console.log("Email failed to send :: ", err));
//     // The code sets up an Express server with MongoDB database connection, CORS, and nodemailer for sending emails. It includes API endpoints for user sign up and login, and a function to send emails for email verification.
// }
