import { config } from "dotenv";
import { app } from "./app";

config();
const PORT = 3000;

app.listen(PORT, () => `Server running on port ${PORT}!`);
