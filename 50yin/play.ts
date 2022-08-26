import { Input, Select } from 'https://deno.land/x/cliffy@v0.24.3/prompt/mod.ts';
import LRU from 'https://deno.land/x/lru@1.0.2/mod.ts';

import { CACHE_SIZE, WRONG_ANSWERS_LIMIT, STORY_KEY } from './constant.ts';
import QUESTION_TYPES from './question-types.ts';

const cache = new LRU(CACHE_SIZE);
const wrongAnswers: Record<string, string> = {};

let questions: Record<string, string> = {};
let successCount = 0;
const maxHistoryScore = +(localStorage.getItem(STORY_KEY) || 0);

const doExam = async () => {
  const keys = Object.keys(questions);
  let key = keys[Math.floor(Math.random() * keys.length)];
  while (cache.has(key)) {
    key = keys[Math.floor(Math.random() * keys.length)];
  }
  cache.set(key, key);

  try {
    const answer = await Input.prompt({ message: key });
    if (['exit', 'quit'].includes(answer)) return;

    if (answer === questions[key]) successCount++;
    else {
      wrongAnswers[key] = questions[key];
      console.info(wrongAnswers);
    }

    if (successCount > maxHistoryScore) {
      localStorage.setItem(STORY_KEY, String(successCount));
      console.info(`New scord! ${successCount}`);
    } else {
      console.info(`Succeed ${successCount} times`);
    }

    if (Object.keys(wrongAnswers).length >= WRONG_ANSWERS_LIMIT) return;
    doExam();
  } catch (error) {
    console.error(error);
  }
};

const questionTitle = await Select.prompt({
  message: 'Please select practice type (Press "u" for up, and  "d" for down)',
  keys: {
    previous: ['up', 'u'],
    next: ['down', 'd'],
  },
  options: QUESTION_TYPES.map((q) => ({ name: q.title, value: q.title })),
});

const questionsGenerator = QUESTION_TYPES.find((item) => item.title === questionTitle)!.genMap;
questions = questionsGenerator();
doExam();
