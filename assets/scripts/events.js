'use strict';
const api = require('./api');
const ui = require('./ui');

const onGetBooks = function (event) {
  event.preventDefault();
  api.getBooks()
  .done(getBooksSuccess)
  .fail(getBooksFailure);
};
