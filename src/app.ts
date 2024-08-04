import express, { Request, Response, Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import valResp from "./middlewares/validateResponse";

const whiteList: string[] = ["http://localhost:3000"];

const corsOptions = {
	origin: function (
		origin: string | undefined,
		callback: (err: Error | null, allow?: boolean) => void
	) {
		if (whiteList.indexOf(origin as string) !== -1 || !origin) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
};

class App {
	public app: Application;

	constructor() {
		this.app = express();
		this.middlewares();
		this.routes();
	}

	private middlewares(): void {
		this.app.use(cors(corsOptions));
		this.app.use(helmet());
		this.app.use(valResp);
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: true }));
	}

	private routes(): void {
		this.app.get("/", (req: Request, res: Response) => {
			res.send("Hello World!");
		});
	}
}

export default new App().app;
