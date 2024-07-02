import express from "express";
import initKnex from "knex";
import configuration from "../knexfile.js";
import { fetchUsersGames } from "../controllers/controller.js";

const knex = initKnex(configuration);

const gameRouter = express.Router();

// Active Game - Obtain Ending score
gameRouter.post("/:userID", async (req, res) => {
  const userId = req.params.userID;
  console.log("User ID:", userId); // Log the user ID
  console.log("Request Body:", req.body); // Log the request body
  const { opponent, score, date, win } = req.body;
  const gameDate = new Date().toISOString().split("T")[0];

  const finishedGame = {
    opponent,
    score,
    win,
    date: gameDate,
    user_id: userId,
  };

  try {
    const gameInDB = await knex("games").insert(finishedGame);
    res.status(201).json(gameInDB);
  } catch (error) {
    res.status(400).send(`Error adding finished game details: ${error}`);
  }
});

// Had to get rid of the controller, was causing the page to render before getting newest data.
gameRouter.get("/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const games = await knex("games")
      .where({ user_id: userId })
      .orderBy("date", "desc");
    console.log("Fetched games:", games);
    res.json(games);
  } catch (error) {
    console.error("Error fetching games:", error);
    res.status(500).json({ error: "Error fetching games" });
  }
});

// Get Total Wins and Rank
gameRouter.get("/profile/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const userWins = await knex("games")
      .where({ user_id: userId, win: true })
      .count("* as totalWins")
      .first();
    console.log(`User Wins: ${JSON.stringify(userWins)}`);

    const allUsersWins = await knex("games")
      .where({ win: true })
      .select("user_id")
      .count("* as totalWins")
      .groupBy("user_id")
      .orderBy("totalWins", "desc");
    console.log(`All Users Wins: ${JSON.stringify(allUsersWins)}`);

    const normalizedUserId = String(userId);
    const rank =
      allUsersWins.findIndex(
        (user) => String(user.user_id) === normalizedUserId
      ) + 1;

    res.json({ totalWins: userWins.totalWins, rank });
  } catch (error) {
    console.error("Error fetching profile data:", error);
    res.status(500).json({ error });
  }
});

// Route for charting with chart js
gameRouter.get("/history/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const games = await knex("games")
      .where({ user_id: userId })
      .orderBy("date", "asc");
    res.json(games);
  } catch (error) {
    console.error("Error fetching game history", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default gameRouter;
