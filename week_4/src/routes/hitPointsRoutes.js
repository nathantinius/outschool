import express from "express";

const router = express.Router();

router.get("", (req, res) => {
    res.json({name: "Briv", hitPoints: 25, temporaryHitPoints: 0});
})

export default router;