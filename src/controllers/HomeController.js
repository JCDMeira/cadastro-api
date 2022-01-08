class HomeController {
  index(req, res) {
    res.json({
      tudCerto: true,
    });
  }
}

export default new HomeController();
