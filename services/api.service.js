import { printError } from "./log.service.js";
import { getValueKey } from "./storage.service.js";
import axios from "axios";
// import https from "https";

const getIcon = (icon) => {
  switch (icon.slice(0, -1)) {
    case "01":
      return "☀️";
    case "02":
      return "🌤️";
    case "03":
      return "☁️";
    case "04":
      return "☁️";
    case "09":
      return "🌧️";
    case "10":
      return "🌦️";
    case "11":
      return "🌩️";
    case "13":
      return "❄️";
    case "50":
      return "🌫️";
  }
};

const getWeather = async (city) => {
  const token = process.env.TOKEN ?? (await getValueKey("token"));
  if (!token) {
    printError("Token is not defined. -t [TOKEN] save the token");
  }
  // With https method
  //   const url = new URL("https://api.openweathermap.org/data/2.5/weather");
  //   url.searchParams.append("q", "Moscow");
  //   url.searchParams.append("lang", "en");
  //   url.searchParams.append("units", "metric");
  //   url.searchParams.append("appid", token);
  //   https.get(url, (res) => {
  //     let data = "";
  //     res.on("data", (chunk) => {
  //       data += chunk;
  //     });
  //     res.on("end", () => {
  //       return JSON.parse(data);
  //     });
  //   });

  // With axios
  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lang: "en",
        units: "metric",
      },
    }
  );
  return data;
};

export { getWeather, getIcon };
