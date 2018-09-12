import {assert} from 'chai';
import {resultDisplay} from '../result-display.js';

const serverData = {
  "type": "artist",
  "question": "Кто исполняет эту песню?",
  "src": "https://freemusicarchive.org/music/listen/2a0acd70bfdd293ffbb5253f5b30b2ceed06257c",
  "answers": [
    {
      "image": {
        "url": "https://freemusicarchive.org/file/images/artists/Waylon_Thornton_-_2012061793125465.jpg?width=300&height=300",
        "width": 300,
        "height": 300
      },
      "title": "Waylon Thornton",
      "isCorrect": false
    },
    {
      "image": {
        "url": "https://freemusicarchive.org/file/images/artists/Kevin_MacLeod_-_20110715150335323.png?width=300&height=300",
        "width": 300,
        "height": 300
      },
      "title": "Kevin MacLeod",
      "isCorrect": true
    },
    {
      "image": {
        "url": "https://freemusicarchive.org/file/images/artists/Jason_Shaw_-_20131120155444083.jpg?width=300&height=300",
        "width": 300,
        "height": 300
      },
      "title": "Jason Shaw",
      "isCorrect": false
    }
  ],
};

const serverData2 = {
  "type":"genre",
  "question":"Выберите все блюзовые песни",
  "genre":"blues",
  "answers": [
    {
      "src":"https://freemusicarchive.org/music/listen/0d853950e247ca8e65362ebe62c4ef68dcbf82f9",
      "genre":"hip-hop"
    },
    {
      "src":"https://freemusicarchive.org/music/listen/2a0acd70bfdd293ffbb5253f5b30b2ceed06257c",
      "genre":"blues"
    },
    {
      "src":"https://freemusicarchive.org/music/listen/becbc5d60810a1a7749d2e902f246ea7db9cffee",
      "genre":"folk"
    },
    {
      "src":"https://freemusicarchive.org/music/listen/151a34aa307bd4706a06bc1e86c2d20b2d8ce66a",
      "genre":"rock"
    }
  ]
}


const localData = {
  'level-0': {
    text: `Вас зовут Луиджи Марио...`,
    answers: [
      {
        action: `left`,
        title: `Вы побежите влево, от гриба`,
        result: Result.DIE
      },
      {
        action: `right`,
        title: `Вы побежите вправо, прямо на гриб`,
        result: Result.DIE
      },
      {
        action: `jump`,
        title: `Вы прыгнете вверх`,
        result: Result.NEXT_LEVEL
      }
    ]
  }
};

describe(`Adapt server data`, () => {

  it(`should have several format remote and local data`, () => {
    assert.deepEqual(localData, serverData);
  });

});



