import express, { Express, Request, Response } from "express";
import { index } from "../controllers";

import { middleware } from "../middlewares";

export const route = (app: Express) => {
	app.get("/", middleware.useAuthorization, (req: Request, res: Response) =>
		index(req, res)
	);
};
