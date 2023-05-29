const { Router, } = require("express");
const Book =require("../database/schemas/book");
router = Router();




router.post('/addbook', async (req, res) => {
    console.log(req.body);
    const { title,author, genre,supply } = req.body;
    // chack if book already exists 
    // const bookDB = await Book.findOne({ title});
    
    // if (bookDB) {
    //     res.status(400).send({ msg: "book alredy exists" })
    // } else {
        const newbook = await Book.create({ title,author, genre,supply });
        res.send(201);
        console.log("successfully add");
    //}
})
// route paramters
// router.get('/:bookname',
//     (req, res, next) => {
//         const { bookname } = req.params;
//         console.log(bookname);
//         const book = fantasyBooks.find((b) => b.name == bookname);
//         res.send(book);
//     }
// )




router.post('', (req, res) => {
    console.log("looking good");
    res.sendStatus(201);
})

module.exports = router;
