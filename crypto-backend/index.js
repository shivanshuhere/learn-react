import express, { urlencoded } from "express";
import mongoose, { Schema, model } from "mongoose";
import cors from "cors";
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

//api
app.get("/", (req, res) => {
    console.log("server is at home page");
    res.send("Server's home page");
});
app.post("/api/user", (req, res) => {
    const data = req.body;
    console.log("/api/user ::  Data received :: ", data);
    res.send("server response okay");
    const newUser = new UserModel({
        name: `${data.userName} ${data.surname}`,
        email: data.email,
        password: data.password,
    });
    newUser.save();
});
