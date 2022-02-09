const router = require('express').Router();
const { UserModel } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const validateJWT = require('../middleware/validate-jwt');

router.post('/register', async (req, res) => {
    let { email, password } = req.body.user;
    let date = new Date();
    
    
    try {
    const User = await UserModel.create({
        email,
        password: bcrypt.hashSync(password, 12),
    });

    let token = jwt.sign({idNumber: User.idNumber, isAdmin: User.isAdmin}, process.env.JWT_SECRET, {expiresIn: 60*60*24*30});

    res.status(201).json({
        message: 'User successfully registered',
        user: User,
        sessionToken: token
    });
    } catch (err) {
        
        res.status(500).json({
            message: `${err}Failed to register user`,
        });
    }
});

router.post("/login", async (req, res) => {
    let { email, password } = req.body.user;
    let date = new Date();
    let current = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;

    try {
        const loginUser = await UserModel.findOne({
        where: {
            email: email,
        },
        });

        if (loginUser) {

            let passwordComparison = await bcrypt.compare(password, loginUser.password);

            if (passwordComparison) {

                let token = jwt.sign({idNumber: loginUser.idNumber, isAdmin: loginUser.isAdmin}, process.env.JWT_SECRET, {expiresIn: 60*60*24*30});

                res.status(200).json({
                    user: loginUser,
                    message:"User successfully logged in!",
                    sessionToken: token
                });
            } else {
                res.status(401).json({
                    message: "Incorrect username or password"
                })
            }
            
        } else {
            res.status(401).json({
                message: "Incorrect username or password"
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Failed to log user in"
        })
    }
});

router.get("/", validateJWT, async (req,res) =>{
    const { idNumber } = req.user;
    
    UserModel.findOne({where:{idNumber:idNumber}})
    .then((update)=> res.status(200).json({collection:update.collection,mech1:update.mech1,mech2:update.mech2,mech3:update.mech3,mech4:update.mech4}))
    .catch((err) => res.status(500).json({error:err}))
    });


router.put("/collection", validateJWT, async (req, res) => {
    const { collection } = req.body.collection;
    const { idNumber } = req.user;
       
    UserModel.update({
        collection:collection,

    },  {where:{idNumber:idNumber}})
        .then((updateUser) => res.status(200).json(updateUser))
        .catch((err)=>res.status(500).json({error:err}))
    })

router.put("/team", validateJWT, async (req, res) => {
    const { mech1,mech2,mech3,mech4 } = req.body.team;
    const {idNumber} = req.user;
        
    UserModel.update({
        mech1:mech1,
        mech2:mech2,
        mech3:mech3,
        mech4:mech4
    },  {where:{idNumber:idNumber}})
        .then((updateUser) => res.status(200).json(updateUser))
        .catch((err)=>res.status(500).json({error:err}))
    })

module.exports = router;