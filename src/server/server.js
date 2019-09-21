import webpack from "webpack";
import express from "express";
import webpackDevMiddleware from "webpack-dev-middleware";
import config from "../../webpack.config";
const compiler = webpack(config);
const app = express(),
  port = 3000;

const resObj = { foo: "foo", yo: "yo" };

//in memory, file save = auto restart node server
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api", (req, res) => {
  res.send(resObj);
});

app.listen(port, () => {
  `listenig to port ${port}`;
});
