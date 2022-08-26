import { Input } from 'https://deno.land/x/cliffy@v0.24.3/prompt/input.ts';
import { Select } from 'https://deno.land/x/cliffy@v0.24.3/prompt/select.ts';

import ALL_CHARS from './char.ts';
import QUESTION_TYPES from './question-types.ts';

const WRONG_LIMIT = 5;
const wrongAnswers: Record<string, string> = {};

let record: Record<string, string> = {};
let successCount = 0; // 118

const ask = () => {
  const keys = Object.keys(record);
  const key = keys[Math.floor(Math.random() * keys.length)];
  const currectAnswer = record[key];

  Input.prompt({
    message: key,
  })
    .then((answer) => {
      if (['exit', 'quit'].includes(answer)) return;
      const correct = answer === currectAnswer;
      if (correct) successCount++;
      else {
        wrongAnswers[key] = record[key];
        console.info(wrongAnswers);
        if (Object.keys(wrongAnswers).length >= WRONG_LIMIT) {
          console.info(`succeed ${successCount} times`);
          return;
        }
      }
      ask();
    })
    .catch((error: any) => {
      console.error(error);
      if (error.isTtyError) {
        console.error(`Prompt couldn't be rendered in the current environment`);
      }
    });
};

Select.prompt({
  message: 'Please select practice type',
  options: QUESTION_TYPES.map((q) => ({ name: q.title, value: q.title })),
}).then((answer) => {
  console.info(answer);
  const gen = QUESTION_TYPES.find((item) => item.title === answer)!.genMap;
  record = gen(ALL_CHARS);
  ask();
});
