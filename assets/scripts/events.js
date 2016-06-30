const onGetBooks = function (event) {
  event.preventDefault();
  api.getBooks()
  .done(getBooksSuccess)
  .fail(getBooksFailure);
};
