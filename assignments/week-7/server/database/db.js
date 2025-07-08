const mongoose = require("mongoose");
const { object } = require("zod/v4");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

// Define mongoose schemas
const userSchema = new Schema({
  // userSchema here
     username : {
      type : String,
      unique : true,
      required : true
    },
    password : {
      type : String,
      required : true
    },
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]

}, { strict: false } );

const adminSchema = new Schema({
// adminSchema here
    username : {
      type : String,
      unique : true,
      required : true
    },
    password : {
      type : String,
      required : true
    }
});

const courseSchema = new Schema({
// courseSchema here 
  title: String, 
  description: String, 
  price: Number, 
  imageLink: String, 
  published: Boolean,
  createdBy: {
    type : ObjectId,
    ref : "Admin"
  }

}, {timestamps : true});

// Define mongoose models
const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin', adminSchema);
const Course = mongoose.model('Course', courseSchema);

module.exports = {
  User,
  Admin,
  Course
}