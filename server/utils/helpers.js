import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

const readGames = async (req, res) => {
  try {
    const data = await knex("games");
    return data;
  } catch (error) {
    console.log("Error reading from database", error);
  }
};

const readUsers = async (req, res) => {
  try {
    const data = await knex("users");
    return data;
  } catch (error) {
    console.log("Error reading from database", error);
  }
};

export { readGames, readUsers };
