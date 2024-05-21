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

const printWeather = (response, icon) => {
  console.log(dedent`
		${chalk.bgYellowBright("WEATHER")} City weather ${response.name}
		${icon}  ${response.weather[0].description}
		Temperature: ${response.main.temp} (feels like ${response.main.feels_like})
		Humidity: ${response.main.humidity}%
		Wind speed: ${response.wind.speed}
	`);
};

export { printSuccess, printError, printHelp, printWeather };
