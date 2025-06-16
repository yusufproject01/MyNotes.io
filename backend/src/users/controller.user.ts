import express from "express";
import { getServiceUser } from "./service.user";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const user = await getServiceUser();
        res.json(user); // Ini yang mengirim data ke client
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Terjadi kesalahan pada server" });
    }
});

export default router;
