const readline = require('readline');

class User {
  constructor(username, password) {
    this.username = username;
    this._password = password; // Using _password to indicate it's a private property
  }

  getPassword() {
    // Return the password with all characters replaced by asterisks
    return this._password.replace(/./g, '*');
  }

  setPassword(newPassword) {
    // Check if the new password is valid
    if (newPassword.length >= 8 && /[0-9]/.test(newPassword) && /[A-Z]/.test(newPassword)) {
      this._password = newPassword;
      console.log('Password updated successfully.');
    } else {
      console.error('Invalid password. It must be at least 8 characters long and contain at least one number and one uppercase letter.');
    }
  }
}

// Function to get user input
const getUserInput = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question('Enter a new password: ', (answer) => {
      resolve(answer);
      rl.close();
    });
  });
};

// Example usage with user-defined values:
const username = "Mindup";
let initialPassword = "Password123";

const user = new User(username, initialPassword);

(async () => {
  let isValidPassword = false;

  while (!isValidPassword) {
    const newPassword = await getUserInput();
    user.setPassword(newPassword);

    // Check if the password is now valid
    if (user.getPassword().length >= 8 && /[0-9]/.test(user.getPassword()) && /[A-Z]/.test(user.getPassword())) {
      isValidPassword = true;
    }
  }

  console.log('Valid password:', user.getPassword());
})();
