import {adaptServerData} from "./adapter.js";

const SERVER_URL = `https://es.dump.academy/guess-melody`;
const APP_ID = 666;

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  } else {
    throw new Error(`${response.status}`);
  }
};

const toJSON = (res) => res.json();

export default class Loader {
  static async loadData() {
    const questiunsData = await fetch(`${SERVER_URL}/questions`);
    const checkedQuestiunsData = await (checkStatus(questiunsData));
    const parseredQuestiunsData = await (toJSON(checkedQuestiunsData));
    const adaptedQuestiunsData = await (adaptServerData(parseredQuestiunsData));
    return adaptedQuestiunsData;
  }

  static async loadResults() {
    const usersStatistic = await fetch(`${SERVER_URL}/stats/${APP_ID}`);
    const checkedUsersStatistic = await (checkStatus(usersStatistic));
    const parseredUsersStatistic = await (toJSON(checkedUsersStatistic));
    return parseredUsersStatistic;
  }

  static async saveResults(data) {
    data = Object.assign(data);
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": `application/json`
      },
      method: `POST`
    };
    const userStatistic = await fetch(`${SERVER_URL}/stats/${APP_ID}`, requestSettings);
    const checkedUserStatistic = await (checkStatus(userStatistic));
    return checkedUserStatistic;
  }
}
