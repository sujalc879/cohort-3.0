const { z } = require('zod');
const bcrypt = require('bcrypt');
const { Admin, Course } = require("../database/db");
const { adminMiddleware } = require("../middlewares/admin.middleware");
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();
const JWT_SECRET_FOR_ADMIN = process.env.JWT_SECRET_FOR_ADMIN;

const { Router } = require("express");

const adminRouter = Router();

// admin routes
adminRouter.post("/signup", async function adminSignup(req, res) {
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
    
            await Admin.create({
                username : username,
                password : hashedPassword
            });
    
            res.json({ Message : "Admin created successfully"});
            
        } catch (error) {
            res.json({ Message : "This Username is Already Exist"});
        }
    }
})

adminRouter.post("/login", async function adminLogin(req, res) {
    const { username, password } = req.body;

    try {
        const adminUser = await Admin.findOne({
            username
        });

        const hashedPassword = adminUser.password;

        const passwordMatched = await bcrypt.compare(password, hashedPassword);

        if (!passwordMatched) {
            res.status(403).json({ Message : "password is incorrect"});
        } else {
            const token = jwt.sign({
                adminUserId : adminUser._id
            }, JWT_SECRET_FOR_ADMIN);
            
            res.json({
                Message : "Logged in successfully",
                token : token
            });
        }
    } catch (error) {
        res.status(403).json({ Message : "username is incorrect"});
    }
})

adminRouter.post("/courses", adminMiddleware, async function adminCourses(req, res) {
    const adminId = req.userId;
// logic to create a course
const { title, description, price, imageLink, published } = req.body;

const adminUser = await Admin.findById(adminId);

// unauthorized admin should not create the course with the fake jwt
if (adminUser == null) {
    res.status(403).json({ Message : "You are not authorized admin to create the course"});
    
} else {

try {
    const response = await Course.create({
        title,
        description,
        price,
        imageLink,
        published,
        createdBy : adminId
    });
    
    res.json({
        Message : "Course created successfully",
        courseId : response._id
    })
    
} catch (error) {
    res.json({ Message : "there is problem while creating courese"});
}
}

})

adminRouter.put("/courses/:courseId", adminMiddleware, async function editCourses(req, res) {
    const adminId = req.userId;
    const courseId = req.params.courseId;

    const { title, description, price, imageLink, published } = req.body;

    try {
       const response = await Course.findOneAndUpdate({_id : courseId, createdBy : adminId}, {
            title,
            description,
            price,
            imageLink,
            published
        });

        if (response == null) {
            res.json({ Message : "you have not authority to update this course"});

        } else {
            res.json({ Message : "Course Updated successfully"});
        }
        
    } catch (error) {
        res.json({ Message : "there is problem while updating course"});
    }
})

adminRouter.get("/courses", adminMiddleware, async function allAdminCourses(req, res) {
     const adminId = req.userId;
    const courses = await Course.find({
        createdBy : adminId
    });

    res.json({
        courses : courses
    });
})


module.exports = {
    adminRouter
}