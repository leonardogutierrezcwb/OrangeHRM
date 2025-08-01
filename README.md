
# 🧪 Test Automation Project with Cypress

This project aims to automate end-to-end tests on the [OrangeHRM](https://opensource-demo.orangehrmlive.com/) application using the [Cypress](https://www.cypress.io/) framework. The automation covers critical system functionalities, ensuring the application's quality and reliability.

---

## 🚀 Technologies Used

- **Cypress**: End-to-end testing framework for web applications.
- **JavaScript**: Programming language used for writing the tests.
- **Node.js**: JavaScript runtime environment.
- **GitHub Actions**: CI/CD tool for workflow automation.

---

## 📁 Project Structure

The project follows best practices recommended for Cypress projects:

```
.
├── cypress/
│   ├── e2e/               # End-to-end test cases
│   ├── e2e/pages          # Page-Objects
│   ├── fixtures/          # Test data in JSON format
│   ├── support/           # Custom commands and global setup
├── cypress.config.js      # Cypress configuration file
├── package.json           # Project dependencies and scripts
└── .github/
    └── workflows/         # GitHub Actions configuration
```

---

## ⚙️ Installation and Execution

1. **Clone the repository:**

   ```bash
   git clone https://github.com/leonardogutierrezcwb/Test-Automation-Cypress.git
   cd Test-Automation-Cypress
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the tests:**

   - **Interactive Mode:**

     ```bash
     npx cypress open
     ```

   - **Headless Mode:**

     ```bash
     npx cypress run
     ```

---

## 🔄 Continuous Integration with GitHub Actions

The project is set up to automatically run tests through GitHub Actions on every push to the repository. This ensures that any code changes are validated through automated tests, maintaining the application's integrity.

---

## 📌 Contributions

Contributions are welcome! Feel free to open issues or pull requests with suggestions, bug fixes, or new features.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
