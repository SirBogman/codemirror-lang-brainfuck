import {parser} from "./syntax.grammar";
import {LRLanguage, LanguageSupport} from "@codemirror/language";
import {styleTags, tags as t} from "@lezer/highlight";

export const brainfuckLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        "[ ]": t.squareBracket,
        Comment: t.comment,
        Operator: t.operator,
      })
    ]
  }),
  languageData: {
    // Prevent auto insertion of closing brackets for `({'"`.
    closeBrackets: {brackets: ["["]}
  }
});

export function brainfuck() {
  return new LanguageSupport(brainfuckLanguage);
}
