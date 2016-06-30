'use strict'

const booksTemplate = require('../../templates/table.handlebars');

const getBooksSuccess = (data) => {
 $('#book-container').html('');
 $('#book-container').html(booksTemplate(data));

};

const getBooksFailure = (error) => {
  console.error(error);
};

module.exports = {
  getBooksSuccess,
  getBooksFailure,
};
