import { delimeterMsg, logF, log, logToHTML } from "./utils";

function basicCommands() {
  logToHTML('' +
    `Basic vim commands:
      "vim <filename>" - open / create a file
      ":q!" - quit without saving, ":wq!" or ":x" - save and quit
      "i" - enter insert mode, "o" - insert a blank line and enter insert mode
      "ESC" - quit insert mode
      "y" - copy, "yy" - copy line
      "p" - paste one line after the cursor, "P" - paste one line before the cursor
      "d" - delete / cut
      "c" - cut, then enter insert mode
      ":w" - save, ":w!" - overwrite,
      "w" - forward one word,
      "u" - undo, "CTRL+r" - redo,
      "cw" - change one word. Deletes a word from the cursor to the end of the word.
    `);
}

function editingFiles() {
  logToHTML('' +
    `Editing file commands:
      ":syntax enable" - enable syntax highlighting, "set syntax=html" - set specific syntax highlighting
      ":set number" - show line numbers
      "/searchterm" - search for "searchterm" in the document, "n" - next match, "N" - previous match
      ":%s/search/replace/gc" - search and replace, uses regex for flags
      ":gg" - go to the start of the file, "G" -  to go the end of the file, "3G" - go to line 3 (Must be capital G)
      ":pwd", ":cd <path>" - works inside vim, e.g. ":cd <path>", ":e .",  "select a file" to open and edit another file
      "V" - enter visual (selection) mode. In that mode, we can select text and use "y", "p", "d" for actions
    `);
}

export default function usingVim() {
  delimeterMsg('USING VIM');
  logF(basicCommands);
  logF(editingFiles);
}