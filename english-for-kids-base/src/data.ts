
//  ['Categories', 'Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions', 'Nature', 'Seasons and weather'],


export const DATA_OF_CATEGORIES = [
    {
      ids: 0,
      categ: 'actionA',
      name: 'Action (set A)',
      image: 'dance.jpg',
    },
    {
      ids: 1,
      categ: 'actionB',
      name: 'Action (set B)',
      image: 'play.jpg',
    },
    {
      ids: 2,
      categ: 'animalA',
      name: 'Animal (set A)',
      image: 'cat.jpg',
    },
    {
      ids: 3,
      categ: 'animalB',
      name: 'Animal (set B)',
      image: 'frog.jpg',
    },
    {
      ids: 4,
      categ: 'clothes',
      name: 'Clothes',
      image: 'boot.jpg',
    },
    {
      ids: 5,
      categ: 'emotions',
      name: 'Emotions',
      image: 'angry.jpg',
    },
    {
      ids: 6,
      categ: 'drinks',
      name: 'Drinks',
      image: 'milkshake.jpg',
    },
    {
      ids: 7,
      categ: 'food',
      name: 'Food',
      image: 'sandwich.jpg',
    }
  ]
export type CARD = {
  category: string,
      word: string,
      translation: string,
      image: string,
      audioSrc: string,
      train: number,
      correct: number,
      errors: number,
      percentOfErrors: number
}
export type CATEGORY = CARD[]


