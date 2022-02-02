const express = require('express')
const router=express.Router()
const Employee=require('../models/employee')


router.get('/',async(req,res)=>{
try{
  const employes= await Employee.find()
  res.json(employes)
  123
}
catch(err){
    res.send('found error'+err)
}
})


router.get('/:id',async(req,res)=>{
    try{
      const employe= await Employee.findById(req.params.id)
      res.json(employe)
    }
    catch(err){
        res.send('found error'+err)
    }
    })

router.patch('/:id',async(req,res)=>{
    try{
        const employee = await Employee.findById(req.params.id)
        employee.role=req.body.role
        const emp=await employee.save()
        res.json(emp)
    }
    catch(err){

    }
})

router.delete('/:id',async(req,res)=>{
    try{
      await Employee.findByIdAndDelete(req.params.id)
      const employes= await Employee.find()
      res.json(employes)
    }
    catch(err){
        res.send('found error'+err)
    }
    })

router.post('/',async(req,res)=>{
    const employee= new Employee({
        name: req.body.name,
        project: req.body.project,
        role:   req.body.role

    })
    try{
    const emp = await employee.save()
    res.json(emp)
    }
    catch(err){

    }
})

module.exports=router