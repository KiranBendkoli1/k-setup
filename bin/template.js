#!/usr/bin/env node

const { execSync } = require("child_process");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const templates = {
  "React Native": "https://github.com/KiranBendkoli1/react-native-template.git",
  "React.js": "https://github.com/KiranBendkoli1/react-template.git",
};

(async () => {
  try {
    console.log("Welcome to K-Setup : The Project Template Creator!");

    // Prompt user to select a template and provide a project name
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "template",
        message: "Which template would you like to use?",
        choices: Object.keys(templates),
      },
      {
        type: "input",
        name: "projectName",
        message: "Enter your project name:",
        validate: (input) => (input ? true : "Project name cannot be empty."),
      },
    ]);

    const { template, projectName } = answers;
    const repoUrl = templates[template];

    console.log(`\nCreating a new project using the ${template} template...`);

    // Clone the selected template
    console.log("Cloning the template repository...");
    execSync(`git clone ${repoUrl} ${projectName}`, { stdio: "inherit" });

    // Navigate into the project directory
    process.chdir(projectName);

    // Remove existing Git history based on OS
    console.log(`Setting up ${projectName}...`);
    const gitDir = path.join(process.cwd(), ".git");
    if (fs.existsSync(gitDir)) {
      if (process.platform === "win32") {
        // Windows
        execSync("rmdir /s /q .git", { stdio: "inherit" });
      } else {
        // Unix-based (Linux/macOS)
        execSync("rm -rf .git", { stdio: "inherit" });
      }
    }

    console.log("Initializing...");
    execSync("git init", { stdio: "inherit" });
    execSync("git add .", { stdio: "inherit" });
    execSync('git commit -m "Initial commit for ${projectName}"', {
      stdio: "inherit",
    });

    // Install dependencies
    console.log("Installing dependencies...");
    if (fs.existsSync("yarn.lock")) {
      execSync("yarn install", { stdio: "inherit" });
    } else {
      execSync("npm install", { stdio: "inherit" });
    }

    console.log(
      "\nSetup complete! Navigate to the project directory and start building."
    );
    console.log(`\ncd ${projectName}`);
    console.log("Happy coding! 🚀");
  } catch (error) {
    console.error("An error occurred:", error.message);
    process.exit(1);
  }
})();
