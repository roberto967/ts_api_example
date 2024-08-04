import dotenv from "dotenv";

const envFile = process.env.NODE_ENV === "production" ? ".env" : ".env.dev";

dotenv.config({ path: envFile });

const PORT = process.env.PORT || 3000;

import app from "./app";

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
