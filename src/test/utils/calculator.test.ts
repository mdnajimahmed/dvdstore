import { add } from "../../main/utils/calculator";

describe('Unit test for app handler', function () {

  it('verifies successful response', async () => {

    const result = add(2,3)

    expect(result).toEqual(5);
  });
});