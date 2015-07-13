$( document ).ready(function() {
    console.log( "ready!" );
    var index = 0;
    showQnA(index);

    $("#nextCard").on("click", function() {
      index++;
      showQnA(index);
    })
});

var flashCards = [
  {
    question: "What should go at the top of every html document?",
    answer: "The <!DOCTYPE html> tag"
  },
  {
    question: "CSS is used to...",
    answer: "Style the elements of a web page"
  },
  {
    question: "JQuery is an example of a what?",
    answer: "Javascript library"
  }
]

function showQnA(index) {
  var questionAndAnswer = flashCards[index];
  var question = questionAndAnswer.question;
  var answer = questionAndAnswer.answer;

  $(".theQuestion p").html(question);
  $(".theAnswer p").html(answer);
}
