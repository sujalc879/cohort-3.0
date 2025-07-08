//  TODO: Can you create backend with standard folder structure like: week-4/hard ???
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { adminSignup, adminLogin, adminCourses, editCourses, allCourses, userSignup, userLogin, purchasingCourses, purchasedCourses } = require('./routes/route');
const { authMiddleware } = require("./middlewares/auth");
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());


const PORT = process.env.PORT;




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


async function main() {

// Connect to MongoDB
await mongoose.connect(process.env.MONGODB_URL);

app.listen(PORT, () => {
    console.log('Server is listening on PORT ' + PORT);
});
}
main();