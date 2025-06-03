import { sum } from "./index";
//테스트 성공
test("1 + 2는 3이어야 합니다", () => {
  expect(sum(1, 2)).toBe(3);
});
