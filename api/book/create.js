const bookModel = require('./book');
const error = require('../util/error');

const bookCreate = async function (req, response) {
  try {
    let myNewBook = new bookModel(req.body)
    await myNewBook.save();
    const result = {
      message: "book created in the db",
    };
    return response.status(200).send(result);
  } catch (err) {
    console.log(err)
    error.errorHandling(response, err);
  }
}

module.exports = {
  bookCreate
}