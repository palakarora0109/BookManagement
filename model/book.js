const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema(
    {
        name:{type:String, required:true},
        author:{type:String, required:true},
        description:{type:String, required:true},
        price:{type:Number, required:true},
        available:{type:Boolean, required:true}
    }
);

module.exports = mongoose.model("book", bookSchema);
// 1-> pass the file
// pass name of schema created
// book will become books automatically in postman url