import { fetchParticipants } from "./participantsAPI";

describe("fetch participants", () => {
  let participants;

  beforeAll(async () => {
    participants = await fetchParticipants();
  });

  test("should return an array", () => {
    expect(participants).toBeInstanceOf(Array);
  });
  test("should return none empty data", () => {
    expect(participants.length).toBeGreaterThan(0);
  });
});
