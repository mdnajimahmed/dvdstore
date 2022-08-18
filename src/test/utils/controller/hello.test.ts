
import axios from "axios";
import { startSlsOffline, stopSlsOffline } from "../../helper";

describe("Integration Test", () => {
  beforeAll(async () => {
    startSlsOffline(function (err) {
      if (err) {
        console.log("err",err)
      }
      console.log("[Tests Bootstrap] Done");
      // done();
    })
  });
  afterAll(async () => {
    console.log("[Tests Teardown] Start");

    stopSlsOffline();

    console.log("[Tests Teardown] Done");
  });
  it("hello world integration test", async () => {
    const query = { name: "Najim" };
    const response = await axios.get("http://localhost:3000/dev/hello", {
      params: query
    });

    expect(response.status).toEqual(200);
    expect(response.data).toEqual(`Hello ${query.name}`);
  });
});

