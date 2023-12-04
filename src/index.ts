export const bingoCheck = (
  calledNumbers: number[],
  bingoCard: number[][]
): boolean => {
  const calledSet = new Set(calledNumbers);

  for (let row = 0; row < bingoCard.length; row++) {
    for (let col = 0; col < bingoCard[0].length; col++) {
      if (!calledSet.has(bingoCard[row][col])) {
        return false;
      }
    }
  }

  return true;
};

const main = () => {
  try {
    let calledNumbers: number[] = [
      7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22,
      18, 20, 8, 19, 3, 26, 1,
    ];
    let bingoCard: number[][] = [
      [22, 13, 17, 11, 0],
      [8, 2, 23, 4, 24],
      [21, 9, 14, 16, 7],
      [6, 10, 3, 18, 5],
      [1, 12, 20, 15, 19],
    ];
    let result = bingoCheck(calledNumbers, bingoCard);
    return result;
  } catch (err) {
    console.log(err);
    throw new Error("");
  }
};

console.log(main());
