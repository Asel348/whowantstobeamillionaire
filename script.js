$.getJSON("questions1.json", function(data) {
  window.questionnaire = data;
  console.log(window.questionnaire);

  function pickRandomQuestion() {
    var questions = window.questionnaire.questions;
    let currentQuestionIndex = Math.floor(Math.random() * questions.length);
    console.log(currentQuestionIndex);
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
  }
  pickRandomQuestion();
});
