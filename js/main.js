$( document ).ready(function() {
  var index = 0;

  $(".theAnswer p").addClass("hide");

  showContent(index); //3

  $("#nextCard").on("click", function() {
    $(".theAnswer p").addClass("hide");

    if(index === flashCards.length - 1) {
      index = 0;
    }

    index++;
    showContent(index);
  }); //4

  $("#showCard").on("click", function() {
    $(".theAnswer p").removeClass("hide");
  }); //4

  $("#knowCard").on("click", function() {
    console.log(index);
    console.log(flashCards.length)
    flashCards.splice(index, 1)
    console.log(flashCards.length);
    showContent(index);
  }); //4

});

/*********************************************************************
* The Deck Of Cards (an array filled with object & Key: Value pairs) *
**********************************************************************/

var flashCards = [
  {
    question: "What is HTML used for?",
    answer: "Structure"
  },
  {
    question: "What is main purpose of CSS?",
    answer: "Style the elements of a web page"
  },
  {
    question: "JQuery is an example of a...",
    answer: "Javascript library"
  },
  {
    question: "Who's in the hat?",
    answer: "The Cat."
  },
  {
    question: "When should you ever check out an unknown artists mixtape?",
    answer: "Never"
  },
  {
    question: "Did OJ do it?",
    answer: "idk"
  },
  {
    question: "What's new?",
    answer: "Scooby-Doo"
  },
  {
    question: "Ayee",
    answer: "ayeeeeeeeeeeee"
  },
  {
    question: "JQuery is used to do what?",
    answer: "select elements on the page"
  }
]

/***************************************************
* Additional page functionality (a.k.a functions!) *
****************************************************/

function showContent(index) {

  var cardsLeft = (flashCards.length);
  var content = flashCards[index];
  var question = content.question;
  var answer = content.answer;

  $(".trackCards .cardsLeft").html("Cards Left: " + cardsLeft);
  $(".theQuestion p").html(question);
  $(".theAnswer p").html(answer);
  $(".theAnswer p").addClass("hide");
}


/****************************
* COMMENTS ON CODE SECTIONS *
*****************************/

/* 1
The code above wraps the code below and only initializes it once
the page is fully rendered and loaded, once that occurs, 'ready'
is printed to the console and the rest of the code executes. */

/* 2
This variable acts as a counter, it starts off at 0,
which is also the index for the first item in any array.
We will pass this index as an argument of the 'showQnA'
function before the .ready function ends. */

/* 3
This function call occurs once the page is completely loaded
the showQnA function fills in the appropriete data on the
index card. This data comes from the array of objects 'flashCards'
and what data is being passed depends on what the index is. */

/* 4
The code sets up an event listener using jQuery.
Since the user will only click next once the first card has been
reviewed, this code adds 1 to the index, which controls what
content will be displayed based on index's corresponding object
in 'flashCards' then calls 'showQnA' with the new index. */
