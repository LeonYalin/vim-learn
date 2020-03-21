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
      "w" - forward one word, "b" - back one word, "SHIFT+w/SHIFT+b" - jump to next/prev whitespace
      "u" - undo, "CTRL+r" - redo,
      "cw" - change one word. Deletes a word from the cursor to the end of the word.
      "r" - replace the current character, "R" - replace sequence of characters
    `);
}

function editingFiles() {
  logToHTML('' +
    `Editing file commands:
      ":syntax enable" - enable syntax highlighting, "set syntax=html" - set specific syntax highlighting
      ":set number" - show line numbers, ":set expandtab" - set spaces instead of tabs
      "/searchterm" - search for "searchterm" in the document, "n" - next match, "N" - previous match
      ":%s/search/replace/gc" - search and replace, uses regex for flags
      ":gg" - go to the start of the file, "G" -  to go the end of the file, "3G" - go to line 3 (Must be capital G)
      "0" - go to line start, "$" - go to line end
      ">> / <<" - indent right / left, "2>>" - indent 2 times right
      "CTRL+b/CTRL+f" - scroll one screen back/forward, "zt" - scroll until the current line
      ":pwd", ":cd <path>" - works inside vim, e.g. ":cd <path>", ":e .",  "select a file" to open and edit another file
      "V" - enter visual (selection) mode. In that mode, we can select text and use "y/p/d", "w/b", "0/$" for actions
    `);
}

function configuration() {
  logToHTML('' +
    `Vim configuration:
      "We can create or alter the vim configuration file. By default , it is named \'~/.vimrc\', plugins are located in ~/.vim/ directory."
      ":set <flag>" - enable flag, ":set no<flag>" - disable flag
      ":set <flag>?" - get flag value, ":set <flag>&" - reset flag to default value
      ":h <command>" - help dialog for specific command
    `);
}

function windowsAndTabs() {
  logToHTML('' +
    `We can work with multiple windows or tabs simultaneously:
      "CTRL+w s" - split window horizontally, "CTRL+w v" - split window vertically
      "CTRL+w h/j/k/l" - navigate through opened windows,  "CTRL+w c" - close window, "CTRL+w o" - close all but current
      ":tabnew" - open a new tab, ":tabclose" - close a tab, ":tabnext" - next tab, ":tabprevious" - prev tab
    `);
}

export default function usingVim() {
  delimeterMsg('USING VIM');
  logF(basicCommands);
  logF(editingFiles);
  logF(configuration);
  logF(windowsAndTabs);
}