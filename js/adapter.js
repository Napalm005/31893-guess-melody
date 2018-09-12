/* Входной формат данных:
{"level-0":
  {
    "text":"Вас зовут Луиджи Марио...",
    "answers":
    [
      {
        "action":"LEFT. Вы побежите влево, от гриба",
        "result":"die"
      },
      {
        "action":"RIGHT. Вы побежите вправо, прямо на гриб",
        "result":"die"
      },
      {
        "action":"JUMP. Вы прыгнете вверх",
        "result":"next"
      }
    ]
  }
}
*/

/* Выходной формат данных:
{
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
}
*/

export const adaptServerData = (data) => {
  return data;
};
