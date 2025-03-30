function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(data => renderBooks(data))
    .catch(error => console.error("Error fetching books:", error)); 
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
// require('./helpers.js');
const sinon = require('sinon');
const helpers = require('./helpers');
const chai = require('chai');
const spies = require('chai-spies');

chai.use(spies);

describe("index.js",()=>{
  describe('fetchBooks()',() =>{

    beforeEach( ()=> {
      window.document.body.inerHtml = '<mian></main>'
      window.fetch = require('node-fetch');

    });
    it("sends a fetch request to 'htpps://anopioficeandfire.com/api/books'",async() => {
      chai.spy.on(window,'fetch');
      await fetchBooks()
      expect(window.fetch, "A fetch to the API was not found")
      .to.have.been.called.with('https://anapioficeandfire.com/api/book');
    })
    it( "renders book titles into the DOM by passing a JSON object to renderBooks()", async () => {
      chai.spy.on( window, 'renderBooks' );
      await fetchBooks().then(() => {
        expect( window.renderBooks ).to.have.been.called();
      })
  })
})
})
