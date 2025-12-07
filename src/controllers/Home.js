class Controller {
  index(req, res) {
    res.json({
      index: true
    })
  }
}

export default new Controller();
