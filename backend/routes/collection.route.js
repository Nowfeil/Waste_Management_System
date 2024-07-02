const express=require('express')
const authroutes = require('../middleware/auth')
const verifyToken = authroutes.verifyToken
const router=express.Router()
const {scheduleWaste,getAllCollections,getCollectionById,updateCollection,deleteCollection}=require('../controllers/collection.controller')
router.post('/',verifyToken,scheduleWaste)
router.get('/',getAllCollections)
router.get('/:id',getCollectionById)
router.put('/:id',updateCollection)
router.delete('/:id',deleteCollection)
module.exports= router