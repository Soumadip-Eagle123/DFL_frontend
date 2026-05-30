const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("./progress.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS progress (
      videoId TEXT PRIMARY KEY,
      done INTEGER DEFAULT 0,
      revised INTEGER DEFAULT 0
    )
  `);
});

app.get("/progress", (req, res) => {
  db.all("SELECT * FROM progress", [], (err, rows) => {
    if (err) return res.status(500).json(err);

    const map = {};

    rows.forEach(row => {
      map[row.videoId] = {
        done: row.done,
        revised: row.revised
      };
    });

    res.json(map);
  });
});

app.post("/progress", (req, res) => {
  const { videoId, done, revised } = req.body;

  db.run(
    `
    INSERT INTO progress(videoId, done, revised)
    VALUES (?, ?, ?)
    ON CONFLICT(videoId)
    DO UPDATE SET
      done = excluded.done,
      revised = excluded.revised
    `,
    [videoId, done, revised],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({ success: true });
    }
  );
});

app.delete("/progress", (req, res) => {
  db.run("DELETE FROM progress", [], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ success: true });
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

