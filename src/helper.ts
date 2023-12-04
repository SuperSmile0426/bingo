import fs from "fs";

export const fileRead = async (path: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(data.toString());
      }
    });
  });
};

export const getBingoData = (
  data: string
): {
  calledNumbers: number[];
  bingoCards: number[][][];
} => {
  const lines = data.split("\n");

  const calledNumbers: number[] = lines[0]
    .split(",")
    .map((value) => Number(value));

  const cardsCount = Math.floor(lines.length - 1) / 6;
  const bingoCards: number[][][] = [];

  for (let i = 0; i < cardsCount; i++) {
    const bingoCard: number[][] = [];
    for (let j = 0; j < 5; j++) {
      bingoCard.push(
        lines[1 + i * 6 + j + 1]
          .split(" ")
          .filter((value) => !!value)
          .map((value) => Number(value))
      );
    }

    bingoCards.push(bingoCard);
  }

  return {
    calledNumbers,
    bingoCards,
  };
};
