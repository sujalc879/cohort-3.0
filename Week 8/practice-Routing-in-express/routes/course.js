const { Router } = require("express");
const courseRouter = Router();

courseRouter.get("/all", (req, res) => {
    res.send("hii");
});

courseRouter.get("/not", (req, res) => {
    res.send("hello frdom not");
})

module.exports = {
    courseRouter
}