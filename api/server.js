const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const carsRouter = require("../routes/carsRouter");

const server = express();

server.use(morgan("dev"));

server.use(helmet());

server.use(express.json());

server.use("/api/cars", carsRouter);

module.exports = server;
