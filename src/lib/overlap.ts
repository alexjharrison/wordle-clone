/**
 * Returns array of chars where letters exist both in str1 and str2
 */
export function allOverlappingLetters(str1: string, str2: string): string[] {
  return str2
    .toLowerCase()
    .split("")
    .filter((letter) => str1.includes(letter.toLowerCase()));
}

/**
 * Returns array of chars which exist in str2 but not in str1
 */
export function nonOverlappingLetters(str1: string, str2: string): string[] {
  return str2
    .toLowerCase()
    .split("")
    .filter((letter) => !str1.includes(letter.toLowerCase()));
}
