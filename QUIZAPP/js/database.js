// Database handling using localStorage
class Database {
    constructor() {
        this.initializeDatabase();
    }

    initializeDatabase() {
        // Initialize users table if it doesn't exist
        if (!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify([]));
        }

        // Initialize scores table if it doesn't exist
        if (!localStorage.getItem('quizScores')) {
            localStorage.setItem('quizScores', JSON.stringify([]));
        }
    }

    // User methods
    getUsers() {
        return JSON.parse(localStorage.getItem('users'));
    }

    addUser(user) {
        const users = this.getUsers();
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    }

    updateUser(username, updates) {
        const users = this.getUsers();
        const userIndex = users.findIndex(u => u.username === username);
        if (userIndex !== -1) {
            users[userIndex] = { ...users[userIndex], ...updates };
            localStorage.setItem('users', JSON.stringify(users));
            return true;
        }
        return false;
    }

    // Score methods
    getScores() {
        return JSON.parse(localStorage.getItem('quizScores'));
    }

    addScore(scoreData) {
        const scores = this.getScores();
        scores.push({
            ...scoreData,
            timestamp: new Date().toISOString()
        });
        
        // Sort by score and keep only top 5
        scores.sort((a, b) => b.score - a.score);
        const topScores = scores.slice(0, 5);
        
        localStorage.setItem('quizScores', JSON.stringify(topScores));
    }

    getTopScores(limit = 5) {
        const scores = this.getScores();
        return scores
            .sort((a, b) => b.score - a.score)
            .slice(0, limit);
    }

    getUserScores(username) {
        const scores = this.getScores();
        return scores.filter(score => score.username === username);
    }

    clearAllData() {
        localStorage.clear();
        this.initializeDatabase();
    }
}

// Initialize database when the file loads
const db = new Database(); 