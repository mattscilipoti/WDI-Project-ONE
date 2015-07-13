$( document ).ready(function() {
    console.log( "ready!" );

    var deck = [];

    $(".editQuestion").on("click", function(){
      $(".theAnswer").attr("style", "visibility: hidden")

      var theQuestion = prompt("SET YOUR QUESTION");
      $(".theQuestion").html(theQuestion + "\n");

      var theAnswer = prompt("ANSWER TO THE QUESTION");
      $(".theAnswer").html("\n" + theAnswer);
    });

    $(".showAnswer").on("click", function(){
      $(".theAnswer").removeAttr("style");
    });

    for (var i = 0; i < deck.length; i++ ) {
      
    }

});
