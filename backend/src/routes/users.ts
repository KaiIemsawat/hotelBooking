import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";

import User from "../models/user";
import exp from "constants";

const router = express.Router();

//* /api/users/register
router.post("/register", async (req: Request, res: Response) => {
    try {
        let user = await User.findOne({
            email: req.body.email,
        });

        if (user) {
            return res.status(400).json({ message: "User already exist..!" });
        }

        user = new User(req.body);
        await user.save();

        const token = jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET_KEY as string,
            {
                expiresIn: "1d",
            }
        );

        res.cookie("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 86400000, // 24 * 60 * 60 * 100 millisecond for 1 day
        });
        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Something went wrong" });
    }
});

export default router;
