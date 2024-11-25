const getTheTitles = function(books) {
    let titles = []
  
    for (let i = 0; i < books.length; i++){
      titles[i] = books[i].title
    }
    return titles
    // Another shorter more optimal method to do this 
    // return books.map((book) => book.title);
  };

// Do not edit below this line
module.exports = getTheTitles;
