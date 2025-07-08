//  TODO: Can you create backend with standard folder structure like: week-4/hard ???
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { adminRouter } = require('./routes/admin.routes');
const { userRouter } = require("./routes/user.routes");
dotenv.config();

app.use(express.json());

const PORT = process.env.PORT;

// Admin routes
app.use("/admin", adminRouter);

// User routes
app.use("/users", userRouter);


async function main() {
try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URL);
    
    app.listen(PORT, () => {
        console.log('Server is listening on PORT ' + PORT);
    });
    
} catch (error) {
    console.log("problem in connecting to the database or port");
}
}
main();