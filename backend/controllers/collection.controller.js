const CollectionModel=require('../model/collection.model')
async function scheduleWaste(req,res){
    console.log(req.body);
    const dateInMillisecs = new Date().getTime();
    const collectionId = Math.round(dateInMillisecs / 1000);
    const username = req.body.username;
    console.log(username);
    const {collectionDate, address, notes}=req.body
    const newCollection = await CollectionModel.create({username,collectionId,collectionDate, address, notes})
    console.log(newCollection);
    res.status(200).json({message:"collection added successfully"});
}
async function getAllCollections(req,res){
    const allCollections = await CollectionModel.find()
    console.log(allCollections)
    res.status(200).send(allCollections)
}
async function getCollectionById(req,res){
    id=req.params.id
    const collection = await CollectionModel.find({userId:id})
    console.log(collection)
    res.status(200).send(collection)
}
async function updateCollection(req,res){
    const id=req.params.id
    console.log(id);
    const { ...data}=req.body
    const collection = await CollectionModel.findOneAndUpdate({userId: id}, req.body);
    console.log(collection, req.body)   
    res.status(200).send(collection);
}
async function deleteCollection(req,res){
    id=req.params.id
    const collection = await CollectionModel.findOneAndDelete({userId:id})
    console.log(collection)
    res.status(200).send(collection)
}
module.exports ={ scheduleWaste, getAllCollections, getCollectionById, updateCollection, deleteCollection }
