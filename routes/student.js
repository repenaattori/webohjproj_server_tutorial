const router = require('express').Router();

router.get('/all', (req,res)=>{
    res.send("All users");
});

router.post('/', (req,res)=>{
    res.send("User added");
});

module.exports = router;