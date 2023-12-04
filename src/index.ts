import { getBingoData, fileRead } from "./helper";

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

const main = async () => {
  try {
    const fileContent = await fileRead("data/1.txt");
    const inputData = getBingoData(fileContent);

    const checkedResults = inputData.bingoCards.map((bingoCard) =>
      bingoCheck(inputData.calledNumbers, bingoCard)
    );

    console.log(checkedResults);
    return checkedResults;
  } catch (err) {
    console.log(err);
    throw new Error("");
  }
};

main();
