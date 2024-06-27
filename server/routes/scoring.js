import express from "express";
import initKnex from "knex";
import configuration from "../knexfile.js";
import { fetchUsersGames } from "../controllers/controller.js";

const knex = initKnex(configuration);

const gameRouter = express.Router();

// Active Game - Obtain Ending score
gameRouter.post("/", async (req, res) => {
  const userId = req.params.id;
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

gameRouter.get("/:id", fetchUsersGames);

export default gameRouter;
