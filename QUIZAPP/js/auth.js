class Auth {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('users') || '[]');
        this.currentUser = localStorage.getItem('currentUser') || null;
    }

    signUp(fullName, username, password, country) {
        // Check if username already exists
        if (this.users.some(user => user.username === username)) {
            throw new Error('Username already exists');
        }

        // Create new user
        const user = {
            fullName,
            username,
            password, // In a real app, this should be hashed
            country,
            dateJoined: new Date().toISOString()
        };

        this.users.push(user);
        localStorage.setItem('users', JSON.stringify(this.users));
        
        // Auto login after signup
        this.login(username, password);
    }

    login(username, password) {
        const user = this.users.find(u => 
            u.username === username && u.password === password
        );

        if (!user) {
            throw new Error('Invalid username or password');
        }

        this.currentUser = username;
        localStorage.setItem('currentUser', username);
        
        return user;
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
    }

    isLoggedIn() {
        return this.currentUser !== null;
    }

    getCurrentUser() {
        if (!this.currentUser) return null;
        return this.users.find(u => u.username === this.currentUser);
    }
}
