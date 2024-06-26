// Citation for the following source code:
// Date: 5/19/2024
// Copied & Adapted from React-Starter-App
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes

const express = require("express");
const router = express.Router();
const {
  getTeams,
  getTeamByID,
  getMissions,
  getTeamsByName,
  getPlanets,
  createTeam,
  updateTeam,
} = require("../controllers/teamsController");

// routes for CRUD operations
router.get("/", getTeams);
router.get("/data/missions", getMissions);
router.get("/data/planets", getPlanets);
router.get("/:id", getTeamByID);
router.post("/", createTeam);
router.put("/:id", updateTeam);
router.get("/search/:teamTitle", getTeamsByName);
// router.delete("/:id", deletePerson);

module.exports = router;
