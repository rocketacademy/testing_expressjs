const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const sequelize = require("sequelize");
const db = require("../db/models/index");
const { fruit } = db;

const expect = chai.expect;
chai.use(sinonChai);

describe("fruitController", async () => {
  describe("List function", async () => {
    const sandbox = sinon.createSandbox();

    let sampleReturnedFruitList, req, res, FruitController, fruitController;

    beforeEach(() => {
      FruitController = require("../controllers/FruitController");
      fruitController = new FruitController(fruit);
      sampleReturnedFruitList = [
        {
          id: 1,
          name: "Apple",
          description: "This apple is crisp and sweet",
          colour: "Red",
          stock: 140,
          price: 15,
        },
        {
          id: 2,
          name: "Banana",
          description: "This banana is yellow and sweet",
          colour: "Yellow",
          stock: 200,
          price: 12,
        },
      ];

      req = {};
      mockResponse = () => {
        const res = {};
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
        return res;
      };
      res = mockResponse();
    });

    afterEach(() => {
      sinon.restore();
      sandbox.restore();
    });

    it("Can calls the findAll method to get the data from the database", async () => {
      let findAllStub = sandbox
        .stub(sequelize.Model, "findAll")
        .resolves(sampleReturnedFruitList);

      await fruitController.list(req, res);
      expect(findAllStub.calledOnce).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      expect(res.status.calledOnce).to.be.false;
      expect(res.json).to.be.calledWith({
        fruit: sampleReturnedFruitList,
        message: "success",
      });
    });

    it("Gets an error message and sends a status code 500 if there is a database error", async () => {
      let findAllStub = sandbox
        .stub(sequelize.Model, "findAll")
        .rejects("Error thrown");

      await fruitController.list(req, res);
      expect(res.status.calledOnce).to.be.true;
      expect(findAllStub.calledOnce).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      expect(res.status).to.be.calledWith(500);
    });
  });

  describe("Add function", async () => {
    const sandbox = sinon.createSandbox();

    let sampleReturnedFruitList, req, res, FruitController, fruitController;

    beforeEach(() => {
      FruitController = require("../controllers/FruitController");
      fruitController = new FruitController(fruit);
      sampleReturnedFruitList = [
        {
          id: 1,
          name: "Apple",
          description: "This apple is crisp and sweet",
          colour: "Red",
          stock: 140,
          price: 15,
        },
        {
          id: 2,
          name: "Banana",
          description: "This banana is yellow and sweet",
          colour: "Yellow",
          stock: 200,
          price: 12,
        },
      ];

      req = {
        body: {
          fruitToAdd: {
            id: 3,
            name: "Cherry",
            description: "These cherries are juicy and succulent",
            colour: "Red",
            stock: 1000,
            price: 30,
          },
        },
      };
      mockResponse = () => {
        const res = {};
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
        return res;
      };
      res = mockResponse();
    });

    afterEach(() => {
      sinon.restore();
      sandbox.restore();
    });

    it("Can calls the findAll method to get the data from the database", async () => {
      let findAllStub = sandbox;
      createStub = sandbox
        .stub(sequelize.Model, "create")
        .resolves(req.body.fruitToAdd);

      findAllStub = sandbox
        .stub(sequelize.Model, "findAll")
        .resolves([...sampleReturnedFruitList, req.body.fruitToAdd]);

      await fruitController.add(req, res);
      expect(createStub.calledOnce).to.be.true;
      expect(findAllStub.calledOnce).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      expect(res.status.calledOnce).to.be.false;

      expect(res.json).to.be.calledWith({
        fruit: [...sampleReturnedFruitList, req.body.fruitToAdd],
        message: "success",
      });
    });

    it("Gets an error message and sends a status code 500 if there is a database error", async () => {
      let findAllStub = sandbox;
      createStub = sandbox
        .stub(sequelize.Model, "create")
        .resolves(req.body.fruitToAdd);

      findAllStub = sandbox
        .stub(sequelize.Model, "findAll")
        .rejects("Error Thrown");

      await fruitController.list(req, res);
      expect(res.status.calledOnce).to.be.true;
      expect(findAllStub.calledOnce).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      expect(res.status).to.be.calledWith(500);
    });
  });
});
