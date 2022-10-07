import participants from "./participantsData";

/**
 * 取得抽獎人資料。為了保留方便以後串接後台API的可能性，以非同步形式作為接口。
 * @param {number} amount 人數
 * @returns {Promise} 隨機取得抽獎人資料的Promise
 */
export async function fetchParticipants(amount = 15) {
  return new Promise((resolve) => {
    const shuffled = [...participants].sort(() => 0.5 - Math.random());
    const picked = shuffled.slice(0, amount);
    setTimeout(resolve(picked), 0);
  });
}
