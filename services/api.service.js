import { printError } from "./log.service.js";
import { getValueKey } from "./storage.service.js";
import https from "https";

const getWeather = async () => {
  const token = await getValueKey("token");
  console.log(token);
  if (!token) {
    printError("Token is not defined. -t [TOKEN] save the token");
  }

  const url = new URL("https://api.openweathermap.org/data/2.5/weather");
  url.searchParams.append("q", "Moscow");
  url.searchParams.append("lang", "en");
  url.searchParams.append("units", "metric");
  url.searchParams.append("appid", token);

  https.get(url, (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      return JSON.parse(data);
    });
  });
};

export { getWeather };
