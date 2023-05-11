const supertest = require("supertest");
const chai = require("chai");

const app = require("../index.js");
const expect = chai.expect;

// Dummy test show casing how to add accessToken
xdescribe("Describe the route you're testing, i.e: POST /fruit", async () => {
  xit("Specify what you expect to happen from this request, i.e: I will create data on my database and receive all of the new data ", async () => {
    const response = await supertest(app)
      .post("/fruit")
      .headers({ Authorization: `Bearer ${accessToken}` });

    expect(response.headers["content-type"]).equal(
      "application/json; charset=utf-8"
    );
    expect(response.status).equal(200);
    expect(response.text).equal("....");
  });
});

// Get /
describe("GET / ", async () => {
  it("should recieve status code 200", async () => {
    const response = await supertest(app).get("/");
    expect(response.headers["content-type"]).equal("text/html; charset=utf-8");
    expect(response.status).equal(200);
    expect(response.text).equal("Incorrect path");
  });
});

// Get /fruit
describe("GET /fruit", async () => {
  it("should get fruitData from our applications database", async () => {
    const response = await supertest(app).get("/fruit");
    expect(response.headers["content-type"]).equal(
      "application/json; charset=utf-8"
    );
    expect(response.status).equal(200);
    expect(response.text).equal(
      '{"fruit":[{"id":1,"name":"Apple","description":"This apple is crisp and sweet","colour":"Red","stock":140,"price":15,"image_url":"https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80","createdAt":"2023-05-10T16:00:00.000Z","updatedAt":"2023-05-10T16:00:00.000Z"},{"id":2,"name":"Kiwi","description":"Sweet","colour":"The kiwis have a nice balaence of sweet and sour","stock":120,"price":20,"image_url":"https://images.unsplash.com/photo-1585059895524-72359e06133a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80","createdAt":"2023-05-10T16:00:00.000Z","updatedAt":"2023-05-10T16:00:00.000Z"},{"id":3,"name":"Banana","description":"Unbruised Banana good for potassium","colour":"Yellow","stock":140,"price":10,"image_url":"https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80","createdAt":"2023-05-10T16:00:00.000Z","updatedAt":"2023-05-10T16:00:00.000Z"}],"message":"success"}'
    );
  });
});

// test POST /fruits failure
describe("POST /fruit ", async () => {
  it("should recieve status code 401", async () => {
    const response = await supertest(app).post("/fruit");
    expect(response.headers["content-type"]).equal("text/html; charset=utf-8");
    expect(response.status).equal(401);
  });
});
