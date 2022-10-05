import participants from "./participantsData";

/**
 * 取得抽獎人資料。為了保留方便以後串接後台API的可能性，以非同步形式作為接口。
 * @returns {Promise} 取得抽獎人資料的Promise
 */
export async function fetchParticipants() {
  return new Promise((resolve) => {
    setTimeout(resolve(participants), 0);
  });
}
