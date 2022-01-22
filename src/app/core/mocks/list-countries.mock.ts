import { ICountry } from '../models/country.interface';

export const listCountriesMocks: ICountry[] = [
  {
    flags: {
      png: 'https://flagcdn.com/w320/pg.png',
      svg: 'https://flagcdn.com/pg.svg',
    },
    name: {
      common: 'Papua New Guinea',
      official: 'Independent State of Papua New Guinea',
      nativeName: {
        eng: {
          official: 'Independent State of Papua New Guinea',
          common: 'Papua New Guinea',
        },
        hmo: {
          official: 'Independen Stet bilong Papua Niugini',
          common: 'Papua Niu Gini',
        },
        tpi: {
          official: 'Independen Stet bilong Papua Niugini',
          common: 'Papua Niugini',
        },
      },
    },
    tld: ['.pg'],
    cca2: 'PG',
    currencies: {
      PGK: {
        name: 'Papua New Guinean kina',
        symbol: 'K',
      },
    },
    capital: ['Port Moresby'],
    region: 'Oceania',
    subregion: 'Melanesia',
    languages: {
      eng: 'English',
      hmo: 'Hiri Motu',
      tpi: 'Tok Pisin',
    },
    borders: ['IDN'],
    population: 8947027,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/bv.png',
      svg: 'https://flagcdn.com/bv.svg',
    },
    name: {
      common: 'Bouvet Island',
      official: 'Bouvet Island',
      nativeName: {
        nor: {
          official: 'Bouvetøya',
          common: 'Bouvetøya',
        },
      },
    },
    tld: ['.bv'],
    cca2: 'BV',
    currencies: {},
    capital: [],
    region: 'Antarctic',
    subregion: '',
    languages: {
      nor: 'Norwegian',
    },
    borders: [],
    population: 0,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/hm.png',
      svg: 'https://flagcdn.com/hm.svg',
    },
    name: {
      common: 'Heard Island and McDonald Islands',
      official: 'Heard Island and McDonald Islands',
      nativeName: {
        eng: {
          official: 'Heard Island and McDonald Islands',
          common: 'Heard Island and McDonald Islands',
        },
      },
    },
    tld: ['.hm', '.aq'],
    cca2: 'HM',
    currencies: {},
    capital: [],
    region: 'Antarctic',
    subregion: '',
    languages: {
      eng: 'English',
    },
    borders: [],
    population: 0,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/mq.png',
      svg: 'https://flagcdn.com/mq.svg',
    },
    name: {
      common: 'Martinique',
      official: 'Martinique',
      nativeName: {
        fra: {
          official: 'Martinique',
          common: 'Martinique',
        },
      },
    },
    tld: ['.mq'],
    cca2: 'MQ',
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    capital: ['Fort-de-France'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      fra: 'French',
    },
    borders: [],
    population: 378243,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/mk.png',
      svg: 'https://flagcdn.com/mk.svg',
    },
    name: {
      common: 'North Macedonia',
      official: 'Republic of North Macedonia',
      nativeName: {
        mkd: {
          official: 'Република Северна Македонија',
          common: 'Македонија',
        },
      },
    },
    tld: ['.mk'],
    cca2: 'MK',
    currencies: {
      MKD: {
        name: 'denar',
        symbol: 'den',
      },
    },
    capital: ['Skopje'],
    region: 'Europe',
    subregion: 'Southeast Europe',
    languages: {
      mkd: 'Macedonian',
    },
    borders: ['ALB', 'BGR', 'GRC', 'UNK', 'SRB'],
    population: 2077132,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/nu.png',
      svg: 'https://flagcdn.com/nu.svg',
    },
    name: {
      common: 'Niue',
      official: 'Niue',
      nativeName: {
        eng: {
          official: 'Niue',
          common: 'Niue',
        },
        niu: {
          official: 'Niuē',
          common: 'Niuē',
        },
      },
    },
    tld: ['.nu'],
    cca2: 'NU',
    currencies: {
      NZD: {
        name: 'New Zealand dollar',
        symbol: '$',
      },
    },
    capital: ['Alofi'],
    region: 'Oceania',
    subregion: 'Polynesia',
    languages: {
      eng: 'English',
      niu: 'Niuean',
    },
    borders: [],
    population: 1470,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/cn.png',
      svg: 'https://flagcdn.com/cn.svg',
    },
    name: {
      common: 'China',
      official: "People's Republic of China",
      nativeName: {
        zho: {
          official: '中华人民共和国',
          common: '中国',
        },
      },
    },
    tld: ['.cn', '.中国', '.中國', '.公司', '.网络'],
    cca2: 'CN',
    currencies: {
      CNY: {
        name: 'Chinese yuan',
        symbol: '¥',
      },
    },
    capital: ['Beijing'],
    region: 'Asia',
    subregion: 'Eastern Asia',
    languages: {
      zho: 'Chinese',
    },
    borders: [
      'AFG',
      'BTN',
      'MMR',
      'HKG',
      'IND',
      'KAZ',
      'NPL',
      'PRK',
      'KGZ',
      'LAO',
      'MAC',
      'MNG',
      'PAK',
      'RUS',
      'TJK',
      'VNM',
    ],
    population: 1402112000,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/ls.png',
      svg: 'https://flagcdn.com/ls.svg',
    },
    name: {
      common: 'Lesotho',
      official: 'Kingdom of Lesotho',
      nativeName: {
        eng: {
          official: 'Kingdom of Lesotho',
          common: 'Lesotho',
        },
        sot: {
          official: 'Kingdom of Lesotho',
          common: 'Lesotho',
        },
      },
    },
    tld: ['.ls'],
    cca2: 'LS',
    currencies: {
      LSL: {
        name: 'Lesotho loti',
        symbol: 'L',
      },
      ZAR: {
        name: 'South African rand',
        symbol: 'R',
      },
    },
    capital: ['Maseru'],
    region: 'Africa',
    subregion: 'Southern Africa',
    languages: {
      eng: 'English',
      sot: 'Sotho',
    },
    borders: ['ZAF'],
    population: 2142252,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/cw.png',
      svg: 'https://flagcdn.com/cw.svg',
    },
    name: {
      common: 'Curaçao',
      official: 'Country of Curaçao',
      nativeName: {
        eng: {
          official: 'Country of Curaçao',
          common: 'Curaçao',
        },
        nld: {
          official: 'Land Curaçao',
          common: 'Curaçao',
        },
        pap: {
          official: 'Pais Kòrsou',
          common: 'Pais Kòrsou',
        },
      },
    },
    tld: ['.cw'],
    cca2: 'CW',
    currencies: {
      ANG: {
        name: 'Netherlands Antillean guilder',
        symbol: 'ƒ',
      },
    },
    capital: ['Willemstad'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      eng: 'English',
      nld: 'Dutch',
      pap: 'Papiamento',
    },
    borders: [],
    population: 155014,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/mx.png',
      svg: 'https://flagcdn.com/mx.svg',
    },
    name: {
      common: 'Mexico',
      official: 'United Mexican States',
      nativeName: {
        spa: {
          official: 'Estados Unidos Mexicanos',
          common: 'México',
        },
      },
    },
    tld: ['.mx'],
    cca2: 'MX',
    currencies: {
      MXN: {
        name: 'Mexican peso',
        symbol: '$',
      },
    },
    capital: ['Mexico City'],
    region: 'Americas',
    subregion: 'North America',
    languages: {
      spa: 'Spanish',
    },
    borders: ['BLZ', 'GTM', 'USA'],
    population: 128932753,
  },
];
