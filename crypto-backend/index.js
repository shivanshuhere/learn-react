import express, { urlencoded } from "express";
import mongoose, { Schema, model } from "mongoose";
import cors from "cors";
import nodemailer from "nodemailer";

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

    const newUser = new UserModel({
        name: `${data.userName} ${data.surname}`,
        email: data.email,
        password: data.password,
    });
    try {
        const response = await newUser.save();
        if (!response)
            res.send({
                statusText: "Sign up fail :: Mongo Db data save failed :: ",
            });
        else {
            res.send({
                statusText: "Sign up success :: data saved to mongo Db",
            });
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
        if (user) res.send({ status: "user exist :: ", user });
        else {
            console.log("user doesn't exist");
            res.send({ statusText: "user doesn't exist" });
        }
    } catch (err) {
        console.log("error while fetching from DB :: ", err);
        res.send({ errorText: "error while login :: MOngoDb :: ", error: err });
    }
});

// --------------email verification ----------------

//transport object
const transport = nodemailer.createTransport({
    //setp 1
    host: "ks7876555@gmail.com",
    port: 465,
    secure: true,
    // service: "gmail",
    auth: {
        user: "ks7876555@gmail.com",
        pass: "shivanshuhere",
    },
});

// email options (step - 2)
const emailOptions = {
    from: "shivu",
    to: "pivarat605@massefm.com",
    subject: "Dummy Email verification",
    text: "test verification",
};

transport.sendMail(emailOptions, (err, info) => {
    if (err) console.log("Failed to send email :: ", err);
    else console.log("Email sent :: ", info);
});
