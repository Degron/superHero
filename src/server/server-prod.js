import path from "path";
import express from "express";

const app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(express.static(DIST_DIR));

app.get("/getHeroes/:start/:count", (req, res, next) => {
  const { start, count } = req.params;
  if (+count > 10) {
    res.status(501).send({ error: "Too many you want!!!" });
  }

  const queue = [];
  const agent = new https.Agent({
    rejectUnauthorized: false
  });
  for (let i = start; i < +start + +count; i++) {
    const fn = cb => {
      return axios
        .get(`https://superheroapi.com/api/2089251891142345/${i}`, {
          httpsAgent: agent
        })
        .then(response => {
          cb(null, response.data);
        })
        .catch(error => {
          cb(error, null);
        });
    };
    queue.push(fn);
  }

  async.parallel(queue, (error, result) => {
    if (error) {
      res.status(500).send(error);
    }
    res.set("content-type", "application/json");
    res.send(result);
  });
});

app.get("*", (req, res) => {
  res.sendFile(HTML_FILE);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log("Press Ctrl+C to quit.");
});
