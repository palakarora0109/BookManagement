const express = require('express');
const router = express.Router();
const booksController = require('../controllers/bookcontroller');
const Book = require("../model/book") 
// path of the book.js file

router.get("/show", booksController.getAllBooks);
router.post("/add",booksController.addBook);
router.get("/:id", booksController.getById);
router.put("/update/:id",booksController.updateBook);
router.delete("/delete/:id",booksController.deleteBook);

module.exports = router;