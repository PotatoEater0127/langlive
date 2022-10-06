export function formatTime(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  const HH = String(hours % 24).padStart(2, "0");
  const mm = String(minutes % 60).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return `${HH}:${mm}:${ss}`;
}

export const countDownStatusEnum = {
  IDLE: "IDLE",
  COUNTING: "COUNTING",
  PAUSE: "PAUSE",
};
