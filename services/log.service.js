import chalk from "chalk";
import dedent from "dedent";

const printSuccess = (success) => {
  console.log(chalk.bgGreen("Success") + " " + success);
};

const printError = (error) => {
  console.log(chalk.bgRed("Error") + " " + error);
};

const printHelp = () => {
  console.log(dedent`
    ${chalk.bgCyan("Help")}
    -s [CITY] save the city
    -t [TOKEN] save the token
    -h show help
  `);
};

export { printSuccess, printError, printHelp };
