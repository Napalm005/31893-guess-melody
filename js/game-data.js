export const INITIAL_GAME = Object.freeze({
  responses: [],
  lives: 3,
  time: 1000 * 60 * 5,
  level: 0,
  fastResponses: 0
});

export const resultModel = {
  failTime: {
    title: `Увы и ах!`
  },
  failTries: {
    title: `Какая жалость!`
  },
  success: {
    title: `Вы настоящий меломан!`
  }
};

export const levels = [
  {
    typeLevel: `genre`,
    genre: `Rock`,
    tracks: new Set([
      {src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`, genre: `Jazz`},
      {src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`, genre: `Rock`},
      {src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`, genre: `Pop`},
      {src: `https://www.youtube.com/audiolibrary_download?vid=79100e44c826e2f7`, genre: `Electronic`}
    ])
  },
  {
    typeLevel: `artist`,
    track: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
    artist: `Riot`,
    singers: new Set([
      {
        artist: `Quincas Moreira`,
        name: `Firefly`,
        image: `http://www.atribuna.com.br/fileadmin/_processed_/csm_Quincas-Moreira-Foto-Divulgacao_76d1a8b00e.jpg`
      },
      {
        artist: `Riot`,
        name: `Level Plane`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`
      },
      {
        artist: `Jingle Punks`,
        name: `Lucky Day`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`
      }
    ])
  },
  {
    typeLevel: `genre`,
    genre: `Pop`,
    tracks: new Set([
      {src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`, genre: `Jazz`},
      {src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`, genre: `Rock`},
      {src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`, genre: `Pop`},
      {src: `https://www.youtube.com/audiolibrary_download?vid=79100e44c826e2f7`, genre: `Electronic`}
    ])
  },
  {
    typeLevel: `genre`,
    genre: `Rock`,
    tracks: new Set([
      {src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`, genre: `Jazz`},
      {src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`, genre: `Rock`},
      {src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`, genre: `Pop`},
      {src: `https://www.youtube.com/audiolibrary_download?vid=79100e44c826e2f7`, genre: `Electronic`}
    ])
  },
  {
    typeLevel: `artist`,
    track: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
    artist: `Riot`,
    singers: new Set([
      {
        artist: `Quincas Moreira`,
        name: `Firefly`,
        image: `http://www.atribuna.com.br/fileadmin/_processed_/csm_Quincas-Moreira-Foto-Divulgacao_76d1a8b00e.jpg`
      },
      {
        artist: `Riot`,
        name: `Level Plane`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`
      },
      {
        artist: `Jingle Punks`,
        name: `Lucky Day`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`
      }
    ])
  },
  {
    typeLevel: `genre`,
    genre: `Rock`,
    tracks: new Set([
      {src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`, genre: `Jazz`},
      {src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`, genre: `Rock`},
      {src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`, genre: `Pop`},
      {src: `https://www.youtube.com/audiolibrary_download?vid=79100e44c826e2f7`, genre: `Electronic`}
    ])
  },
  {
    typeLevel: `genre`,
    genre: `Rock`,
    tracks: new Set([
      {src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`, genre: `Jazz`},
      {src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`, genre: `Rock`},
      {src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`, genre: `Pop`},
      {src: `https://www.youtube.com/audiolibrary_download?vid=79100e44c826e2f7`, genre: `Electronic`}
    ])
  },
  {
    typeLevel: `genre`,
    genre: `Rock`,
    tracks: new Set([
      {src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`, genre: `Jazz`},
      {src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`, genre: `Rock`},
      {src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`, genre: `Pop`},
      {src: `https://www.youtube.com/audiolibrary_download?vid=79100e44c826e2f7`, genre: `Electronic`}
    ])
  },
  {
    typeLevel: `artist`,
    track: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
    artist: `Riot`,
    singers: new Set([
      {
        artist: `Quincas Moreira`,
        name: `Firefly`,
        image: `http://www.atribuna.com.br/fileadmin/_processed_/csm_Quincas-Moreira-Foto-Divulgacao_76d1a8b00e.jpg`
      },
      {
        artist: `Riot`,
        name: `Level Plane`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`
      },
      {
        artist: `Jingle Punks`,
        name: `Lucky Day`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`
      }
    ])
  },
  {
    typeLevel: `artist`,
    track: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
    artist: `Riot`,
    singers: new Set([
      {
        artist: `Quincas Moreira`,
        name: `Firefly`,
        image: `http://www.atribuna.com.br/fileadmin/_processed_/csm_Quincas-Moreira-Foto-Divulgacao_76d1a8b00e.jpg`
      },
      {
        artist: `Riot`,
        name: `Level Plane`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`
      },
      {
        artist: `Jingle Punks`,
        name: `Lucky Day`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`
      }
    ])
  }
];
