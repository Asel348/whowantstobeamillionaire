$.getJSON("questions1.json", function (data) {
  window.questionnaire = data;
  // console.log(window.questionnaire);

  let unusedQuestions = [];
  let usedQuestions = [];
  const questions = window.questionnaire.questions;
  let currentQuestionIndex = Math.floor(Math.random() * questions.length);
  let correctAnswer = questions[currentQuestionIndex].correct;
  
  for (let i = 0; i < questions.length; i++) {
    unusedQuestions.push(questions[i]);
  };
  console.log("There are " + unusedQuestions.length + " unused questions");

  for (let i = 0; i < questions.length; i++) {
    unusedQuestions.push(questions[i]);
  }
  console.log("There are " + unusedQuestions.length + " unused questions");
  
  usedQuestions.push(currentQuestionIndex);
  unusedQuestions.splice(currentQuestionIndex, 1);
  console.log(usedQuestions);
  console.log(unusedQuestions);

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
});
