import { Request, Response } from "express";

/**
 * Home page.
 * @route GET /
 */
export const index = (req: Request, res: Response) => {
    res.json({
        "message": "Hello world!",
        "status": "OK"
    });
};
