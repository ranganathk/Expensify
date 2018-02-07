const book = {
  name: 'The book of Elli',
  author: 'Bruce Wayne',
  publisher: {
    // name: 'Penguin',
    // year: '2013'
  }
};

const { name: bookName, author: bookAuthor } = book;

const { name: publisherName = 'Self-Published', year: yearOfPublication = 'Unknown' } = book.publisher;

console.log(`The book is named ${bookName} and is authored by ${bookAuthor}. It was published by ${publisherName} in the year ${yearOfPublication}.`);

const menu = ['Coffee (hot)', 100, 150, 190];

const [coffee, , , largeCost] = menu;

console.log(`A ${coffee} medium costs ${largeCost}.`);