const Book = require('../model/book');

// GET BOOK
const getAllBooks = async(req,res) =>{
    let book;
    try{
        book = await Book.find();
    } catch(err){
        console.log(err);
    }

    if(!book){
        return res.status(404).json({message:"No book"})
    }
    return res.status(200).json({book});
}

// POST BOOK
const addBook = async(req,res)=>{
    const{ name, author, description, price, available} = req.body;

    let book;
    try{
        book = new Book({
            name,
            author,
            description,
            price,
            available
        });
        await book.save();
    }catch(err){
        console.log(err);
    }

    if(!book){
        return res.status(500).json({message:'Unable to add'});
    }
    return res.status(201).json({message:"Book Added"}); 
};

// GET BY ID
const getById=async(req,res)=>{
    const id=req.params.id;
    // id is same as written in routes file
    
    let book;
    try{
        book = await Book.findById(id);
    }catch(err){
        console.log(err);
    }

    if(!book){
        return res.status(404).json({message:"No book found"});
    }
    return res.status(200).json({book});

}

// UPDATE BOOK
const updateBook = async(req,res)=>{
    const id=req.params.id;

    const { name, author, description, price, available} = req.body;

    let book;
    try{
        book = await Book.findByIdAndUpdate(id, {
            name,
            author,
            description,
            price,
            available
        })
        book = await book.save();
    }catch(err){
        console.log(err);
    }

    if(!book){
        return res.status(404).json({message: "Unable to Update by this id"});
    }
    return res.status(200).json({message:"Book Updated"});
}

// DELETE BOOK
const deleteBook = async(req,res)=>{
    const id=req.params.id;

    let book;
    try{
        book = await Book.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
    }

    if(!book){
        return res.status(404).json({message:"Unable to delete the book of this id"});
    }
    return res.status(202).json({message:'Book Deleted'});
}

exports.getAllBooks = getAllBooks;
exports.addBook=addBook;
exports.getById=getById;
exports.updateBook=updateBook;
exports.deleteBook=deleteBook;