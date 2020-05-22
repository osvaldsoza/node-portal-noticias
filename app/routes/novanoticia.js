module.exports = (app) => {
  app.get("/novanoticia", (req, res) => {
    res.render("admin/novanoticia");
  });
};
