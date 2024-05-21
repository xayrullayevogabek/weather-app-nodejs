import getArgs from "./helpers/args.js";
import { getWeather, getIcon } from "./services/api.service.js";
import { printError, printHelp, printSuccess, printWeather } from "./services/log.service.js";
import { getValueKey, saveKeyValue } from "./services/storage.service.js";

const saveToken = async (token) => {
  try {
    await saveKeyValue("token", token);
    printSuccess("Token saved");
  } catch (error) {
    printError(error.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError("City is not found");
    return;
  }
  try {
    await saveKeyValue("city", city);
    printSuccess("City saved");
  } catch (error) {
    printError(error.message);
  }
};

const getForeCast = async () => {
  try {
    const city = process.env.CITY ?? (await getValueKey("city"));
    const response = await getWeather(city);

    return printWeather(response, getIcon(response.weather[0].icon));
  } catch (error) {
    if (error?.response?.status === 404) {
      printError("City not found");
    } else if (error?.response?.status === 401) {
      printError("Invalid API key");
    } else {
      printError(error.message);
    }
    return;
  }
};

const startCli = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    return printHelp();
  }
  if (args.s) {
    return saveCity(args.s);
  }
  if (args.t) {
    return saveToken(args.t);
  }
  //   Result
  getForeCast();
};

startCli();
