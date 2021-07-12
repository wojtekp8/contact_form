/**
 * Counts checksum form digits in char array
 * @param digits Array of digits
 * @param weights Array of weights
 */
 export function countChecksum(digits: readonly string[], weights: readonly number[]): number {
    if ((digits.length - 1) !== weights.length) {
      throw new Error(`Nie można obliczyś sumy kontrolnej, lość wag '${weights.length}' jest różna od ilości cyfr '${digits.length - 1}'.`);
    }
    let checksum = 0;
    for (let i = 0; i < weights.length; ++i) {
      checksum += (weights[i] * (parseInt(digits[i], 10)));
    }
    return checksum % 11;
  }
  
  /**
   * Counts checksum form digits string in char array
   * @param digits Array of digits
   * @param weights Array of weights
   */
  export function countChecksumFromString(digitsString: string, weights: readonly number[]): number {
    return countChecksum(digitsString.split(''), weights);
  }