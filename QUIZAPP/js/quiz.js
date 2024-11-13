class Quiz {
    constructor(difficulty) {
        this.difficulty = difficulty;
        this.questions = this.getQuestions();
        this.currentQuestion = 0;
        this.score = 0;
        this.timer = null;
        this.selectedAnswer = null;
        this.questionTimes = [];
        this.startTime = null;
    }

    getQuestions() {
        const questions = {
            easy: [
                {
                    question: "What will be the output of: print(type(5))",
                    options: [
                        "int",
                        "<class 'int'>",
                        "integer",
                        "number"
                    ],
                    correct: 1
                },
                {
                    question: "Which of these is a valid Python variable name?",
                    options: [
                        "2myvar",
                        "my-var",
                        "my_var",
                        "@myvar"
                    ],
                    correct: 2
                },
                {
                    question: "What is the output of: print('Hello' + ' World')",
                    options: [
                        "Hello World",
                        "HelloWorld",
                        "Error",
                        "Hello + World"
                    ],
                    correct: 1
                },
                {
                    question: "Which symbol is used for comments in Python?",
                    options: [
                        "//",
                        "/* */",
                        "#",
                        "--"
                    ],
                    correct: 2
                },
                {
                    question: "What is the output of: print(len('Python'))",
                    options: [
                        "5",
                        "6",
                        "7",
                        "Error"
                    ],
                    correct: 1
                },
                {
                    question: "Which of these is the correct way to create a list in Python?",
                    options: [
                        "list = (1, 2, 3)",
                        "list = {1, 2, 3}",
                        "list = [1, 2, 3]",
                        "list = <1, 2, 3>"
                    ],
                    correct: 2
                },
                {
                    question: "What is the result of: 3 + 2 * 2",
                    options: [
                        "10",
                        "7",
                        "12",
                        "5"
                    ],
                    correct: 1
                },
                {
                    question: "How do you create a single-line string in Python?",
                    options: [
                        "'text'",
                        "str(text)",
                        "(text)",
                        "text"
                    ],
                    correct: 0
                },
                {
                    question: "What will print(bool(0)) display?",
                    options: [
                        "0",
                        "1",
                        "True",
                        "False"
                    ],
                    correct: 3
                },
                {
                    question: "Which operator is used for exponentiation in Python?",
                    options: [
                        "^",
                        "**",
                        "^^",
                        "pow"
                    ],
                    correct: 1
                }
            ],
            medium: [
                {
                    question: "What is the output of:\nlist = [1, 2, 3]\nprint(list[::-1])",
                    options: [
                        "[1, 2, 3]",
                        "[3, 2, 1]",
                        "Error",
                        "None"
                    ],
                    correct: 1
                },
                {
                    question: "Which of these is not a valid way to create a set?",
                    options: [
                        "set([1, 2, 3])",
                        "{1, 2, 3}",
                        "set(1, 2, 3)",
                        "set((1, 2, 3))"
                    ],
                    correct: 2
                },
                {
                    question: "What does the 'is' operator do in Python?",
                    options: [
                        "Compares values",
                        "Checks memory location",
                        "Checks type",
                        "Assigns values"
                    ],
                    correct: 1
                },
                {
                    question: "What is a lambda function in Python?",
                    options: [
                        "Multi-line function",
                        "Anonymous function",
                        "Built-in function",
                        "Class method"
                    ],
                    correct: 1
                },
                {
                    question: "What will be the output of:\nprint(2 * 'python')",
                    options: [
                        "pythonpython",
                        "Error",
                        "2python",
                        "python2"
                    ],
                    correct: 0
                },
                {
                    question: "Which method is used to remove whitespace from both ends of a string?",
                    options: [
                        "strip()",
                        "trim()",
                        "clean()",
                        "remove()"
                    ],
                    correct: 0
                },
                {
                    question: "What is the purpose of __init__ method in Python?",
                    options: [
                        "To initialize variables",
                        "To create constructor",
                        "To define class",
                        "To import modules"
                    ],
                    correct: 1
                },
                {
                    question: "What will list.append() return?",
                    options: [
                        "Updated list",
                        "None",
                        "True",
                        "Length of list"
                    ],
                    correct: 1
                },
                {
                    question: "Which of these is not a valid string method?",
                    options: [
                        "capitalize()",
                        "reverse()",
                        "upper()",
                        "lower()"
                    ],
                    correct: 1
                },
                {
                    question: "What is the output of:\nprint(type(lambda x: x))",
                    options: [
                        "lambda",
                        "<class 'function'>",
                        "function",
                        "Error"
                    ],
                    correct: 1
                }
            ],
            hard: [
                {
                    question: "What is the output of:\nfrom functools import reduce\nprint(reduce(lambda x, y: x + y, [1, 2, 3, 4]))",
                    options: [
                        "[10]",
                        "10",
                        "Error",
                        "[1, 2, 3, 4]"
                    ],
                    correct: 1
                },
                {
                    question: "What is the time complexity of list slicing in Python?",
                    options: [
                        "O(1)",
                        "O(n)",
                        "O(log n)",
                        "O(n²)"
                    ],
                    correct: 1
                },
                {
                    question: "Which of these is true about Python's GIL?",
                    options: [
                        "It allows true multithreading",
                        "It prevents race conditions",
                        "It allows multiple threads to execute Python code simultaneously",
                        "It only allows one thread to execute Python code at a time"
                    ],
                    correct: 3
                },
                {
                    question: "What will be the output of:\nclass A:\n    pass\nprint(type(type(A)))",
                    options: [
                        "<class 'type'>",
                        "<class 'object'>",
                        "<class 'class'>",
                        "Error"
                    ],
                    correct: 0
                },
                {
                    question: "What is the difference between __str__ and __repr__?",
                    options: [
                        "No difference",
                        "__str__ is for developers, __repr__ for users",
                        "__str__ is for users, __repr__ for developers",
                        "__str__ is for printing, __repr__ for debugging"
                    ],
                    correct: 2
                },
                {
                    question: "What is a metaclass in Python?",
                    options: [
                        "A class that inherits from another class",
                        "A class that creates classes",
                        "A class that contains multiple classes",
                        "A class with multiple inheritance"
                    ],
                    correct: 1
                },
                {
                    question: "What is the output of:\nfrom collections import defaultdict\nd = defaultdict(list)\nprint(d['nonexistent'])",
                    options: [
                        "Error",
                        "None",
                        "[]",
                        "defaultdict"
                    ],
                    correct: 2
                },
                {
                    question: "Which of these is true about Python's memory management?",
                    options: [
                        "Manual memory management",
                        "Reference counting and garbage collection",
                        "Only garbage collection",
                        "Only reference counting"
                    ],
                    correct: 1
                },
                {
                    question: "What is the purpose of @property decorator?",
                    options: [
                        "To create static methods",
                        "To create class methods",
                        "To create getters and setters",
                        "To create private variables"
                    ],
                    correct: 2
                },
                {
                    question: "What will happen in:\ntry:\n    raise KeyboardInterrupt\nfinally:\n    print('finally')\n",
                    options: [
                        "Nothing prints",
                        "'finally' prints then KeyboardInterrupt",
                        "Only KeyboardInterrupt appears",
                        "Only 'finally' prints"
                    ],
                    correct: 1
                }
            ]
        };
        
        // Randomly select 5 questions from the difficulty level
        return this.shuffleArray(questions[this.difficulty]).slice(0, 5);
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    startTimer() {
        this.startTime = Date.now();
        clearInterval(this.timer);
        let timeLeft = 15;
        const timerDisplay = document.getElementById('timer');
        
        timerDisplay.style.color = 'var(--success-color)';
        timerDisplay.textContent = timeLeft;
        
        this.timer = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = timeLeft;
            
            if (timeLeft <= 5) {
                timerDisplay.style.color = 'var(--error-color)';
            } else if (timeLeft <= 10) {
                timerDisplay.style.color = 'var(--warning-color)';
            }
            
            if (timeLeft === 0) {
                clearInterval(this.timer);
                this.nextQuestion();
            }
        }, 1000);
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestion];
        document.getElementById('question').textContent = question.question;
        
        const optionsContainer = document.querySelector('.options-container');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            
            // Add checkbox
            const checkbox = document.createElement('span');
            checkbox.className = 'checkbox';
            
            const optionText = document.createElement('span');
            optionText.textContent = option;
            
            button.appendChild(checkbox);
            button.appendChild(optionText);
            button.onclick = () => this.selectOption(index);
            
            optionsContainer.appendChild(button);
        });

        this.startTimer();
        this.updateNavigationButtons();
        
        // Add event listeners for navigation buttons
        document.getElementById('next-btn').onclick = () => this.nextQuestion();
        document.getElementById('submit-btn').onclick = () => this.showResults();
        document.querySelector('.exit-btn').onclick = () => this.exitQuiz();
    }

    selectOption(index) {
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        document.querySelectorAll('.option-btn')[index].classList.add('selected');
        this.selectedAnswer = index;
    }

    updateNavigationButtons() {
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-btn');
        
        if (this.currentQuestion === this.questions.length - 1) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'block';
        } else {
            nextBtn.style.display = 'block';
            submitBtn.style.display = 'none';
        }
    }

    nextQuestion() {
        this.recordQuestionTime();
        if (this.selectedAnswer !== null) {
            if (this.selectedAnswer === this.questions[this.currentQuestion].correct) {
                this.score++;
            }
        }

        clearInterval(this.timer);
        this.selectedAnswer = null;

        if (this.currentQuestion < this.questions.length - 1) {
            this.currentQuestion++;
            this.displayQuestion();
        } else {
            this.showResults();
        }
    }

    recordQuestionTime() {
        const timeSpent = Math.min(15, Math.ceil((Date.now() - this.startTime) / 1000));
        this.questionTimes.push(timeSpent);
    }

    showResults() {
        this.recordQuestionTime();
        clearInterval(this.timer);
        
        document.getElementById('quiz-container').style.display = 'none';
        const resultsContainer = document.getElementById('results-container');
        resultsContainer.style.display = 'block';

        const percentage = (this.score / this.questions.length) * 100;
        const avgTime = this.questionTimes.reduce((a, b) => a + b, 0) / this.questionTimes.length;
        const fastestTime = Math.min(...this.questionTimes);
        
        const scoreDisplay = resultsContainer.querySelector('.score-display');
        scoreDisplay.innerHTML = `
            <h3>Your Score: ${this.score}/${this.questions.length} (${percentage.toFixed(1)}%)</h3>
            <div class="performance-stats">
                <div class="difficulty-badge ${this.difficulty}">
                    ${this.difficulty.charAt(0).toUpperCase() + this.difficulty.slice(1)}
                </div>
                <div class="time-stats">
                    <p>⚡ Fastest Answer: ${fastestTime}s</p>
                    <p>⏱️ Average Time: ${avgTime.toFixed(1)}s</p>
                </div>
                <div class="accuracy-meter">
                    <div class="accuracy-bar" style="width: ${percentage}%"></div>
                </div>
            </div>
            <p class="message ${this.getMessageClass(percentage)}">
                ${this.getResultMessage(percentage)}
            </p>
        `;
    }

    getMessageClass(percentage) {
        if (percentage >= 80) return 'excellent';
        if (percentage >= 60) return 'good';
        return 'needs-improvement';
    }

    getResultMessage(percentage) {
        if (percentage >= 80) return "Excellent! Outstanding performance! 🏆";
        if (percentage >= 60) return "Good job! Keep it up! 👍";
        return "Keep practicing! You can do better! 💪";
    }

    exitQuiz() {
        if (confirm('Are you sure you want to exit the quiz? Your progress will be lost.')) {
            clearInterval(this.timer);
            document.getElementById('quiz-container').style.display = 'none';
            document.getElementById('menu-container').style.display = 'block';
        }
    }

    init() {
        this.displayQuestion();
    }
} 