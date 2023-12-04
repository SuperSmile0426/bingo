import { getBingoData, fileRead, bingoCheck } from "./helper";

const main = async () => {
  try {
    const fileContent = await fileRead("data/1.txt");
    const inputData = getBingoData(fileContent);

    const checkedResults = inputData.bingoCards.map((bingoCard) =>
      bingoCheck(inputData.calledNumbers, bingoCard)
    );

    console.log(checkedResults);
  } catch (err) {
    console.log(err);
    throw new Error("");
  }
};

main();
