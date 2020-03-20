import { delimeterMsg, logF, log, logToHTML } from "./utils";

function learningMarkdown() {
  logToHTML('' +
    'Markdown is a tool that enables us to write human-readable text that is nicely converted into html and can be viewed on web. ' +
    'Basic syntax rules: please open README.MD for details!');
}

export default function usingMarkdown() {
  delimeterMsg('USING MARKDOWN');
  logF(learningMarkdown);
}