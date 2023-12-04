import fs from "fs";
import { BingoCard, CalledNumbers } from "./types";

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
  calledNumbers: CalledNumbers;
  bingoCards: BingoCard[];
} => {
  const lines = data.split("\n");

  const calledNumbers: number[] = lines[0]
    .split(",")
    .map((value) => Number(value));

  const cardsCount = Math.floor(lines.length - 1) / 6;
  const bingoCards: BingoCard[] = [];

  for (let i = 0; i < cardsCount; i++) {
    const bingoCard: BingoCard = [];
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

export const bingoCheck = (
  calledNumbers: CalledNumbers,
  bingoCard: BingoCard
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
