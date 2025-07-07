const {Router} = require("express");
userRouter = Router();

userRouter.get("/courses", (req, res) => {
    res.send("hello from courses");
})

userRouter.get("/purchase", (req, res) => {
    res.send("hello from purchase");
});

module.exports = {
    userRouter
}