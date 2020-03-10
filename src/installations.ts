import { delimeterMsg, logF, log, logToHTML } from "./utils";

function firstStep() {
  logToHTML('' +
    '...');
}

export default function installations() {
  delimeterMsg('INSTALLATIONS');
  logF(firstStep);
}