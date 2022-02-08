const Express = require('express');
const router = Express.Router();

const { MechModel } = require('../models');
const validateJWT = require('../middleware/validate-jwt');

router.post("/add", validateJWT, async (req, res) => {
    const { model,DLC,weight,freeTon,walk,maxJet,head,rightArm,rightTorso,center,leftTorso,leftArm } = req.body.mech;
    const { isAdmin } = req.user;
    const mechStat = {
        model:model,
        DLC:DLC,
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
    } else {res.status(400).json({message:"admins only"})}
});

router.put("/update/:id", validateJWT, async (req, res) => {
    const { model,dlc,weight,freeTon,walk,maxJet,head,rightArm,rightTorso,center,leftTorso,leftArm } = req.body.mech;
    const { isAdmin } = req.user;
    if (isAdmin) {
        
        MechModel.update({
            model:model,
            DLC:dlc,
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
    } else {res.status(400).json({message:"admins only"})}
});

router.get("/", async (req, res) => {
 
     try {
         const viewMech = await MechModel.findAll();
         res.status(200).json(viewMech);
     } catch (err) {
         res.status(500).json({error: `error retrieving data.`});
     }
});

router.delete("/delete/:id", validateJWT, async (req, res) => {
    const { isAdmin } = req.user;
    if (isAdmin) {
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
    } else {res.status(400).json({message:"admins only"})}
})

module.exports = router;