class HomeController {
  index(req, res) {
    res.json({
      blabla: true,
    });
  }
}
export default new HomeController();
