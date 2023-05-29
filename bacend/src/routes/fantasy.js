const { Router, query, request } = require("express");
router = Router();

const fantasyBooks = [
    {
        name: 'Harry Poter',
        supply: 23,
        books_in_ser: 7
    },
    {
        name: 'The Lord Of The Rings',
        supply: 10,
        books_in_ser: 3
    },
    {
        name: 'Hunger Games',
        supply: 20,
        books_in_ser: 3
    },
    {
        name: 'Kings',
        supply: 15,
        books_in_ser: 5
    },
    {
        name: 'The Priory of the Orange Tree',
        supply: 20,
        books_in_ser: 1
    },
    {
        name: 'The Weaver and the Witch Queen',
        supply: 25,
        books_in_ser: 2
    },
    {
        name: 'The Sun and the Void',
        supply: 30,
        books_in_ser: 3
    },
    {
        name: 'The First Bright Thing',
        supply: 19,
        books_in_ser: 3
    },
    {
        name: 'The Blade Itself',
        supply: 26,
        books_in_ser: 2
    },
    {
        name: 'The Broken Earth',
        supply: 34,
        books_in_ser: 1
    },
    {
        name: 'God Killer',
        supply: 25,
        books_in_ser: 1
    },

]


router.get('',
    (req, res, next) => {
        // query  paramters exa: ?supply=3
        const { supply } = req.query;
        const supplyNum = Number(supply)
        console.log(typeof (supplyNum));
        if (!isNaN(supplyNum)) {
            sUpplyfiltered = fantasyBooks.filter((b) => b.supply >= supplyNum);
            res.send(sUpplyfiltered);

        }
        else res.send(fantasyBooks);

        next();
    },

);

// route paramters
router.get('/:bookname',
    (req, res, next) => {
        const { bookname } = req.params;
        console.log(bookname);
        const book = fantasyBooks.find((b) => b.name == bookname);
        res.send(book);
    }
)




router.post('', (req, res) => {
    console.log(req.body);
    fantasyBooks.push(req.body);
    res.send(201);
})

module.exports = router;
