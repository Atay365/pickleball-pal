import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 5050;
const { FRONT_END, API_KEY } = process.env;

app.use(cors({ origin: FRONT_END }));
app.use(express.json());

app.use("/users", userRoutes);

// * Google Map & Places API - This pulls the nearby location to user. Eliminates the cors errors.
app.get("/api/nearbysearch", async (req, res) => {
  try {
    const { location, radius, keyword } = req.query;
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json",
      {
        params: {
          location,
          radius,
          keyword,
          key: API_KEY,
        },
      }
    );
    res.json(response.data);
    console.log(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
