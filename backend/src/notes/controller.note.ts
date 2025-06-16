import express from "express";
import { getServiceNote, getServiceNoteUser } from "./service.note";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const note = await getServiceNote();
        res.json(note); // Ini yang mengirim data ke client
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Terjadi kesalahan pada server" });
    }
});

router.get("/explore", async (req, res) => {
    try {
        const note = await getServiceNoteUser();
        res.json(note); // Ini yang mengirim data ke client
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Terjadi kesalahan pada server" });
    }
});

export default router;
