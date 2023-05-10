class FruitRouter {
  constructor(fruitController, express, checkJwt) {
    this.controller = fruitController;
    this.express = express;
    this.checkJwt = checkJwt;
  }

  route = () => {
    let router = this.express.Router();

    router.get("/", this.controller.list);
    router.post("/", this.checkJwt, this.controller.add);
    router.put("/:id", this.checkJwt, this.controller.edit);
    router.delete("/:id", this.checkJwt, this.controller.delete);

    return router;
  };
}

module.exports = FruitRouter;
