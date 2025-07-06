//  TODO: Can you create backend with standard folder structure like: week-4/hard ???
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { adminSignup, adminLogin, adminCourses, editCourses, allCourses, userSignup, userLogin, purchasingCourses, purchasedCourses } = require('./routes/route');
const { authMiddleware } = require("./middlewares/auth");

app.use(express.json());


const port = process.env.PORT;


// Connect to MongoDB
mongoose.connect(''); // ( remember with database name )


// Admin routes
app.post('/admin/signup', adminSignup);

app.post('/admin/login', adminLogin);

app.post('/admin/courses', authMiddleware, adminCourses);

app.put('/admin/courses/:courseId', authMiddleware, editCourses);

app.get('/admin/courses', authMiddleware, allCourses);

// User routes
app.post('/users/signup', userSignup);

app.post('/users/login', userLogin);

app.get('/users/courses', authMiddleware, allCourses);

app.post('/users/courses/:courseId',authMiddleware, purchasingCourses);

app.get('/users/purchasedCourses', authMiddleware, purchasedCourses);

app.listen(port, () => {
    console.log('Server is listening on port ' + port);
});