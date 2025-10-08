import express from "express";
import { saveContactMessage, getAllContactMessages, deleteContactMessage,confirmUserQuery } from "../controllers/contactController.js";

const router = express.Router();

// POST (User sends query)
router.post("/", saveContactMessage);

// GET (Host fetches all queries)
router.get("/", getAllContactMessages);

// DELETE (Host deletes a query)
router.delete("/:id", deleteContactMessage);

// Confirm User Query 

router.put("/confirm/:id", confirmUserQuery);
export default router;
