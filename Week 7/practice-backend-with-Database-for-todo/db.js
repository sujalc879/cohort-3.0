const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    name : String,
    email : { type : String, unique : true },
    password : String
});

const Todo = new Schema({
    userId : ObjectId,
    title : String,
    done : Boolean
});

const UserModel = mongoose.model("My-Users", User);
const TodoModel = mongoose.model("My-Todos", Todo);

module.exports = {
    UserModel,
    TodoModel
};