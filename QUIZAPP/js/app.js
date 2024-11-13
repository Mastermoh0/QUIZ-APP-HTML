document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();

    function setupEventListeners() {
        // Quiz start handler
        document.getElementById('start-quiz').addEventListener('click', () => {
            const selectedDifficulty = document.querySelector('input[name="difficulty"]:checked');
            
            if (!selectedDifficulty) {
                alert('Please select a difficulty level');
                return;
            }

            startQuiz(selectedDifficulty.value);
        });

        // Play again handler
        document.getElementById('play-again').addEventListener('click', () => {
            document.getElementById('results-container').style.display = 'none';
            document.getElementById('menu-container').style.display = 'block';
            
            // Reset radio buttons
            document.querySelectorAll('input[name="difficulty"]').forEach(radio => {
                radio.checked = false;
            });
        });
    }

    function startQuiz(difficulty) {
        document.getElementById('menu-container').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'block';
        
        const quiz = new Quiz(difficulty);
        quiz.init();
    }
}); 