import express, { Express, Request, Response } from "express";
import { index } from "../controllers";

import { middleware } from "../middlewares";
import { MENU } from "../controllers/menus";
import { EMPLOYEE } from "../controllers/employee";
import { FEED_BACK } from "../controllers/feed-back";

export const route = (app: Express) => {
	app.get("/", middleware.useAuthorization, (req: Request, res: Response) =>
		index(req, res)
	);
};
