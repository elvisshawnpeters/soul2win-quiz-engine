document.addEventListener('DOMContentLoaded', function () {
  let currentScreen = "neet-intro";
  let currentQuestionIndex = 0;
  let score = 0;
	
  let answers = new Array(questions.length).fill(null);

  function showInstructions() {
    showScreen("instructions-screen");
  }

  function startQuestions() {
    currentQuestionIndex = 0;

    showScreen("question-screen");
    document.querySelector('.quiz-header').classList.add('active');
    renderQuestion(currentQuestionIndex);
  }
	
  function cancelTest() {
	  showScreen("neet-intro");
  }

  function showScreen(id) {
    // Hide ALL screens
    document.querySelectorAll(".screen").forEach(screen =>
      screen.classList.remove("active")
    );

    // Show requested screen
    document.getElementById(id).classList.add("active");

    // Update state
    currentScreen = id;
  }

  function getAnsweredCount() {
    return answers.filter(a => a !== null).length;
  }

  function renderQuestion(index) {
    const question = questions[index];

    document.querySelector('.question-topic').textContent = question.topic;
    document.querySelector('.question-text').textContent = question.text;

    const optionsContainer = document.querySelector('.options');
    optionsContainer.innerHTML = '';

    question.options.forEach(option => {
      const btn = document.createElement('button');
      btn.className = 'option';
      btn.textContent = option.text;

      btn.addEventListener('click', () => {
        document.querySelectorAll('.option').forEach(o =>
          o.classList.remove('selected')
        );

        btn.classList.add('selected');
        answers[index] = question.options.indexOf(option);
        updateProgress(getAnsweredCount(), questions.length);
        document.getElementById('next-btn').disabled = false;
      });

     optionsContainer.appendChild(btn);
    });

    document.querySelector('.quiz-progress').textContent =
    `${index + 1} / ${questions.length}`;

    const savedAnswer = answers[index];
    if (savedAnswer !== null) {
      document
        .querySelectorAll('.option')
        [savedAnswer]
        .classList.add('selected');
      document.getElementById('next-btn').disabled = false;
    } else {
      document.getElementById('next-btn').disabled = true;
    }

    // Prev button state
    document.getElementById('prev-btn').disabled = index === 0;
  }

  function updateProgress(currentStep, totalSteps) {
    const progressText = document.querySelector('.quiz-progress');
    const progressFill = document.querySelector('.progress-fill');

    // Update text
    progressText.textContent = `${currentStep} / ${totalSteps}`;

    // Calculate percentage
    const percent = (currentStep / totalSteps) * 100;

    // Animate bar
    progressFill.style.width = `${percent}%`;
  }

  function handleNext() {
    const selectedIndex = answers[currentQuestionIndex];
    if (selectedIndex === null) return;

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      renderQuestion(currentQuestionIndex);
    } else {
      showResults();
    }
  }

  function handlePrev() {
    if (currentQuestionIndex === 0) return;
    currentQuestionIndex--;
    renderQuestion(currentQuestionIndex);
  }

  function calculateScores() {
    score = 0;

    answers.forEach((answerIndex, questionIndex) => {

        if (answerIndex === null) return;

        if (answerIndex === questions[questionIndex].correctAnswer) {
            score++;
        }

    });
  }

  function showResults() {
    calculateScores();
	  const total = questions.length;
    const incorrect = total - score;
    const percentage = Math.round((score / total) * 100);

    document.getElementById("result-title").innerText =
  `Your Score: ${score} / ${total}`;
    document.getElementById("result-meaning").innerText =
  `Correct Answers: ${score}`;percentage
      document.getElementById("result-affirmation").innerText =
  `Incorrect Answers: ${incorrect}`;
    document.getElementById("result-cost").innerText =
  `Percentage: ${percentage}%`;percentage
      document.getElementById("result-step").innerText =
  "Thank you for taking this practice test. More NEET questions will be added soon.";
    document.getElementById("scripture").innerText =
  "Detailed explanations for each question will be available in the next version.";
    
	  showScreen("result-screen");
  }

  function restartQuiz() {
    // Reset navigation
    currentQuestionIndex = 0;
    currentScreen = "neet-intro";

    // Reset scores
    score = 0;

    // Reset answers properly
    answers = new Array(questions.length).fill(null);

    // Reset progress bar
    updateProgress(0, questions.length);
    document.querySelector('.progress-fill').style.width = '0%';

    // Hide quiz header
    document.querySelector('.quiz-header')?.classList.remove('active');

    // Go back to intro
    startQuestions();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
						  
  function bindButton(id, handler) {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', handler);
  }

  bindButton('start-btn', () => {
    showInstructions();
  });

  bindButton('begin-btn', () => {
    startQuestions();
  });

  bindButton('cancel-btn', () => {
    cancelTest();
  });

  bindButton('next-btn', () => {
    handleNext();
  });

  bindButton('prev-btn', () => {
    handlePrev();
  });

  bindButton('restart-btn', () => {
    restartQuiz();
  });

  window.toggleAccordion = function (id, button) {
    const el = document.getElementById(id);
    if (!el) return;

    el.classList.toggle("hidden");
    button.classList.toggle("open");
  };
});