import path from "path";
import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import config from "../../webpack.dev.config.js";
import https from 'https';
import axios from "axios";

const app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, "index.html"),
  compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

app.use(webpackHotMiddleware(compiler));

app.use(express.static(`${__dirname}`));

// app.get("*", (req, res, next) => {
//   compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
//     if (err) {
//       return next(err);
//     }
//     res.set("content-type", "text/html");
//     res.send(result);
//     res.end();
//   });
// });

app.get("/test", (req, res, next) => {
  const agent = new https.Agent({
    rejectUnauthorized: false
  });

  axios.get("https://superheroapi.com/api/2089251891142345/02", {
      httpsAgent: agent
    })
    .then(function(response) {
      console.log("RESPONSE FROM API", response);
    })
    .catch(function(error) {
      console.log("REQUEST ERROR", error);
    });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log("Press Ctrl+C to quit.");
});
