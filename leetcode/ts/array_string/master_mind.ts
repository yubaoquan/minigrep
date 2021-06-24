/**
 * 珠玑妙算
 * https://leetcode-cn.com/problems/master-mind-lcci/
 */

export function masterMind(solution: string, guess: string): number[] {
  const guessList: string[] = guess.split('');
  const solutionList = solution.split('');
  let allGuess = 0;
  guessList.forEach((c) => {
    const firstIndex = solutionList.findIndex((t) => t === c);
    if (firstIndex > -1) {
      allGuess += 1;
      solutionList[firstIndex] = '_';
    }
  });
  const correctGuess = guessList.filter((t, i) => solution[i] === t).length;
  return [correctGuess, allGuess - correctGuess];
}

console.info(masterMind('RGRB', 'BBBY'));
