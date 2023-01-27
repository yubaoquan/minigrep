import ALL_CHARS from './char.ts';

const genGenerator = (keyIndex: number, valueIndex: number) => () =>
  ALL_CHARS.reduce((ret, cur) => {
    const question = cur[keyIndex];
    const answer = cur[valueIndex];
    return { ...ret, [question]: answer };
  }, {});

/** 平假名 */
const HIRAGANA_INDEX = 0;

/** 片假名 */
const KATAKANA_INDEX = 1;

/** 罗马音 */
const ROMAN_TONE_INDEX = 2;

const QUESTION_TYPES = [
  {
    title: '平假名=>罗马音',
    genMap: genGenerator(HIRAGANA_INDEX, ROMAN_TONE_INDEX),
  },
  {
    title: '片假名=>罗马音',
    genMap: genGenerator(KATAKANA_INDEX, ROMAN_TONE_INDEX),
  },
  {
    title: '平假名=>片假名',
    genMap: genGenerator(HIRAGANA_INDEX, KATAKANA_INDEX),
  },
  {
    title: '片假名=>平假名',
    genMap: genGenerator(KATAKANA_INDEX, HIRAGANA_INDEX),
  },
  {
    title: '罗马音=>平假名',
    genMap: genGenerator(ROMAN_TONE_INDEX, HIRAGANA_INDEX),
  },
  {
    title: '罗马音=>片假名',
    genMap: genGenerator(ROMAN_TONE_INDEX, KATAKANA_INDEX),
  },
];

export default QUESTION_TYPES;
