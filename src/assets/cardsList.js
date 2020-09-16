const cards = [
  {
    imageId: 1,
    imageSrc: "./img/cat.png",
  },
  {
    imageId: 2,
    imageSrc: "./img/chameleon.png",
  },
  {
    imageId: 3,
    imageSrc: "./img/chicken.png",
  },
  {
    imageId: 4,
    imageSrc: "./img/cow.png",
  },
  {
    imageId: 5,
    imageSrc: "./img/duck.png",
  },
  {
    imageId: 6,
    imageSrc: "./img/lion.png",
  },
  {
    imageId: 7,
    imageSrc: "./img/pig.png",
  },
  {
    imageId: 8,
    imageSrc: "./img/toucan.png",
  },
];

export const getShuffledCards = () => {
  const deck = cards.concat(cards).sort(() => Math.random() - 0.5);
  return deck;
};
