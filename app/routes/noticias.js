module.exports = (app) => {
  app.get("/noticias", (req, res) => {
    const conn = app.config.dbConnection();
    conn.query("select * from noticias", function (error, result) {
      res.render("noticias/noticias", { noticias: result });
    });
  });
};
