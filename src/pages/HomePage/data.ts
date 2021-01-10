export const dataWishes = [
  {
    wishId: 1233111,
    name: 'maserati',
    price: {
      value: 1000000000,
      currency: 'USD', // 'EUR', 'RUB', 'BYN'
    },
    creator: {
      nickname: 'aklyaksa2020',
      avatarSmall:
        'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
    },
    image: {
      small:
        'https://s7g10.scene7.com/is/image/maserati/maserati/international/Models/default/2021/ghibli/ghibli-front.png?$1400x2000$&fmt=png-alpha&fit=constrain',
    },
    backgroundColor: '#ffffff',
    statsData: {
      likesCount: 123,
      activeCount: 44,
      fulfilledCount: 2,
      commentsCount: 1,
    },
  },
  {
    wishId: 2243311111,
    name: 'bugatti',
    price: {
      value: 2000000000,
      currency: 'EUR', // 'EUR', 'RUB', 'BYN'
    },
    creator: {
      nickname: 'mic2020',
      avatarSmall: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png',
    },
    image: {
      small: 'https://www.ixbt.com/img/n1/news/2020/8/0/43223_large.jpg',
    },
    backgroundColor: '#ffffff',
    statsData: {
      likesCount: 222,
      activeCount: 214,
      fulfilledCount: 5,
      commentsCount: 27,
    },
  },
  {
    wishId: 342347778,
    name: 'volvo',
    price: {
      value: 20000,
      currency: 'RUB', // 'EUR', 'RUB', 'BYN'
    },
    creator: {
      nickname: 'alysa20123',
      avatarSmall: 'https://cdn.iconscout.com/icon/free/png-512/avatar-373-456325.png',
    },
    image: {
      small: 'https://volvocarminsk.by/assets/cache/images/volvo-xc90-new-th-500x200-c57.png',
    },
    backgroundColor: '#ffffff',
    statsData: {
      likesCount: 173,
      activeCount: 344,
      fulfilledCount: 9,
      commentsCount: 0,
    },
  },
  {
    wishId: 33333328,
    name: 'kamaz',
    price: {
      value: 60000,
      currency: 'BYN', // 'EUR', 'RUB', 'BYN'
    },
    creator: {
      nickname: 'alysa20123',
      avatarSmall: 'https://cdn.iconscout.com/icon/free/png-512/avatar-373-456325.png',
    },
    image: {
      small:
        'https://motor.ru/imgs/2019/12/15/13/3698309/637e57a3a8d7e1c6edb1045f2c8d9ac0489e85b2.jpg',
    },
    backgroundColor: '#ffffff',
    statsData: {
      likesCount: 173,
      activeCount: 344,
      fulfilledCount: 9,
      commentsCount: 0,
    },
  },
  {
    wishId: 58667238,
    name: 'Decoding your cat',
    price: {
      value: null,
      currency: '', // 'EUR', 'RUB', 'BYN'
    },
    creator: {
      nickname: 'ghtd31',
      avatarSmall: '',
    },
    image: {
      small:
        'https://images-na.ssl-images-amazon.com/images/I/51cFcdOQhkL._SX329_BO1,204,203,200_.jpg',
    },
    backgroundColor: '#ffffff',
    statsData: {
      likesCount: 234,
      activeCount: 44,
      fulfilledCount: 4,
      commentsCount: 2,
    },
  },
  {
    wishId: 220543111,
    name: 'maserati',
    price: {
      value: 1000000000,
      currency: 'USD', // 'EUR', 'RUB', 'BYN'
    },
    creator: {
      nickname: 'aklyaksa2020',
      avatarSmall:
        'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
    },
    image: {
      small:
        'https://s7g10.scene7.com/is/image/maserati/maserati/international/Models/default/2021/ghibli/ghibli-front.png?$1400x2000$&fmt=png-alpha&fit=constrain',
    },
    backgroundColor: '#ffffff',
    statsData: {
      likesCount: 123,
      activeCount: 44,
      fulfilledCount: 2,
      commentsCount: 1,
    },
  },
  {
    wishId: 227381111,
    name: 'bugatti',
    price: {
      value: 2000000000,
      currency: 'EUR', // 'EUR', 'RUB', 'BYN'
    },
    creator: {
      nickname: 'mic2020',
      avatarSmall: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Kentin2007.jpg',
    },
    image: {
      small: 'https://www.ixbt.com/img/n1/news/2020/8/0/43223_large.jpg',
    },
    backgroundColor: '#ffffff',
    statsData: {
      likesCount: 222,
      activeCount: 214,
      fulfilledCount: 5,
      commentsCount: 27,
    },
  },
  {
    wishId: 3454688,
    name: 'volvo',
    price: {
      value: 20000,
      currency: 'RUB', // 'EUR', 'RUB', 'BYN'
    },
    creator: {
      nickname: 'alysa20123',
      avatarSmall: 'https://cdn.iconscout.com/icon/free/png-512/avatar-373-456325.png',
    },
    image: {
      small: 'https://volvocarminsk.by/assets/cache/images/volvo-xc90-new-th-500x200-c57.png',
    },
    backgroundColor: '#ffffff',
    statsData: {
      likesCount: 173,
      activeCount: 344,
      fulfilledCount: 9,
      commentsCount: 0,
    },
  },
];

export type TDataWish = {
  wishId: number;
  name: string;
  price: {
    value: number | null;
    currency: 'RUB' | 'EUR' | 'USD' | 'BYN' | string;
  };
  creator: {
    nickname: string;
    avatarSmall: string;
  };
  image: {
    small: string;
  };
  backgroundColor: string;
  statsData: {
    likesCount: number;
    activeCount: number;
    fulfilledCount: number;
    commentsCount: number;
  };
};
