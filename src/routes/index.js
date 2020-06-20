const {Router}=require("express");
const router= Router();
router.get("/test", (req, res )=>{
    const data= {
        "Nombre ": "Axel",
        "Equipo" : "Amarillo"
    };
    res.json(data);
    });
    module.exports=router;