function generateQuote() {
  var quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Get busy living or get busy dying. - Stephen King",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston S. Churchill",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Act as if what you do makes a difference, It does. - William James",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Everything you’ve ever wanted is on the other side of fear. - George Addair",
  ];

  var randomIndex = Math.floor(Math.random() * quotes.length);
  var indexOfPrintedQuotes = [];
  indexOfPrintedQuotes.push(randomIndex);

  if (indexOfPrintedQuotes.length == quotes.length) {
    indexOfPrintedQuotes = [];
    randomIndex = Math.floor(Math.random() * quotes.length);
    indexOfPrintedQuotes.push(randomIndex);
  }

  printedQuotesLength = indexOfPrintedQuotes.length;
  for (var i = 0; i < printedQuotesLength; i++) {
    if (randomIndex == indexOfPrintedQuotes[i]) {
      randomIndex = Math.floor(Math.random() * quotes.length);
      indexOfPrintedQuotes.push(randomIndex);
      i--;
    } else {
      return quotes[randomIndex];
   
    }
  }
}

function printQuote() {
  var string = generateQuote();
  var quote = string.split("-");
  document.getElementById("quote").innerHTML = '"' + quote[0] + '"';
  document.getElementById("Author_quote").innerHTML = "--" + quote[1];
}
