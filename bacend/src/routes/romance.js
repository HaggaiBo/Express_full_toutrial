const { Router } = require("express");
router = Router();

const romanceBooks = [
    {
        name: 'The Man And The Sea',
        supply: 23,
        books_in_ser: 2
    },
    {
        name: 'Paradies',
        supply: 10,
        books_in_ser: 1
    },
    {
        name: 'The Banker',
        supply: 20,
        books_in_ser: 3
    },
    {
        name: 'Until I Get You',
        supply: 20,
        books_in_ser: 2
    },

]


router.get('',
    (req, res, next) => {
        //send cookie
        res.cookie('visited', true, { maxAge: 10000 })
        res.send(romanceBooks);
        next();
    },

);
router.get('/:bookname',
    (req, res, next) => {
        console.log(req.cookies);
        const { bookname } = req.params;
        console.log(bookname);
        const book = romanceBooks.find((b) => b.name == bookname);
        res.send(book);
    }

)


router.post('', (req, res) => {
    console.log(req.body);
    romanceBooks.push(req.body);
    res.send(201);
})


// sessions
router.get('/shop/cart', (req, res) => {
    const { cart } = req.session;
    if (!cart) {
        res.send("no cart items")
    } else {
        res.send(cart)
    }
});

router.post('/shop/cart/item', (req, res) => {
    const { name, supply, books_in_ser } = req.body;
    const newItem = { name, supply, books_in_ser };
    const { cart } = req.session;
    if (cart) {
        req.session.cart.items.push(newItem);
    } else {
        req.session.cart = {
            items: [newItem]
        };
    }
    res.send(201);

})


module.exports = router;

