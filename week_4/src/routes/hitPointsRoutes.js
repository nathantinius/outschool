import express from "express";
import BRIV from '../../data/briv.json'

const router = express.Router();

router.get("", (req, res) => {
    res.json({name: BRIV.name, hitPoints: BRIV.hitPoints, temporaryHitPoints: BRIV.temporaryHitPoints});
})

export default router;