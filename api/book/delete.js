const bookModel = require('./book');
const error = require('../util/error');

const bookDelete = async (req, response) => {
  try {
    if (await bookModel.findByIdAndRemove(req.params.id) != null) {
      const res = {
        message: "Book successfully deleted",
      };
      return response.status(200).send(res);
    } else {
      return response.status(404).send('Book not found');
    }
  } catch (err) {
    error.errorHandling(response, err);
  }
}

module.exports = {
  bookDelete
}