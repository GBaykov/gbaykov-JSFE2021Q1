
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
    }
    // {
    //   categ: 'action-b',
    //   name: 'Nature',
    //   image: 'assets/img/categories/plants.jpg',
    // },
    // {
    //   categ: 'action-b',
    //   name: 'Seasons and weather',
    //   image: 'assets/img/categories/seasons.jpg',
    // }
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
      category: 'Nature',
      word: 'desert',
      translation: 'пустыня',
      image: 'desert.jpg',
      audioSrc: 'desert.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Nature',
      word: 'flowers',
      translation: 'цветы',
      image: 'flowers.jpg',
      audioSrc: 'flowers.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Nature',
      word: 'forest',
      translation: 'лес',
      image: 'forest.jpg',
      audioSrc: 'forest.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Nature',
      word: 'grass',
      translation: 'трава',
      image: 'grass.jpg',
      audioSrc: 'grass.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Nature',
      word: 'mountains',
      translation: 'горы',
      image: 'mountains.jpg',
      audioSrc: 'mountains.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Nature',
      word: 'ocean',
      translation: 'океан',
      image: 'ocean.jpg',
      audioSrc: 'ocean.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Nature',
      word: 'river',
      translation: 'река',
      image: 'river.jpg',
      audioSrc: 'river.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Nature',
      word: 'seaweed',
      translation: 'водоросли',
      image: 'seaweed.jpg',
      audioSrc: 'seaweed.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    }
  ],
  [
    {
      category: 'Seasons and weather',
      word: 'autumn',
      translation: 'осень',
      image: 'autumn.jpg',
      audioSrc: 'autumn.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Seasons and weather',
      word: 'fog',
      translation: 'туман',
      image: 'fog.jpg',
      audioSrc: 'fog.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Seasons and weather',
      word: 'rain',
      translation: 'дождь',
      image: 'rain.jpg',
      audioSrc: 'rain.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Seasons and weather',
      word: 'spring',
      translation: 'весна',
      image: 'spring.jpg',
      audioSrc: 'spring.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Seasons and weather',
      word: 'summer',
      translation: 'лето',
      image: 'summer.jpg',
      audioSrc: 'summer.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Seasons and weather',
      word: 'thunderstorm',
      translation: 'гроза',
      image: 'thunderstorm.jpg',
      audioSrc: 'thunderstorm.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Seasons and weather',
      word: 'wind',
      translation: 'ветер',
      image: 'wind.jpg',
      audioSrc: 'wind.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    },
    {
      category: 'Seasons and weather',
      word: 'winter',
      translation: 'зима',
      image: 'winter.jpg',
      audioSrc: 'winter.mp3',
      train: 0,
      correct: 0,
      errors: 0,
      percentOfErrors: 0
    }
  ]
]

export default DATA_OF_CARDS;
