/**
 * Returns array of chars where letters exist both in str1 and str2
 */
export function allOverlappingLetters(str1: string, str2: string): string[] {
  return str2.split("").filter((letter) => str1.includes(letter));
}

/**
 * Returns array of chars which exist in str2 but not in str1
 */
export function nonOverlappingLetters(str1: string, str2: string): string[] {
  return str2.split("").filter((letter) => !str1.includes(letter));
}

export function isLetterAtIndexOnAnyGuess(
  guesses: string[],
  letter: string,
  index: number
): boolean {
  return guesses.some((word) => word[index] === letter);
}

export function isLetterAtCorrectIndexOnAnyGuess(
  guesses: string[],
  letter: string,
  answer: string
): boolean {
  for (const word of guesses) {
    for (const index in word.split("")) {
      if (letter === word[index] && word[index] === answer[index]) return true;
    }
  }
  return false;
}
