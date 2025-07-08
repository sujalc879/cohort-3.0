const { z } = require('zod');
const bcrypt = require('bcrypt');
const { User, Course } = require("../database/db");
const { userMiddleware } = require("../middlewares/user.middleware");
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();
const JWT_SECRET_FOR_USER = process.env.JWT_SECRET_FOR_USER;

const { Router } = require("express");

const userRouter = Router();

// user routes
userRouter.post("/signup", async function userSignup(req, res) {
const { username, password } = req.body;

    // Validation Using zod
    const userValidation = z.object({
        username : z.string().min(2).max(100),
        password : z.string().min(2).max(200)
    });

    const result = userValidation.safeParse(req.body);

    if (!result.success) {
        res.status(403).json({ Message : "username & password is required"});
    } else {
        try {

            // hashing the password using bcrypt
            const hashedPassword = await bcrypt.hash(password, 5);
    
            await User.create({
                username : username,
                password : hashedPassword
            });
    
            res.json({ Message : "User created successfully"});
            
        } catch (error) {
            res.json({ Message : "This Username is Already Exist"});
        }
    }    
})

userRouter.post("/login", async function userLogin(req, res) {
const { username, password } = req.body;

    try {
        const adminUser = await User.findOne({
            username
        });

        const hashedPassword = adminUser.password;

        const passwordMatched = await bcrypt.compare(password, hashedPassword);

        if (!passwordMatched) {
            res.status(403).json({ Message : "password is incorrect"});
        } else {
            const token = jwt.sign({
                adminUserId : adminUser._id
            }, JWT_SECRET_FOR_USER);
            
            res.json({
                Message : "Logged in successfully",
                token : token
            });
        }
    } catch (error) {
        res.status(403).json({ Message : "username is incorrect"});
    }   
})

userRouter.get("/courses", async function allUserCourses(req, res) {
    const courses = await Course.find({});

    res.json({
        courses : courses
    });
})

userRouter.post("/courses/:courseId", userMiddleware, async function purchasingCourses(req, res) {
    const userId = req.userId;
    const courseId = req.params.courseId;

    try {
        await User.findByIdAndUpdate(userId, {
            $addToSet : {
          purchasedCourses: courseId
        }
        })
    
        res.json({ Message : "Course purchased successfully"});

    } catch (error) {
        res.status(403).json({ Message : "problem in purchasing the course"});
    }
    
})

userRouter.get("/purchasedCourses", userMiddleware, async function purchasedCourses(req, res) {
    const userId = req.userId;

    const response = await User.find({
        _id : userId
    });

    const courses = await Promise.all(response[0].purchasedCourses.map(async(courseId) => {
      return await Course.findOne({
            _id : courseId
        })
    }));

    res.json({
        purchasedCourses : courses
    })
    
})

module.exports = {
    userRouter
}