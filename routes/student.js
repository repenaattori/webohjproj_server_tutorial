const { getStudents, getStudent, addNote } = require('../database/student_db');

const router = require('express').Router();

router.get('/all', async (req,res)=>{

    const students = await getStudents();
    console.log(students);
    res.json(students);
});

router.get('/', async (req,res) => {
     const student = await getStudent(req.query.username);
     console.log(student);
     res.json(student);
});

router.post('/note', async (req,res)=>{
    try{
        await addNote(req.body.username, req.body.msg);
        res.end();
    }catch(err){
        res.status(404).json({error: err.message});
    }
   
    
});

module.exports = router;