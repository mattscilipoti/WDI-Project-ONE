$( document ).ready(function() {
  var index = 0;

  $(".theAnswer p").addClass("hide");

  showContent(index);

  $("#nextCard").on("click", function() {
    $(".theAnswer p").addClass("hide");

    if(index === flashCards.length - 1) {
      index = 0;
    }

    index++;
    showContent(index);
  });

  $("#showCard").on("click", function() {
    $(".theAnswer p").removeClass("hide");
  });

  $("#knowCard").on("click", function() {
    flashCards.splice(index, 1);
    showContent(index);
  });

});

/*********************************************************************
* The Deck Of Cards (an array filled with object & Key: Value pairs) *
**********************************************************************/

var flashCards = [
  {
    question: "List the 5 JS data types",
    answer: "Numbers, Strings, Booleans, Undefined, Null"
  },
  {
    question: "We store data types in...",
    answer: "variables"
  },
  {
    question: "What is the meaning of dynamic",
    answer: "a variable can switch between data types."
  },
  {
    question: "What does Modulus do?",
    answer: "Returns the remainder of a division operation."
  },
  {
    question: "What does NaN mean?",
    answer: "Not a number"
  },
  {
    question: "What function can you use to test whether a value is a valid number using?",
    answer: "isNaN function"
  },
  {
    question: "What are arrays?",
    answer: "Ordered collection of related data types."
  },
  {
    question: "How are arrays orginized?",
    answer: "by index."
  },
  {
    question: "How are Objects orginized?",
    answer: "Properties are stored as key-value pairs."
  },
  {
    question: "Variable names should be named how?",
    answer: "named using camelCase lettering."
  },
  {
    question: "what’s a function?",
    answer: "Code wraped in a value, that can be re-used."
  },
  {
    question: "What's a method?",
    answer: "Methods are functions that are attached to some object."
  },
  {
    question: "What is the programming interface for HTML called?",
    answer: "The Document Object Model."
  },
  {
    question: "Each web page loaded in the browser has its own...",
    answer: "document object."
  },
  {
    question: "Using JS what method would you use select a tag that contained an ID?",
    answer: ".getElementById"
  },
  {
    question: "How would you listen for an event?",
    answer: "the addEventListener method"
  },
  {
    question: "List all the falsey values",
    answer: "false, zero, empty string, null, undefined, NaN"
  },
  {
    question: "The mechanism that alows you to compare values?",
    answer: "comparison operators."
  },
  {
    question: "These 'things' allow you to take several paths within a program?",
    answer: "conditionals."
  },
]

/***************************************************
* Additional page functionality (a.k.a functions!) *
****************************************************/

function showContent(index) {

  var cardsLeft = (flashCards.length);
  var content = flashCards[index];
  var question = content.question;
  var answer = content.answer;

  $(".trackCards .cardsLeft").html("Cards Left: " + cardsLeft + "/19");
  $(".theQuestion p").html(question);
  $(".theAnswer p").html(answer);
  $(".theAnswer p").addClass("hide");
}
