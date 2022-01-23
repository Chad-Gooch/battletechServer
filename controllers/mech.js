const Express_mech = require('express');
const router_mech = Express_mech.Router();

const { MechModel } = require('../models');
const validateJWTmech = require('../middleware/validate-jwt');

router.post("/add", validateJWTmech, async (req, res) => {
    const { model,dlc,weight,freeTon,walk,maxJet,head,rightArm,rightTorso,center,leftTorso,leftArm } = req.body.mech;
    const { isAdmin } = req.user;
    const mechStat = {
        model:model,
        dlc:dlc,
        weight:weight,
        freeTon:freeTon,
        walk:walk,
        maxJet:maxJet,
        head:head,
        rightArm:rightArm,
        rightTorso:rightTorso,
        center:center,
        leftTorso:leftTorso,
        leftArm:leftArm
    }
    
    if (isAdmin) {
        try {
            const addMech = await MechModel.create(mechStat);
            res.status(200).json(mechStat);
        } catch (err) {
            res.status(500).json({ error: err});
        }
    }
});

router.put("/update/:id", validateJWTmech, async (req, res) => {
    const { model,dlc,weight,freeTon,walk,maxJet,head,rightArm,rightTorso,center,leftTorso,leftArm } = req.body.mech;
    const { isAdmin } = req.user;
    if (isAdmin) {
        
        MechModel.update({
            model:model,
            dlc:dlc,
            weight:weight,
            freeTon:freeTon,
            walk:walk,
            maxJet:maxJet,
            head:head,
            rightArm:rightArm,
            rightTorso:rightTorso,
            center:center,
            leftTorso:leftTorso,
            leftArm:leftArm
        }, {where:{id:req.params.id}})
            .then((updateMech) => res.status(200).json(updateMech))
            .catch((err)=>res.status(500).json({error:err}))
    }
});

router.get("/", async (req, res) => {
 
     try {
         const viewMech = await MechModel.findAll({
         });
         res.status(200).json(MechModel);
     } catch (err) {
         res.status(500).json({error: `error retrieving data.`});
     }
});

router.delete("/delete/:id", validateJWTmech, async (req, res) => {

    try{
        const query = {
            where: {
                id: req.params.id,
            }
        };

        await MechModel.destroy(query);
        res.status(200).json({message: "Mech Removed"});
    } catch (err) {
        res.status(500).json({error:err});
    }
})

module.exports = router_mech;