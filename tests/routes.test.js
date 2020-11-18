"use strict";

const request = require("supertest");
const app = require("../app");

describe("test enpoints", () => {
  it("postcodes", async () => {
    const res = await request(app).post("/postcodes").send({});
    expect(res.statusCode).toEqual(200);
  });
});
