const express = require('express')
const router = express.Router()
const questionDB = require('../models/Question')


router.post('/' , async (req, res)=>{
    console.log(req.body)
    try{
        await questionDB.create({
            questionName : req.body.questionName,
            questionUrl : req.body.questionUrl
        }).then(()=>{
            res.status(201).send({
                status:true,
                message:"Question Added Successfully"
            })
        }).catch((err)=>{
            res.status(400).send({
                status :'false',
                message:'Bad Request'
            })
        })
    }
    catch(e){
        res.status(500).send({
            status :'false',
            message:'Error while adding question'
        })
    }
})


router.get("/" , async (req , res)=>{
    try{
        await questionDB.aggregate([
            {
                $lookup:{
                    from :"answers",
                    localField:"_id",
                    foreignField:"questionId",
                    as:"allAnswers" // output field
                }
            }
        ]).exec().then((doc)=>{
            res.status(200).send(doc)
        }).catch(e =>{
            res.status(500).send({
                status:false,
                message:'unable to get the question'
            })
        })
    }
    catch(e){
        res.status(500).send({
            status:false,
            message:'Unexpected error'
        })
    }
})
module.exports = router