import { getMd5OfString } from '../utils/md5.ts';

const testCases = [
  ['', 'd41d8cd98f00b204e9800998ecf8427e'],
  ['abc', '900150983cd24fb0d6963f7d28e17f72'],
  ['deno', 'c8772b401bc911da102a5291cc4ec83b'],
  ['The quick brown fox jumps over the lazy dog', '9e107d9d372bb6826bd81d3542a419d6'],
  ['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '3b0c8ac703f828b04c6c197006d17218'],
  [
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    '014842d480b571495a4a0363793f7367',
  ],
];

testCases.forEach(async ([input, expected]) => {
  const actual = await getMd5OfString(input);
  console.info(expected === actual);
});
