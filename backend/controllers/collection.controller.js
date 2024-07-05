const CollectionModel=require('../model/collection.model')
const IssueModel=require('../model/issue.model')
async function scheduleWaste(req,res){
    console.log(req.body);
    const dateInMillisecs = new Date().getTime();
    const collectionId = Math.round(dateInMillisecs / 1000);
    const {uid,collectionDate, address, notes}=req.body
    const count=1;
    const newCollection = await CollectionModel.create({uid,collectionId,collectionDate, address, notes,count})
    console.log(newCollection);
    res.status(200).json({message:"collection added successfully"});
}
async function getAllCollections(req,res){
    const allCollections = await CollectionModel.find({})
    console.log(allCollections)
    res.status(200).send(allCollections)
}
async function getCollectionById(req,res){
    const id=req.params.id
    const collection = await CollectionModel.find({ uid: id });
    res.status(200).send(collection)
}
async function updateCollection(req,res){
    const id=req.params.id
    const { ...data}=req.body
    console.log(data);
    const collection = await CollectionModel.findOneAndUpdate({ collectionId: id },
        { $set: req.body },
        { new: true });
    console.log(collection, req.body)   
    res.status(200).send(collection);
}
async function deleteCollection(req,res){
    id=req.params.id
    const collection = await CollectionModel.findOneAndDelete({collectionId:id})
    const issuecollection = await IssueModel.deleteMany({collectionId:id})
    res.status(200).send(collection)
}
module.exports ={ scheduleWaste, getAllCollections, getCollectionById, updateCollection, deleteCollection }