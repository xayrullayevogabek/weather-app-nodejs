import getArgs from "./helpers/args.js";
import { printError, printHelp, printSuccess } from "./services/log.service.js";

const startCli = () => {
  const args = getArgs(process.argv);

  printError("not okay");
  printSuccess("okay");

  if (args.h) {
    printHelp();
    // Help
  }
  if (args.s) {
    // Save
  }
  if (args.t) {
    // Save Token
  }
  //   Result
};

startCli();
