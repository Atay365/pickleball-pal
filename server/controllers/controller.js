import initKnex from "knex";
import configuration from "../knexfile.js";
import { readGames, readUsers } from "../utils/helpers.js";

const knex = initKnex(configuration);

const allGames = await readGames();

const fetchUsersGames = async (req, res) => {
  const usersGames = allGames.filter((game) => {
    return game.user_id == req.params.id;
  });
  if (!usersGames) {
    return res.status(400).send("User ID is not found");
  }

  res.status(200).json(usersGames);
};

export { fetchUsersGames };
