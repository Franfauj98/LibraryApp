const express = require('express');
const router = express.Router();

get = require('./get');
create = require('./create');
del = require('./delete');
update = require('./update');

router.post('/book/create', create.bookCreate);
router.delete('/book/delete/:id', del.bookDelete);
router.get('/book/:id', get.bookDetail);
router.get('/books', get.bookList);
router.put('/book/update/:id', update.bookUpdate);

module.exports = router;