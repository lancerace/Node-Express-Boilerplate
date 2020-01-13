require("dotenv").config();
import webpack from "webpack";
import express from "express";
import webpackDevMiddleware from "webpack-dev-middleware";
import config from "./webpack.config";
const compiler = webpack(config);
const app = express(),
  port = process.env.PORT;
//in memory, file save = auto restart node server
/*if (process.env.MODE === "development") {
  console.log("node in development mode");
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath
    })
  );
}*/
//
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api", (req, res) => {
  res.send(resObj);
});

app.listen(port, () => {
  console.log(`listenig to port ${port}`);
});
