'use strict';
const ui = require('./ui');

const getBooks = function() {
  return $.ajax({
    url: 'https://wdi-library.herokuapp.com/books/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};
