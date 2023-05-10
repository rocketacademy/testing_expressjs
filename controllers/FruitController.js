class FruitController {
  constructor(model) {
    this.model = model;
  }

  list = async (req, res) => {
    try {
      let data = await this.model.findAll();
      return res.json({ fruit: data, message: "success" });
    } catch (e) {
      return res.status(500).json(e);
    }
  };

  add = async (req, res) => {
    let fruitToAdd = req.body;
    try {
      let fruitAdded = await this.model.create(fruitToAdd);
      let data = await this.model.findAll();
      res.json({ fruit: data, message: "success" });
    } catch (e) {
      return res.status(500).json(e);
    }
  };

  edit = async (req, res) => {
    let fruitToAdd = req.body;
    let fruitToReplace = req.params.id;
    try {
      let fruitToEdit = await this.model.findByPk(fruitToReplace);
      await fruitToEdit.update(fruitToAdd);
      let data = await this.model.findAll();
      res.json({ fruit: data, message: "success" });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  delete = async (req, res) => {
    let fruitToDelete = req.params.id;
    await this.model.destroy({ where: fruitToDelete });
    let data = await this.model.findAll();
    res.json({ fruit: data, message: "success" });
  };
}
module.exports = FruitController;
