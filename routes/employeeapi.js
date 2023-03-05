const express= require('express')
const router =express.Router()
const employees=require('../models/employee')

router.get('/',(req,res)=>{
    res.render('employee/addoredit',{viewTitle:'Employee Management System',viewHeader:"Insert Employee"})
})
router.post('/',insertRecord)

router.get('/lists',async(req,res)=>{
    var list= await employees.find().lean()
    res.render('employee/lists',{list:list})
})
router.get('/:id',async(req,res)=>{
    const list= await employees.findById(req.params.id)
    res.render('employee/addoredit',{list:list,viewTitle:'Update Employee'})
})
router.delete('/:id',(req,res)=>{

})
module.exports= router

function insertRecord(req,res){
    let emp = new employees()
    emp.fullname= req.body.fullname,
    emp.email= req.body.email,
    emp.mobile= req.body.mobile,
    emp.city= req.body.city 
    emp.save().then(()=>{
        res.redirect('/lists')
        console.log(emp())
    }).catch((err)=>{
            if(err.name== 'validationError'){
                handleValidationError(err,req.body)
                res.render('employee/addoredit',{viewTitle:'Error try again',
            employees:req.body})
            }else{
                res.redirect('/')
                console.log(err)
            }
           
        })
}
function handleValidationError(err,body){
    for(field in err.errors){
        switch (err.errors[field].path){
            case 'fullname':
                body['fullnameError']=err.errors[field].message;
                break;
            case 'email':
                body['emailError']=err.errors[field].message;
                break;
            default:
                break;
            
        }
    }
}