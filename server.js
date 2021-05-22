const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

/* HTML Routes */
/* =========== */

// Route for base page root
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/public/index.html")));

// Route for Exercise entry page
app.get("/exercise", (req, res) => res.sendFile(path.join(__dirname, "/public/exercise.html")));

// Route for Stats
app.get("/stats", (req, res) => res.sendFile(path.join(__dirname, "/public/stats.html")));

/* API Routes */
/* ========== */

// Route for All Workouts 
app.get("/", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// Route for Specific Workout
app.get("/user", (req, res) => {
  db.User.find({})
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

// Route for Create Workout
app.post("/submit", ({ body }, res) => {
  db.Note.create(body)
    .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

// Route for Update Workout


/*
app.get("/populateduser", (req, res) => {
  // TODO
  // =====
  // Write the query to grab the documents from the User collection,
  // and populate them with any associated Notes.
  // TIP: Check the models out to see how the Notes refers to the User
  db.User.find({})
    .populate("notes")
    .then(dbUser => {
      console.log(dbUser);
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    })

});
*/

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
