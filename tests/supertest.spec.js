const supertest = require("supertest");
const chai = require("chai");

const app = require("../index.js");
const expect = chai.expect;

// Dummy test
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
      '{"fruit":[{"id":1,"name":"Apple","description":"This apple is crisp and sweet","colour":"Red","stock":140,"price":15,"image_url":"https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80","createdAt":"2022-11-30T05:40:00.795Z","updatedAt":"2022-11-30T05:40:00.795Z"},{"id":3,"name":"Banana","description":"Unbruised Banana good for potassium","colour":"Yellow","stock":140,"price":10,"image_url":"https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80","createdAt":"2022-11-30T05:40:00.795Z","updatedAt":"2022-11-30T05:40:00.795Z"},{"id":4,"name":"Cherry","description":"Plump Cherries to satify your hunger","colour":"Red","stock":100,"price":15,"image_url":"https://images.unsplash.com/photo-1528821154947-1aa3d1b74941?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80","createdAt":"2022-12-07T03:04:18.065Z","updatedAt":"2022-12-07T03:04:18.065Z"},{"id":2,"name":"Kiwi","description":"Sweet and sour Kiwi","colour":"Green","stock":120,"price":20,"image_url":"https://images.unsplash.com/photo-1585059895524-72359e06133a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80","createdAt":"2022-11-30T05:40:00.795Z","updatedAt":"2022-12-07T07:04:35.141Z"},{"id":5,"name":"Pineapple","description":"Delicious and sweet","colour":"Yellow","stock":50,"price":40,"image_url":"https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80","createdAt":"2022-12-07T07:39:57.675Z","updatedAt":"2022-12-07T07:39:57.675Z"},{"id":6,"name":"Pear","description":"Delicious pears ripe for winter","colour":"Green","stock":100,"price":19,"image_url":"https://images.unsplash.com/photo-1615484477778-ca3b77940c25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","createdAt":"2022-12-07T07:42:46.516Z","updatedAt":"2022-12-07T07:42:46.516Z"},{"id":7,"name":"PEach","description":"succulent and delicious peach","colour":"pink","stock":80,"price":30,"image_url":"https://images.unsplash.com/photo-1602813812581-0713dae489da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80","createdAt":"2022-12-16T04:19:17.383Z","updatedAt":"2022-12-16T04:19:17.383Z"},{"id":8,"name":"Jackfruit","description":"Make a vegan curry","colour":"Green Yellow","stock":4,"price":300,"image_url":"https://images.unsplash.com/photo-1596626233681-39f5eb87d501?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80","createdAt":"2022-12-16T04:22:19.114Z","updatedAt":"2022-12-16T04:22:19.114Z"}],"message":"success"}'
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