export let DATA_OF_CARDS:CATEGORY[] = [
  [
    {
      category: 'Action (set A)',
      word: 'cry',
      translation: 'плакать',
      image: 'cry.jpg',
      audioSrc: 'cry.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Action (set A)',
      word: 'dance',
      translation: 'танцевать',
      image: 'dance.jpg',
      audioSrc: 'dance.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Action (set A)',
      word: 'dive',
      translation: 'нырять',
      image: 'dive.jpg',
      audioSrc: 'dive.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Action (set A)',
      word: 'draw',
      translation: 'рисовать',
      image: 'draw.jpg',
      audioSrc: 'draw.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Action (set A)',
      word: 'fish',
      translation: 'ловить рыбу',
      image: 'fish.jpg',
      audioSrc: 'fish.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Action (set A)',
      word: 'fly',
      translation: 'летать',
      image: 'fly.jpg',
      audioSrc: 'fly.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Action (set A)',
      word: 'hug',
      translation: 'обнимать',
      image: 'hug.jpg',
      audioSrc: 'hug.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Action (set A)',
      word: 'jump',
      translation: 'прыгать',
      image: 'jump.jpg',
      audioSrc: 'jump.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    }
  ],
  [
    {
      category: 'Action (set B)',
      word: 'open',
      translation: 'открывать',
      image: 'open.jpg',
      audioSrc: 'open.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Action (set B)',
      word: 'play',
      translation: 'играть',
      image: 'play.jpg',
      audioSrc: 'play.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Action (set B)',
      word: 'point',
      translation: 'указывать',
      image: 'point.jpg',
      audioSrc: 'point.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Action (set B)',
      word: 'ride',
      translation: 'ездить',
      image: 'ride.jpg',
      audioSrc: 'ride.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Action (set B)',
      word: 'run',
      translation: 'бегать',
      image: 'run.jpg',
      audioSrc: 'run.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Action (set B)',
      word: 'sing',
      translation: 'петь',
      image: 'sing.jpg',
      audioSrc: 'sing.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0

    },
    {
      category: 'Action (set B)',
      word: 'skip',
      translation: 'прыгать',
      image: 'skip.jpg',
      audioSrc: 'skip.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Action (set B)',
      word: 'swim',
      translation: 'плавать',
      image: 'swim.jpg',
      audioSrc: 'swim.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    }
  ],
  [
    {
      category: 'Animal (set A)',
      word: 'cat',
      translation: 'кот',
      image: 'cat.jpg',
      audioSrc: 'cat.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0

    },
    {
      category: 'Animal (set A)',
      word: 'chick',
      translation: 'цыплёнок',
      image: 'chick.jpg',
      audioSrc: 'chick.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Animal (set A)',
      word: 'chicken',
      translation: 'курица',
      image: 'chicken.jpg',
      audioSrc: 'chicken.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Animal (set A)',
      word: 'dog',
      translation: 'собака',
      image: 'dog.jpg',
      audioSrc: 'dog.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Animal (set A)',
      word: 'horse',
      translation: 'лошадь',
      image: 'horse.jpg',
      audioSrc: 'horse.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Animal (set A)',
      word: 'pig',
      translation: 'свинья',
      image: 'pig.jpg',
      audioSrc: 'pig.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Animal (set A)',
      word: 'rabbit',
      translation: 'кролик',
      image: 'rabbit.jpg',
      audioSrc: 'rabbit.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Animal (set A)',
      word: 'sheep',
      translation: 'овца',
      image: 'sheep.jpg',
      audioSrc: 'sheep.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    }
  ],
  [
    {
      category: 'Animal (set B)',
      word: 'bird',
      translation: 'птица',
      image: 'bird.jpg',
      audioSrc: 'bird.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Animal (set B)',
      word: 'fishes',
      translation: 'рыбки',
      image: 'fish.jpg',
      audioSrc: 'fish.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Animal (set B)',
      word: 'frog',
      translation: 'лягушка',
      image: 'frog.jpg',
      audioSrc: 'frog.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Animal (set B)',
      word: 'giraffe',
      translation: 'жираф',
      image: 'giraffe.jpg',
      audioSrc: 'giraffe.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Animal (set B)',
      word: 'lion',
      translation: 'лев',
      image: 'lion.jpg',
      audioSrc: 'lion.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Animal (set B)',
      word: 'mouse',
      translation: 'мышь',
      image: 'mouse.jpg',
      audioSrc: 'mouse.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Animal (set B)',
      word: 'turtle',
      translation: 'черепаха',
      image: 'turtle.jpg',
      audioSrc: 'turtle.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Animal (set B)',
      word: 'dolphin',
      translation: 'дельфин',
      image: 'dolphin.jpg',
      audioSrc: 'dolphin.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    }
  ],
  [
    {
      category: 'Clothes',
      word: 'skirt',
      translation: 'юбка',
      image: 'skirt.jpg',
      audioSrc: 'skirt.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Clothes',
      word: 'pants',
      translation: 'брюки',
      image: 'pants.jpg',
      audioSrc: 'pants.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Clothes',
      word: 'blouse',
      translation: 'блузка',
      image: 'blouse.jpg',
      audioSrc: 'blouse.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Clothes',
      word: 'dress',
      translation: 'платье',
      image: 'dress.jpg',
      audioSrc: 'dress.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Clothes',
      word: 'boot',
      translation: 'ботинки',
      image: 'boot.jpg',
      audioSrc: 'boot.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Clothes',
      word: 'shirt',
      translation: 'рубашка',
      image: 'shirt.jpg',
      audioSrc: 'shirt.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Clothes',
      word: 'coat',
      translation: 'пальто',
      image: 'coat.jpg',
      audioSrc: 'coat.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Clothes',
      word: 'shoe',
      translation: 'туфли',
      image: 'shoe.jpg',
      audioSrc: 'shoe.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    }
  ],
  [
    {
      category: 'Emotions',
      word: 'sad',
      translation: 'грустный',
      image: 'sad.jpg',
      audioSrc: 'sad.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Emotions',
      word: 'angry',
      translation: 'сердитый',
      image: 'angry.jpg',
      audioSrc: 'angry.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0

    },
    {
      category: 'Emotions',
      word: 'happy',
      translation: 'счастливый',
      image: 'happy.jpg',
      audioSrc: 'happy.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Emotions',
      word: 'tired',
      translation: 'уставший',
      image: 'tired.jpg',
      audioSrc: 'tired.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Emotions',
      word: 'surprised',
      translation: 'удивлённый',
      image: 'surprised.jpg',
      audioSrc: 'surprised.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Emotions',
      word: 'scared',
      translation: 'испуганный',
      image: 'scared.jpg',
      audioSrc: 'scared.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Emotions',
      word: 'smile',
      translation: 'улыбка',
      image: 'smile.jpg',
      audioSrc: 'smile.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Emotions',
      word: 'laugh',
      translation: 'смех',
      image: 'laugh.jpg',
      audioSrc: 'laugh.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    }
  ],
  [
    {
      category: 'Drinks',
      word: 'milk',
      translation: 'молоко',
      image: 'milk.jpg',
      audioSrc: 'milk.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Drinks',
      word: 'coffee',
      translation: 'кофе',
      image: 'coffee.jpg',
      audioSrc: 'coffee.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Drinks',
      word: 'lemonade',
      translation: 'лемонад',
      image: 'lemonade.jpg',
      audioSrc: 'lemonade.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Drinks',
      word: 'juice',
      translation: 'сок',
      image: 'juice.jpg',
      audioSrc: 'juice.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Drinks',
      word: 'milkshake',
      translation: 'коктейль',
      image: 'milkshake.jpg',
      audioSrc: 'milkshake.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Drinks',
      word: 'water',
      translation: 'вода',
      image: 'water.jpg',
      audioSrc: 'water.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Drinks',
      word: 'tea',
      translation: 'чай',
      image: 'tea.jpg',
      audioSrc: 'tea.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Drinks',
      word: 'chocolate',
      translation: 'горячий шоколад',
      image: 'chocolate.jpg',
      audioSrc: 'chocolate.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    }
  ],
  [
    {
      category: 'Food',
      word: 'bread',
      translation: 'хлеб',
      image: 'bread.jpg',
      audioSrc: 'bread.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Food',
      word: 'soup',
      translation: 'суп',
      image: 'soup.jpg',
      audioSrc: 'soup.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Food',
      word: 'ham',
      translation: 'ветчина',
      image: 'ham.jpg',
      audioSrc: 'ham.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Food',
      word: 'steak',
      translation: 'бифштекс',
      image: 'steak.jpg',
      audioSrc: 'steak.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Food',
      word: 'porridge',
      translation: 'каша',
      image: 'porridge.jpg',
      audioSrc: 'porridge.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Food',
      word: 'candy',
      translation: 'конфета',
      image: 'candy.jpg',
      audioSrc: 'candy.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Food',
      word: 'sandwich',
      translation: 'ветер',
      image: 'sandwich.jpg',
      audioSrc: 'sandwich.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Food',
      word: 'cake',
      translation: 'торт',
      image: 'cake.jpg',
      audioSrc: 'cake.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    }
  ]
]

export default DATA_OF_CARDS;
