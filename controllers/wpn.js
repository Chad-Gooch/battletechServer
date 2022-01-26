const Express = require('express');
const router = Express.Router();

const { WeaponModel } = require('../models');
const validateJWT = require('../middleware/validate-jwt');

router.post("/add", validateJWT, async (req, res) => {
    const { model,type,weight,shots,damage,stability,heat,minRange,maxRange,DLC } = req.body.Wpn;
    const { isAdmin } = req.user;
    const WpnStat = {
        model:model,
        type:type,
        weight:weight,
        shots:shots,
        damage:damage,
        stability:stability,
        heat:heat,
        minRange:minRange,
        maxRange:maxRange,
        DLC:DLC
    }
    
    if (isAdmin) {
        try {
            const addWpn = await WeaponModel.create(WpnStat);
            res.status(200).json(WpnStat);
        } catch (err) {
            res.status(500).json({ error: err});
        }
    } else {res.status(400).json({message:"admins only"})}
});

router.put("/update/:id", validateJWT, async (req, res) => {
    const { model,type,weight,shots,damage,stability,heat,minRange,maxRange,DLC } = req.body.Wpn;
    const { isAdmin } = req.user;
    if (isAdmin) {
        
        WeaponModel.update({
            model:model,
            type:type,
            weight:weight,
            shots:shots,
            damage:damage,
            stability:stability,
            heat:heat,
            minRange:minRange,
            maxRange:maxRange,
            DLC:DLC,
        }, {where:{id:req.params.id}})
            .then((updateWpn) => res.status(200).json(updateWpn))
            .catch((err)=>res.status(500).json({error:err}))
    } else {res.status(400).json({message:"admins only"})}
});

router.get("/", async (req, res) => {
 
     try {
         const viewWpn = await WeaponModel.findAll({
         });
         res.status(200).json(viewWpn);
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

            await WeaponModel.destroy(query);
            res.status(200).json({message: "Wpn Removed"});
        } catch (err) {
            res.status(500).json({error:err});
        }
    } else {res.status(400).json({message:"admins only"})}
})

module.exports = router;