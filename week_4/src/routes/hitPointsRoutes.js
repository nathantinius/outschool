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

router.put("/:name", (req, res) => {
    const actionType = req.body.action
    const hitPointsValue = req.body.value
    const damageType = req.body.damageType

    if (actionType == "heal"){
        BRIV.hitPoints += hitPointsValue;
    } else if (actionType == "temp") {
        BRIV.temporaryHitPoints += hitPointsValue;
    } else if (actionType == "damage") {
        BRIV.defenses.forEach(defense => {
            if(defense.type === damageType){
                if(defense.defense === "immunity"){
                    BRIV.hitPoints = BRIV.hitPoints
                } else if (defense.defense === "resistance") {
                    BRIV.hitPoints -= hitPointsValue / 2
                } 
            }
        });


        //TODO: Remove Damage from temporary hit points first
        console.log(BRIV.hitPoints);
        console.log(hitPointsValue);
        BRIV.hitPoints -= hitPointsValue;
    } else {
        return res.status(400).json({message: "I dont know what you are trying to do."})
    }

    return res.json(BRIV);
})

export default router;