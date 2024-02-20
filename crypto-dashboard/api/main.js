import express from "express";
const app = express();
const port = process.env.VITE_PORT || 4000;

app.get("/", (req, res) => {
    res.send("Hello server is running fine");
});

//dynamic routing
app.get("/:id", (req, res) => {
    res.send({
        id: req.params.id,
    });
});

app.post("/", (req, res) => {
    res.send("server is running at /");
});

//listen
app.listen(port, () => {
    console.log("server listening at port : " + port);
});
