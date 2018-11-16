const bookModel = require('./book');
const error = require('../util/error');

const bookUpdate = async (request, response) => {
  try {
    const book = await bookModel.findById(request.params.id).exec();
    book.title = request.body.title;
    book.author = request.body.author;
    book.summary = request.body.summary;
    await book.save();
    const res = {
      message: "book successfully updated",
    };
    return response.status(200).send(res);

  } catch (err) {
    error.errorHandling(response, err);
  }
}

module.exports = {
  bookUpdate
}