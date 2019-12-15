$.getJSON("questions1.json", function (data) {
  window.questionnaire = data;
  // console.log(window.questionnaire);

  let usedQuestions = [];
  const questions = window.questionnaire.questions;
  let currentQuestionIndex = Math.floor(Math.random() * questions.length);
  let correctAnswer = questions[currentQuestionIndex].correct;

  // TODO: everytime currentQuestionIndex exists in usedQuestions, create a new currentQuestionIndex

  if (usedQuestions.includes(currentQuestionIndex)) {
    return;
  } else {
    usedQuestions.push(currentQuestionIndex);

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
  }
});
