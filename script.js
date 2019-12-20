// Get JSON of questions1.json
$.getJSON("questions1.json", function(data) {
  window.questionnaire = data;

  // Declare arrays to store the used & unused questions
  let unusedQuestions = [];
  let usedQuestions = [];
  // Declare this variable so it is easier to call
  const questions = window.questionnaire.questions;
  // Randomly select a question
  let currentQuestionIndex = Math.floor(Math.random() * questions.length);
  // Set the correct answer
  let correctAnswer = questions[currentQuestionIndex].correct;

  // Push every question to the unusedQuestions array
  for (let i = 0; i < questions.length; i++) {
    unusedQuestions.push(questions[i]);
  }
  console.log("There are " + unusedQuestions.length + " unused questions");

  // Push the current question to the usedQuestions array
  usedQuestions.push(currentQuestionIndex);
  // Remove the current question from the unusedQuestions array
  unusedQuestions.splice(currentQuestionIndex, 1);
  // Log the arrays
  console.log(usedQuestions);
  console.log(unusedQuestions);

  // Pick a rondom question with currentQuestionIndex, and apply them to the html
  function pickRandomQuestion() {
    // console.log(currentQuestionIndex);
    document.getElementById("question-value").innerHTML =
      questions[currentQuestionIndex].question;
    document.getElementById("choice-detail-a").innerHTML =
      questions[currentQuestionIndex].content[0];
    document.getElementById("choice-detail-b").innerHTML =
      questions[currentQuestionIndex].content[1];
    document.getElementById("choice-detail-c").innerHTML =
      questions[currentQuestionIndex].content[2];
    document.getElementById("choice-detail-d").innerHTML =
      questions[currentQuestionIndex].content[3];
    console.log("The correct answer index is: " + correctAnswer);
  }
  pickRandomQuestion();
  console.log("Used question index(es) are: " + usedQuestions);

  // Declare a boolean in order to determine if the client clicked the right answer
  let didClickedTheRightAnswer;
  
  function determineCorrectAnswer() {
    
    // Declare a variable to get the range of clicking
    var specifiedElement = document.getElementById(correctAnswer);

    // Get choices-table, add an event listener to click
    document
      .getElementById("choices-table")
      .addEventListener("click", function(event) {
        // Declare a boolean, if the user clicked inside specifiedElement, it's true; else, it's false
        var isClickInside = specifiedElement.contains(event.target);

        // Make the correct answer green after the click in 5 seconds
        setTimeout(function() {
          $("#" + correctAnswer).css("background-color", "#1fd152");
        }, 5000);

        // If isClickInside is TRUE, do this:
        if (isClickInside) {
          didClickedTheRightAnswer = true;
          console.log(didClickedTheRightAnswer);
          // If isClickInside is FALSE, do this:
        } else if (!isClickInside) {
          didClickedTheRightAnswer = false;
          console.log(didClickedTheRightAnswer);
        }
      });
  }
  determineCorrectAnswer();
});
