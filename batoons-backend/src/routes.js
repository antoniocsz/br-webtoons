const express = require("express");
const routes = express.Router();

const NoticeController = require("./controllers/NoticeController");

routes.get("/notices", NoticeController.index);
routes.get("/notices/:id", NoticeController.show);
routes.post("/notices", NoticeController.store);
routes.put("/notices/:id", NoticeController.update);
routes.delete("/notices/:id", NoticeController.destroy);

module.exports = routes;
