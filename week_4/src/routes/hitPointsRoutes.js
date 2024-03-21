import express from "express";
import BRIV from '../../data/briv.json' with {type: "json"};

const router = express.Router();

router.get("", (req, res) => {
    res.json({
        name: BRIV.name, 
        hitPoints: BRIV.hitPoints, 
        temporaryHitPoints: BRIV.temporaryHitPoints
    });
})

router.put("", (req, res) => {
    const {name, action, value, damageType} = req.body

    switch (action) {
        case "heal":
            BRIV.hitPoints += value;
            break;
        case "temp":
            BRIV.temporaryHitPoints += value;
            break;
        case "damage":
            BRIV.defenses.forEach(defense => {
                if(defense.type === damageType){
                    if(defense.defense === "immunity"){
                        BRIV.hitPoints = BRIV.hitPoints
                    } else if (defense.defense === "resistance") {
                        BRIV.hitPoints -= value / 2
                    } 
                }
            });

            console.log(BRIV.hitPoints);
            console.log(value);
            BRIV.hitPoints -= value;


            return res.json(BRIV);
        default:
            console.error("You didn't use a valid action.")
            return res.status(400).json({message: "You didn't use a valid action: heal, temp, or damage."})
    }
})

export default router;