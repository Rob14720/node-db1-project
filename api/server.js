const express = require("express");

const accountsRouter = require("./accounts/accounts-router.js");

const server = express();

server.use(express.json());

server.use("/api/accounts", accountsRouter);

server.use("*", (req, res, next) => {
  next({ status: 404, message: "not found" });
});

module.exports = server;
