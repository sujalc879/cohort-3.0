const { z } = require('zod');
const bcrypt = require('bcrypt');
const { User, Admin, Course } = require("../database/db");
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();
const secret = process.env.JWT_SECRET;  // This should be in an environment variable in a real application ( remember )

// admin routes
async function adminSignup(req, res) {
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
}

async function adminLogin(req, res) {
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
            }, secret);
            
            res.json({
                Message : "Logged in successfully",
                token : token
            });
        }
    } catch (error) {
        res.status(403).json({ Message : "username is incorrect"});
    }
}

async function adminCourses(req, res) {
// logic to create a course
const { title, description, price, imageLink, published } = req.body;

try {
    const response = await Course.create({
        title,
        description,
        price,
        imageLink,
        published
    });
    
    res.json({
        Message : "Course created successfully",
        courseId : response._id
    })
    
} catch (error) {
    res.json({ Message : "there is problem while creating courese"});
}

}

async function editCourses(req, res) {
    const courseId = req.params.courseId;

    const { title, description, price, imageLink, published } = req.body;

    try {
        await Course.findOneAndUpdate({_id : courseId}, {
            title,
            description,
            price,
            imageLink,
            published
        });
    
        res.json({ Message : "Course Updated successfully"});
        
    } catch (error) {
        res.json({ Message : "there is problem while updating course"});
    }
}

async function allCourses(req, res) {
    const courses = await Course.find({});

    res.json({
        courses : courses
    });
}

// user routes
async function userSignup(req, res) {
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
}

async function userLogin(req, res) {
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
            }, secret);
            
            res.json({
                Message : "Logged in successfully",
                token : token
            });
        }
    } catch (error) {
        res.status(403).json({ Message : "username is incorrect"});
    }   
}

async function purchasingCourses(req, res) {
    const userId = req.userId;
    const courseId = req.params.courseId;

    const response = await Course.findById(courseId);

    await User.findByIdAndUpdate(userId, {
        $addToSet: {
      purchasedCourses: response
    }
    })

    res.json({ Message : "Course purchased successfully"});
    
}

async function purchasedCourses(req, res) {
    const userId = req.userId;

    const response = await User.find({
        _id : userId
    });

    res.json({
        "purchasedCourses" : response[0].purchasedCourses
    })
}

module.exports = {
    adminSignup,
    adminLogin,
    adminCourses,
    editCourses,
    allCourses,
    userSignup,
    userLogin,
    purchasingCourses,
    purchasedCourses
}