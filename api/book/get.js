var bookModel = require('./book');

const bookList = async (request, response) => {
  try {
    const elements = await bookModel.find().exec();
    return response.status(200).json(elements);
  } catch (err) {
    error.errorHandling(response, err);
  }
}

const bookDetail = async (request, response) => {
  const element = await bookModel.findById(request.params.id).exec();
  return response.status(200).json(element);
}

module.exports = {
  bookList,
  bookDetail,
}